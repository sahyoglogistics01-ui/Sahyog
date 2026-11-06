"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function PaperPlaneButton({ onClick, label = "Send" }: { onClick?: () => void, label?: string }) {
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSent(true);
    if (onClick) onClick();
    setTimeout(() => setIsSent(false), 3000); // Reset after 3s
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isSent}
      className={`relative flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-colors overflow-hidden ${
        isSent ? "bg-emerald-600" : "bg-rose-600 hover:bg-rose-500"
      }`}
    >
      <AnimatePresence mode="wait">
        {!isSent ? (
          <motion.div
            key="send"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span>{label}</span>
            <motion.div
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Send className="w-5 h-5" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="sent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span>Sent!</span>
            <Check className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Flying Plane Trail */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: 200, y: -200, opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Send className="w-8 h-8 text-amber-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}