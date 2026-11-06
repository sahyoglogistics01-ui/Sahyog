"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, CheckCircle2, AlertTriangle, Clock, MapPin, Package, Shirt, ShieldCheck, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// Mock Data for NGO Needs
const INITIAL_NEEDS = [
  { id: 1, ngo: "Hope Foundation", title: "10kg Basmati Rice", category: "Food", urgency: "Critical", distance: "2.4 km", time: "2h left", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop", verified: true },
  { id: 2, ngo: "Sunshine Orphanage", title: "20 Winter Jackets", category: "Textiles", urgency: "Urgent", distance: "5.1 km", time: "1d left", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop", verified: true },
  { id: 3, ngo: "Aashray Old-Age Home", title: "15 Warm Blankets", category: "Textiles", urgency: "Normal", distance: "3.8 km", time: "2d left", image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?q=80&w=600&auto=format&fit=crop", verified: true },
  { id: 4, ngo: "Disaster Relief Camp A", title: "50 First-Aid Kits", category: "Relief", urgency: "Critical", distance: "12 km", time: "ASAP", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=600&auto=format&fit=crop", verified: true },
  { id: 5, ngo: "Local Shelter", title: "5kg Fresh Vegetables", category: "Food", urgency: "Urgent", distance: "1.2 km", time: "4h left", image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=600&auto=format&fit=crop", verified: true },
  { id: 6, ngo: "City Food Bank", title: "100 Canned Goods", category: "Food", urgency: "Normal", distance: "7.5 km", time: "3d left", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600&auto=format&fit=crop", verified: true },
];

const CATEGORIES = ["All", "Food", "Textiles", "Relief"];

export default function NeedsBoard() {
  const [activeTab, setActiveTab] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [showToast, setShowToast] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const filteredNeeds = activeTab === "All" ? INITIAL_NEEDS : INITIAL_NEEDS.filter(n => n.category === activeTab);

  const handleAddToCart = (id: number) => {
    setCart([...cart, id]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 relative overflow-hidden font-sans">
      
      {/* 🚀 3D LIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-600/10 blur-[150px] rounded-lg" />
        <motion.div animate={{ x: [0, -80, 60, 0], y: [0, 100, -60, 0], scale: [1, 0.8, 1.2, 1] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-lg" />
        <div className="absolute inset-0 opacity-40">
          <Particles id="tsparticles" init={particlesInit} options={{ background: { color: "transparent" }, fpsLimit: 120, particles: { color: { value: "#ffffff" }, links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.05, width: 1 }, move: { enable: true, speed: 0.4 }, number: { density: { enable: true, area: 800 }, value: 50 }, opacity: { value: 0.1 }, size: { value: { min: 1, max: 2 } } } }} />
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="relative z-40 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider text-white">SAHYOG</Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white transition">Dashboard</Link>
            <div className="relative">
              <button className="p-2.5 bg-slate-900 border border-white/10 rounded-lg hover:bg-slate-800 transition">
                <ShoppingCart className="w-5 h-5 text-white" />
              </button>
              <AnimatePresence>
                {cart.length > 0 && (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-1 -right-1 bg-rose-600 text-slate-950 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-lg border-2 border-[#050505]">
                    {cart.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Needs Board</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Fund exactly what is needed. Browse verified requests from NGOs, orphanages, and relief camps.</p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === cat ? "bg-rose-600 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]" : "bg-slate-900 border border-white/10 text-slate-400 hover:bg-slate-800"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredNeeds.map((need) => (
              <motion.div 
                key={need.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-rose-600/40 transition-colors"
              >
                {/* Image */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img src={need.image} alt={need.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  
                  {/* Urgency Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${
                      need.urgency === "Critical" ? "bg-red-500/20 text-red-400 border border-red-500/30" : 
                      need.urgency === "Urgent" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : 
                      "bg-rose-600/20 text-rose-500 border border-rose-600/30"
                    }`}>
                      {need.urgency === "Critical" && <AlertTriangle className="w-3 h-3" />}
                      {need.urgency}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-500" />
                    <span className="text-sm font-semibold text-rose-500">{need.ngo}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{need.title}</h3>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-6 mt-auto">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {need.distance}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {need.time}</span>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(need.id)}
                    className="w-full bg-rose-600 hover:bg-rose-500 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  >
                    Add to Donation Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-rose-600 text-slate-950 px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" /> Item added to cart!
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}