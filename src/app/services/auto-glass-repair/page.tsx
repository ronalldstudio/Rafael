import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services";
import HeroSection from "@/components/sections/HeroSection";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTABanner from "@/components/sections/CTABanner";
import QuoteForm from "@/components/forms/QuoteForm";
import SectionHeading from "@/components/ui/SectionHeading";

const service = getServiceBySlug("auto-glass-repair");

export const metadata: Metadata = buildMetadata({
  title: "Auto Glass Repair & Replacement",
  description:
    "Professional windshield and auto glass replacement in El Paso TX, Las Cruces NM, and Alamogordo NM. OEM-quality glass, AGSC-certified technicians, lifetime warranty.",
  path: "/services/auto-glass-repair",
  image: service?.heroImage,
});

export default function AutoGlassRepairPage() {
  if (!service) notFound();

  return (
    <>
      <HeroSection
        badge="Auto Glass Services"
        title={service.title}
        subtitle={service.shortDescription}
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage={service.heroImage}
        backgroundAlt="Technician replacing a windshield"
        size="medium"
        showPhone
      />

      <ServiceDetail service={service} />

      <section className="section-padding bg-glass" aria-labelledby="service-quote-heading">
        <div className="container-narrow max-w-2xl">
          <SectionHeading
            eyebrow="Get Started"
            title="Request Your Free Estimate"
            subtitle="Fill out the form below and we'll provide a no-obligation quote for your windshield replacement."
            centered
            className="mb-8"
          />
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <QuoteForm defaultService="windshield-replacement" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
