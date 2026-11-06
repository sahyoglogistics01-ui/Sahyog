"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, ScanEye, KeyRound, Car, Lock, Database, CheckCircle2, Wallet, FileClock, MessageSquareLock, LifeBuoy, ShieldAlert, Fingerprint, HandHeart, Network, Truck, Camera, ArrowDown } from "lucide-react";
import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function TrustPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#09090b] text-slate-200 pt-32 pb-20 relative overflow-hidden font-sans">
      
      {/* Top Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-rose-600 origin-left z-[100]" style={{ scaleX }} />

      {/* 🚀 CRAZY 3D LIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div animate={{ x: [0, 150, -100, 0], y: [0, -100, 80, 0], scale: [1, 1.3, 0.8, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute -top-20 right-1/4 w-[800px] h-[800px] bg-rose-600/10 blur-[150px] rounded-lg" />
        <motion.div animate={{ x: [0, -100, 80, 0], y: [0, 120, -80, 0], scale: [1, 0.8, 1.3, 1] }} transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }} className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-amber-500/10 blur-[150px] rounded-lg" />
        
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600/10 border border-rose-600/20 mb-8">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-bold text-rose-300 tracking-widest uppercase">Trust & Safety</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
              Trust is our Foundation.
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              In the charity sector, trust is the biggest barrier. We don't just ask you to give; we prove where it goes. We use bank-grade security, AI verification, and strict KYC to ensure every donation reaches the right hands safely.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            4 PILLARS GRID
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {[
            { 
              title: "Verified Institutions", 
              icon: ShieldCheck, 
              desc: "Every NGO, orphanage, and shelter is manually audited. We require Government Darpan IDs, 12A/80G certificates, and PAN cards before they can post a need on the platform." 
            },
            { 
              title: "FreshGuard™ AI", 
              icon: ScanEye, 
              desc: "Our Vision AI scans every uploaded food and textile photo. If an item is expired, spoiled, or torn, the system automatically rejects it to protect recipients before a driver is dispatched." 
            },
            { 
              title: "Double-OTP Handover", 
              icon: KeyRound, 
              desc: "A zero-theft guarantee. Drivers need a secure 4-digit code from the donor at pickup, and a different 4-digit code from the NGO at drop-off to complete the route." 
            },
            { 
              title: "Driver KYC", 
              icon: Car, 
              desc: "Every volunteer driver—whether a student or auto-driver—must pass a strict Aadhaar and Driving License background check before they can accept their first delivery." 
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-rose-600/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-rose-600/10 rounded-xl flex items-center justify-center mb-6 border border-rose-600/20 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-7 h-7 text-rose-500" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            FINANCIAL TRANSPARENCY
        ========================================= */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
          <div className="bg-gradient-to-r from-rose-950/20 to-[#050505] border border-rose-600/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-rose-600/10 rounded-lg flex items-center justify-center shrink-0 border-2 border-rose-600/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <Wallet className="w-10 h-10 text-rose-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">100% Pass-Through Policy</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                We believe in absolute financial transparency. <strong className="text-rose-500">100% of your donation goes directly to the cause.</strong> We do not take a cut from your food, clothes, or monetary donations.
              </p>
              <p className="text-sm text-slate-400">
                So, how do we survive? Our operational costs (servers, mapping APIs, AI processing) are fully funded by our Corporate CSR Partners and local business sponsorships. When a corporation sponsors a delivery route, their logo appears on the tracking map, and that revenue keeps the platform free for you and the NGOs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            THE ANTI-MISUSE CHAIN (VERTICAL TIMELINE)
        ========================================= */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How Your Donation is Protected.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Every single item is tracked through a 7-step secure chain. Misuse is mathematically and procedurally impossible.</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Glowing vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-600/10 via-rose-600/60 to-rose-600/10 rounded-lg"></div>

            <div className="space-y-8">
              {[
                { title: "1. The Pledge", desc: "A donor uploads an item. The system logs their exact location, quantity, and intended category securely.", icon: HandHeart },
                { title: "2. AI Quality Control", desc: "Before a driver is even dispatched, FreshGuard™ AI scans the photo. Expired food or torn clothes are rejected instantly. No junk gets through.", icon: ScanEye },
                { title: "3. Demand Matching", desc: "The item is ONLY routed to an NGO that has specifically requested it. This prevents the 'second disaster' of dumping unsolicited goods on shelters.", icon: Network },
                { title: "4. Secure Transit", desc: "A KYC-verified driver accepts the route. The SetuRoute engine calculates the safest, fastest path. If the driver goes off-route, the system flags it immediately.", icon: Truck },
                { title: "5. The Double-OTP Handshake", desc: "The driver cannot take the item without the Donor's 4-digit OTP. They cannot complete the delivery without the NGO's 4-digit OTP. This is a mathematical guarantee of transfer.", icon: KeyRound },
                { title: "6. The Proof of Impact", desc: "Upon delivery, the NGO uploads a 'Sahyog Smile' photo. The donor receives visual proof that their item reached a real human being.", icon: Camera },
                { title: "7. The Immutable Seva Log", desc: "The entire journey is recorded in our append-only audit trail. No admin, donor, or driver can ever delete or alter this record.", icon: FileClock },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }} 
                  className="relative flex items-start gap-6 pl-20 group"
                >
                  {/* Glowing Icon Node */}
                  <div className="absolute left-0 top-1 w-16 h-16 rounded-2xl bg-[#0a0a0a] border-2 border-rose-600/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:scale-110 group-hover:border-rose-500 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-rose-500" style={{ filter: "drop-shadow(0 0 8px currentColor)" }} />
                  </div>

                  {/* Card */}
                  <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-full hover:border-rose-600/40 hover:bg-slate-900/80 transition-all duration-300">
                    <h4 className="text-xl text-white font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            DATA PRIVACY & ENTERPRISE SECURITY
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-amber-300" />
              <h3 className="text-xl font-bold text-white">Data Privacy & Encryption</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              We take your privacy seriously. All user data, KYC documents, and donation records are encrypted at rest and in transit using industry-standard protocols (TLS 1.3 and AES-256).
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Strict Row-Level Security (RLS) on all database tables</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> No selling of donor data to third parties</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Compliance with data protection regulations</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-rose-400" />
              <h3 className="text-xl font-bold text-white">Emergency SOS Protocol</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Safety is paramount. If a volunteer driver feels unsafe, or encounters an emergency during a delivery route, they can trigger the in-app SOS button.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Instant alert sent to Sahyog Admin & local authorities</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Real-time GPS location shared with emergency contacts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Route paused immediately to ensure driver safety</li>
            </ul>
          </motion.div>
        </div>

        {/* =========================================
            NEW SECTION: AUDIT & DISPUTES
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquareLock className="w-6 h-6 text-rose-500" />
              <h3 className="text-xl font-bold text-white">Authenticated Reviews</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              We have a zero-tolerance policy for fake reviews. Only users who have completed a verified donation or delivery can leave a rating on the platform. Your feedback is linked directly to the Seva Log.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <LifeBuoy className="w-6 h-6 text-rose-500" />
              <h3 className="text-xl font-bold text-white">Dispute Resolution</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              If a driver goes off-route, an item is damaged, or an NGO has an issue, our dedicated support team steps in immediately. We investigate the Seva Log and resolve disputes within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            VERIFIED BADGE & CTA
        ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-rose-950/40 to-slate-900/60 backdrop-blur-xl border border-rose-600/30 rounded-3xl p-12"
        >
          <div className="w-24 h-24 bg-rose-600/20 rounded-lg flex items-center justify-center mx-auto mb-6 border-2 border-rose-600/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Fingerprint className="w-12 h-12 text-rose-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Look for the Sahyog Verified Badge</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
            When you see the green checkmark, you know the institution has been fully vetted, the route is secure, and your donation is guaranteed to make an impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/needs" className="bg-rose-600 hover:bg-rose-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Browse Verified Needs
            </Link>
            <Link href="/team" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all">
              Meet the Founders
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}