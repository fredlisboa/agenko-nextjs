import { NextResponse } from 'next/server';

// The URL for your n8n webhook
const WEBHOOK_URL = 'https://webhooks-n8n.studiodental.digital/webhook/40d61430-5bf1-4a5e-a931-8ef0fe643769';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, whatsapp, email } = body;

    // --- SERVER-SIDE VALIDATION ---
    if (!nome || typeof nome !== 'string' || nome.trim().length < 2) {
      return NextResponse.json({ message: 'Nome inválido fornecido.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ message: 'Email inválido fornecido.' }, { status: 400 });
    }
    if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.replace(/\D/g, '').length < 10) {
      return NextResponse.json({ message: 'WhatsApp inválido fornecido.' }, { status: 400 });
    }

    // --- PREPARE DATA FOR WEBHOOK ---
    // --- FIX for Headers Error: Get headers directly from the request object ---
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const pageUrl = request.headers.get('referer') || 'Unknown';

    const webhookPayload = {
      nome: nome.trim(),
      email: email.trim(),
      whatsapp: whatsapp.replace(/\D/g, ''),
      page_url: pageUrl,
      timestamp: new Date().toISOString(),
      source: 'nextjs_contact_form_v1',
      user_agent: userAgent
    };

    console.log('Forwarding to webhook:', webhookPayload);

    // --- SEND DATA TO EXTERNAL WEBHOOK ---
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(webhookPayload)
    });

    if (!webhookResponse.ok) {
      console.error(`Webhook failed with status: ${webhookResponse.status}`, await webhookResponse.text());
      return NextResponse.json({ message: 'Ocorreu um erro ao processar sua solicitação.' }, { status: 502 });
    }

    console.log('Webhook submission successful.');

    return NextResponse.json({ message: 'Formulário enviado com sucesso!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Erro ao processar o envio do formulário.' }, { status: 500 });
  }
}