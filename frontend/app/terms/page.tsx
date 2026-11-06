"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-300 pt-32 pb-20 relative font-sans">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-rose-500 hover:text-rose-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-rose-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-slate-500 mb-12">Last updated: November 2026</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed text-slate-400">By creating an account on Sahyog, you agree to comply with these terms. Sahyog is a coordination platform that connects donors, institutions, and delivery drivers. We are not a direct food manufacturer, retailer, or NGO.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li><strong className="text-slate-200">Donors:</strong> Must ensure all uploaded items are safe, hygienic, and match the description.</li>
                <li><strong className="text-slate-200">Institutions:</strong> Must provide accurate member counts and utilize resources for their intended purpose.</li>
                <li><strong className="text-slate-200">Drivers:</strong> Must maintain valid KYC and deliver items promptly.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Prohibited Activities</h2>
              <p className="leading-relaxed text-slate-400">Users may not use the platform to distribute illegal goods, sell donated items for personal profit, or engage in fraudulent behavior. Violation will result in an immediate and permanent ban.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p className="leading-relaxed text-slate-400">Sahyog is not liable for any illness, injury, or loss resulting from the consumption of donated food or use of donated items. All donations are made at the donor's discretion and accepted at the institution's discretion.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}