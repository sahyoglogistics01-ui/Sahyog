"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, Legend } from "recharts";
import { BookOpen, TrendingUp, AlertTriangle, ShieldCheck, Database, Network, Activity, Globe, Leaf, Droplets, Trash2, HeartCrack, Wind, ShieldAlert, Recycle, ArrowRight, FileText, CheckCircle2, Factory, Users, MapPin, Layers, Lock } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-slate-200 pt-32 pb-20 relative overflow-hidden font-sans">
      
      {/* Top Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]" style={{ scaleX }} />

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 blur-[150px] rounded-full" />
        <motion.div animate={{ x: [0, -80, 60, 0], y: [0, 100, -60, 0], scale: [1, 0.8, 1.2, 1] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <div className="text-center mb-32 pt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">The Sahyog White Paper</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              The World Lacks Connection.
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We don't have a scarcity problem. We have a distribution problem. Food is wasted while people go hungry. Clothing is discarded while millions lack essentials. Useful resources are destroyed because the systems connecting surplus with need are fragmented.
            </p>
          </motion.div>

          {/* Top 4 Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 mb-16">
            {[
              { value: "1.05B", label: "Tonnes food wasted", sub: "UNEP 2024" },
              { value: "92M", label: "Tonnes textile waste", sub: "UNEP 2025" },
              { value: "733M", label: "People facing hunger", sub: "FAO 2023" },
              { value: "60%", label: "Household food waste", sub: "Consumer level" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center">
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-xs font-semibold text-emerald-400 mb-1">{stat.label}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* HERO IMAGE BANNER (FIXED URL) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop" 
              alt="Volunteers organizing donations" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <p className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-2">The Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">Bridging the gap between urban surplus and critical need.</h2>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            PART 01: THE SCARCITY ILLUSION
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-white/10 pb-8">
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Part 01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">The Scarcity Illusion</h2>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              The global food system has a contradiction at its centre: enormous quantities of food are produced and discarded, while millions struggle to access meals. This contrast reveals a fundamental problem: food insecurity and food waste can exist simultaneously, even within the same city.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
              <div className="h-64 w-full relative overflow-hidden">
                {/* FIXED IMAGE URL */}
                <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=800&auto=format&fit=crop" alt="Food waste" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-emerald-400" /> The Food Paradox</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  The issue is not simply that surplus food exists. It is that surplus food is not consistently connected to verified, timely, and geographically accessible demand. 
                </p>
                <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-sm">
                  <strong className="text-white mb-2 block">The Missing Logistics Layer:</strong>
                  Imagine a bakery with <span className="text-emerald-400">80 unsold portions</span>. An orphanage needs 30. A shelter needs 25. A food bank needs 25. Without coordination, the bakery discards the surplus.
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden">
              <div className="h-64 w-full relative overflow-hidden">
                {/* FIXED IMAGE URL */}
                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop" alt="Fast fashion clothes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Factory className="w-5 h-5 text-rose-400" /> The Fast Fashion Epidemic</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  The global clothing industry operates on a linear model: extract, manufacture, sell, use briefly, and discard. Clothing production approximately doubled over a 15-year period, while utilisation declined by 36%.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  When a wearable garment is discarded prematurely, society loses the water, energy, chemicals, and human labour embedded in its production.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Issue Table */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden mb-12">
            <div className="p-6 border-b border-white/10">
              <h4 className="text-lg font-bold text-white">The Core Issue: A Distribution Failure</h4>
              <p className="text-sm text-slate-400 mt-1">Food and clothing have different supply chains, but they share an underlying structural weakness.</p>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-300 uppercase tracking-wider text-xs">
                <tr>
                  <th className="p-4 font-medium">Resource</th>
                  <th className="p-4 font-medium">Surplus Source</th>
                  <th className="p-4 font-medium">Potential Recipient</th>
                  <th className="p-4 font-medium text-rose-400">Main Barrier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-400">
                {[
                  ["Food", "Restaurants, bakeries, retailers", "Shelters, food banks", "Time and transport"],
                  ["Clothing", "Households, retailers", "NGOs, community centres", "Sorting and demand matching"],
                  ["Relief Goods", "Institutions, businesses", "Disaster-affected communities", "Urgency and coordination"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold text-white">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4 text-rose-300">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">The Three Recurring Gaps</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Visibility Gap", desc: "Recipients cannot see what resources are available nearby." },
                { title: "Coordination Gap", desc: "Donors cannot easily identify legitimate recipients." },
                { title: "Distribution Gap", desc: "Resources cannot reliably reach recipients at the right time." },
              ].map((gap, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1 block">{gap.title}</span>
                  <p className="text-xs text-slate-400">{gap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            PART 02: THE SYSTEMIC FAILURE
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-white/10 pb-8">
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Part 02</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">The Systemic Failure</h2>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              Waste is not concentrated in one central location. It is produced by disconnected information systems, inefficient logistics, overproduction, and short product lifecycles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Micro Level", desc: "Individual households, restaurants, bakeries and small retailers generate surplus." },
              { title: "Meso Level", desc: "NGOs, shelters, food banks and community groups have different requirements and operational capacities." },
              { title: "Macro Level", desc: "Municipal waste systems, environmental regulations, supply chains and public policy influence the overall system." },
            ].map((level, i) => (
              <div key={i} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2 block">{level.title}</span>
                <p className="text-sm text-slate-400">{level.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-center text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">2.1 Decentralised Food Waste</h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={foodWasteData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value" stroke="none">
                      {foodWasteData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} formatter={(value, name, props) => [props.payload.amount, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-2">
                {foodWasteData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] text-slate-400">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-center text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">2.2 The Recycling Bottleneck</h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={textileWasteData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#1e293b" />
                    <XAxis type="number" stroke="#475569" />
                    <YAxis dataKey="name" type="category" stroke="#475569" width={120} tick={{ fontSize: 10 }} />
                    <Tooltip cursor={{ fill: '#1e293b', opacity: 0.4 }} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} />
                    <Bar dataKey="amount" radius={[0, 8, 8, 0]} barSize={30}>
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

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl mb-12">
            <h3 className="text-center text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">2.3 The Fast Fashion Growth Epidemic (Indexed)</h3>
            <div className="h-[300px] w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fashionGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" tick={{ fill: '#94a3b8' }} />
                  <YAxis stroke="#475569" tick={{ fill: '#94a3b8' }} domain={[0, 220]} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Line type="monotone" dataKey="production" name="Clothing Production (Index)" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981' }} />
                  <Line type="monotone" dataKey="utilisation" name="Clothing Utilisation (Index)" stroke="#f43f5e" strokeWidth={4} dot={{ r: 6, fill: '#f43f5e' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-emerald-900/10 border border-emerald-500/20 p-5 rounded-xl text-sm text-slate-300 leading-relaxed">
              <strong className="text-emerald-400 block mb-2">The Production Footprint per Use:</strong>
              Consider Garment A worn 100 times and Garment B worn 20 times. If their production footprints are equal, the manufacturing footprint allocated to each use of Garment B is <span className="text-white font-bold">five times higher</span>. More clothing is produced while each garment is used fewer times, increasing pressure on material extraction and waste systems.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Wind className="w-5 h-5 text-emerald-400" /> 2.4 The Microplastic Crisis</h4>
              <p className="text-sm text-slate-400">Synthetic fabrics release microplastics during normal wear and washing. A 2016 study by Napper & Thompson estimated a 6 kg wash of acrylic fabric could release over <strong>700,000 fibres</strong> under specific conditions. By 2026, UNECE reported ~60% of global fibres were polyester.</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Droplets className="w-5 h-5 text-rose-400" /> 2.5 Resource Squandering</h4>
              <p className="text-sm text-slate-400">Food that is never eaten occupies ~<strong>28% of the world's agricultural land</strong> (FAO). Food loss and waste contribute around <strong>8–10% of global greenhouse gas emissions</strong>. Landfill diversion prevents methane (27-30x CO2 over 100 years).</p>
            </div>
          </div>
        </div>

        {/* =========================================
            PART 03: THE INTERVENTION
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 border-b border-white/10 pb-8">
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Part 03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">The Intervention</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              The intervention must be systemic. Sahyog proposes a technology-enabled redistribution network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-rose-950/20 border border-rose-500/20 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-rose-400 mb-2 uppercase tracking-widest">Linear Economy</h3>
              <p className="text-xl font-bold text-white mb-4">Take → Make → Use → Dispose</p>
              <p className="text-sm text-slate-400">Resources are extracted, consumed, and discarded.</p>
            </div>
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-2 uppercase tracking-widest">Circular Economy</h3>
              <p className="text-xl font-bold text-white mb-4">Use → Share → Reuse → Recover</p>
              <p className="text-sm text-slate-400">Products retain their utility through multiple use cycles.</p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl mb-16">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-emerald-400" /> 3.3 Methane Reduction & Emissions Accounting</h3>
            <p className="text-sm text-slate-400 mb-6">
              Food that reaches landfill decomposes anaerobically, generating methane. Redistributing suitable edible food before disposal avoids these emissions. However, the benefit must be calculated transparently:
            </p>
            <div className="bg-black/40 border border-white/10 p-6 rounded-xl font-mono text-center mb-6">
              <span className="text-white font-bold text-lg">Net emissions avoided</span> = Baseline disposal emissions - Redistribution emissions
            </div>
            <p className="text-sm text-slate-400">
              Baseline disposal depends on the local waste system (landfill vs. composting). Redistribution emissions include vehicle fuel, refrigeration, packaging, and handling. Sahyog records the quantity, destination, and disposal alternative to estimate this using a documented methodology.
            </p>
          </motion.div>

          {/* INTERVENTION IMAGE (FIXED URL) */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative w-full h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 group">
            <img 
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop" 
              alt="Volunteers handing out boxes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-8 md:p-12">
              <div className="max-w-md">
                <h3 className="text-3xl font-bold text-white mb-4">Time-Sensitive Matching</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A shelter that requires 50 meals tonight cannot benefit from 50 meals delivered after they expire. Sahyog uses real-time data to match surplus with immediate, verified demand.
                </p>
              </div>
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

              <div className="flex flex-col gap-16 z-10 w-40">
                {[{ label: "Food Surplus", icon: TrendingUp }, { label: "Textiles", icon: AlertTriangle }, { label: "Relief Goods", icon: ShieldCheck }].map((node, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * i }} className="flex items-center gap-3 bg-slate-900 border border-white/10 px-4 py-3 rounded-xl">
                    <node.icon className="w-5 h-5 text-emerald-400" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                    <span className="text-xs font-semibold text-white">{node.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 0.5 }} className="z-10 bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center w-40 h-40">
                <Network className="w-10 h-10 text-emerald-400 mb-2" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider text-center">Sahyog<br/>AI Core</span>
              </motion.div>

              <div className="flex flex-col gap-16 z-10 w-40">
                {[{ label: "Shelters", icon: Database }, { label: "Orphanages", icon: Database }, { label: "Relief Centers", icon: Activity }].map((node, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 * i }} className="flex items-center gap-3 bg-slate-900 border border-white/10 px-4 py-3 rounded-xl">
                    <node.icon className="w-5 h-5 text-blue-400" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                    <span className="text-xs font-semibold text-white">{node.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-8 max-w-xl">Note: This is a conceptual system architecture. The platform combines computer vision for classification, rules engines for safety, and optimisation algorithms for routing.</p>
          </motion.div>
        </div>

        {/* =========================================
            PART 06: THE SAHYOG WORKFLOW
        ========================================= */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 border-b border-white/10 pb-8">
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Part 06</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">The Sahyog Workflow</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              How the platform coordinates the 8-step end-to-end process from registration to impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex gap-4">
                <span className="text-2xl font-bold text-emerald-500/50">{item.step}</span>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            PART 07: ADDITIONAL TOPICS
        ========================================= */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-400" /> 7.1 Last-Mile Logistics</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                The most difficult stage. Deliveries involve multiple destinations, varying quantities, traffic, time constraints, and limited transport capacity. Food has a limited usable time window.
              </p>
              <p className="text-sm text-slate-400 font-semibold text-emerald-300">
                Solution: Automated route optimisation using OR-Tools.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Layers className="w-5 h-5 text-emerald-400" /> 7.2 Information Asymmetry</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Donors know what they have. NGOs know what they need. Volunteers know their transport availability. Without a common system, these pieces remain disconnected.
              </p>
              <p className="text-sm text-slate-400 font-semibold text-emerald-300">
                Solution: A shared digital platform creating a complete view of supply, demand, and delivery capacity.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            PART 04 & 05: IMPACT & INACTION
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-emerald-500/20 p-8 rounded-3xl">
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4 block">Part 04</span>
            <h2 className="text-3xl font-bold text-white mb-6">Measurable Impact</h2>
            <p className="text-sm text-slate-400 mb-6">Sahyog measures what actually reaches people, using a 3-dimensional framework:</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div><strong className="text-white block">Social Impact</strong><span className="text-xs text-slate-400">Beneficiaries reached, needs fulfilled, repeat donor rate.</span></div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div><strong className="text-white block">Environmental Impact</strong><span className="text-xs text-slate-400">Food rescued (kg), CO2e avoided, garments rehomed.</span></div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div><strong className="text-white block">Operational Impact</strong><span className="text-xs text-slate-400">Fulfilment rate, average time between listing and collection.</span></div>
              </li>
            </ul>
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-xs text-slate-300">
              <strong className="text-emerald-400 block mb-1">Calculation Standard:</strong> Total food rescued (kg) x 1.2 = Estimated meal equivalents. (Assumption; actual meals should be counted via recipient confirmation).
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-900/40 to-slate-900/60 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white mb-4">The data is clear. The solution is built.</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Sahyog isn't just an app. It's the digital infrastructure required to solve the distribution paradox.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/needs" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
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