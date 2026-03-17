import type { LocationData } from "@/types";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import ServicesGrid from "@/components/sections/ServicesGrid";
import QuoteForm from "@/components/forms/QuoteForm";
import SectionHeading from "@/components/ui/SectionHeading";
import type { QuoteFormData } from "@/types";

interface LocationPageProps {
  location: LocationData;
  locationFormValue: QuoteFormData["location"];
}

export default function LocationPage({
  location,
  locationFormValue,
}: LocationPageProps) {
  return (
    <>
      <HeroSection
        badge={`${location.city}, ${location.state}`}
        title={`Auto Glass Services in ${location.city}, ${location.state}`}
        subtitle={location.description}
        primaryCta={{ label: "Get a Free Quote", href: "/quote" }}
        backgroundImage={location.heroImage}
        backgroundAlt={`${location.city}, ${location.state}`}
        size="medium"
        showPhone
      />

      {/* Address + Hours */}
      <section className="section-padding bg-glass" aria-labelledby={`loc-${location.slug}-info`}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-navy text-orange flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-navy">Address</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{location.address}</p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-navy text-orange flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-navy">Hours</h2>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{location.hours.weekdays}</p>
                <p>{location.hours.saturday}</p>
                <p className="text-gray-400">{location.hours.sunday}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-navy text-orange flex-shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-navy">Phone</h2>
              </div>
              <a
                href={`tel:+1${location.phone.replace(/\D/g, "")}`}
                className="text-orange font-display font-bold text-xl hover:text-orange-dark transition-colors"
                aria-label={`Call ${location.city} at ${location.phone}`}
              >
                {location.phone}
              </a>
              <p className="text-gray-400 text-xs mt-1">{location.email}</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src={location.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${location.city}, ${location.state}`}
            />
          </div>
        </div>
      </section>

      {/* Services at this location */}
      <ServicesGrid />

      {/* Quote form */}
      <section className="section-padding bg-navy" aria-labelledby={`loc-${location.slug}-quote`}>
        <div className="container-narrow max-w-2xl">
          <SectionHeading
            eyebrow={`${location.city} Service`}
            title={`Get a Free Quote in ${location.city}`}
            subtitle={`Fill out the form below for fast, no-obligation pricing on auto glass services in ${location.city}, ${location.state}.`}
            centered
            light
            className="mb-8"
          />
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <QuoteForm defaultLocation={locationFormValue} compact />
          </div>
        </div>
      </section>

      <CTABanner
        phone={location.phone}
        subtitle={`Serving ${location.city} and surrounding areas. Call or submit a quote request today.`}
      />
    </>
  );
}
