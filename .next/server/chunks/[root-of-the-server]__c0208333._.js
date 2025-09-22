module.exports = [
"[project]/.next-internal/server/app/api/contact/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
;
// The URL for your n8n webhook
const WEBHOOK_URL = 'https://webhooks-n8n.studiodental.digital/webhook/40d61430-5bf1-4a5e-a931-8ef0fe643769';
// Initialize Supabase client
// Ensure these environment variables are correctly set in your Vercel project settings
// and in your local .env.local file for development.
// IMPORTANT: Use the SERVICE_ROLE_KEY for server-side operations if you need to bypass RLS.
const supabaseUrl = ("TURBOPACK compile-time value", "https://nlxdugdliygvoblwytkx.supabase.co"); // Using NEXT_PUBLIC_SUPABASE_URL as it's provided
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey);
// Table name in Supabase
const SUPABASE_TABLE_NAME = 'leads-form-hof-sd-gabriellalisboa';
// --- Helper Functions (Replicated from n8n logic) ---
/**
 * Function to clean WhatsApp number and ensure exactly 11 digits (Brazilian format).
 * @param whatsappInput The raw WhatsApp number string.
 * @returns Cleaned WhatsApp number as a string, or null if invalid.
 */ function cleanWhatsAppNumber(whatsappInput) {
    if (!whatsappInput) {
        return null;
    }
    // Remove all non-digit characters
    let cleaned = whatsappInput.toString().replace(/\D/g, '');
    // Remove country code if present (55 for Brazil) and if it makes the number too long
    if (cleaned.startsWith('55') && cleaned.length > 11) {
        cleaned = cleaned.substring(2);
    }
    // Ensure exactly 11 digits
    if (cleaned.length === 11) {
        return cleaned;
    } else if (cleaned.length === 10) {
        // Add '9' after area code for mobile numbers (assuming 2-digit area code)
        // This assumes 2-digit area codes for Brazil.
        return cleaned.substring(0, 2) + '9' + cleaned.substring(2);
    } else if (cleaned.length > 11) {
        // Take the last 11 digits
        return cleaned.substring(cleaned.length - 11);
    } else {
        // Invalid number - less than 10 digits
        return null;
    }
}
/**
 * Helper function to manually parse a URL query string without any modules.
 * This version ensures all URL parameters are present, setting the value to null if it's blank.
 * @param url The full URL string to parse.
 * @returns An object containing `queryParams` (key-value pairs of URL parameters) and `baseUrl`.
 */ function parseQueryString(url) {
    const params = {};
    const queryStringIndex = url.indexOf('?');
    if (queryStringIndex === -1) {
        return {
            queryParams: params,
            baseUrl: url
        };
    }
    const baseUrl = url.substring(0, queryStringIndex);
    const queryString = url.substring(queryStringIndex + 1);
    if (queryString) {
        const pairs = queryString.split('&');
        for (const pair of pairs){
            const parts = pair.split('=', 2);
            if (parts[0]) {
                const key = decodeURIComponent(parts[0]);
                // Set value to null if empty string, otherwise decode and use it.
                const value = parts[1] !== undefined && parts[1] !== '' ? decodeURIComponent(parts[1].replace(/\+/g, ' ')) : null;
                if (key) {
                    params[key] = value;
                }
            }
        }
    }
    return {
        queryParams: params,
        baseUrl: baseUrl
    };
}
async function POST(request) {
    try {
        const body = await request.json();
        const { nome, whatsapp, email, marketing_params } = body;
        // --- SERVER-SIDE VALIDATION ---
        if (!nome || typeof nome !== 'string' || nome.trim().length < 2) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Nome inválido fornecido.'
            }, {
                status: 400
            });
        }
        if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Email inválido fornecido.'
            }, {
                status: 400
            });
        }
        if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.replace(/\D/g, '').length < 10) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'WhatsApp inválido fornecido.'
            }, {
                status: 400
            });
        }
        // --- EXTRACT ADDITIONAL DATA & PROCESS ---
        const userAgent = request.headers.get('user-agent') || 'Unknown';
        const pageUrl = request.headers.get('referer') || 'Unknown';
        // Access IP via 'x-forwarded-for' header, which Vercel populates. NextRequest.ip is not available.
        const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'Unknown';
        // Process WhatsApp number using the replicated n8n logic
        const whatsappCleaned = cleanWhatsAppNumber(whatsapp);
        const whatsappFieldFacebook = whatsappCleaned ? `55${whatsappCleaned}` : null;
        // Clean the URL of template placeholders for parsing
        const cleanedUrlForParsing = pageUrl.replace(/\{\{.*?\}\}/g, '').replace(/\{.*?\}/g, '');
        const { queryParams } = parseQueryString(cleanedUrlForParsing);
        // Generate timestamps
        const processedDate = new Date();
        const dateTimeUtc = processedDate.toISOString();
        const urlProcessedAtTimestamp = processedDate.getTime().toString(); // Store as string for character varying column
        const saoPauloOptions = {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('pt-BR', saoPauloOptions);
        const parts = formatter.formatToParts(processedDate).reduce((acc, part)=>{
            if (part.type !== 'literal') {
                acc[part.type] = part.value;
            }
            return acc;
        }, {});
        const dateTimeAmericaSaoPaulo = `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
        // --- PREPARE DATA FOR SUPABASE INSERT ---
        const supabasePayload = {
            'form_name': 'leads-form-hof-sd-gabriellalisboa',
            'nome': nome.trim(),
            'email': email.trim(),
            'whatsapp_field_facebook': whatsappFieldFacebook,
            'date_time_utc': dateTimeUtc,
            'date_time_america_sao-paulo': dateTimeAmericaSaoPaulo,
            'date_time_timestamp': urlProcessedAtTimestamp,
            'remote_ip': remoteIp,
            'webhookUrl': WEBHOOK_URL,
            'user-agent': userAgent,
            // Mapping URL parameters to specific Supabase columns - all quoted for safety
            'url_param_keyword': queryParams.keyword || queryParams.utm_term || null,
            'url_param_cost': queryParams.cost || null,
            'url_param_fbclid': queryParams.fbclid || null,
            'url_param_gclid': queryParams.gclid || null,
            'url_param_ttclid': queryParams.ttclid || null,
            'url_param_ad_id': queryParams.ad_id || null,
            'url_param_ad_campaign_id': queryParams.ad_campaign_id || null,
            'url_parameters_subid': queryParams.subid || null,
            'url_parameters_ktr_campaign_id': queryParams.ktr_campaign_id || null,
            'url_parameters_cost': queryParams.cost || null,
            'url_processed_at_timestamp': urlProcessedAtTimestamp,
            'url_parameters_ktr_landing_id': queryParams.ktr_landing_id || null,
            'url_parameters_ktr_stream_id': queryParams.ktr_stream_id || null,
            'url_parameters_source': queryParams.utm_source || queryParams.source || null,
            'url_parameters_search_engine': queryParams.search_engine || null,
            'url_parameters_ktr_keyword': queryParams.ktr_keyword || null,
            'url_parameters_sub_id_1_placement': queryParams.sub_id_1_placement || null,
            'url_parameters_sub_id_10_advanced_booking _window': queryParams.sub_id_10_advanced_booking_window || null,
            'url_parameters_sub_id_11_matchtype': queryParams.sub_id_11_matchtype || null,
            'url_parameters_sub_id_12_targetid': queryParams.sub_id_12_targetid || null,
            'url_parameters_sub_id_13_extension_id': queryParams.sub_id_13_extension_id || null,
            'url_parameters_sub_id_14_device': queryParams.sub_id_14_device || null,
            'url_parameters_sub_id_3_adgroupid': queryParams.sub_id_3_adgroupid || null,
            'url_parameters_sub_id_4_creative': queryParams.sub_id_4_creative || null,
            'url_parameters_sub_id_5_keyword': queryParams.sub_id_5_keyword || null,
            'url_parameters_sub_id_6_network': queryParams.sub_id_6_network || null,
            'url_parameters_traffic_source_name': queryParams.traffic_source_name || null,
            'url_parameters_x_requested_with': queryParams.x_requested_with || null,
            'url_parameters_sub_id_2_adposition': queryParams.sub_id_2_adposition || null,
            'marketing_params_raw': marketing_params || null
        };
        // --- INSERT DATA INTO SUPABASE ---
        const { data, error: supabaseError } = await supabase.from(SUPABASE_TABLE_NAME).insert([
            supabasePayload
        ]);
        if (supabaseError) {
            console.error('Supabase insertion error:', supabaseError); // Log the full error object
            console.error('Supabase error message:', supabaseError.message);
            console.error('Supabase error details:', supabaseError.details);
            console.error('Supabase error hint:', supabaseError.hint);
            console.error('Payload attempted to insert:', supabasePayload); // Log the payload you tried to send
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Erro ao salvar no banco de dados.'
            }, {
                status: 500
            });
        }
        console.log('Data successfully saved to Supabase:', data);
        // --- PREPARE DATA FOR ORIGINAL WEBHOOK (N8N) ---
        // The n8n logic expects raw `whatsapp` and `page_url` in the body
        // so it can perform its own cleaning and parsing.
        const webhookPayload = {
            nome: nome.trim(),
            email: email.trim(),
            whatsapp: whatsapp,
            page_url: pageUrl,
            timestamp: dateTimeUtc,
            source: 'nextjs_contact_form_v1',
            user_agent: userAgent,
            marketing_params: marketing_params
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Ocorreu um erro ao processar sua solicitação no webhook.'
            }, {
                status: 502
            });
        }
        console.log('Webhook submission successful.');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Formulário enviado com sucesso!'
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error processing form submission:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Erro ao processar o envio do formulário.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c0208333._.js.map