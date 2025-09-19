// src/components/UTMLink.tsx
"use client";

import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

const SESSION_STORAGE_KEY = 'marketing_params';

// Define the props for our custom link. It accepts all the same props as Next's Link.
interface UTMLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  [key: string]: any; // Allow any other props like style, etc.
}

export function UTMLink({ href, children, ...props }: UTMLinkProps) {
  // 1. Get the stored params from session storage.
  const storedParams = typeof window !== 'undefined' 
    ? sessionStorage.getItem(SESSION_STORAGE_KEY) 
    : null;

  let finalHref = href;

  // 2. If we have stored params and the link is internal, construct the new href.
  if (storedParams && typeof href === 'string' && href.startsWith('/')) {
    const params = new URLSearchParams(storedParams);
    const path = href.split('?')[0];
    const existingParams = new URLSearchParams(href.split('?')[1] || '');

    // Add stored params to the link's existing params
    params.forEach((value, key) => {
      existingParams.set(key, value);
    });

    finalHref = `${path}?${existingParams.toString()}`;
  }

  return (
    <NextLink href={finalHref} {...props}>
      {children}
    </NextLink>
  );
}