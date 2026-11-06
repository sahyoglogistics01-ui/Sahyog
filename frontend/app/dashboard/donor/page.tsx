"use client";

import { Sparkles, Package, Shirt, Lock, ArrowRight, Wheat } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DonorDashboard() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-slate-400 mb-1">Welcome back!</p>
          <h1 className="text-4xl font-bold text-white tracking-tight">My Statistics</h1>
          <p className="text-sm text-slate-400 mt-2">A snapshot of the good you're creating with Sahyog.</p>
        </div>
        <Link href="/needs" className="flex items-center gap-2 bg-transparent border border-white/10 hover:bg-white/5 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition">
          Browse Needs Board <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-8">
            <div className="p-2.5 rounded-lg bg-rose-600/10 border border-rose-600/20">
              <Sparkles className="w-5 h-5 text-rose-500" />
            </div>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">All Time</span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-1">0</h3>
          <p className="text-xs text-slate-400 font-medium">Punya Points</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600/50 to-transparent"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-8">
            <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <Wheat className="w-5 h-5 text-yellow-500" />
            </div>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">All Time</span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-1">0 <span className="text-lg text-rose-500">kg</span></h3>
          <p className="text-xs text-slate-400 font-medium">Food Saved</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-8">
            <div className="p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/20">
              <Shirt className="w-5 h-5 text-amber-300" />
            </div>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">All Time</span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-1">0</h3>
          <p className="text-xs text-slate-400 font-medium">Clothes Donated</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400/50 to-transparent"></div>
        </motion.div>
      </div>

      {/* Chart Section */}
      <div>
        <p className="text-xs font-bold text-rose-600 tracking-widest uppercase mb-1">Momentum</p>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-3xl font-bold text-white">Recent Activity</h2>
          <span className="text-[10px] font-semibold text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
            <ArrowRight className="w-3 h-3 -rotate-45" /> Last 12 Months
          </span>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-xs text-slate-400 mb-1">Punya earned</p>
              <p className="text-2xl font-bold text-white">0 <span className="text-sm font-normal text-slate-500">pts</span></p>
            </div>
            <span className="text-[10px] font-semibold text-rose-500 border border-rose-600/20 bg-rose-600/5 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-lg bg-rose-600 animate-pulse"></div> Just Getting Started
            </span>
          </div>

          {/* Clean Flatline Chart */}
          <div className="h-48 w-full relative flex items-center justify-center border-b border-white/5 pb-4">
            <svg viewBox="0 0 1000 200" className="w-full h-full opacity-30" preserveAspectRatio="none">
              <path d="M0,180 L1000,180" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            <p className="absolute text-sm text-slate-400 font-medium bg-slate-900/80 px-4 py-2 rounded-lg backdrop-blur-sm">No activity data available</p>
          </div>
          
          <div className="flex justify-between text-[10px] text-slate-500 font-medium mt-4">
            <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
          </div>
          
          <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/10">
             <p className="text-xs text-slate-400 flex items-center gap-2"><Package className="w-4 h-4"/> No donations recorded yet.</p>
             <Link href="/needs" className="text-xs font-semibold text-rose-500 hover:text-rose-300 flex items-center gap-1">Find a cause to support <ArrowRight className="w-3 h-3"/></Link>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-1">Milestones</p>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-3xl font-bold text-white">Your Badges</h2>
          <span className="text-[10px] font-semibold text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-1">
            <Lock className="w-3 h-3" /> 0 of 3 Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "First Donation", desc: "Complete your first pickup to unlock this badge.", icon: Sparkles },
            { title: "Hunger Hero", desc: "Share 10 meals with a local shelter to unlock.", icon: Wheat },
            { title: "Winter Warrior", desc: "Donate warm clothing during winter to unlock.", icon: Shirt }
          ].map((badge, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center opacity-70 grayscale relative overflow-hidden group hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-slate-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-lg p-1 border border-white/10">
                  <Lock className="w-3 h-3 text-slate-500" />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{badge.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}