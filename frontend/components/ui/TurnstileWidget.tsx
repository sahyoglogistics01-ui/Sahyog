"use client";
import { Turnstile } from "@marsidev/react-turnstile";

interface Props {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

export default function TurnstileWidget({ onVerify, onExpire, onError }: Props) {
  // Use the environment variable for the site key
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return <div className="text-rose-500 text-xs text-center">Missing Turnstile Site Key</div>;
  }

  return (
    <div className="flex justify-center my-4">
      <Turnstile
        siteKey={siteKey}
        options={{ theme: "dark" }} 
        onSuccess={onVerify}
        onExpire={onExpire}
        onError={onError}
      />
    </div>
  );
}