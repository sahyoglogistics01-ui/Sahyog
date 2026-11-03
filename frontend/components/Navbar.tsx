"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Team", href: "/team" },
    { name: "Trust", href: "/trust" },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - INCREASED SIZE HERE */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image 
            src="/logo-full.png" 
            alt="Sahyog" 
            width={170} 
            height={50} 
            className="object-contain" 
            priority 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-white font-semibold" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/login"
            className="hidden md:flex bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Log In
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-2 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-white/5 text-emerald-400" 
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-lg mt-4 transition shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}