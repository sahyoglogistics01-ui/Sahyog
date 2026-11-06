"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an analytics service (e.g., Sentry) in a real app
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-rose-600/10 rounded-full flex items-center justify-center mb-6">
        <AlertTriangle className="w-10 h-10 text-rose-500" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">Something went wrong.</h1>
      <p className="text-slate-400 max-w-md mb-8">
        An unexpected system error occurred. Our team has been notified. Please try reloading the module.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        <RefreshCw className="w-4 h-4" /> Try Again
      </button>
    </div>
  );
}