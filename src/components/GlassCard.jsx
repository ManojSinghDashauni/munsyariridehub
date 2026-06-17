import { cn } from "@/lib/utils";

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
