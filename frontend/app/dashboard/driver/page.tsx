"use client";

import { useState } from "react";
import { Truck, Navigation, Gift, Coffee } from "lucide-react";

export default function DriverDashboard() {
  const [activeDelivery, setActiveDelivery] = useState<any>(null);
  const availableRoutes: any[] = [];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-slate-400 mb-1">Driver Portal</p>
          <h1 className="text-4xl font-bold text-white tracking-tight">Dispatch Center</h1>
          <p className="text-sm text-slate-400 mt-2">Accept routes, deliver essentials, earn rewards.</p>
        </div>
        <div className="flex items-center gap-3 bg-rose-600/10 border border-rose-600/20 px-4 py-2 rounded-xl backdrop-blur-md">
          <Gift className="w-5 h-5 text-rose-500" />
          <div>
            <p className="text-xs text-slate-400">Barter Wallet</p>
            <p className="text-sm font-bold text-white">0 / 5 Deliveries</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Available Routes List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-white">Available Missions</h2>
          
          {availableRoutes.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl">
              <Truck className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No missions available</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">There are no pending pickups in your area right now. Keep this page open, new routes will appear automatically.</p>
            </div>
          ) : (
             // Map routes here
             null
          )}
        </div>

        {/* Active Route / Map / Rewards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-[400px] flex flex-col">
            <h3 className="text-lg font-bold text-white mb-4">Active Navigation</h3>
            
            {activeDelivery ? (
              <div className="flex-1 flex flex-col">
                {/* Active Map & OTP logic */}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center bg-white/5 rounded-xl border border-white/5">
                <Navigation className="w-8 h-8 text-slate-500 mb-3" />
                <p className="text-sm text-slate-400 px-4">No active route. Accept a mission to start navigating.</p>
              </div>
            )}
          </div>

          {/* Barter Rewards Tracker */}
          <div className="bg-gradient-to-br from-rose-950/20 to-slate-900/50 backdrop-blur-md border border-rose-600/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-rose-500" /> Barter Rewards
            </h3>
            <p className="text-xs text-slate-400 mb-4">Complete 5 deliveries to unlock a free meal at partner restaurants.</p>
            <div className="h-2 w-full bg-black/50 rounded-lg overflow-hidden">
              <div className="h-full bg-rose-600 w-[0%]"></div>
            </div>
            <div className="flex justify-between text-xs text-rose-500 font-medium mt-2">
              <span>0 Completed</span>
              <span>Goal: 5</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}