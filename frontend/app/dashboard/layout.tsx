"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";
import { LayoutDashboard, Settings, LogOut, Pencil, Heart, User, ShoppingBag } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push("/login");
      else setUser(session.user);
    };
    getUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const role = user?.user_metadata?.role;
  let homeHref = "/dashboard/donor"; 
  if (role === "ngo") homeHref = "/dashboard/ngo";
  else if (role === "driver") homeHref = "/dashboard/driver";
  else if (role === "vendor") homeHref = "/dashboard/vendor";

  const navItems = [
    { name: "Home", href: homeHref, icon: LayoutDashboard },
    { name: "My Donations", href: "#", icon: Heart },
    { name: "Needs Board", href: "/needs", icon: ShoppingBag },
    { name: "Settings", href: "/profile", icon: Settings },
  ];

  if (!user) return null;

  return (
    // MATCHED: bg-slate-950
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-200">
      
      {/* MATCHED: Background Grid & Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-rose-600/20 blur-[150px] rounded-lg"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/20 blur-[150px] rounded-lg"></div>
      </div>

      {/* Sidebar (Glassmorphic) */}
      <aside className="relative z-50 w-[280px] bg-slate-900/80 backdrop-blur-xl border-r border-white/10 flex flex-col fixed inset-y-0">
        
        {/* Logo */}
        <div className="h-20 flex items-center px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-full.png" alt="Sahyog" width={110} height={30} className="object-contain" />
          </Link>
        </div>

        {/* User Profile Section */}
        <div className="flex flex-col items-center px-6 py-6 border-b border-white/10">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-lg bg-rose-600/10 border-2 border-rose-600/30 flex items-center justify-center overflow-hidden p-1">
              <div className="w-full h-full rounded-lg overflow-hidden">
                {user?.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-rose-500 m-auto" />
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-white font-semibold text-lg">{user?.user_metadata?.username || "User"}</h2>
            <Link href="/profile"><Pencil className="w-3 h-3 text-slate-400 cursor-pointer hover:text-white" /></Link>
          </div>
          
          <p className="text-xs text-slate-400 text-center mb-4 px-2 line-clamp-2">
            {user?.user_metadata?.bio || "No bio yet. Tap the pencil to tell the community about yourself."}
          </p>
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-600/20 bg-rose-600/10">
            <Heart className="w-3 h-3 text-rose-500" />
            <span className="text-xs font-medium text-rose-500 capitalize">{role || "Donor"}</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${isActive ? "bg-rose-600/10 text-rose-500" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-lg bg-rose-600"></div>}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" /> <span className="text-sm font-medium">Log Out</span>
          </button>
          <p className="text-[10px] text-slate-500 text-center mt-4 uppercase tracking-widest">Sahyog • Logistics for Social Good</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 ml-[280px] flex flex-col min-h-screen">
        
        {/* App Top Header (Matches Landing Page Navbar) */}
        <header className="h-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span className="font-semibold text-white">Dashboard</span> / Home
          </div>
          <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-lg bg-rose-600/10 border border-rose-600/20 flex items-center justify-center">
               <User className="w-4 h-4 text-rose-500" />
             </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}