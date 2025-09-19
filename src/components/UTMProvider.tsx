// src/components/UTMProvider.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, ReactNode, Suspense } from "react";

// Define the key here so it can be exported and used by other components
export const SESSION_STORAGE_KEY = 'marketing_params';

function UTMHandler({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentQueryString = searchParams.toString();

    // This is "first-touch" attribution. It only saves the parameters
    // if the URL has them AND if nothing has been saved in this session yet.
    if (currentQueryString && !sessionStorage.getItem(SESSION_STORAGE_KEY)) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
    }
  }, [searchParams]);

  return <>{children}</>;
}

// The provider component wraps the logic in Suspense, as required by useSearchParams
export const UTMProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={null}>
      <UTMHandler>{children}</UTMHandler>
    </Suspense>
  );
};