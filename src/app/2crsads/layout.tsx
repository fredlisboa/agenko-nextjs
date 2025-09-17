import React from 'react';
import Script from "next/script";
import Header1 from '../Components/Header/Header1';
import Footer from '../Components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='main-page-area bg-color2'>
      <Script id="2crsads-script" strategy="beforeInteractive">
        {`
          (function() {
              const queryString = window.location.search;
              const urlParams = new URLSearchParams(queryString);
              const paramsData = {};

              for (const [key, value] of urlParams.entries()) {
                  paramsData[key] = value;
              }

              if (Object.keys(paramsData).length > 0) {
                  const webhookUrl = 'https://webhooks-n8n.studiodental.digital/webhook/48c68fe4-754c-4f78-b13d-7bf4c53ccd82';

                  fetch(webhookUrl, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(paramsData),
                  })
                  .then(response => {
                      if (response.ok) {
                          console.log('Webhook sent successfully.');
                      } else {
                          console.error('Failed to send webhook.');
                      }
                  })
                  .catch(error => {
                      console.error('Error sending webhook:', error);
                  });
              }
          })();
        `}
      </Script>
      <Header1></Header1>
      {children}
      <Footer></Footer>
    </div>
  );
}