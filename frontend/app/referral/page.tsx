"use client";

import { motion } from "framer-motion";
import { Gift, Users, Share2, ArrowRight, Wallet } from "lucide-react";
import Link from "next/link";
import CopyButton from "@/components/ui/CopyButton";

export default function ReferralPage() {
  const referralCode = "SAHYOG-AARYA-2026";
  const referralLink = `https://sahyog.vercel.app/register?ref=${referralCode}`;

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 pt-32 pb-20 relative font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="w-20 h-20 bg-rose-600/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-600/20">
            <Gift className="w-10 h-10 text-rose-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Invite. Donate. Earn.</h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Share your unique link. For every friend who makes their first donation, you both earn +50 Punya Points.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Referral Link Card */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-amber-400" /> Your Link
            </h2>
            <p className="text-sm text-slate-400 mb-6">Share this link on WhatsApp or LinkedIn.</p>
            
            <div className="flex items-center gap-2 bg-[#09090b] border border-white/10 p-2 rounded-lg">
              <input 
                type="text" 
                readOnly 
                value={referralLink} 
                className="flex-1 bg-transparent text-sm text-slate-300 outline-none px-2"
              />
              <CopyButton text={referralLink} />
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-sm text-slate-400">Your Code</span>
              <span className="font-mono text-amber-300 font-bold">{referralCode}</span>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-xl flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-rose-600/10 rounded-lg">
                 <Users className="w-6 h-6 text-rose-500" />
               </div>
               <div>
                 <p className="text-2xl font-bold text-white">0</p>
                 <p className="text-xs text-slate-400 uppercase tracking-wider">Friends Invited</p>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <div className="p-3 bg-amber-400/10 rounded-lg">
                 <Wallet className="w-6 h-6 text-amber-400" />
               </div>
               <div>
                 <p className="text-2xl font-bold text-white">0</p>
                 <p className="text-xs text-slate-400 uppercase tracking-wider">Points Earned</p>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}