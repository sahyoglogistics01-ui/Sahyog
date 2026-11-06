import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, FileText, Gift } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-16 pb-8 overflow-hidden border-t border-white/10">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Left: Brand & Description */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
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
              Bridging the gap between urban surplus and critical need through AI-driven logistics.
            </p>
          </div>
          
          {/* Center: Platform Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Platform</h4>
            <Link href="/research" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit">Research & Impact</Link>
            <Link href="/team" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit">About Us</Link>
            <Link href="/trust" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit">Trust & Safety</Link>
            <Link href="/login" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit">Log In</Link>
          </div>

          {/* Center: Legal Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Legal & Rewards</h4>
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit flex items-center gap-2">
              <Shield className="w-4 h-4" /> Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit flex items-center gap-2">
              <FileText className="w-4 h-4" /> Terms of Service
            </Link>
            <Link href="/referral" className="text-sm text-slate-400 hover:text-rose-500 transition-colors w-fit flex items-center gap-2">
              <Gift className="w-4 h-4" /> Refer & Earn
            </Link>
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
            Built with <Heart className="w-3 h-3 text-rose-600 fill-rose-600" /> for a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}