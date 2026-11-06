"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sahyog-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("sahyog-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("sahyog-cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[90] bg-[#09090b] border border-white/10 p-6 rounded-2xl shadow-2xl"
        >
          <button onClick={() => setIsVisible(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white">
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <Cookie className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-white">Cookie Preferences</h3>
          </div>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            We use essential cookies to keep you logged in and secure your session. We do not use tracking cookies or sell your data. Read our <Link href="/privacy" className="text-rose-500 hover:underline">Privacy Policy</Link>.
          </p>
          <div className="flex gap-3">
            <button onClick={acceptCookies} className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-lg transition-colors">
              Accept
            </button>
            <button onClick={declineCookies} className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium py-2.5 rounded-lg transition-colors">
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}