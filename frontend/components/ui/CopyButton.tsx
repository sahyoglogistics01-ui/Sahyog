"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="relative flex items-center justify-center p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Check className="w-4 h-4 text-amber-400" />
          </motion.div>
        ) : (
          <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Copy className="w-4 h-4 text-slate-400" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}