import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, EMAIL } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";
import ContactForm from "@/components/forms/ContactForm";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Southwest Auto Glass for windshield repair, chip repair, and ADAS recalibration. Locations in El Paso TX, Las Cruces NM, and Alamogordo NM. Call 915-595-4444.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-navy py-14 md:py-20">
        <div className="container-narrow text-center">
          <p className="text-sm font-display font-semibold uppercase tracking-widest text-orange mb-3">
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl text-balance">
            We&apos;re Here to Help
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Have a question or need service? Reach out to us — we respond within 1 business hour.
          </p>
        </div>
      </div>

      <section className="section-padding bg-glass" aria-labelledby="contact-heading">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact details */}
            <div className="space-y-8">
              {/* Main contact */}
              <div>
                <h2 className="font-display font-bold text-navy text-xl mb-4">Main Contact</h2>
                <div className="space-y-3">
                  <a
                    href={`tel:+1${PHONE.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 text-navy hover:text-orange transition-colors"
                    aria-label={`Call us at ${PHONE}`}
                  >
                    <svg className="h-5 w-5 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-display font-bold text-lg">{PHONE}</span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-navy hover:text-orange transition-colors"
                    aria-label={`Email us at ${EMAIL}`}
                  >
                    <svg className="h-5 w-5 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-sans text-base">{EMAIL}</span>
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h2 className="font-display font-bold text-navy text-xl mb-5">Our Locations</h2>
                <div className="space-y-5">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.slug} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                      <p className="font-display font-bold text-navy text-base mb-1">
                        {loc.city}, {loc.state}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{loc.address}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>{loc.hours.weekdays}</p>
                        <p>{loc.hours.saturday}</p>
                        <p>{loc.hours.sunday}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="font-display font-bold text-navy text-xl mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Maps row */}
      <section className="section-padding bg-white" aria-labelledby="maps-heading">
        <div className="container-narrow">
          <h2 id="maps-heading" className="font-display font-bold text-navy text-2xl md:text-3xl mb-8 text-center">
            Find Us
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={loc.googleMapsEmbedUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.city}, ${loc.state}`}
                />
                <div className="p-4 bg-navy">
                  <p className="font-display font-bold text-white text-sm">{loc.city}, {loc.state}</p>
                  <p className="text-white/50 text-xs mt-0.5">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
