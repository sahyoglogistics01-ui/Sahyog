"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Live Animated Mesh Background (No Grid) */}
      <motion.div 
        animate={{ 
          x: [0, 80, -40, 0], 
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-600/20 blur-[120px] rounded-lg pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -60, 50, 0], 
          y: [0, 80, -50, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 blur-[120px] rounded-lg pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, 40, -60, 0], 
          y: [0, -40, 60, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-lg pointer-events-none"
      />

      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-8"
      >
        <Image 
          src="/logo-full.png" 
          alt="Sahyog" 
          width={450} 
          height={150} 
          className="object-contain drop-shadow-[0_0_40px_rgba(16,185,129,0.4)]" 
          priority 
        />
      </motion.div>
      
      {/* Loading Bar */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-80 h-1.5 bg-white/10 rounded-lg overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="h-full bg-rose-600 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
          />
        </div>
        
        {/* Subtle loading text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs text-slate-400 font-medium tracking-widest uppercase"
        >
          Initializing Logistics Engine...
        </motion.p>
      </div>
    </motion.div>
  );
}