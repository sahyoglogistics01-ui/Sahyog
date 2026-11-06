"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["All", "Food", "Textiles", "Relief"];

export default function SlidingTabs({ onChange }: { onChange: (tab: string) => void }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange(tab);
  };

  return (
    <div className="flex space-x-1 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 w-fit mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
            activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-200"
          }`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-rose-600 rounded-xl shadow-[0_0_15px_rgba(225,29,72,0.4)]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{tab}</span>
        </button>
      ))}
    </div>
  );
}