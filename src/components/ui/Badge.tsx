import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "orange" | "glass";
  className?: string;
}

export default function Badge({
  children,
  variant = "navy",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold font-display uppercase tracking-wide",
        variant === "navy" && "bg-navy text-white",
        variant === "orange" && "bg-orange text-white",
        variant === "glass" && "bg-glass text-navy",
        className
      )}
    >
      {children}
    </span>
  );
}
