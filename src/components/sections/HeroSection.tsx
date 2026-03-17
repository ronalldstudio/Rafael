import Image from "next/image";
import { clsx } from "clsx";
import Button from "@/components/ui/Button";
import { PHONE } from "@/lib/constants";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage: string;
  backgroundAlt?: string;
  overlayOpacity?: "40" | "50" | "60" | "65" | "70" | "75";
  size?: "full" | "medium" | "small";
  showPhone?: boolean;
  badge?: string;
  centered?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundAlt = "Southwest Auto Glass",
  overlayOpacity = "65",
  size = "full",
  showPhone = false,
  badge,
  centered = true,
}: HeroSectionProps) {
  const heightClass = {
    full: "min-h-[85vh]",
    medium: "min-h-[60vh]",
    small: "min-h-[40vh]",
  }[size];

  return (
    <section
      className={clsx(
        "relative flex items-center overflow-hidden",
        heightClass
      )}
      aria-label={`${title} hero section`}
    >
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className={clsx(
          "absolute inset-0 bg-navy",
          overlayOpacity === "40" && "opacity-40",
          overlayOpacity === "50" && "opacity-50",
          overlayOpacity === "60" && "opacity-60",
          overlayOpacity === "65" && "opacity-[0.65]",
          overlayOpacity === "70" && "opacity-70",
          overlayOpacity === "75" && "opacity-75"
        )}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={clsx(
          "relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20",
          centered ? "text-center" : "text-left"
        )}
      >
        <div className={clsx("max-w-4xl", centered && "mx-auto")}>
          {badge && (
            <span className="inline-block mb-4 rounded-full bg-orange/20 border border-orange/40 px-4 py-1.5 text-sm font-display font-semibold text-orange-light uppercase tracking-widest">
              {badge}
            </span>
          )}

          <h1 className="font-display font-bold text-white text-balance leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed drop-shadow-sm mx-auto">
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta || showPhone) && (
            <div
              className={clsx(
                "mt-8 flex flex-col sm:flex-row gap-4 flex-wrap",
                centered
                  ? "items-center justify-center"
                  : "items-start"
              )}
            >
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} size="lg" variant="outline">
                  {secondaryCta.label}
                </Button>
              )}
              {showPhone && (
                <a
                  href={`tel:+1${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-white font-display font-bold text-lg hover:text-orange transition-colors"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {PHONE}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
