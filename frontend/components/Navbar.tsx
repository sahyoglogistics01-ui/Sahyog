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
    { name: "Referral", href: "/referral" }, // <-- Added Referral
    { name: "Trust", href: "/trust" },
  ];

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-[#09090b]/20 backdrop-blur-2xl border-b border-white/5 shadow-sm" 
          : "bg-gradient-to-b from-[#09090b]/60 to-transparent border-transparent" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image 
            src="/logo-full.png" 
            alt="Sahyog" 
            width={150} 
            height={45} 
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
                className={`text-sm font-medium transition-colors drop-shadow-md ${
                  isActive 
                    ? "text-white font-semibold" 
                    : "text-slate-300 hover:text-white"
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
            className="hidden md:flex bg-white/5 border border-white/20 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all backdrop-blur-md shadow-lg"
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-2 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-white/5 text-rose-500" 
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
            className="w-full text-center bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 rounded-lg mt-4 transition shadow-[0_0_20px_rgba(225,29,72,0.3)]"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}