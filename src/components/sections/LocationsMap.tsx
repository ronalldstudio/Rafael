import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { LOCATIONS } from "@/lib/locations";

export default function LocationsMap() {
  return (
    <section className="section-padding bg-white" aria-labelledby="locations-heading">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Our Locations"
          title="Serving the Southwest"
          subtitle="With three convenient locations across Texas and New Mexico, expert auto glass service is never far away."
          centered
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={loc.heroImage}
                  alt={`${loc.city}, ${loc.state}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display font-bold text-white text-2xl">
                    {loc.city}
                  </p>
                  <p className="text-white/70 text-sm">{loc.state}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 bg-white flex-1">
                <div className="flex items-start gap-2.5 text-sm text-gray-600">
                  <svg
                    className="h-4 w-4 text-orange flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {loc.address}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                  <svg
                    className="h-4 w-4 text-orange flex-shrink-0"
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
                  <span className="hover:text-orange transition-colors">
                    {loc.phone}
                  </span>
                </div>
                <div className="mt-auto pt-2 flex items-center gap-1.5 text-orange font-display font-semibold text-sm group-hover:gap-3 transition-all">
                  View Location
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
