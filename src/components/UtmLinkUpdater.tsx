// src/components/UtmLinkUpdater.tsx
'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_STORAGE_KEY = 'utm_params_session';

// This function will be our single source of truth for updating links
function updateAllLinks(paramsToApply: string) {
  const allLinks = document.getElementsByTagName('a');
  
  for (let i = 0; i < allLinks.length; i++) {
    const link = allLinks[i];
    const originalHref = link.getAttribute('href');

    // Skip if it's not a valid, navigable link
    if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
      continue;
    }

    try {
      const url = new URL(link.href, window.location.origin);
      
      // Check if this exact string of params is already there
      if (url.search.includes(paramsToApply)) {
        continue;
      }
      
      const newSearchParams = new URLSearchParams(paramsToApply);
      newSearchParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      
      link.href = url.toString();
    } catch (e) {
      // Catch errors for invalid URLs, though the initial checks should prevent this.
    }
  }
}

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const currentQueryString = searchParams.toString();
    
    // 1. If new UTMs are in the URL, store them.
    if (currentQueryString.includes('utm_')) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
    }
    
    // 2. Get the definitive params from storage.
    const storedUtmParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
    
    // 3. If we have params, update links immediately and set up the observer.
    if (storedUtmParams) {
      // Run once immediately for all current links
      updateAllLinks(storedUtmParams);

      // Disconnect the old observer if it exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Create a new MutationObserver to watch for future changes
      observerRef.current = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            // When the DOM changes, re-run the update function
            updateAllLinks(storedUtmParams);
          }
        }
      });

      // Start observing the entire document body for changes
      observerRef.current.observe(document.body, { childList: true, subtree: true });
    }

    // 4. Cleanup: When the component unmounts, disconnect the observer
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

  }, [pathname, searchParams]); // Rerun this setup on every navigation

  return null;
}