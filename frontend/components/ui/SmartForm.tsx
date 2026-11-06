"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function SmartInput({ label, type = "text", placeholder, isValid, errorMessage }: { label: string, type?: string, placeholder: string, isValid?: boolean, errorMessage?: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const [shake, setShake] = useState(false);

  // Trigger shake if errorMessage changes and is present
  if (errorMessage && !shake) {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  }

  return (
    <motion.div 
      animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-1.5 w-full"
    >
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-slate-900/80 border ${
            errorMessage ? "border-rose-600" : isValid ? "border-amber-400" : "border-white/10 focus:border-rose-500"
          } rounded-xl py-3 px-4 text-white placeholder:text-slate-600 outline-none transition-colors`}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <AnimatePresence>
            {isValid && !errorMessage && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {errorMessage && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}