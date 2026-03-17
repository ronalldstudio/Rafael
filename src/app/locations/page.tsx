import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/sections/HeroSection";
import LocationsMap from "@/components/sections/LocationsMap";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Our Locations",
  description:
    "Southwest Auto Glass serves El Paso TX, Las Cruces NM, and Alamogordo NM. Find your nearest location for windshield repair, chip repair, and ADAS recalibration.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <HeroSection
        badge="3 Convenient Locations"
        title="Serving the Southwest"
        subtitle="With locations in El Paso, Las Cruces, and Alamogordo — plus mobile service throughout the region — we're always nearby."
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
        backgroundAlt="Southwest landscape"
        size="medium"
      />
      <LocationsMap />
      <CTABanner />
    </>
  );
}
