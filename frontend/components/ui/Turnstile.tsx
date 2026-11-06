"use client";
import { useEffect, useRef } from "react";

export default function Turnstile({ onVerify }: { onVerify: (token: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Turnstile script dynamically
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // THE FIX: Cast window as 'any' so TypeScript stops complaining
      const turnstile = (window as any).turnstile;
      
      if (turnstile && ref.current) {
        turnstile.render(ref.current, {
          sitekey: "YOUR_CLOUDFLARE_SITE_KEY", // Get this from Cloudflare Dashboard
          callback: (token: string) => onVerify(token),
          theme: "dark",
        });
      }
    };
  }, [onVerify]);

  return <div ref={ref} className="flex justify-center my-4" />;
}