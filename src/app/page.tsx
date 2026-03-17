import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { TAGLINE, SHORT_TAGLINE } from "@/lib/constants";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LocationsMap from "@/components/sections/LocationsMap";
import TestimonialsSlider from "@/components/sections/TestimonialsSlider";
import CTABanner from "@/components/sections/CTABanner";
import QuoteForm from "@/components/forms/QuoteForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: `Southwest Auto Glass | ${TAGLINE}`,
  description: `${TAGLINE}. Expert windshield repair, replacement, chip repair & ADAS recalibration in El Paso TX, Las Cruces NM, and Alamogordo NM since 1992. Call 915-595-4444.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="BBB Torch Award Winner · Est. 1992"
        title={TAGLINE}
        subtitle={`${SHORT_TAGLINE}. Serving El Paso, Las Cruces, and Alamogordo with unmatched quality and a lifetime warranty.`}
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
        backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80"
        backgroundAlt="Auto glass technician performing windshield replacement"
        showPhone
      />

      <TrustBar />

      <ServicesGrid />

      <WhyChooseUs />

      {/* Inline quote form section */}
      <section className="section-padding bg-glass" aria-labelledby="home-quote-heading">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Free Quote"
                title="Get Your Free Auto Glass Quote"
                subtitle="Fill out the form and we'll get back to you within 1 business hour. No obligation, no pressure."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Fast, no-obligation estimates",
                  "Insurance claim assistance included",
                  "Same-day service available",
                  "Mobile service — we come to you",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <svg
                      className="h-5 w-5 text-orange flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>

      <LocationsMap />

      <TestimonialsSlider />

      <CTABanner />
    </>
  );
}
