'use client';

import Script from "next/script";

export default function UnicornScript() {
  return (
    <Script 
      src="/unicornStudio.umd.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log("UnicornStudio script loaded");
        if (typeof window !== 'undefined' && window.UnicornStudio) {
          window.UnicornStudio.init();
          console.log("UnicornStudio initialized");
        }
      }}
      onError={(e) => {
        console.error("Script failed to load", e);
      }}
    />
  );
}