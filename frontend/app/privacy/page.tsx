"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, EyeOff, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#09090b] text-slate-300 pt-32 pb-20 relative font-sans">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-rose-500 hover:text-rose-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-rose-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-slate-500 mb-12">Last updated: November 2026</p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We collect only the essential information required to operate the Sahyog platform securely:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li><strong className="text-slate-200">Account Information:</strong> Name, email, phone number, and role (Donor, NGO, Driver, Vendor).</li>
                <li><strong className="text-slate-200">KYC Documents:</strong> Government IDs (Aadhaar/PAN) or NGO certifications (12A/80G) to ensure platform safety.</li>
                <li><strong className="text-slate-200">Location Data:</strong> Real-time GPS coordinates for active delivery routing only.</li>
                <li><strong className="text-slate-200">Transaction Data:</strong> Records of donations and deliveries for audit logs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
              <p className="leading-relaxed mb-4">Your data is used strictly to facilitate resource redistribution, calculate optimized delivery routes, and verify institution legitimacy. <strong>We do not sell your data to third parties.</strong></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security & Encryption</h2>
              <p className="leading-relaxed mb-4">All sensitive data, including KYC documents and personal information, is encrypted at rest (AES-256) and in transit (TLS 1.3). We use strict Row Level Security (RLS) policies on our Supabase databases to ensure users can only access data they are authorized to see.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights & Data Deletion</h2>
              <p className="leading-relaxed mb-4">You have the right to request the deletion of your personal data at any time. To do so, please visit your Profile Settings and click "Delete Account," or contact us at <a href="mailto:sahyog.logistics01@gmail.com" className="text-rose-500 hover:underline">sahyog.logistics01@gmail.com</a>. We will process all deletion requests within 7 business days.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}