import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = buildMetadata({
  title: "Auto Glass Services",
  description:
    "Southwest Auto Glass offers windshield repair & replacement, chip repair, and ADAS recalibration in El Paso TX, Las Cruces NM, and Alamogordo NM. BBB Torch Award winner.",
  path: "/services",
  image:
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
});

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        badge="Professional Services"
        title="Expert Auto Glass Services"
        subtitle="From a quick chip repair to full windshield replacement and ADAS recalibration — we handle every job with AGSC-certified precision."
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
        backgroundAlt="Professional auto glass technician"
        size="medium"
      />

      <ServicesGrid />

      <WhyChooseUs />

      <CTABanner />
    </>
  );
}
