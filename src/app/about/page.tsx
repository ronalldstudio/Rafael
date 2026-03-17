import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { FOUNDED, COMBINED_EXPERIENCE, BBB_AWARD_YEAR, PHONE } from "@/lib/constants";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `Southwest Auto Glass has been the most respected auto glass company in the Southwest since ${FOUNDED}. BBB Torch Award winner. Over ${COMBINED_EXPERIENCE} years of combined experience. Serving El Paso TX, Las Cruces NM, and Alamogordo NM.`,
  path: "/about",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
});

const stats = [
  { value: `${new Date().getFullYear() - FOUNDED}+`, label: "Years in Business" },
  { value: `${COMBINED_EXPERIENCE}+`, label: "Years Combined Experience" },
  { value: "3", label: "Locations" },
  { value: "1", label: "BBB Torch Award" },
];

const timeline = [
  {
    year: String(FOUNDED),
    title: "Founded in El Paso",
    description:
      "Southwest Auto Glass was founded in El Paso, Texas, with a single mission: deliver the highest quality auto glass service with uncompromising integrity.",
  },
  {
    year: "1998",
    title: "First BBB Recognition",
    description:
      "Selected as a BBB Finalist for Marketplace Ethics for the first time, recognizing our commitment to honest business practices.",
  },
  {
    year: "2000",
    title: "BBB Torch Award Winner",
    description:
      "Awarded the prestigious BBB Torch Award for Marketplace Ethics — the highest recognition for ethical business conduct in our region.",
  },
  {
    year: "2001",
    title: "BBB Finalist Again",
    description:
      "Selected as a BBB Finalist for the third time, cementing our reputation as a leader in ethical business practices.",
  },
  {
    year: "Today",
    title: "Expanding Across the Southwest",
    description:
      "Now serving El Paso, Las Cruces, and Alamogordo with an expanded team, ADAS recalibration capabilities, and mobile service throughout the region.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge={`Est. ${FOUNDED}`}
        title="The Southwest's Most Trusted Auto Glass Company"
        subtitle={`For over ${new Date().getFullYear() - FOUNDED} years, Southwest Auto Glass has been synonymous with quality, integrity, and excellence in auto glass services.`}
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80"
        backgroundAlt="Professional auto glass team"
        size="medium"
      />

      {/* Stats */}
      <section className="bg-navy py-12" aria-label="Company statistics">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display font-bold text-orange text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built on Integrity Since 1992"
                subtitle=""
              />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Southwest Auto Glass was founded in El Paso, Texas in {FOUNDED} with a straightforward
                  goal: be the most reliable, most honest, and most skilled auto glass company in the
                  Southwest. More than three decades later, that mission hasn&apos;t changed.
                </p>
                <p>
                  As the oldest locally owned business specializing in auto glass in El Paso, we&apos;ve
                  built our reputation one vehicle at a time. Our team collectively brings over{" "}
                  {COMBINED_EXPERIENCE} years of hands-on experience to every repair and replacement.
                </p>
                <p>
                  In {BBB_AWARD_YEAR}, we were awarded the BBB Torch Award for Marketplace Ethics —
                  the highest recognition the Better Business Bureau bestows for ethical conduct. We
                  were also selected as a BBB Finalist in 1998, 1999, and 2001. These awards reflect
                  who we are, not just what we do.
                </p>
                <p>
                  Today, we serve three communities across Texas and New Mexico — El Paso, Las Cruces,
                  and Alamogordo — with the same small-team care and accountability we had when we
                  started.
                </p>
              </div>
            </div>

            {/* BBB Award callout */}
            <div className="rounded-2xl bg-glass p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-orange text-white">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-xl">BBB Torch Award</p>
                  <p className="text-gray-600 text-sm">Marketplace Ethics · {BBB_AWARD_YEAR}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &ldquo;The BBB Torch Award for Marketplace Ethics recognizes businesses that demonstrate
                an outstanding level of ethics in all business dealings, a commitment to their
                customers, and transparency in their practices.&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
                Selected finalist: 1998, 1999 · Award winner: {BBB_AWARD_YEAR} · Finalist: 2001
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy" aria-labelledby="timeline-heading">
        <div className="container-narrow max-w-3xl">
          <SectionHeading
            eyebrow="Our History"
            title="Three Decades of Excellence"
            centered
            light
            className="mb-12"
          />
          <ol className="relative border-l border-white/20 space-y-10 ml-4">
            {timeline.map((item, i) => (
              <li key={i} className="ml-8">
                <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-orange text-white text-xs font-bold font-display">
                  {i + 1}
                </span>
                <p className="text-orange font-display font-semibold text-sm mb-1">{item.year}</p>
                <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white" aria-labelledby="mission-heading">
        <div className="container-narrow text-center max-w-3xl">
          <SectionHeading
            eyebrow="Our Mission"
            title="Absolute Best Value. Every Time."
            subtitle=""
            centered
            className="mb-6"
          />
          <p className="text-gray-600 leading-relaxed text-lg">
            We are committed to delivering the absolute best value to every customer — the highest
            quality products at competitive prices, with unmatched attention to detail and a
            relentless focus on your safety. We treat your vehicle as if it were our own.
          </p>
          <a
            href={`tel:+1${PHONE.replace(/\D/g, "")}`}
            className="mt-8 inline-flex items-center gap-2 text-navy font-display font-bold text-xl hover:text-orange transition-colors"
            aria-label={`Call us at ${PHONE}`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE}
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
