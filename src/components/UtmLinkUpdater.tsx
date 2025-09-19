// src/components/UtmLinkUpdater.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_STORAGE_KEY = 'utm_params_session';

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Check for new UTM parameters in the current URL
    const currentParams = new URLSearchParams(searchParams.toString());
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    let newUtmParams = new URLSearchParams();

    let hasNewUtms = false;
    utmKeys.forEach(key => {
      if (currentParams.has(key)) {
        newUtmParams.set(key, currentParams.get(key)!);
        hasNewUtms = true;
      }
    });

    // 2. If new UTMs are found, store them in session storage.
    // This overwrites any old ones.
    if (hasNewUtms) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, newUtmParams.toString());
    }

    // 3. Get the definitive UTMs to use (either newly found or from storage).
    const storedUtmParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!storedUtmParams) {
      return; // No UTMs to apply
    }
    
    // 4. Find all links and append the stored UTMs.
    // This runs on every page change to catch new links that are rendered.
    const allLinks = document.getElementsByTagName('a');

    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks[i];
      const originalHref = link.getAttribute('href');

      if (originalHref) {
        // Skip mailto, tel, and anchor links on the same page
        if (originalHref.startsWith('mailto:') || originalHref.startsWith('tel:') || originalHref.startsWith('#')) {
          continue;
        }

        try {
          // Use URL constructor for robust parameter handling
          const url = new URL(link.href);
          
          // Avoid double-appending
          const storedParams = new URLSearchParams(storedUtmParams);
          let alreadyHasAllParams = true;
          storedParams.forEach((value, key) => {
            if (url.searchParams.get(key) !== value) {
              alreadyHasAllParams = false;
            }
          });

          if (alreadyHasAllParams) {
            continue;
          }
          
          // Append stored UTMs
          storedParams.forEach((value, key) => {
            url.searchParams.set(key, value);
          });
          link.href = url.toString();

        } catch (error) {
          // Fallback for relative paths like "/contato"
          if (!originalHref.includes(storedUtmParams)) {
            if (originalHref.includes('?')) {
              link.href = `${originalHref}&${storedUtmParams}`;
            } else {
              link.href = `${originalHref}?${storedUtmParams}`;
            }
          }
        }
      }
    }
  }, [pathname, searchParams]); // Effect runs on path or param change

  return null; // This component does not render anything
}