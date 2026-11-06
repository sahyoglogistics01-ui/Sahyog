export default function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-slate-800/50 rounded-xl border border-white/5 ${className}`} />
  );
}

// Example usage on the Needs Board:
// {isLoading ? (
//   <div className="grid grid-cols-3 gap-6">
//     <Skeleton className="h-64 w-full" />
//     <Skeleton className="h-64 w-full" />
//     <Skeleton className="h-64 w-full" />
//   </div>
// ) : (
//   <NeedsGrid />
// )}