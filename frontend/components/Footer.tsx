import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 overflow-hidden border-t border-white/10">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left: Brand & Description */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image 
                src="/logo-full.png" 
                alt="Sahyog Logo" 
                width={140} 
                height={40} 
                className="mb-4 object-contain" 
              />
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Bridging the gap between urban surplus and critical need through AI-driven logistics. Logistics for Social Good.
            </p>
          </div>
          
          {/* Center: Platform Links */}
          <div className="flex flex-col gap-3 md:items-center">
            <h4 className="text-white font-semibold mb-2">Platform</h4>
            <Link href="/research" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors w-fit">Research & Impact</Link>
            <Link href="/about" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors w-fit">About Us</Link>
            <Link href="/trust" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors w-fit">Trust & Safety</Link>
            <Link href="/login" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors w-fit">Log In</Link>
          </div>

          {/* Right: Built by Students */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-white font-semibold mb-4">Built by Students</h4>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center shrink-0">
                <Image 
                  src="/school-logo.jpg" 
                  alt="NPS Logo" 
                  width={30} 
                  height={30} 
                  className="object-contain" 
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">11th Grade</p>
                <p className="text-xs text-slate-400">National Public School, Chikkabanavara</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 border-t border-white/10 pt-8 mt-4">
          <p>© 2026 Sahyog. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Built with <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" /> for a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}