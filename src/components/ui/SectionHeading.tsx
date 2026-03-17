import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "space-y-3",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "text-sm font-display font-semibold uppercase tracking-widest",
            light ? "text-orange-light" : "text-orange"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display font-bold leading-tight",
          "text-3xl md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "text-lg leading-relaxed max-w-2xl",
            light ? "text-white/80" : "text-gray-600",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
