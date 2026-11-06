"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function HoldToConfirm({ onConfirm, label = "Hold to Delete" }: { onConfirm: () => void, label?: string }) {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHolding && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsDone(true);
            onConfirm();
            return 100;
          }
          return prev + 2; // Speed of the fill
        });
      }, 20);
    } else if (!isHolding && progress < 100) {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHolding, progress, onConfirm]);

  return (
    <button
      onMouseDown={() => setIsHolding(true)}
      onMouseUp={() => setIsHolding(false)}
      onMouseLeave={() => setIsHolding(false)}
      className={`relative flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold overflow-hidden transition-colors ${
        isDone ? "bg-amber-400 text-slate-950" : "bg-slate-900 border border-rose-500/30 text-rose-500"
      }`}
    >
      {/* The filling background */}
      <div 
        className="absolute left-0 top-0 h-full bg-rose-600/20 transition-all duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        {isDone ? <CheckCircle2 className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
        {isDone ? "Confirmed" : label}
      </span>
    </button>
  );
}