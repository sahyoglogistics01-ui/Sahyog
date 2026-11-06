"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutDashboard, ShoppingBag, BookOpen, Users, ShieldCheck, Home, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const COMMANDS = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Command Center", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Needs Board", icon: ShoppingBag, href: "/needs" },
  { name: "Research & Impact", icon: BookOpen, href: "/research" },
  { name: "Trust & Safety", icon: ShieldCheck, href: "/trust" },
  { name: "The Founders", icon: Users, href: "/team" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredCommands = query === "" ? COMMANDS : COMMANDS.filter((cmd) => cmd.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <Search className="w-5 h-5 text-slate-400 mr-3" />
              <input 
                autoFocus
                type="text" 
                placeholder="Type a command or search..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-500"
              />
              <span className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">ESC</span>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <p className="text-center text-sm text-slate-500 py-6">No results found.</p>
              ) : (
                filteredCommands.map((cmd, i) => (
                  <button
                    key={cmd.name}
                    onClick={() => {
                      router.push(cmd.href);
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <cmd.icon className="w-4 h-4 text-rose-500" />
                      <span className="text-sm font-medium">{cmd.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500" />
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}