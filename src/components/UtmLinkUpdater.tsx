// src/components/UtmLinkUpdater.tsx
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SESSION_STORAGE_KEY = 'marketing_params';

export function UtmLinkUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    // We use a setTimeout to ensure this code runs after the initial page render is complete.
    const timer = setTimeout(() => {
      const storedParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!storedParams) {
        return;
      }

      const allLinks = document.getElementsByTagName('a');

      for (const link of allLinks) {
        const originalHref = link.getAttribute('href');

        // Skip non-navigational links
        if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
          continue;
        }

        try {
          // Use link.href as it's the full, absolute URL
          const url = new URL(link.href);

          // Prevent double-appending
          if (url.search.includes(storedParams)) {
            continue;
          }

          // Append all stored params
          const newSearchParams = new URLSearchParams(storedParams);
          newSearchParams.forEach((value, key) => {
            url.searchParams.set(key, value);
          });
          
          link.href = url.toString();

        } catch (e) {
          // This catch is a fallback for any unexpected invalid hrefs
          console.error(`Could not process link: ${originalHref}`, e);
        }
      }
    }, 100); // A 100ms delay gives React ample time to render everything.

    // Cleanup the timeout if the component re-renders before it fires
    return () => clearTimeout(timer);

  }, [pathname]); // Re-run this logic every time the user navigates to a new page

  return null;
}