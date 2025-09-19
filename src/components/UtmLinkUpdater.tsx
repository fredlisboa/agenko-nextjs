// src/components/UtmLinkUpdater.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_STORAGE_KEY = 'utm_params_session';

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(`%c[UTM Updater] Effect triggered for path: ${pathname}`, 'color: blue; font-weight: bold;');

    const currentQueryString = searchParams.toString();
    console.log(`[UTM Updater] Current URL query string: "${currentQueryString}"`);

    // 1. If the current URL has any 'utm_' parameter, save the entire query string.
    if (currentQueryString.includes('utm_')) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
      console.log(`%c[UTM Updater] Found UTMs! SAVED to session storage: "${currentQueryString}"`, 'color: green;');
    } else {
      console.log('[UTM Updater] No new UTMs found in URL.');
    }

    // 2. Get the stored UTM parameters.
    const storedUtmParams = sessionStorage.getItem(SESSION_STORAGE_KEY);

    // 3. If there are no stored params, do nothing.
    if (!storedUtmParams) {
      console.log('%c[UTM Updater] No stored UTMs found. Exiting.', 'color: red;');
      return;
    }
    console.log(`[UTM Updater] Using stored UTMs: "${storedUtmParams}"`);

    // 4. Update all <a> tags on the page.
    const allLinks = document.getElementsByTagName('a');
    console.log(`[UTM Updater] Found ${allLinks.length} <a> tags to process.`);

    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks[i];
      const originalHref = link.getAttribute('href');

      if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
        continue;
      }
      
      // Use URL constructor for robust checking
      try {
        const url = new URL(link.href, window.location.origin);
        if (url.search.includes(storedUtmParams)) {
          continue; // Skip if params are already present
        }
        
        // Append stored UTMs
        const storedParams = new URLSearchParams(storedUtmParams);
        storedParams.forEach((value, key) => {
          url.searchParams.set(key, value);
        });

        console.log(`%c[UTM Updater] Updating link: ${originalHref} -> ${url.toString()}`, 'color: orange;');
        link.href = url.toString();
      } catch (e) {
        console.error(`[UTM Updater] Could not parse URL for link: ${originalHref}`, e);
      }
    }
    console.log('%c[UTM Updater] Finished processing links.', 'color: blue; font-weight: bold;');

  }, [pathname, searchParams]);

  return null;
}