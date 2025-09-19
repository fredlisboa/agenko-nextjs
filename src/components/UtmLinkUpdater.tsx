// src/components/UtmLinkUpdater.tsx
'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_STORAGE_KEY = 'utm_params_session';

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const utmParamsRef = useRef(
    typeof window !== 'undefined' ? sessionStorage.getItem(SESSION_STORAGE_KEY) : null
  );

  useEffect(() => {
    const currentQueryString = searchParams.toString();

    // 1. Check for and store new UTM parameters
    if (currentQueryString.includes('utm_')) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
      utmParamsRef.current = currentQueryString; // Also update the ref immediately
    }

    // 2. Use the value from the ref, which is guaranteed to be up-to-date
    const paramsToApply = utmParamsRef.current;
    if (!paramsToApply) {
      return;
    }
    
    // 3. Update all <a> tags on the page
    const allLinks = document.getElementsByTagName('a');

    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks[i];
      const originalHref = link.getAttribute('href');

      if (originalHref && !originalHref.startsWith('#') && !originalHref.startsWith('mailto:') && !originalHref.startsWith('tel:')) {
        try {
          const url = new URL(link.href, window.location.origin);
          
          // Don't modify if params are already there
          if (url.search.includes(paramsToApply)) {
            continue;
          }

          const newSearchParams = new URLSearchParams(paramsToApply);
          newSearchParams.forEach((value, key) => {
            url.searchParams.set(key, value);
          });
          
          link.href = url.toString();
        } catch (e) {
          // Fallback for relative paths that might fail the URL constructor
          // This is a less ideal but safe fallback
        }
      }
    }
  }, [pathname, searchParams]);

  return null;
}