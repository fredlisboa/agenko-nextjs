// src/components/UtmLinkUpdater.tsx
"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SESSION_STORAGE_KEY = 'marketing_params';

function updateLinks() {
  const storedParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!storedParams) return;

  const allLinks = document.getElementsByTagName('a');

  for (const link of allLinks) {
    const originalHref = link.getAttribute('href');

    if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
      continue;
    }

    try {
      // Use link.href which is always an absolute URL
      const url = new URL(link.href);

      // Don't modify if params are already present
      const storedParamsObj = new URLSearchParams(storedParams);
      let hasAllParams = true;
      storedParamsObj.forEach((value, key) => {
        if (url.searchParams.get(key) !== value) {
          hasAllParams = false;
        }
      });
      if (hasAllParams) continue;

      // Append all stored params
      storedParamsObj.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      
      link.href = url.toString();

    } catch (e) {
      console.error('Could not update link href:', originalHref, e);
    }
  }
}

export function UtmLinkUpdater() {
  const pathname = usePathname();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    // This is the key fix: Wait for the current browser "tick" to finish.
    // This ensures React has rendered the page's components before we try to find them.
    const timeoutId = setTimeout(() => {
      updateLinks();

      // Disconnect any previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Set up a new observer to watch for links that are added dynamically
      observerRef.current = new MutationObserver(() => {
        updateLinks();
      });

      if (document.body) {
        observerRef.current.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }
    }, 0); // A 0ms delay is all we need to push this to the end of the execution queue.

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [pathname]); // This effect re-runs on every page navigation

  return null;
}