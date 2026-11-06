"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, ShoppingBag, BookOpen, Users, ShieldCheck, Menu, X, ArrowRight, Sparkles, Activity, CheckCircle2, Shield, MapPin, Truck, Network, Zap, Server, Heart, Clock, Globe, Wifi } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// ==========================================
// INTERACTIVE CARD COMPONENT (Cursor Glow)
// ==========================================
const InteractiveCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 80 }}
      className={`relative overflow-hidden group rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
          ),
        }}
      />
      <div className="relative z-10 h-full flex flex-col p-8">{children}</div>
    </motion.div>
  );
};

// ==========================================
// DATA
// ==========================================
const PAGES = [
  {
    id: "needs",
    title: "The Needs Board",
    description: "The core storefront. Browse verified requests from NGOs, orphanages, and shelters. Fulfill exact needs through our reverse e-commerce engine.",
    icon: ShoppingBag,
    href: "/needs",
    color: "text-rose-500",
    bg: "bg-rose-600/10",
    tags: ["Live Requests", "AI Matching", "E-commerce"],
    span: "md:col-span-2 md:row-span-2",
    stats: "45 Active Needs"
  },
  {
    id: "dashboard",
    title: "Command Center",
    description: "Access your personalized dashboard. Manage pantry inventory, track delivery routes, or view your impact metrics based on your role.",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-amber-300",
    bg: "bg-amber-400/10",
    tags: ["Role-Based", "Real-time"],
    span: "md:col-span-2 md:row-span-1",
    stats: "4 User Roles"
  },
  {
    id: "research",
    title: "Research & Impact",
    description: "Read the data behind the mission. Explore our white paper on global food waste, fast fashion, and AI logistics.",
    icon: BookOpen,
    href: "/research",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    tags: ["Data-Driven"],
    span: "md:col-span-1 md:row-span-1",
    stats: "1.05B Tonnes"
  },
  {
    id: "trust",
    title: "Trust & Safety",
    description: "Learn how we protect every donation. Explore our AI quality checks, Double-OTP handover system, and strict NGO KYC.",
    icon: ShieldCheck,
    href: "/trust",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    tags: ["KYC Verified", "Zero Theft"],
    span: "md:col-span-1 md:row-span-1",
    stats: "100% Secure"
  },
  {
    id: "team",
    title: "The Founders",
    description: "Meet the 16-year-old builders behind Sahyog. Read our journey, our manifesto, and the tech stack powering the platform.",
    icon: Users,
    href: "/team",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    tags: ["Our Story"],
    span: "md:col-span-2 md:row-span-1",
    stats: "Two Builders"
  }
];

const LIVE_FEED = [
  { time: "Just now", action: "Driver assigned to Hope Foundation", icon: Truck, color: "text-amber-300" },
  { time: "2 mins ago", action: "New donation matched: 10kg Rice", icon: Network, color: "text-rose-500" },
  { time: "5 mins ago", action: "FreshGuard AI approved 15 Winter Jackets", icon: Shield, color: "text-yellow-400" },
  { time: "12 mins ago", action: "New NGO verified: Aashray Old-Age Home", icon: CheckCircle2, color: "text-purple-400" },
];

export default function HubPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [currentTime, setCurrentTime] = useState("");

  // Live Clock for "Mission Control" feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 flex font-sans overflow-hidden">
      
      {/* Top Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-rose-600 origin-left z-[100]" style={{ scaleX }} />

      {/* 🚀 NEXT-LEVEL 3D LIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Breathing Ambient Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} className="absolute top-[-10%] right-1/4 w-[800px] h-[800px] bg-rose-600/20 blur-[150px] rounded-lg" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }} className="absolute bottom-[-10%] left-1/4 w-[700px] h-[700px] bg-amber-500/20 blur-[150px] rounded-lg" />
        
        {/* Interactive Repelling Particles */}
        <div className="absolute inset-0 opacity-60">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: "transparent" },
              fpsLimit: 120,
              interactivity: {
                events: { onHover: { enable: true, mode: "repulse" }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 } },
              },
              particles: {
                color: { value: "#ffffff" },
                links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.05, width: 1 },
                move: { enable: true, speed: 0.5 },
                number: { density: { enable: true, area: 800 }, value: 80 },
                opacity: { value: 0.15 },
                size: { value: { min: 1, max: 2 } },
              },
            }}
          />
        </div>
      </div>

      {/* SIDEBAR (Desktop) */}
      <aside className="hidden lg:flex w-72 flex-col bg-[#0a0a0a]/80 backdrop-blur-xl border-r border-white/5 relative z-50 h-screen sticky top-0">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-full.png" alt="Sahyog" width={110} height={30} className="object-contain" />
          </Link>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto space-y-2 mt-4">
          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Navigation Hub</p>
          {PAGES.map((page) => (
            <Link key={page.id} href={page.href} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all group">
              <page.icon className={`w-5 h-5 ${page.color} group-hover:scale-110 transition-transform`} />
              <span className="font-medium">{page.title}</span>
            </Link>
          ))}
        </div>

        {/* Sidebar Status Widget */}
        <div className="p-6 border-t border-white/5 space-y-4">
          <div className="bg-slate-900/80 border border-white/10 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-lg bg-rose-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-lg h-2 w-2 bg-rose-600"></span>
                </span>
                <span className="text-xs font-bold text-white">Network Live</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{currentTime}</span>
            </div>
            <p className="text-[10px] text-slate-400">All systems operational. AI engine active.</p>
          </div>
        </div>
      </aside>

      {/* MOBILE MENU TOGGLE */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="lg:hidden fixed top-6 right-6 z-[60] p-2 bg-slate-900 border border-white/10 rounded-xl text-white"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} className="lg:hidden fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col p-6">
            <div className="flex justify-between items-center mb-10">
              <Image src="/logo-full.png" alt="Sahyog" width={100} height={30} />
              <button onClick={() => setIsSidebarOpen(false)}><X className="w-6 h-6 text-white" /></button>
            </div>
            <div className="space-y-4">
              {PAGES.map((page) => (
                <Link key={page.id} href={page.href} onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all">
                  <page.icon className={`w-5 h-5 ${page.color}`} />
                  <span className="font-medium">{page.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-screen overflow-y-auto relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          
          {/* Hero & Top Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-600/10 border border-rose-600/20 mb-6">
                  <Globe className="w-4 h-4 text-rose-500" />
                  <span className="text-xs font-bold text-rose-300 tracking-widest uppercase">Sahyog Mission Control</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                  System Overview.
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  Welcome to the central nervous system of the platform. Monitor live operations, access dashboards, or review the data behind the mission.
                </p>
              </div>
              
              {/* Live Status Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-900/80 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md flex flex-col justify-center min-w-[120px]">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Active Needs</p>
                  <p className="text-2xl font-bold text-white">45</p>
                </div>
                <div className="bg-slate-900/80 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md flex flex-col justify-center min-w-[120px]">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">NGOs Verified</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <div className="bg-rose-600/10 border border-rose-600/30 px-5 py-3 rounded-2xl backdrop-blur-md flex flex-col justify-center min-w-[120px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-rose-600/5 animate-pulse"></div>
                  <p className="text-[10px] text-rose-500/80 uppercase tracking-widest mb-1 relative z-10">Drivers Live</p>
                  <p className="text-2xl font-bold text-rose-500 relative z-10">8</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {PAGES.map((page, i) => (
              <InteractiveCard key={page.id} className={page.span} delay={i * 0.1}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 ${page.bg} border border-white/10 rounded-2xl flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500`}>
                    <page.icon className={`w-7 h-7 ${page.color}`} style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-widest">{page.stats}</span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">{page.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">{page.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {page.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>

                <Link href={page.href} className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-rose-500 transition-colors mt-auto w-fit">
                  Enter Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </InteractiveCard>
            ))}
          </div>

          {/* Live Operations Feed */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Subtle glow in feed */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[80px] rounded-lg pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                <Activity className="w-6 h-6 text-rose-500" />
                <h3 className="text-2xl font-bold text-white">Live Network Activity</h3>
              </div>
              <div className="flex items-center gap-2 bg-rose-600/10 border border-rose-600/20 px-3 py-1.5 rounded-lg">
                <span className="w-2 h-2 rounded-lg bg-rose-600 animate-pulse"></span>
                <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Streaming</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {LIVE_FEED.map((feed, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex flex-col md:flex-row md:items-center justify-between bg-[#09090b]/60 border border-white/5 p-5 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-xl bg-white/5 ${feed.color} group-hover:scale-110 transition-transform`}>
                      <feed.icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm md:text-base text-slate-200 font-medium">{feed.action}</p>
                  </div>
                  <span className="text-xs text-slate-500 mt-2 md:mt-0 font-mono bg-white/5 px-3 py-1 rounded-md">{feed.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}