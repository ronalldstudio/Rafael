import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services";
import HeroSection from "@/components/sections/HeroSection";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTABanner from "@/components/sections/CTABanner";
import QuoteForm from "@/components/forms/QuoteForm";
import SectionHeading from "@/components/ui/SectionHeading";

const service = getServiceBySlug("adas-recalibration");

export const metadata: Metadata = buildMetadata({
  title: "ADAS Recalibration",
  description:
    "Professional ADAS camera and sensor recalibration after windshield replacement in El Paso TX, Las Cruces NM, and Alamogordo NM. Keep your safety systems working correctly.",
  path: "/services/adas-recalibration",
  image: service?.heroImage,
});

export default function AdasRecalibrationPage() {
  if (!service) notFound();

  return (
    <>
      <HeroSection
        badge="Advanced Safety Systems"
        title={service.title}
        subtitle={service.shortDescription}
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage={service.heroImage}
        backgroundAlt="Modern car dashboard with ADAS display"
        size="medium"
        showPhone
      />

      <ServiceDetail service={service} />

      <section className="section-padding bg-glass" aria-labelledby="adas-quote-heading">
        <div className="container-narrow max-w-2xl">
          <SectionHeading
            eyebrow="Schedule Service"
            title="Book Your ADAS Recalibration"
            subtitle="Ensure your vehicle's safety systems are working correctly after your windshield replacement."
            centered
            className="mb-8"
          />
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <QuoteForm defaultService="adas-recalibration" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Your Safety Systems Depend on Proper Calibration"
        subtitle="Don't skip this critical step after windshield replacement. Contact us today."
      />
    </>
  );
}
