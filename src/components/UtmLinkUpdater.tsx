// src/components/UtmLinkUpdater.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the current query string (e.g., "utm_source=google&utm_medium=cpc")
    const utmParamQueryString = searchParams.toString();

    // Only run the logic if there are any query parameters
    if (utmParamQueryString) {
      const allLinks = document.getElementsByTagName('a');

      for (let i = 0; i < allLinks.length; i++) {
        const link = allLinks[i];
        const originalHref = link.getAttribute('href');

        // Only modify links that have an href and don't already include these params
        if (originalHref && !originalHref.includes(utmParamQueryString)) {
          try {
            const url = new URL(link.href);
            // Append each parameter from the current URL to the link's URL
            searchParams.forEach((value, key) => {
              url.searchParams.set(key, value);
            });
            link.href = url.toString();
          } catch (error) {
            // This handles relative links like "/about" gracefully
            if (originalHref.includes('?')) {
              link.href = `${originalHref}&${utmParamQueryString}`;
            } else {
              link.href = `${originalHref}?${utmParamQueryString}`;
            }
          }
        }
      }
    }
    // This effect should re-run on every page navigation
  }, [pathname, searchParams]);

  return null; // This component does not render anything
}