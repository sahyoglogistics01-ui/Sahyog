import { Shield, Sparkles, Star, Crown } from "lucide-react";

export default function TierBadge({ points }: { points: number }) {
  let tier = "Bronze";
  let icon = Shield;
  let color = "text-amber-600";
  let bg = "bg-amber-600/10 border-amber-600/20";

  if (points >= 1000) {
    tier = "Platinum"; icon = Crown; color = "text-cyan-400"; bg = "bg-cyan-400/10 border-cyan-400/20";
  } else if (points >= 500) {
    tier = "Gold"; icon = Star; color = "text-yellow-400"; bg = "bg-yellow-400/10 border-yellow-400/20";
  } else if (points >= 100) {
    tier = "Silver"; icon = Sparkles; color = "text-slate-300"; bg = "bg-slate-300/10 border-slate-300/20";
  }

  const Icon = icon;

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${bg} ${color}`}>
      <Icon className="w-3 h-3" />
      <span className="text-[10px] font-bold uppercase tracking-wider">{tier}</span>
    </div>
  );
}