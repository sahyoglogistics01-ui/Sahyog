"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, Quote, Code2, Rocket, Cpu, Database, Heart, Zap, Lightbulb, Map, Trophy, RefreshCw, CreditCard, GraduationCap, Wind, Film, Brain, MapPinned, Lock, Server } from "lucide-react";
import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function TeamPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 pt-32 pb-20 relative overflow-hidden">
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]" style={{ scaleX }} />

      {/* PREMIUM LIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.3, 0.8, 1] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute -top-20 right-1/4 w-[700px] h-[700px] bg-emerald-500/15 blur-[150px] rounded-full" />
        <motion.div animate={{ x: [0, -80, 60, 0], y: [0, 100, -60, 0], scale: [1, 0.8, 1.2, 1] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full" />
        <motion.div animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-50">
          <Particles id="tsparticles" init={particlesInit} options={{ background: { color: "transparent" }, fpsLimit: 120, particles: { color: { value: "#ffffff" }, links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.05, width: 1 }, move: { enable: true, speed: 0.5 }, number: { density: { enable: true, area: 800 }, value: 60 }, opacity: { value: 0.1 }, size: { value: { min: 1, max: 2 } } } }} />
        </div>
      </div>

      {/* Changed max-w-6xl to max-w-7xl for a wider overall layout */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Hero Section with Parallax Scroll */}
        <motion.div 
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center mb-24"
        >
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
              👋 Meet the Founders
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              The Builders Behind <span className="text-emerald-400">Sahyog</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Two 11th-grade students from National Public School, Chikkabanavara, on a mission to fix global supply chains.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Cards with Spring Physics */}
        {/* Changed max-w-5xl to max-w-6xl and reduced the gap to md:gap-10 to make cards broader */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-10 max-w-6xl mx-auto mb-32">
          
          {/* Card 1: Aarya */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotate: -2 }} 
            whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ y: -8, boxShadow: "0px 10px 40px -10px rgba(16,185,129,0.3)" }}
            className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center hover:border-emerald-500/30 transition-colors"
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Image src="/aarya.jpeg" alt="Aarya Manjunath" width={128} height={128} className="object-cover w-full h-full" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white text-center">Aarya Manjunath</h2>
            <p className="text-xs font-bold text-emerald-400 tracking-widest uppercase mt-1 mb-4 text-center">Co-Founder & Full-Stack Architect</p>
            
            <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <Image src="/school-logo.jpg" alt="NPS" width={16} height={16} className="rounded-sm object-contain" />
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Grade 11 • NPS Chikkabanavara</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 text-left w-full">
              A 16-year-old self-taught developer who started coding at 14. Aarya is the visionary behind Sahyog's user experience. He specializes in building buttery-smooth React interfaces, integrating complex OR-Tools routing algorithms, and ensuring the platform feels like a top-tier SaaS product.
            </p>

            <div className="w-full mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 text-left">Key Achievements</p>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                <li>Architected the V1 to V2 migration from scratch.</li>
                <li>Built the custom mapping engine using Leaflet & OSRM.</li>
                <li>Top 10 Finalist at School Tech Symposium 2025.</li>
              </ul>
            </div>

            <div className="w-full mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 text-left">Core Arsenal</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Tailwind", "Framer Motion", "OR-Tools", "Python", "TypeScript"].map(skill => (
                  <span key={skill} className="text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded-md">{skill}</span>
                ))}
              </div>
            </div>

            <div className="w-full mb-6 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg flex items-start gap-2">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 italic">"Runs on cold coffee and lo-fi beats. Can debug a React hydration error in his sleep."</p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <Link href="https://www.linkedin.com/in/aarya-manjunath-44b570425" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><LinkedinIcon /></Link>
              <Link href="https://github.com/aaryamnjnth-ui" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><Code2 className="w-4 h-4" /></Link>
              <Link href="https://www.instagram.com/aarya__manjunath/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><InstagramIcon /></Link>
              <Link href="mailto:aaryamnjnth@gmail.com" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><Mail className="w-4 h-4" /></Link>
            </div>
          </motion.div>

          {/* Glowing Divider */}
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }} 
            whileInView={{ scaleY: 1, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }} 
            className="hidden md:block w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent self-stretch origin-top" 
          />
          <div className="block md:hidden h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-4"></div>

          {/* Card 2: Ashrith */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 2 }} 
            whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ y: -8, boxShadow: "0px 10px 40px -10px rgba(16,185,129,0.3)" }}
            className="flex-1 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center hover:border-emerald-500/30 transition-colors"
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Image src="/ashrith.png" alt="Ashrith Aakarshan Gogoi" width={128} height={128} className="object-cover w-full h-full" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white text-center">Ashrith Aakarshan Gogoi</h2>
            <p className="text-xs font-bold text-emerald-400 tracking-widest uppercase mt-1 mb-4 text-center">Co-Founder & Backend Engineer</p>
            
            <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-6">
              <Image src="/school-logo.jpg" alt="NPS" width={16} height={16} className="rounded-sm object-contain" />
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Grade 11 • NPS Chikkabanavara</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 text-left w-full">
              A systems thinker with a passion for database architecture and security. Ashrith ensures that Sahyog's data is bulletproof. He engineered the complex KYC verification flows, configured Supabase Row Level Security (RLS), and built the OAuth authentication systems that keep the platform safe.
            </p>

            <div className="w-full mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 text-left">Key Achievements</p>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                <li>Designed the entire PostgreSQL schema for V2.</li>
                <li>Built a bulletproof Auth flow using Supabase & OAuth.</li>
                <li>Managed the backend integration for AI models.</li>
              </ul>
            </div>

            <div className="w-full mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3 text-left">Core Arsenal</p>
              <div className="flex flex-wrap gap-2">
                {["Supabase", "PostgreSQL", "Python", "FastAPI", "OAuth", "SQL"].map(skill => (
                  <span key={skill} className="text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-1 rounded-md">{skill}</span>
                ))}
              </div>
            </div>

            <div className="w-full mb-6 bg-blue-500/5 border border-blue-500/10 p-3 rounded-lg flex items-start gap-2">
              <Database className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 italic">"Believes a well-normalized database is a work of art. Can spot an SQL injection from a mile away."</p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <Link href="https://www.linkedin.com/in/ashrith-aakarshan-gogoi-231990425/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><LinkedinIcon /></Link>
              <Link href="https://www.instagram.com/ashrith.pdf/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><InstagramIcon /></Link>
              <Link href="mailto:ashrithaakarshangogoi@gmail.com" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"><Mail className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </div>

        {/* THE REALISTIC TIMELINE */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl font-bold text-white tracking-tight"
            >
              The Journey So Far
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-slate-400 mt-3 text-lg"
            >
              It wasn't a straight line. It was a lot of late nights, bugs, and coffee.
            </motion.p>
          </div>
          
          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500/30 before:to-transparent">
            {[
              { date: "Oct 2025", title: "The Spark", icon: Lightbulb, desc: "Walking past a local bakery at closing time, we saw them throwing away 50 fresh loaves of bread. A shelter 2km away was struggling to feed its people. We realized this wasn't a scarcity problem—it was a distribution problem." },
              { date: "Nov 2025", title: "The First Line of Code", icon: Code2, desc: "We tried to build the entire platform in one weekend. We thought a basic HTML form was all it took. We quickly realized that coordinating live inventory, routing, and KYC requires enterprise-grade software, not a weekend project." },
              { date: "Dec 2025", title: "The Billing Wall", icon: CreditCard, desc: "We tried to use the Google Maps API for our routing. A week later, we hit a massive billing alert that almost wiped out our pocket money. We had to pivot. We spent the next month learning OpenStreetMap and OSRM to build a 100% free routing engine." },
              { date: "Jan 2026", title: "The OR-Tools Breakthrough", icon: Cpu, desc: "After weeks of failing to get Google OR-Tools to work, we finally drew our first optimized, multi-stop route on the map. It was just a single green line between two coordinates, but that was the moment Sahyog became a reality." },
              { date: "Feb 2026", title: "The Spaghetti Code Crisis", icon: RefreshCw, desc: "Our codebase became an unmanageable mess. Features were breaking, Supabase auth was failing, and we couldn't even render a page without crashing. We made the hardest decision: we deleted the entire project and started V2 from scratch." },
              { date: "Apr 2026", title: "The School Grind", icon: GraduationCap, desc: "Being 16 means balancing a full-time logistics startup with 11th-grade exams. We spent our days writing exams and our nights debugging React components. We learned that building a startup isn't just about code; it's about relentless time management." },
              { date: "Sep 2026", title: "The First Pitch", icon: Trophy, desc: "We walked into our first hackathon, nervous, with a half-built app. We got grilled by judges on our business model and data privacy. We took their feedback, rebuilt our database architecture, and came back stronger." },
              { date: "Today", title: "The Mission Ahead", icon: Rocket, desc: "Sahyog V2 is live. We are currently onboarding our first local grocery stores in Bengaluru for a pilot program. This is just the beginning." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-emerald-500 text-slate-950 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(16,185,129,0.5)] z-10 mt-1"
                >
                  <item.icon className="w-5 h-5" />
                </motion.div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300">
                  <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{item.date}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPANDED TECH STACK (Staggered Scroll, Floating Icons, Neon Glow) */}
        <div className="max-w-5xl mx-auto mb-32 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-bold text-white tracking-tight mb-4"
          >
            Powered by Enterprise Tech
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            We didn't build a simple donation form. We built a scalable, full-stack logistics infrastructure using industry-standard tools.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {[
              { name: "Next.js", icon: Code2, color: "text-white" },
              { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
              { name: "Framer Motion", icon: Film, color: "text-pink-400" },
              { name: "Supabase", icon: Database, color: "text-emerald-400" },
              { name: "PostgreSQL", icon: Server, color: "text-blue-400" },
              { name: "FastAPI", icon: Zap, color: "text-teal-400" },
              { name: "OR-Tools", icon: Cpu, color: "text-yellow-400" },
              { name: "OpenRouter (AI)", icon: Brain, color: "text-purple-400" },
              { name: "Leaflet Maps", icon: MapPinned, color: "text-green-400" },
              { name: "OAuth 2.0", icon: Lock, color: "text-orange-400" },
            ].map((tech, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-emerald-500/30 hover:bg-slate-800/60 transition-all group relative overflow-hidden"
              >
                {/* Inner glowing background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-500"></div>

                {/* Floating Icon with Neon Glow */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5, 
                    ease: "easeInOut", 
                    delay: i * 0.1 // Staggers the floating start time
                  }}
                  className="relative z-10"
                >
                  <tech.icon 
                    className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} 
                    style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
                  />
                </motion.div>

                <span className="text-xs font-semibold text-slate-300 relative z-10">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Manifesto */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-slate-900/70 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-20 shadow-[0_0_50px_rgba(16,185,129,0.05)]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
          
          <motion.div initial={{ rotate: -10, scale: 0.5, opacity: 0 }} whileInView={{ rotate: 0, scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, delay: 0.3 }} className="flex justify-center mb-8">
            <Quote className="w-12 h-12 text-emerald-500/20" />
          </motion.div>
          
          <h2 className="text-center text-2xl font-bold text-white mb-8">The Distribution Paradox</h2>
          
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg text-center md:text-left">
            {[
              "We are 16-year-old students. We don't have a corporate budget, a marketing team, or a Silicon Valley office. But we have something much more dangerous: an obsession with fixing a broken system.",
              "The world produces more than enough food and clothing for everyone. Yet, 1 billion tonnes of food and 92 million tonnes of textiles are sent to landfills every year. Why? Because humanity doesn't have a scarcity problem; it has a distribution problem.",
              "Traditional charity is broken. It relies on chaotic drop-offs, unverified organizations, and the 'second disaster' of unwanted goods flooding relief camps. We realized that if we could apply the same ruthless efficiency and AI logistics used by Amazon or Blinkit to the social sector, we could solve two massive problems at once.",
              "That is why we built Sahyog. We aren't just asking people to donate; we are building an operating system for social good. From AI quality checks and multi-stop routing to verified KYC and strict chain-of-custody, we are bringing enterprise-grade logistics to those who need it most.",
              "We are starting small, but our vision is global. We believe that in a world with so much surplus, no one should go hungry, and no good item should end up in a landfill."
            ].map((text, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }}>
                "{text}"
              </motion.p>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="mt-10 text-center md:text-right border-t border-white/10 pt-6">
            <p className="text-emerald-400 font-semibold italic">— Aarya & Ashrith, Founders of Sahyog</p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-900/40 to-slate-900/60 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-10"
        >
          <Heart className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Join our mission</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Whether you are a donor, an NGO, or a delivery partner, there is a place for you in the Sahyog ecosystem.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Get Started
            </Link>
            <Link href="/trust" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl font-medium transition-all">
              Read our Trust Policy
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}