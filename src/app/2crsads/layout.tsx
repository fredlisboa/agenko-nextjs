import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
      {children}
    </>
  );
}