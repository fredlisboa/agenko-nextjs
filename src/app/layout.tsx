import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Source_Sans_3, Roboto } from "next/font/google";
import Script from 'next/script'; // Importe o componente Script
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import "./assets/carousel.css";
import { UTMProvider } from "@/components/UTMProvider";
import { UtmLinkUpdater } from "@/components/UtmLinkUpdater";

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--body-font',
});

// OTIMIZADO: Metadados focados em SEO local e especialidades
export const metadata = {
  title: {
    default: 'Harmonização Orofacial em Goiânia | Dra. Gabriella Lisboa',
    template: '%s | Dra. Gabriella Lisboa',
  },
  description: 'Especialista em Harmonização Orofacial em Goiânia. Realce sua beleza com Lipo de Papada, Rinomodelação, Fios de PDO e Preenchimento Facial. Agende sua avaliação!',
  keywords: 'harmonização orofacial goiânia, lipo de papada, rinomodelação, fios de pdo, preenchimento facial, lifting facial, dentista goiânia, platismoplastia, slim lift, toxina botulínica, bioestimuladores de colágeno, sculptra, galderma, i-trhead, ultramformer mpt, ultraformer, lavieen, ultra',
  authors: [{ name: 'Dra. Gabriella Lisboa', url: 'https://www.instagram.com/dragabriellalisboa/' }],
  openGraph: {
    title: 'Harmonização Orofacial em Goiânia | Dra. Gabriella Lisboa',
    description: 'Realce sua beleza natural com procedimentos seguros e personalizados. Lipo de Papada, Rinomodelação e mais.',
    url: 'https://hof.studiodental.dental',
    siteName: 'Dra. Gabriella Lisboa | Harmonização Orofacial',
    images: [
      {
        url: 'https://hof.studiodental.dental/hof-gabriella-gyn.webp',
        width: 1200,
        height: 630,
        alt: 'Dra. Gabriella Lisboa, especialista em Harmonização Orofacial em Goiânia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmonização Orofacial em Goiânia | Resultados Naturais',
    description: 'Transforme sua autoestima com procedimentos de ponta. Lipo de Papada, Rinomodelação, Fios de PDO e Preenchimento Facial com especialista em Goiânia.',
    images: ['https://hof.studiodental.dental/hof-gabriella-gyn.webp'],
    creator: '@dragabriellalisboa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // NOVO: Adicionando a configuração de ícones diretamente nos metadados
  icons: {
    icon: '/favicon.ico',
  },
};

// NOVO: Estrutura JSON-LD para SEO Avançado
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dra. Gabriella Lisboa - Harmonização Orofacial",
  "image": "https://hof.studiodental.dental/hof-gabriella-gyn.webp",
  "@id": "https://hof.studiodental.dental",
  "url": "https://hof.studiodental.dental",
  "telephone": "+5562982433773",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua 5, nº 691, Loja 01, Térreo, Ed. The Prime Tamandaré Office",
    "addressLocality": "Goiânia",
    "addressRegion": "GO",
    "postalCode": "74115-060",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.6800,
    "longitude": -49.2566
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/dragabriellalisboa/",
    "https://www.google.com/search?sca_esv=adba07b31be7c891&rlz=1C1GCEA_pt-BRBR1165BR1165&cs=1&output=search&kgmid=/g/11h8760pp9&q=Studio+Dental+Odontologia&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=9c6ff277aa151b10&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
  ],
  "medicalSpecialty": "Dentistry",
  "hasMap": "https://www.google.com/search?sca_esv=adba07b31be7c891&rlz=1C1GCEA_pt-BRBR1165BR1165&cs=1&output=search&kgmid=/g/11h8760pp9&q=Studio+Dental+Odontologia&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=9c6ff277aa151b10&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Keitaro tracking script */}
        <Script id="keitaro-tracking-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
         if (!window.KTracking){window.KTracking={collectNonUniqueClicks: false, multiDomain: false, R_PATH: 'https://hof1.studiodental.dental/HMpJBwrp', P_PATH:'https://hof1.studiodental.dental/28509f0/postback', listeners: [], reportConversion: function(){this.queued = arguments;}, getSubId: function(fn) {this.listeners.push(fn);}, ready: function(fn) {this.listeners.push(fn);} };}(function(){var a=document.createElement('script');a.type='application/javascript';a.async=true;a.src='https://hof1.studiodental.dental/js/k.min.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(a,s)})();
        ` }} />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height='0' width='0' alt='' src='https://hof1.studiodental.dental/zR1jFW7b'/>` }} />
        {/* End Keitaro tracking script */}
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MGLJVNRZ');` }} />
        {/* End Google Tag Manager */}

        {/* Begin Google Tag GTAG */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0BXKYQERWH"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0BXKYQERWH');
          `}
        </Script>
        {/* End Google Tag GTAG */}

        {/* NOVO: Injetando o Schema JSON-LD no <head> */}
          <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="author" content="Dra. Gabriella Lisboa | Studio Dental" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        <UTMProvider>
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGLJVNRZ"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}
          {children}
          <SpeedInsights />
          <Analytics />
          <UtmLinkUpdater />
        </UTMProvider>  
      </body>
    </html>
  );
}