"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, Legend } from "recharts";
import { BookOpen, TrendingUp, AlertTriangle, ShieldCheck, Database, Network, Activity, Globe, Leaf, Droplets, Trash2, HeartCrack, Wind, ShieldAlert, Recycle, ArrowRight, FileText, CheckCircle2, Factory, Users, MapPin, Layers, Lock, Server, Code2, Zap, TreePine, User, Share2, RotateCcw, Package, Shirt, Eye, Link2, Truck, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRef, useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

// ==========================================
// CHART DATA
// ==========================================
const foodWasteData = [
  { name: "Households", value: 60, amount: "631M tonnes", color: "#10b981" },
  { name: "Food Service", value: 28, amount: "290M tonnes", color: "#3b82f6" },
  { name: "Retail", value: 12, amount: "131M tonnes", color: "#8b5cf6" },
];

const textileWasteData = [
  { name: "Textile Waste Generated", amount: 92, fill: "#f43f5e" },
  { name: "Textile-to-Textile Recycling", amount: 1, fill: "#10b981" }, 
];

const fashionGrowthData = [
  { year: "Beginning (Index)", production: 100, utilisation: 100 },
  { year: "End of 15-Year Period", production: 200, utilisation: 64 },
];

export default function ResearchPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // INDEPENDENT STATES FOR EACH CHART
  const [pieKey, setPieKey] = useState(0);
  const [barKey, setBarKey] = useState(0);
  const [lineKey, setLineKey] = useState(0);

  // Parallax effect for the Hero Image
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#09090b] text-slate-200 relative overflow-hidden font-sans">
      
      {/* Top Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-rose-600 origin-left z-[100]" style={{ scaleX }} />

      {/* 🚀 CRAZY 3D LIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <motion.div animate={{ x: [0, 150, -100, 0], y: [0, -100, 80, 0], scale: [1, 1.3, 0.8, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute -top-20 right-1/4 w-[800px] h-[800px] bg-rose-600/10 blur-[150px] rounded-lg" />
        <motion.div animate={{ x: [0, -100, 80, 0], y: [0, 120, -80, 0], scale: [1, 0.8, 1.3, 1] }} transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }} className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-amber-500/10 blur-[150px] rounded-lg" />
        
        {/* Interactive 3D Particles */}
        <div className="absolute inset-0 opacity-40">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: "transparent" },
              fpsLimit: 120,
              particles: {
                color: { value: "#ffffff" },
                links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.05, width: 1 },
                move: { enable: true, speed: 0.4 },
                number: { density: { enable: true, area: 800 }, value: 60 },
                opacity: { value: 0.1 },
                size: { value: { min: 1, max: 2 } },
              },
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-32 pb-20">
        
        {/* =========================================
            HERO SECTION (Cinematic Image + Parallax)
        ========================================= */}
        <div className="mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 mb-6">
              <BookOpen className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">The Sahyog White Paper</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 max-w-4xl">
              The Distribution Paradox.
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              We don't have a scarcity problem. We have a distribution problem. An investigation into the fragmented supply chains that cause global waste, and how localized AI logistics can reverse the damage.
            </p>
          </motion.div>

          {/* MAIN PHOTO OF CHILDREN (Cinematic Banner) */}
          <motion.div 
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.4, duration: 0.8 }} 
            className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.1)] group"
          >
            <motion.img 
              style={{ y: heroImageY }}
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop" 
              alt="Children smiling" 
              className="w-full h-[120%] object-cover object-top absolute top-0 left-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-10 left-10 right-10 text-left">
              <p className="text-rose-500 font-bold text-sm tracking-widest uppercase mb-2">The Mission</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">Bridging the gap between urban surplus and critical need.</h2>
            </div>
          </motion.div>

          {/* Top 4 Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: "1.05B", label: "Tonnes food wasted", sub: "UNEP 2024" },
              { value: "92M", label: "Tonnes textile waste", sub: "UNEP 2025" },
              { value: "733M", label: "People facing hunger", sub: "FAO 2023" },
              { value: "60%", label: "Household food waste", sub: "Consumer level" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-rose-600/30 transition-colors">
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-xs font-semibold text-rose-500 mb-1">{stat.label}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            PART 01: THE SCARCITY ILLUSION
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 border-l-4 border-rose-600 pl-6">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-2 block">Part 01</span>
            <h2 className="text-4xl font-bold text-white mb-4">The Scarcity Illusion</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-4xl">
              The global food system has a contradiction at its centre: enormous quantities of food are produced and discarded, while millions struggle to access meals. This conflict reveals a fundamental problem: food insecurity and food waste can exist simultaneously, even within the same city.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col">
              <div className="h-64 w-full relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=800&auto=format&fit=crop" alt="Food waste" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-rose-500" /> 1.1 The Food Paradox</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  The issue is not simply that surplus food exists. It is that surplus food is not consistently connected to verified, timely, and geographically accessible demand. 
                </p>
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-sm">
                  <strong className="text-white mb-2 block">The Missing Logistics Layer:</strong>
                  Imagine a bakery with <span className="text-rose-500">80 unsold portions</span>. An orphanage needs 30. A shelter needs 25. A food bank needs 25. Without coordination, the bakery discards the surplus.
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col">
              <div className="h-64 w-full relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop" alt="Fast fashion clothes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><Factory className="w-5 h-5 text-rose-400" /> 1.2 The Fast Fashion Epidemic</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  The global clothing industry operates on a linear model: extract, manufacture, sell, use briefly, and discard. Clothing production approximately doubled over a 15-year period, while utilisation declined by 36%.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  When a wearable garment is discarded prematurely, society loses the water, energy, chemicals, and human labour embedded in its production.
                </p>
              </div>
            </motion.div>
          </div>

          {/* IMPROVED SECTION 1.3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">1.3 The Core Issue: A Distribution Failure</h4>
              <p className="text-sm text-slate-400 max-w-3xl">
                Food and clothing have different supply chains, but they share an underlying structural weakness: resources are often discarded at one location while useful demand exists elsewhere. This produces a systemic failure that requires a centralized technology layer to resolve.
              </p>
            </div>
            
            <div className="bg-[#0B1120] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-300 uppercase tracking-wider text-xs border-b border-slate-700">
                  <tr>
                    <th className="p-5 font-semibold">Resource Stream</th>
                    <th className="p-5 font-semibold">Surplus Source</th>
                    <th className="p-5 font-semibold">Potential Recipient</th>
                    <th className="p-5 font-semibold text-rose-400">Main Barrier</th>
                    <th className="p-5 font-semibold text-rose-500">Sahyog Intervention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {/* Food Row */}
                  <tr className="hover:bg-slate-800/40 transition-colors group">
                    <td className="p-5 font-semibold text-white flex items-center gap-3">
                      <div className="p-2 bg-rose-600/10 rounded-lg group-hover:bg-rose-600/20 transition-colors">
                        <Package className="w-5 h-5 text-rose-500" />
                      </div>
                      Food
                    </td>
                    <td className="p-5 text-slate-400">Restaurants, bakeries, retailers</td>
                    <td className="p-5 text-slate-400">Shelters, food banks, community kitchens</td>
                    <td className="p-5"><span className="bg-rose-500/10 text-rose-300 px-3 py-1 rounded-lg text-xs font-medium border border-rose-500/20">Time & Transport</span></td>
                    <td className="p-5 text-rose-300 font-medium">AI Quality Check + Priority Routing</td>
                  </tr>
                  {/* Clothing Row */}
                  <tr className="hover:bg-slate-800/40 transition-colors group">
                    <td className="p-5 font-semibold text-white flex items-center gap-3">
                      <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors">
                        <Shirt className="w-5 h-5 text-amber-300" />
                      </div>
                      Clothing
                    </td>
                    <td className="p-5 text-slate-400">Households, retail stores, textile factories</td>
                    <td className="p-5 text-slate-400">NGOs, orphanages, old-age homes</td>
                    <td className="p-5"><span className="bg-rose-500/10 text-rose-300 px-3 py-1 rounded-lg text-xs font-medium border border-rose-500/20">Sorting & Matching</span></td>
                    <td className="p-5 text-rose-300 font-medium">Verified Demand Matching + Condition Scoring</td>
                  </tr>
                  {/* Relief Goods Row */}
                  <tr className="hover:bg-slate-800/40 transition-colors group">
                    <td className="p-5 font-semibold text-white flex items-center gap-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-purple-400" />
                      </div>
                      Relief Goods
                    </td>
                    <td className="p-5 text-slate-400">Institutions, businesses, individuals</td>
                    <td className="p-5 text-slate-400">Disaster-affected communities, crisis zones</td>
                    <td className="p-5"><span className="bg-rose-500/10 text-rose-300 px-3 py-1 rounded-lg text-xs font-medium border border-rose-500/20">Urgency & Coordination</span></td>
                    <td className="p-5 text-rose-300 font-medium">Pre-stocked Hub Dispatch + Multi-modal Routing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Three Recurring Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { title: "Visibility Gap", icon: Eye, desc: "Recipients cannot see what resources are available nearby. Donors do not know who needs what." },
                { title: "Coordination Gap", icon: Link2, desc: "Donors cannot easily identify legitimate recipients and their current, real-time requirements." },
                { title: "Distribution Gap", icon: Truck, desc: "Available resources cannot reliably reach recipients at the right time, in the right quantity, and in usable condition." },
              ].map((gap, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-700/50 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <gap.icon className="w-4 h-4 text-rose-500" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">{gap.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{gap.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================
            PART 02: THE SYSTEMIC FAILURE
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 border-l-4 border-rose-600 pl-6">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-2 block">Part 02</span>
            <h2 className="text-4xl font-bold text-white mb-4">The Systemic Failure</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-4xl">
              Waste is not concentrated in one central location. It is produced by disconnected information systems, inefficient logistics, overproduction, and short product lifecycles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Micro Level", desc: "Individual households, restaurants, bakeries and small retailers generate surplus." },
              { title: "Meso Level", desc: "NGOs, shelters, food banks and community groups have different requirements and operational capacities." },
              { title: "Macro Level", desc: "Municipal waste systems, environmental regulations, supply chains and public policy influence the overall system." },
            ].map((level, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                <span className="text-rose-500 font-bold text-xs uppercase tracking-wider mb-2 block">{level.title}</span>
                <p className="text-sm text-slate-400">{level.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Chart 1: Animated Pie Chart */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">2.1 Decentralised Food Waste</h3>
                <button onClick={() => setPieKey(prev => prev + 1)} className="p-1.5 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors text-slate-400 hover:text-white" title="Replay Animation">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart key={`pie-${pieKey}`}>
                    <Pie 
                      data={foodWasteData} 
                      cx="50%" cy="50%" 
                      innerRadius={70} outerRadius={100} 
                      paddingAngle={5} 
                      dataKey="value" 
                      stroke="none"
                      isAnimationActive={true}
                      animationBegin={200}
                      animationDuration={1500}
                    >
                      {foodWasteData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} formatter={(value, name, props) => [props.payload.amount, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-2">
                {foodWasteData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-lg" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] text-slate-400">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Chart 2: Animated Bar Chart */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">2.2 The Recycling Bottleneck</h3>
                <button onClick={() => setBarKey(prev => prev + 1)} className="p-1.5 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors text-slate-400 hover:text-white" title="Replay Animation">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart key={`bar-${barKey}`} data={textileWasteData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#1e293b" />
                    <XAxis type="number" stroke="#475569" />
                    <YAxis dataKey="name" type="category" stroke="#475569" width={120} tick={{ fontSize: 10 }} />
                    <Tooltip cursor={{ fill: '#1e293b', opacity: 0.4 }} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} />
                    <Bar 
                      dataKey="amount" 
                      radius={[0, 8, 8, 0]} 
                      barSize={30}
                      isAnimationActive={true}
                      animationBegin={400}
                      animationDuration={1500}
                    >
                      {textileWasteData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.fill} />))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-xs text-slate-400 leading-relaxed bg-white/5 p-3 rounded-lg">
                <strong className="text-white">Challenges:</strong> Mixed-fibre garments, dyes, contamination, and limited infrastructure reduce the quality of recovered material.
              </div>
            </motion.div>
          </div>

          {/* Chart 3: Animated Line Chart */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">2.3 The Fast Fashion Growth Epidemic (Indexed)</h3>
              <button onClick={() => setLineKey(prev => prev + 1)} className="p-1.5 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors text-slate-400 hover:text-white" title="Replay Animation">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="h-[300px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart key={`line-${lineKey}`} data={fashionGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" tick={{ fill: '#94a3b8' }} />
                  <YAxis stroke="#475569" tick={{ fill: '#94a3b8' }} domain={[0, 220]} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" dataKey="production" name="Clothing Production (Index)" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981' }} isAnimationActive={true} animationBegin={600} animationDuration={1500} />
                  <Line type="monotone" dataKey="utilisation" name="Clothing Utilisation (Index)" stroke="#f43f5e" strokeWidth={4} dot={{ r: 6, fill: '#f43f5e' }} isAnimationActive={true} animationBegin={600} animationDuration={1500} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-rose-950/10 border border-rose-600/20 p-5 rounded-xl text-sm text-slate-300 leading-relaxed">
              <strong className="text-rose-500 block mb-2">The Production Footprint per Use:</strong>
              Consider Garment A worn 100 times and Garment B worn 20 times. If their production footprints are equal, the manufacturing footprint allocated to each use of Garment B is <span className="text-white font-bold">five times higher</span>. More clothing is produced while each garment is used fewer times, increasing pressure on material extraction and waste systems.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Wind className="w-5 h-5 text-rose-500" /> 2.4 The Microplastic Crisis</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Synthetic fabrics release microplastics during normal wear and washing. A 2016 study by Napper & Thompson estimated a 6 kg wash of acrylic fabric could release over <strong>700,000 fibres</strong> under specific conditions. By 2026, UNECE reported ~60% of global fibres were polyester.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Droplets className="w-5 h-5 text-rose-400" /> 2.5 Resource Squandering</h4>
              <p className="text-sm text-slate-400 leading-relaxed">Food that is never eaten occupies ~<strong>28% of the world's agricultural land</strong> (FAO). Food loss and waste contribute around <strong>8–10% of global greenhouse gas emissions</strong>. Landfill diversion prevents methane (27-30x CO2 over 100 years).</p>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            PART 03: THE INTERVENTION
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 border-b border-white/10 pb-8">
            <span className="text-sm font-bold text-rose-600 uppercase tracking-widest">Part 03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">The Intervention</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The intervention must be systemic. Sahyog proposes a technology-enabled redistribution network.
            </p>
          </motion.div>

          {/* REBUILT LINEAR & CIRCULAR ECONOMY BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Linear Economy */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-rose-950/10 border border-rose-500/20 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-rose-400 mb-6 uppercase tracking-widest text-center">Linear Economy</h3>
              <div className="flex items-center justify-between gap-2">
                {[
                  { label: "Take", icon: TreePine },
                  { label: "Make", icon: Factory },
                  { label: "Use", icon: User },
                  { label: "Dispose", icon: Trash2 },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(244, 63, 94, 0.4)" }}
                      className="flex flex-col items-center justify-center bg-slate-900 border border-rose-500/30 p-4 rounded-xl w-20 h-24 transition-colors cursor-pointer"
                    >
                      <step.icon className="w-8 h-8 text-rose-400 mb-2" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                      <span className="text-[10px] font-bold text-slate-300 uppercase">{step.label}</span>
                    </motion.div>
                    {i < 3 && <ArrowRight className="w-4 h-4 text-rose-500/50" />}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 text-center mt-6">Resources are extracted, consumed, and discarded.</p>
            </motion.div>

            {/* Circular Economy */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-rose-950/10 border border-rose-600/20 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-rose-500 mb-6 uppercase tracking-widest text-center">Circular Economy</h3>
              <div className="flex items-center justify-between gap-2">
                {[
                  { label: "Use", icon: User },
                  { label: "Share", icon: Share2 },
                  { label: "Reuse", icon: RotateCcw },
                  { label: "Recover", icon: Recycle },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
                      className="flex flex-col items-center justify-center bg-slate-900 border border-rose-600/30 p-4 rounded-xl w-20 h-24 transition-colors cursor-pointer"
                    >
                      <step.icon className="w-8 h-8 text-rose-500 mb-2" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                      <span className="text-[10px] font-bold text-slate-300 uppercase">{step.label}</span>
                    </motion.div>
                    {i < 3 && <ArrowRight className="w-4 h-4 text-rose-600/50" />}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 text-center mt-6">Products retain their utility through multiple use cycles.</p>
            </motion.div>
          </div>

          {/* REBUILT SECTION 3.3: METHANE REDUCTION */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl mb-16">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Activity className="w-5 h-5 text-rose-500" /> 3.3 Methane Reduction & Emissions Accounting</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Before */}
              <div className="bg-[#09090b] border border-rose-500/20 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                <h4 className="text-rose-400 font-bold mb-2 flex items-center gap-2"><Trash2 className="w-4 h-4"/> Baseline (Landfill)</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Food reaches landfill, decomposes anaerobically, and generates high levels of methane gas into the atmosphere.</p>
              </div>
              
              {/* After */}
              <div className="bg-[#09090b] border border-rose-600/20 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-600"></div>
                <h4 className="text-rose-500 font-bold mb-2 flex items-center gap-2"><Recycle className="w-4 h-4"/> Sahyog Intervention</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Suitable edible food is redistributed to recipients, avoiding the disposal pathway and methane emissions entirely.</p>
              </div>
            </div>

            <div className="bg-rose-950/20 border border-rose-600/30 p-6 rounded-2xl">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest text-center">The Accounting Formula</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm md:text-base font-mono">
                <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-rose-500 font-bold">Net Avoided Emissions</span>
                <span className="text-white font-bold">=</span>
                <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-rose-400">Baseline Disposal</span>
                <span className="text-white font-bold">-</span>
                <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-amber-300">Redistribution</span>
              </div>
              <p className="text-xs text-slate-400 text-center mt-4 max-w-xl mx-auto">
                Baseline disposal depends on the local waste system. Redistribution emissions account for vehicle fuel, refrigeration, and handling. Sahyog documents these variables for transparent reporting.
              </p>
            </div>
          </motion.div>

          {/* 3.4 Neural Network Graphic */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[450px] w-full bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8">
            <h3 className="text-center text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">3.4 The Sahyog Hypothesis: Neural Network Architecture</h3>
            
            <div className="relative w-full max-w-4xl flex items-center justify-between">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <motion.path d="M 150 50 Q 300 50 400 200" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
                <motion.path d="M 150 200 Q 300 200 400 200" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
                <motion.path d="M 150 350 Q 300 350 400 200" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
                
                <motion.path d="M 600 200 Q 700 50 850 50" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1 }} />
                <motion.path d="M 600 200 Q 700 200 850 200" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1 }} />
                <motion.path d="M 600 200 Q 700 350 850 350" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 1 }} />
              </svg>

              <div className="flex flex-col gap-16 z-10 w-48">
                {[{ label: "Food Surplus", icon: TrendingUp }, { label: "Textiles", icon: AlertTriangle }, { label: "Relief Goods", icon: ShieldCheck }].map((node, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * i }} className="flex items-center gap-3 bg-slate-900 border border-white/10 px-4 py-3 rounded-xl">
                    <node.icon className="w-8 h-8 text-rose-500" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                    <span className="text-sm font-semibold text-white">{node.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 0.5 }} className="z-10 bg-rose-600/10 border border-rose-600/30 p-8 rounded-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center w-44 h-44">
                <Network className="w-14 h-14 text-rose-500 mb-2" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                <span className="text-xs font-bold text-white uppercase tracking-wider text-center">Sahyog<br/>AI Core</span>
              </motion.div>

              <div className="flex flex-col gap-16 z-10 w-48">
                {[{ label: "Shelters", icon: Database }, { label: "Orphanages", icon: Database }, { label: "Relief Centers", icon: Activity }].map((node, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * i }} className="flex items-center gap-3 bg-slate-900 border border-white/10 px-4 py-3 rounded-xl">
                    <node.icon className="w-8 h-8 text-amber-300" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                    <span className="text-sm font-semibold text-white">{node.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-8 max-w-xl">Note: This is a conceptual system architecture. The platform combines computer vision for classification, rules engines for safety, and optimisation algorithms for routing.</p>
          </motion.div>
        </div>

        {/* =========================================
            PART 06: THE SAHYOG WORKFLOW (WITH CONNECTIONS)
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 border-b border-white/10 pb-8">
            <span className="text-sm font-bold text-rose-600 uppercase tracking-widest">Part 06</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">The Sahyog Workflow</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              How the platform coordinates the 8-step end-to-end process from registration to impact.
            </p>
          </motion.div>

          {/* Vertical Timeline with Connecting Line */}
          <div className="relative max-w-3xl mx-auto">
            {/* Glowing vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose-600/10 via-rose-600/50 to-rose-600/10"></div>

            <div className="space-y-6">
              {[
                { step: "01", title: "Resource Registration", desc: "Donors register surplus food, clothing, or relief supplies with details, images, and locations." },
                { step: "02", title: "Requirement Registration", desc: "Verified organisations publish their requirements, urgency, and delivery conditions." },
                { step: "03", title: "Verification & Classification", desc: "The platform checks eligibility and classifies resources (with human checks for safety-sensitive categories)." },
                { step: "04", title: "Intelligent Matching", desc: "The engine compares availability with needs, suitability, proximity, and urgency." },
                { step: "05", title: "Smart Allocation", desc: "Donations are divided across multiple recipients when appropriate, avoiding over-allocation." },
                { step: "06", title: "Route Optimisation", desc: "The logistics engine determines efficient pickup and drop-off sequences." },
                { step: "07", title: "Secure Handover", desc: "Donors, volunteers, and recipients confirm transfers via verification codes (OTP)." },
                { step: "08", title: "Impact Recording", desc: "Completed transactions update the environmental and social impact dashboard." },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }} 
                  className="relative flex items-start gap-6 pl-14 group"
                >
                  {/* Glowing Node */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-[#09090b] border-2 border-rose-600 flex items-center justify-center z-10 group-hover:bg-rose-600/20 transition-colors">
                    <div className="w-2 h-2 rounded-lg bg-rose-500 shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                  </div>

                  {/* Card */}
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full hover:border-rose-600/40 hover:bg-slate-900/80 transition-all duration-300">
                    <span className="text-xs font-bold text-rose-600 tracking-widest mb-1 block">STEP {item.step}</span>
                    <h4 className="text-lg text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            PART 07: ADDITIONAL TOPICS
        ========================================= */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-rose-500" /> 7.1 Last-Mile Logistics</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                The most difficult stage. Deliveries involve multiple destinations, varying quantities, traffic, time constraints, and limited transport capacity. Food has a limited usable time window.
              </p>
              <p className="text-sm text-slate-400 font-semibold text-rose-300">
                Solution: Automated route optimisation using OR-Tools.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Layers className="w-5 h-5 text-rose-500" /> 7.2 Information Asymmetry</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Donors know what they have. NGOs know what they need. Volunteers know their transport availability. Without a common system, these pieces remain disconnected.
              </p>
              <p className="text-sm text-slate-400 font-semibold text-rose-300">
                Solution: A shared digital platform creating a complete view of supply, demand, and delivery capacity.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            PART 04 & 05: IMPACT & INACTION
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-rose-600/20 p-8 rounded-3xl">
            <span className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-4 block">Part 04</span>
            <h2 className="text-3xl font-bold text-white mb-6">Measurable Impact</h2>
            <p className="text-sm text-slate-400 mb-6">Sahyog measures what actually reaches people, using a 3-dimensional framework:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                <div><strong className="text-white block">Social Impact</strong><span className="text-xs text-slate-400">Beneficiaries reached, needs fulfilled, repeat donor rate.</span></div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                <div><strong className="text-white block">Environmental Impact</strong><span className="text-xs text-slate-400">Food rescued (kg), CO2e avoided, garments rehomed.</span></div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                <div><strong className="text-white block">Operational Impact</strong><span className="text-xs text-slate-400">Fulfilment rate, average time between listing and collection.</span></div>
              </li>
            </ul>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-xs text-slate-300">
              <strong className="text-rose-500 block mb-1">Calculation Standard:</strong> Total food rescued (kg) x 1.2 = Estimated meal equivalents. (Assumption; actual meals should be counted via recipient confirmation).
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-rose-950/20 backdrop-blur-md border border-rose-500/30 p-8 rounded-3xl">
            <span className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-4 block">Part 05</span>
            <h2 className="text-3xl font-bold text-white mb-6">The Cost of Inaction</h2>
            <p className="text-sm text-slate-400 mb-6">If existing patterns continue, environmental and social costs will accumulate.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <div><strong className="text-white block">Ecological Pressure</strong><span className="text-xs text-slate-400">Fashion could consume a quarter of the world's carbon budget by 2050 (UNEP projection).</span></div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <div><strong className="text-white block">Microplastic Saturation</strong><span className="text-xs text-slate-400">Persistent contamination of aquatic environments and food webs.</span></div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <div><strong className="text-white block">Compounding Crisis</strong><span className="text-xs text-slate-400">Overproduction leads to surplus, resource loss, and higher waste management demands.</span></div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* =========================================
            PART 10: SOURCES & INTEGRITY
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><FileText className="w-5 h-5 text-slate-400" /> Primary Research Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col gap-1"><strong className="text-white">UNEP (2024)</strong><span className="text-slate-400">Food Waste Index Report (1.05B tonnes, 631M households).</span></div>
              <div className="flex flex-col gap-1"><strong className="text-white">FAO (2025)</strong><span className="text-slate-400">State of Food Security (733M facing hunger, 28% agri land).</span></div>
              <div className="flex flex-col gap-1"><strong className="text-white">UNEP (2025)</strong><span className="text-slate-400">Transforming Textile Industry (92M tonnes waste, &lt;1% recycling).</span></div>
              <div className="flex flex-col gap-1"><strong className="text-white">Ellen MacArthur Foundation</strong><span className="text-slate-400">A New Textiles Economy (Production doubled, usage -36%).</span></div>
              <div className="flex flex-col gap-1"><strong className="text-white">Napper & Thompson (2016)</strong><span className="text-slate-400">Microplastic fibre release study (700k fibres per 6kg wash).</span></div>
              <div className="flex flex-col gap-1"><strong className="text-white">UNECE (2026)</strong><span className="text-slate-400">Global fibre production report (~60% polyester).</span></div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center bg-gradient-to-br from-rose-950/40 to-slate-900/60 backdrop-blur-xl border border-rose-600/30 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white mb-4">The data is clear. The solution is built.</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Sahyog isn't just an app. It's the digital infrastructure required to solve the distribution paradox.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/needs" className="bg-rose-600 hover:bg-rose-500 text-slate-950 px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Start Donating
            </Link>
            <Link href="/trust" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl font-medium transition-all">
              Read Trust Policy
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}