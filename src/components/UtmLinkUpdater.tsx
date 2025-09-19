// src/components/UtmLinkUpdater.tsx
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SESSION_STORAGE_KEY } from './UTMProvider'; // Import the key

export function UtmLinkUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    const utmData = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!utmData) return; // No UTMs to apply

    const utmParams = new URLSearchParams(JSON.parse(utmData)).toString();
    if (!utmParams) return;

    const allLinks = document.getElementsByTagName('a');

    for (const link of allLinks) {
      const originalHref = link.getAttribute('href');
      if (!originalHref || originalHref.startsWith('#') || originalHref.startsWith('mailto:') || originalHref.startsWith('tel:')) {
        continue;
      }

      try {
        const url = new URL(link.href);
        if (url.search.includes(utmParams)) continue;

        const storedParams = new URLSearchParams(utmParams);
        storedParams.forEach((value, key) => {
          url.searchParams.set(key, value);
        });
        link.href = url.toString();

      } catch (e) {
        // Handle relative URLs
        if (!originalHref.includes(utmParams)) {
          const separator = originalHref.includes('?') ? '&' : '?';
          link.href = originalHref + separator + utmParams;
        }
      }
    }
  }, [pathname]); // Re-run whenever the page path changes

  return null;
}