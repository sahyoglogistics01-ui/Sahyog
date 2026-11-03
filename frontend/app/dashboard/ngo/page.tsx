"use client";

import { useState } from "react";
import { Check, PlusCircle, Utensils, AlertCircle, Shirt } from "lucide-react";

export default function NGODashboard() {
  const [incoming, setIncoming] = useState<any[]>([]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-slate-400 mb-1">Institution Portal</p>
          <h1 className="text-4xl font-bold text-white tracking-tight">NGO Command Center</h1>
          <p className="text-sm text-slate-400 mt-2">Manage your inventory and incoming donations.</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold transition shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <PlusCircle className="w-4 h-4" /> Post a New Need
        </button>
      </div>

      {/* Pantry AI Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <Utensils className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">Pantry AI</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Food Inventory</h3>
          
          <div className="space-y-4 mt-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Grains & Rice</span>
                <span className="text-slate-500 font-medium">0%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[0%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Perishables</span>
                <span className="text-slate-500 font-medium">0%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 w-[0%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-400 bg-white/5 p-3 rounded-lg border border-white/10">
            <AlertCircle className="w-4 h-4 text-slate-500" />
            AI Prediction: Awaiting first donation to establish baseline.
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Shirt className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">Pantry AI</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Clothing Inventory</h3>
          
          <div className="space-y-4 mt-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Winter Wear</span>
                <span className="text-slate-500 font-medium">0%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[0%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Daily Wear</span>
                <span className="text-slate-500 font-medium">0%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[0%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Incoming Donations */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Incoming Donations</h2>
        <div className="space-y-3">
          {incoming.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">You're all caught up!</h3>
              <p className="text-slate-400 max-w-md mx-auto">There are no pending donations right now. Post a new need to alert donors in your area.</p>
            </div>
          ) : (
             // Map logic for real donations goes here
             null
          )}
        </div>
      </div>

    </div>
  );
}