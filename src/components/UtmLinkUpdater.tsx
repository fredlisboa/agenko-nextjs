// src/components/UtmLinkUpdater.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_STORAGE_KEY = 'utm_params_session';

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentQueryString = searchParams.toString();
    
    // 1. If the current URL has any 'utm_' parameter, save the entire query string.
    if (currentQueryString.includes('utm_')) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
    }

    // 2. Get the stored UTM parameters.
    const storedUtmParams = sessionStorage.getItem(SESSION_STORAGE_KEY);

    // 3. If there are no stored params, do nothing.
    if (!storedUtmParams) {
      return;
    }

    // 4. Update all <a> tags on the page.
    const allLinks = document.getElementsByTagName('a');
    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks[i];
      const originalHref = link.getAttribute('href');

      // Ensure we have a valid link and it's not a mail/tel link.
      if (originalHref && !originalHref.startsWith('mailto:') && !originalHref.startsWith('tel:')) {
        // Check if the parameters are already in the link to prevent duplicates.
        if (link.href.includes(storedUtmParams)) {
          continue;
        }

        // Append the UTM parameters.
        if (originalHref.includes('?')) {
          link.href = `${originalHref}&${storedUtmParams}`;
        } else {
          link.href = `${originalHref}?${storedUtmParams}`;
        }
      }
    }
  }, [pathname, searchParams]); // Re-run on every navigation

  return null; // This component renders nothing.
}