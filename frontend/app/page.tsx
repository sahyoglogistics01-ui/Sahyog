"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Package, Shirt, CheckCircle, Users, Store, Truck, Building2, Map, LineChart, Settings } from "lucide-react";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <main className="relative min-h-screen overflow-hidden flex flex-col items-center pt-32 pb-20">
        
        {/* Background Grid & Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-20"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="absolute inset-0 -z-10">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: "transparent" },
              fpsLimit: 120,
              particles: {
                color: { value: "#ffffff" },
                links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.05, width: 1 },
                move: { enable: true, speed: 0.5 },
                number: { density: { enable: true, area: 800 }, value: 60 },
                opacity: { value: 0.1 },
                size: { value: { min: 1, max: 2 } },
              },
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-6 text-center z-10 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
              🚀 The Operating System for Social Good
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Sahyog: <br className="hidden md:block"/> Logistics for Social Good
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Unifying surplus food, textiles, and emergency relief through AI-driven routing. We bridge the gap between urban surplus and critical need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                Explore Sahyog <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/research" className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all">
                <BookOpen className="w-5 h-5" /> View Research
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <div className="w-full max-w-7xl mx-auto px-6 py-20 z-10 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "1.05B", label: "Tonnes of Food Wasted", icon: Package },
              { value: "92M", label: "Tonnes of Textile Waste", icon: Shirt },
              { value: "0", label: "Waste on Sahyog", icon: CheckCircle }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-slate-900/50 border border-white/10 backdrop-blur-md p-8 rounded-2xl text-center"
              >
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="w-full max-w-7xl mx-auto px-6 py-20 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">A single flow from surplus to support.</h2>
            <p className="text-slate-400">We don't just collect donations. We engineer the logistics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Post Needs", desc: "NGOs post exact requirements for food, clothing, or relief.", icon: Building2 },
              { step: "02", title: "Fulfill Cart", desc: "Donors buy or pledge items through a seamless storefront.", icon: Store },
              { step: "03", title: "AI Dispatch", desc: "Drivers get optimized multi-stop routes to deliver safely.", icon: Truck }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <div className="text-6xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-emerald-500/10 transition-colors">{item.step}</div>
                <item.icon className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div className="w-full max-w-7xl mx-auto px-6 py-20 z-10">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Built for the entire ecosystem.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Donors", icon: Users, desc: "Donate easily with tax receipts." },
              { title: "NGOs", icon: Building2, desc: "Manage pantry and requests." },
              { title: "Vendors", icon: Store, desc: "Sell or donate surplus stock." },
              { title: "Drivers", icon: Truck, desc: "Earn rewards for deliveries." }
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-white/10 p-6 rounded-xl text-center"
              >
                <role.icon className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-1">{role.title}</h3>
                <p className="text-xs text-slate-400">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mock Dashboard Preview */}
        <div className="w-full max-w-6xl mx-auto px-6 py-20 z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enterprise-grade logistics in your pocket.</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">Track impact, monitor pantry stock, and optimize delivery routes, all in one dashboard.</p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/80 border border-white/20 rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Fake Browser Header */}
            <div className="h-10 bg-slate-950 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            {/* Fake Dashboard Content */}
            <div className="flex h-[400px]">
              {/* Fake Sidebar */}
              <div className="w-16 md:w-64 border-r border-white/10 p-4 space-y-4 hidden md:block">
                <div className="h-8 bg-white/5 rounded-md w-full mb-8"></div>
                <div className="h-6 bg-emerald-500/20 rounded-md w-full"></div>
                <div className="h-6 bg-white/5 rounded-md w-3/4"></div>
                <div className="h-6 bg-white/5 rounded-md w-5/6"></div>
              </div>
              {/* Fake Main Area */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="h-24 bg-white/5 rounded-xl flex-1 border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl flex-1 border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl flex-1 border border-white/5"></div>
                </div>
                <div className="flex-1 bg-slate-950 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                  <Map className="w-12 h-12 text-emerald-500/30" />
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </main>
      <Footer />
    </>
  );
}