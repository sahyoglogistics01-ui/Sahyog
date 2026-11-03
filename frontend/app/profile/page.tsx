"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, Truck, Store, Upload, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState<any>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const supabase = createClient();

  // Basic Info
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  
  // Role
  const [role, setRole] = useState<"donor" | "ngo" | "driver" | "vendor" | "">("");
  
  // NGO Specific
  const [orgName, setOrgName] = useState("");
  const [memberCount, setMemberCount] = useState("");
  
  // KYC Files
  const [kycFile, setKycFile] = useState<File | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login");
        return;
      }
      
      // THE BOUNCER: If they have already completed the profile setup, send them straight to the dashboard!
      if (session.user.user_metadata?.profile_complete) {
        router.push("/dashboard");
        return;
      }

      setUser(session.user);
      setIsCheckingAuth(false);
    };
    checkUser();
  }, [router, supabase]);

  const handleFinish = async () => {
    setIsLoading(true);
    let kycUrl = "";
    let avatarUrl = "";

    try {
      // Upload Avatar
      if (avatarFile) {
        const fileExt = avatarFile.name.split('.').pop();
        const fileName = `${user.id}-avatar.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('sahyog-assets').upload(fileName, avatarFile, { upsert: true });
        if (!uploadError) {
          const { data } = supabase.storage.from('sahyog-assets').getPublicUrl(fileName);
          avatarUrl = data.publicUrl;
        }
      }

      // Upload KYC
      if (kycFile) {
        const fileExt = kycFile.name.split('.').pop();
        const fileName = `${user.id}-kyc.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('sahyog-assets').upload(fileName, kycFile, { upsert: true });
        if (!uploadError) {
          const { data } = supabase.storage.from('sahyog-assets').getPublicUrl(fileName);
          kycUrl = data.publicUrl;
        }
      }

      // Save to Auth Metadata
      const { error } = await supabase.auth.updateUser({
        data: {
          username, 
          phone, 
          city, 
          age: parseInt(age), 
          role, 
          org_name: orgName, 
          member_count: parseInt(memberCount) || 0, 
          avatar_url: avatarUrl, 
          govt_id_url: kycUrl, 
          profile_complete: true
        }
      });

      if (error) throw error;

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  // Show spinner while checking auth to prevent UI flashing
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative z-10 shadow-2xl">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center flex-1 last:flex-none">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= i ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-400"}`}>
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
              {i !== 3 && <div className={`flex-1 h-1 mx-2 rounded-full ${step > i ? "bg-emerald-500" : "bg-slate-800"}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-bold text-white mb-6">Tell us about yourself</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="bg-slate-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none w-full" />
                <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="bg-slate-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none w-full" />
                <input type="text" placeholder="City (e.g. Bengaluru)" value={city} onChange={e => setCity(e.target.value)} className="bg-slate-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none w-full" />
                <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} className="bg-slate-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none w-full" />
                <div className="md:col-span-2 flex items-center gap-4 bg-slate-800/30 p-4 rounded-xl border border-white/5">
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium mb-1">Profile Picture</p>
                    <p className="text-xs text-slate-400">Upload a clear photo of yourself.</p>
                  </div>
                  <label className="cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm text-white flex items-center gap-2 transition-colors">
                    <Upload className="w-4 h-4" /> {avatarFile ? "Change" : "Upload"}
                    <input type="file" accept="image/*" onChange={e => setAvatarFile(e.target.files?.[0] || null)} className="hidden" />
                  </label>
                </div>
                {avatarFile && <p className="md:col-span-2 text-xs text-emerald-400">{avatarFile.name} selected</p>}
              </div>
              <button onClick={() => setStep(2)} disabled={!username || !phone || !city || !age} className="mt-8 w-full bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl hover:bg-emerald-400 transition disabled:opacity-50 flex justify-center items-center gap-2">Next Step <ArrowRight className="w-4 h-4" /></button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-bold text-white mb-6">How will you use Sahyog?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "donor", icon: User, title: "Donor", desc: "I want to donate food or clothes." },
                  { id: "ngo", icon: Building2, title: "NGO / Shelter", desc: "We need supplies for our community." },
                  { id: "driver", icon: Truck, title: "Driver", desc: "I want to deliver and earn rewards." },
                  { id: "vendor", icon: Store, title: "Vendor / Store", desc: "I want to sell or donate surplus stock." }
                ].map((r) => (
                  <div key={r.id} onClick={() => setRole(r.id as any)} className={`p-4 rounded-xl border cursor-pointer transition-all ${role === r.id ? "border-emerald-500 bg-emerald-500/10" : "border-white/10 bg-slate-800/30 hover:border-white/30"}`}>
                    <r.icon className={`w-8 h-8 mb-3 ${role === r.id ? "text-emerald-400" : "text-slate-400"}`} />
                    <h3 className="text-white font-semibold">{r.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{r.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(1)} className="w-1/3 bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-xl transition flex justify-center items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
                <button onClick={() => setStep(3)} disabled={!role} className="w-2/3 bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl hover:bg-emerald-400 transition disabled:opacity-50 flex justify-center items-center gap-2">Next Step <ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-2xl font-bold text-white mb-2">KYC Verification</h2>
              <p className="text-sm text-slate-400 mb-6">To ensure platform safety, we require basic verification for all users.</p>
              
              {role === "ngo" && (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Organization Name" value={orgName} onChange={e => setOrgName(e.target.value)} className="bg-slate-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none w-full" />
                  <input type="number" placeholder="Number of Members" value={memberCount} onChange={e => setMemberCount(e.target.value)} className="bg-slate-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none w-full" />
                </div>
              )}

              <div className="bg-slate-800/30 border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center border-dashed">
                <Upload className="w-10 h-10 text-emerald-400 mb-3" />
                <h3 className="text-white font-medium mb-1">
                  {role === "ngo" ? "Upload 12A/80G Certificate" : role === "driver" ? "Upload Driving License" : "Upload Govt ID (Aadhaar/PAN)"}
                </h3>
                <p className="text-xs text-slate-400 mb-4">PDF, JPG, or PNG formats</p>
                <label className="cursor-pointer bg-emerald-500 text-slate-950 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-400 transition">
                  Select File
                  <input type="file" accept=".pdf,image/*" onChange={e => setKycFile(e.target.files?.[0] || null)} className="hidden" />
                </label>
                {kycFile && <p className="text-xs text-emerald-400 mt-3">{kycFile.name} selected</p>}
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(2)} className="w-1/3 bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-xl transition flex justify-center items-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</button>
                <button onClick={handleFinish} disabled={!kycFile || isLoading} className="w-2/3 bg-emerald-500 text-slate-950 font-bold py-3 rounded-xl hover:bg-emerald-400 transition disabled:opacity-50 flex justify-center items-center gap-2">
                  {isLoading ? "Saving..." : "Complete Setup"} <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}