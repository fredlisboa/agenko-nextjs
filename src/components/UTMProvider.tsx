// src/components/UTMProvider.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, ReactNode, Suspense } from "react";

// Define the UTM parameters you want to track
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
export const SESSION_STORAGE_KEY = 'utm_data';

interface UTMProviderProps {
  children: ReactNode;
}

const UTMHandler = ({ children }: UTMProviderProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utms: { [key: string]: string } = {};
    let hasNewUTMs = false;

    // 1. Check for UTMs in the current URL's search parameters.
    for (const param of UTM_PARAMS) {
      const value = searchParams.get(param);
      if (value) {
        utms[param] = value;
        hasNewUTMs = true;
      }
    }

    // 2. If new UTMs are found on this page load, we check sessionStorage.
    // This implements a "first-touch" model: we only save the UTMs
    // if no UTM data already exists from this session.
    if (hasNewUTMs) {
      const existingUTMs = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!existingUTMs) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(utms));
        console.log('UTM data saved to session storage:', utms);
      }
    }
  }, [searchParams]);

  return <>{children}</>;
};

// We wrap our handler in a Suspense boundary right here
export const UTMProvider = ({ children }: UTMProviderProps) => {
  return (
    <Suspense fallback={null}>
      <UTMHandler>{children}</UTMHandler>
    </Suspense>
  );
};

// Helper function to get UTM data from sessionStorage.
// It's safe to use in any client component.
export const getUTMData = (): { [key: string]: string } => {
  if (typeof window === "undefined") {
    return {};
  }
  const utms = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return utms ? JSON.parse(utms) : {};
};