import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Source_Sans_3, Roboto } from "next/font/google";
import Script from 'next/script'; // Importe o componente Script
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import "./assets/carousel.css";

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
  keywords: 'harmonização orofacial goiânia, lipo de papada, rinomodelação, fios de pdo, preenchimento facial, lifting facial, dentista goiânia',
  // NOVO: Adicionando links sociais diretamente nos metadados
  authors: [{ name: 'Dra. Gabriella Lisboa', url: 'https://www.instagram.com/dragabriellalisboa/' }],
  openGraph: {
    title: 'Harmonização Orofacial em Goiânia | Dra. Gabriella Lisboa',
    description: 'Realce sua beleza natural com procedimentos seguros e personalizados. Lipo de Papada, Rinomodelação e mais.',
    url: 'https://hof.studiodental.dental', // Corrigido o domínio
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
};

// NOVO: Estrutura JSON-LD para SEO Avançado
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dra. Gabriella Lisboa - Harmonização Orofacial",
  "image": "https://hof.studiodental.dental/hof-gabriella-gyn.webp",
  "@id": "https://hof.studiodental.dental",
  "url": "https://hof.studiodental.dental",
  "telephone": "+5562982433773", // Seu número de contato principal
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
    "latitude": -16.6800, // Latitude aproximada para o CEP
    "longitude": -49.2566 // Longitude aproximada para o CEP
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
    "https://www.google.com/search?sca_esv=adba07b31be7c891&rlz=1C1GCEA_pt-BRBR1165BR1165&cs=1&output=search&kgmid=/g/11h8760pp9&q=Studio+Dental+Odontologia&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=9c6ff277aa151b10&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1" // URL do seu Google My Business
  ],
  "medicalSpecialty": "Dentistry",
  "hasMap": "https://www.google.com/search?sca_esv=adba07b31be7c891&rlz=1C1GCEA_pt-BRBR1165BR1165&cs=1&output=search&kgmid=/g/11h8760pp9&q=Studio+Dental+Odontologia&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=9c6ff277aa151b10&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1"
};


export default function RootLayout({ children } : any ) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="author" content="Dra. Gabriella Lisboa | Studio Dental" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* NOVO: Injetando o Schema JSON-LD no <head> */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}