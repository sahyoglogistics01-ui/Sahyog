"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";

export default function DashboardRouter() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login");
        return;
      }

      // If they haven't completed the KYC onboarding, send them there.
      if (!session.user.user_metadata?.profile_complete) {
        router.push("/profile");
        return;
      }

      // Route based on their selected role
      const role = session.user.user_metadata?.role;
      if (role === "ngo") router.push("/dashboard/ngo");
      else if (role === "driver") router.push("/dashboard/driver");
      else if (role === "vendor") router.push("/dashboard/vendor");
      else router.push("/dashboard/donor"); 
    };
    checkUser();
  }, [router, supabase]);

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-rose-600 border-t-transparent rounded-lg animate-spin"></div>
    </div>
  );
}