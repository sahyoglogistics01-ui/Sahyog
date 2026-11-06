"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Command } from "lucide-react";

const SHORTCUTS = [
  { keys: ["Ctrl", "K"], action: "Open Command Palette" },
  { keys: ["G", "H"], action: "Go to Hub" },
  { keys: ["G", "N"], action: "Go to Needs Board" },
  { keys: ["G", "D"], action: "Go to Dashboard" },
  { keys: ["?"], action: "Show this help menu" },
];

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "?") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#09090b] border border-white/10 rounded-3xl p-8 relative"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <Command className="w-6 h-6 text-rose-500" />
              <h2 className="text-xl font-bold text-white">Keyboard Shortcuts</h2>
            </div>
            <div className="space-y-4">
              {SHORTCUTS.map((shortcut, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">{shortcut.action}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key, j) => (
                      <kbd key={j} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-slate-300">{key}</kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}