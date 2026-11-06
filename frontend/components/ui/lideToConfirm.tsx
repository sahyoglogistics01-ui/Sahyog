"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

export default function SlideToConfirm({ onConfirm, label = "Slide to confirm" }: { onConfirm: () => void, label?: string }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const x = useMotionValue(0);
  
  // Track width is roughly 300px, knob is 48px
  const background = useTransform(x, [0, 240], ["rgba(255,255,255,0.05)", "rgba(251,191,36,1)"]); // amber-400

  const handleDragEnd = () => {
    if (x.get() > 200) {
      setIsConfirmed(true);
      x.set(240);
      onConfirm();
    } else {
      x.set(0); // Snap back
    }
  };

  return (
    <div className="relative w-full max-w-sm h-14 bg-slate-900 border border-white/10 rounded-lg flex items-center p-1.5 overflow-hidden">
      <motion.div style={{ width: x, background }} className="absolute left-1.5 top-1.5 bottom-1.5 rounded-lg z-0" />
      
      <motion.div
        drag={isConfirmed ? false : "x"}
        dragConstraints={{ left: 0, right: 240 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className={`relative z-10 w-11 h-11 rounded-lg flex items-center justify-center cursor-grab active:cursor-grabbing ${
          isConfirmed ? "bg-amber-400 text-slate-950" : "bg-white text-slate-950"
        }`}
      >
        {isConfirmed ? <Check className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </motion.div>
      
      <span className={`absolute left-0 right-0 text-center text-sm font-bold pointer-events-none z-0 transition-opacity ${isConfirmed ? "text-slate-950" : "text-slate-400"}`}>
        {isConfirmed ? "Authorized" : label}
      </span>
    </div>
  );
}