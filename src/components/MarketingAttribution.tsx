// src/components/MarketingAttribution.tsx
"use client";

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const SESSION_STORAGE_KEY = 'marketing_params';

function updateAllLinks(paramsToApply: string) {
  const allLinks = document.getElementsByTagName('a');

  for (const link of allLinks) {
    const originalHref = link.getAttribute('href');
    if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
      continue;
    }

    try {
      const url = new URL(link.href, window.location.origin);
      if (url.search.includes(paramsToApply)) continue;
      
      const newSearchParams = new URLSearchParams(paramsToApply);
      newSearchParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      link.href = url.toString();
    } catch (e) {
      if (!originalHref.includes(paramsToApply)) {
        const separator = originalHref.includes('?') ? '&' : '?';
        link.href = originalHref + separator + paramsToApply;
      }
    }
  }
}

function AttributionHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentQueryString = searchParams.toString();
    
    // 1. If URL has params AND session storage is empty, save them (first-touch attribution)
    if (currentQueryString && !sessionStorage.getItem(SESSION_STORAGE_KEY)) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
    }
    
    const storedParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!storedParams) return;

    // 2. Update links immediately on navigation
    updateAllLinks(storedParams);
    
    // 3. Use a MutationObserver to catch any links added to the page later
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
           updateAllLinks(storedParams);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // 4. Cleanup observer when the component re-renders or unmounts
    return () => {
      observer.disconnect();
    };
  }, [pathname, searchParams]);

  return null;
}

// The main component wraps the handler in Suspense, as required by useSearchParams
export function MarketingAttribution() {
    return (
        <Suspense fallback={null}>
            <AttributionHandler />
        </Suspense>
    )
}