"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ghost, ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-6"
      >
        <div className="w-24 h-24 bg-rose-600/10 rounded-lg flex items-center justify-center mx-auto mb-8 border border-rose-600/20 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
          <Ghost className="w-12 h-12 text-rose-500" />
        </div>
        
        <h1 className="text-7xl font-bold text-white mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl font-semibold text-slate-300 mb-6">Mission Not Found.</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-10">
          The page you are looking for does not exist or may have been relocated to a different sector of the network.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-slate-950 px-6 py-3 rounded-lg font-bold transition-all">
            <Home className="w-4 h-4" /> Return Home
          </Link>
          <Link href="/hub" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all">
            <Search className="w-4 h-4" /> Open Hub
          </Link>
        </div>
      </motion.div>
    </div>
  );
}