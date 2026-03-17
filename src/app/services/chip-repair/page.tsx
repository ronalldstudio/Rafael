import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services";
import HeroSection from "@/components/sections/HeroSection";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CTABanner from "@/components/sections/CTABanner";
import QuoteForm from "@/components/forms/QuoteForm";
import SectionHeading from "@/components/ui/SectionHeading";

const service = getServiceBySlug("chip-repair");

export const metadata: Metadata = buildMetadata({
  title: "Windshield Chip Repair",
  description:
    "Fast windshield chip repair in El Paso TX, Las Cruces NM, and Alamogordo NM. Prevent chips from cracking. Often covered at no cost by insurance. Results in 30 minutes.",
  path: "/services/chip-repair",
  image: service?.heroImage,
});

export default function ChipRepairPage() {
  if (!service) notFound();

  return (
    <>
      <HeroSection
        badge="Chip & Crack Repair"
        title={service.title}
        subtitle={service.shortDescription}
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage={service.heroImage}
        backgroundAlt="Close-up of a rock chip in a windshield"
        size="medium"
        showPhone
      />

      <ServiceDetail service={service} />

      <section className="section-padding bg-glass" aria-labelledby="chip-quote-heading">
        <div className="container-narrow max-w-2xl">
          <SectionHeading
            eyebrow="Act Fast"
            title="Book Your Chip Repair Today"
            subtitle="Don't wait — chips grow into cracks. Request a quote now and stop the damage before it spreads."
            centered
            className="mb-8"
          />
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <QuoteForm defaultService="chip-repair" />
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't Let a Chip Become a Crack"
        subtitle="Most chip repairs are covered by insurance at zero cost to you. Call us today or get a quote online."
      />
    </>
  );
}
