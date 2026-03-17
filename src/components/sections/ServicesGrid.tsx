import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-glass" aria-labelledby="services-heading">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Our Services"
          title="Expert Auto Glass Solutions"
          subtitle="From a simple chip repair to a full windshield replacement with ADAS recalibration — we handle it all with precision and care."
          centered
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 text-orange">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={service.iconPath}
                      />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-orange font-display font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
