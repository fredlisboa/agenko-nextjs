import BreadCumb from "../Components/Common/BreadCumb";
import React from "react";
import Head from "next/head";
import Link from "next/link"; // Importar o Link do Next.js para navegação interna

const PoliticaDePrivacidade = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade - Studio Dental</title>
        <meta
          name="description"
          content="Conheça a Política de Privacidade do Studio Dental e como tratamos seus dados pessoais em conformidade com a LGPD."
        />
      </Head>

      <BreadCumb Title="Política de Privacidade" />

      {/* Reutilizando a mesma classe e estilos para consistência */}
      <div className="termos-de-uso-container" style={{ color: "#FFF" }}>
        <h2 style={{ color: "#FFF" }}>POLÍTICA DE PRIVACIDADE – STUDIO DENTAL</h2>
        <p>
          <strong>Última atualização:</strong> 15 de setembro de 2025
        </p>
        <p>
          A sua privacidade é fundamental para o <strong>STUDIO DENTAL</strong>. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais dos usuários de nosso website, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>

        <h3 style={{ color: "#FFF" }}>1. DADOS COLETADOS</h3>
        <p>
          Podemos coletar as seguintes informações pessoais quando fornecidas voluntariamente por você através dos nossos canais:
        </p>
        <ul>
          <li>
            <strong>Dados de Contato:</strong> Nome completo, endereço de e-mail e número de telefone, fornecidos através de formulários de contato ou agendamento.
          </li>
          <li>
            <strong>Dados de Navegação (Cookies):</strong> Informações como endereço IP, localização, tipo de navegador e páginas visitadas, coletadas automaticamente para melhorar sua experiência em nosso site.
          </li>
        </ul>

        <h3 style={{ color: "#FFF" }}>2. FINALIDADE DA COLETA DE DADOS</h3>
        <p>
          Os dados pessoais que coletamos são utilizados para as seguintes finalidades:
        </p>
        <ul>
          <li>
            <strong>Agendamento de Consultas:</strong> Para entrar em contato com você e confirmar agendamentos ou responder a perguntas.
          </li>
          <li>
            <strong>Comunicação:</strong> Para enviar informações importantes sobre seus tratamentos, consultas e novidades da clínica, sempre com a opção de cancelamento de assinatura.
          </li>
          <li>
            <strong>Melhoria do Website:</strong> Para analisar o tráfego e o comportamento do usuário em nosso site, visando otimizar a funcionalidade e o conteúdo oferecido.
          </li>
        </ul>

        <h3 style={{ color: "#FFF" }}>3. ARMAZENAMENTO E SEGURANÇA DOS DADOS</h3>
        <p>
          Adotamos medidas de segurança técnicas e administrativas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou divulgação. As informações são armazenadas em ambientes seguros e o acesso é restrito apenas a profissionais autorizados e vinculados por obrigações de confidencialidade.
        </p>

        <h3 style={{ color: "#FFF" }}>4. COMPARTILHAMENTO DE DADOS</h3>
        <p>
          O <strong>STUDIO DENTAL</strong> não vende, aluga ou compartilha seus dados pessoais com terceiros para fins de marketing. O compartilhamento pode ocorrer apenas com prestadores de serviços essenciais para nossa operação (como softwares de agendamento ou análise de dados), que estão contratualmente obrigados a seguir nossos padrões de privacidade e a LGPD.
        </p>

        <h3 style={{ color: "#FFF" }}>5. SEUS DIREITOS COMO TITULAR DOS DADOS</h3>
        <p>
          De acordo com a LGPD, você, como titular dos dados, tem o direito de:
        </p>
        <ul>
          <li>Confirmar a existência de tratamento dos seus dados.</li>
          <li>Acessar seus dados.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li>
          <li>Solicitar a portabilidade dos seus dados a outro fornecedor de serviço.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        <p>
          Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: <strong>contato@studiodental.dental</strong>.
        </p>

        <h3 style={{ color: "#FFF" }}>6. USO DE COOKIES</h3>
        <p>
          Nosso website utiliza cookies para melhorar a performance e a sua experiência de navegação. São pequenos arquivos de texto armazenados no seu navegador que nos ajudam a reconhecer suas preferências. Você pode gerenciar ou desativar os cookies diretamente nas configurações do seu navegador.
        </p>

        <h3 style={{ color: "#FFF" }}>7. ALTERAÇÕES NESTA POLÍTICA</h3>
        <p>
          Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento. A data da &quot;Última atualização&quot; no topo da página será sempre modificada. Recomendamos que você revise esta página periodicamente para se manter informado.
        </p>

        <div className="info-clinica">
          <h3 style={{ color: "#FFF" }}>INFORMAÇÕES DE CONTATO:</h3>
          <p>
            <strong>Controlador dos Dados:</strong> STUDIO DENTAL COMERCIO DE HIGIENE ORAL LTDA
          </p>
          <p>
            <strong>CNPJ:</strong> 46.125.234/0001-66
          </p>
          <p>
            <strong>Endereço:</strong> Rua 5, nº 691, Loja 01, Térreo, Ed. The Prime Tamandaré Office, Setor Oeste, Goiânia/GO, CEP: 74.115-060
          </p>
          <p>
            <strong>E-mail para Contato (Encarregado de Dados):</strong> contato@studiodental.dental
          </p>
        </div>
      </div>
    </>
  );
};

export default PoliticaDePrivacidade;