"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ArrowRight, Package, Shirt, ShieldCheck, Activity, Sparkles, Brain, Truck, 
  Building2, TrendingUp, BarChart3, Gift, Shield, FileText 
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Data for the Recharts graph
const impactData = [
  { name: "Mon", rescued: 2400 },
  { name: "Tue", rescued: 3800 },
  { name: "Wed", rescued: 3200 },
  { name: "Thu", rescued: 5100 },
  { name: "Fri", rescued: 4800 },
  { name: "Sat", rescued: 6800 },
  { name: "Sun", rescued: 7400 },
];

// Custom Tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#050505]/90 border border-rose-500/30 p-4 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
        <p className="text-xl font-bold text-white">
          {payload[0].value.toLocaleString()} <span className="text-sm text-rose-500 font-medium">kg rescued</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function CinematicLanding() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Scroll Tracking for the cinematic hero
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 1. Background Image (Slower zoom, stays visible longer)
  const bgScale = useTransform(smoothProgress, [0, 0.8], [1, 1.4]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 0.8], [1, 0.9, 0.3]);
  const bgBlur = useTransform(smoothProgress, [0, 0.5, 0.8], ["blur(0px)", "blur(2px)", "blur(8px)"]);

  // 2. Hero Text
  const heroTextY = useTransform(smoothProgress, [0, 0.15], ["0%", "-100%"]);
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // 3. Vision Text
  const visionTextOpacity = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const visionTextY = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.45], [60, 0, 0, -60]);

  // 4. Network Graph
  const networkOpacity = useTransform(smoothProgress, [0.35, 0.45, 0.65, 0.8], [0, 1, 1, 0]);
  const networkScale = useTransform(smoothProgress, [0.35, 0.45], [0.95, 1]);
  const svgPathLength = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);

  // 5. Dashboard Preview
  const dashboardY = useTransform(smoothProgress, [0.65, 0.85], [100, 0]);
  const dashboardOpacity = useTransform(smoothProgress, [0.65, 0.85], [0, 1]);

  return (
    <div className="bg-[#050505] text-slate-200 selection:bg-rose-600/30 selection:text-white font-sans">
      <Navbar />
      
      {/* --- CINEMATIC PINNED SECTION --- */}
      <div ref={targetRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          
          {/* Layer 1: Background */}
          <motion.div 
            style={{ scale: bgScale, opacity: bgOpacity, filter: bgBlur }}
            className="absolute inset-0 z-0 w-full h-full bg-[#050505]"
          >
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2500&auto=format&fit=crop" 
              alt="Logistics Hub" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]"></div>
          </motion.div>

          {/* Layer 2: Hero Text */}
          <motion.div 
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="absolute z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" /> The Operating System for Social Good
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl leading-[0.95]">
              Measure the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                Living Impact.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Scroll down to see how Sahyog's AI agent routes surplus resources to critical need.
            </p>
          </motion.div>

          {/* Layer 3: Middle Vision Text */}
          <motion.div 
            style={{ opacity: visionTextOpacity, y: visionTextY }}
            className="absolute z-10 flex flex-col items-center text-center px-6 max-w-4xl pointer-events-none"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-xl mb-6">
              From chaotic waste to <br />
              <span className="text-amber-400">intelligent redistribution.</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl drop-shadow-lg">
              Our AI engine continuously analyzes donor inventory, NGO requirements, and real-time traffic to orchestrate the perfect logistics route.
            </p>
          </motion.div>

          {/* Layer 4: Network Graph */}
          <motion.div 
            style={{ opacity: networkOpacity, scale: networkScale }}
            className="absolute z-20 w-full max-w-5xl h-[500px] pointer-events-none flex items-center justify-center"
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
              <motion.path d="M 150 150 Q 350 150 500 250" fill="none" stroke="#e11d48" strokeWidth="3" strokeDasharray="6,4" style={{ pathLength: svgPathLength }} />
              <motion.path d="M 150 350 Q 350 350 500 250" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="6,4" style={{ pathLength: svgPathLength }} />
              <motion.path d="M 500 250 Q 650 150 850 150" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="6,4" style={{ pathLength: svgPathLength }} />
              <motion.path d="M 500 250 Q 650 350 850 350" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="6,4" style={{ pathLength: svgPathLength }} />
              
              <motion.circle r="5" fill="#e11d48" animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ offsetPath: "path('M 150 150 Q 350 150 500 250')" }} />
              <motion.circle r="5" fill="#fbbf24" animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} style={{ offsetPath: "path('M 500 250 Q 650 350 850 350')" }} />
            </svg>

            {/* Left Nodes */}
            <div className="absolute left-[10%] top-[20%] flex flex-col items-center">
              <div className="w-16 h-16 bg-[#050505]/90 backdrop-blur-md border border-rose-500/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                <Package className="w-8 h-8 text-rose-500" />
              </div>
              <span className="mt-3 text-xs font-bold text-white uppercase tracking-wider bg-black/50 px-2 py-1 rounded">Food Donors</span>
            </div>
            <div className="absolute left-[10%] top-[60%] flex flex-col items-center">
              <div className="w-16 h-16 bg-[#050505]/90 backdrop-blur-md border border-amber-400/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                <Shirt className="w-8 h-8 text-amber-400" />
              </div>
              <span className="mt-3 text-xs font-bold text-white uppercase tracking-wider bg-black/50 px-2 py-1 rounded">Textile Donors</span>
            </div>

            {/* Center Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-white/20 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.15)] relative">
                <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20"></div>
                <Brain className="w-12 h-12 text-white" />
              </div>
              <span className="mt-4 text-sm font-black text-white uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">Sahyog AI Core</span>
            </div>

            {/* Right Nodes */}
            <div className="absolute right-[10%] top-[20%] flex flex-col items-center">
              <div className="w-16 h-16 bg-[#050505]/90 backdrop-blur-md border border-rose-400/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(251,113,133,0.4)]">
                <Building2 className="w-8 h-8 text-rose-400" />
              </div>
              <span className="mt-3 text-xs font-bold text-white uppercase tracking-wider bg-black/50 px-2 py-1 rounded">NGOs & Shelters</span>
            </div>
            <div className="absolute right-[10%] top-[60%] flex flex-col items-center">
              <div className="w-16 h-16 bg-[#050505]/90 backdrop-blur-md border border-amber-300/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(252,211,77,0.4)]">
                <Truck className="w-8 h-8 text-amber-300" />
              </div>
              <span className="mt-3 text-xs font-bold text-white uppercase tracking-wider bg-black/50 px-2 py-1 rounded">Delivery Fleet</span>
            </div>
          </motion.div>

          {/* Layer 5: Live Dashboard Preview */}
          <motion.div 
            style={{ y: dashboardY, opacity: dashboardOpacity }}
            className="absolute z-30 bottom-12 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Live System Status</p>
                  <h3 className="text-xl font-bold text-white">Routing Engine Active</h3>
                  <p className="text-sm text-slate-400 mt-1">8 drivers dispatched in Bengaluru.</p>
                </div>
              </div>
              <Link href="/hub" className="w-full md:w-auto bg-rose-600 hover:bg-rose-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] whitespace-nowrap flex items-center justify-center gap-2">
                Enter Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- UPGRADED SOLUTIONS SECTION --- */}
      <section className="relative z-40 bg-[#09090b] pt-24 pb-24 border-t border-white/5 overflow-hidden">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-md bg-rose-600/10 border border-rose-600/20 text-rose-500 text-xs font-bold tracking-widest uppercase mb-6">
                Our Solutions
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white">
                Validating what the <br className="hidden md:block"/> ecosystem does naturally.
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm text-base leading-relaxed">
              Field sensors, AI routing, and blockchain-secured traceability fused into one auditable record. Every donation is tracked from the donor's doorstep to the recipient's hands.
            </p>
          </motion.div>

          {/* Glowing Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Food Rescue", icon: Package, desc: "Intercepting surplus food from restaurants and groceries before it hits the landfill. Our AI matches the food to the nearest verified shelter.", color: "text-rose-500", border: "border-rose-500/30", bg: "bg-rose-500/10" },
              { title: "Textile Recovery", icon: Shirt, desc: "Connecting unused clothing with shelters and orphanages that need them. We verify quality and hygiene before dispatch.", color: "text-amber-400", border: "border-amber-400/30", bg: "bg-amber-400/10" },
              { title: "Emergency Relief", icon: ShieldCheck, desc: "Pre-stocked supplies dispatched instantly to disaster relief camps. Our OR-Tools engine calculates the fastest possible route.", color: "text-rose-400", border: "border-rose-400/30", bg: "bg-rose-400/10" }
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-slate-900/60 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:${feat.border} hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 ${feat.bg} border ${feat.border} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <feat.icon className={`w-8 h-8 ${feat.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* LIVE GRAPH SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 md:p-12 mb-24 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-rose-500" /> Network Impact
                  </h3>
                  <span className="flex items-center gap-1.5 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-full text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span> Live
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Total surplus food rescued this week (kg).</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl flex items-center gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5 uppercase tracking-wider font-bold">Total Rescued</p>
                  <p className="text-xl font-bold text-white">33,500 kg</p>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-lg">
                  <TrendingUp className="w-4 h-4" />
                  <span>+34%</span>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={impactData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRescued" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e11d48" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#e11d48" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} tickFormatter={(value) => `${value / 1000}k`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e11d48', strokeWidth: 1, strokeDasharray: '5 5' }} />
                  <Area type="monotone" dataKey="rescued" stroke="#e11d48" strokeWidth={4} fillOpacity={1} fill="url(#colorRescued)" isAnimationActive={true} animationDuration={2000} animationEasing="ease-out" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/10 mb-24"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { val: "1240+", label: "Active Drivers" },
                { val: "38", label: "Cities Monitored" },
                { val: "2.1M", label: "Meals Rescued" },
                { val: "99.4%", label: "Routing Uptime" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.val}</p>
                  <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- NEW QUICK ACCESS BANNER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
          >
            <Link href="/referral" className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-amber-400/50 hover:bg-slate-800/60 transition-all group flex items-center gap-4">
              <div className="p-3 bg-amber-400/10 rounded-xl group-hover:scale-110 transition-transform">
                <Gift className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Refer & Earn</h3>
                <p className="text-sm text-slate-400">Invite friends and earn Punya Points.</p>
              </div>
            </Link>

            <Link href="/privacy" className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-rose-500/50 hover:bg-slate-800/60 transition-all group flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-xl group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Privacy Policy</h3>
                <p className="text-sm text-slate-400">Learn how we protect your data.</p>
              </div>
            </Link>

            <Link href="/terms" className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Terms of Service</h3>
                <p className="text-sm text-slate-400">Read the rules of the platform.</p>
              </div>
            </Link>
          </motion.div>

          {/* Final CTA */}
          <div className="flex justify-center">
            <Link href="/hub" className="flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:scale-105">
              Enter Command Center <ArrowRight className="w-5 h-5 text-amber-300" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}