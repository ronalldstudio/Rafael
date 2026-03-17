import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PHONE } from "@/lib/constants";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Quote",
  description:
    "Request a free auto glass quote from Southwest Auto Glass. Windshield replacement, chip repair, and ADAS recalibration in El Paso TX, Las Cruces NM, and Alamogordo NM.",
  path: "/quote",
});

const benefits = [
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Fast Response",
    desc: "We respond within 1 business hour",
  },
  {
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z",
    title: "Insurance Help",
    desc: "We handle your claim paperwork",
  },
  {
    icon: "M5 13l4 4L19 7",
    title: "No Obligation",
    desc: "Free estimate with no pressure",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Mobile Service",
    desc: "We come to your location",
  },
];

export default function QuotePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Page header */}
      <div className="bg-navy py-14 md:py-20">
        <div className="container-narrow text-center">
          <p className="text-sm font-display font-semibold uppercase tracking-widest text-orange mb-3">
            Free Estimate
          </p>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl text-balance">
            Get Your Free Auto Glass Quote
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            No obligation. No pressure. We&apos;ll provide a detailed quote and help you navigate your insurance claim.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-glass">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-navy text-xl mb-4">
                  Why Get a Quote?
                </h2>
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="flex-shrink-0 text-orange">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-display font-bold text-navy text-sm">{b.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-navy p-6 space-y-3">
                <p className="text-white/60 text-sm">Prefer to call?</p>
                <a
                  href={`tel:+1${PHONE.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-orange font-display font-bold text-xl hover:text-orange-light transition-colors"
                  aria-label={`Call us at ${PHONE}`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
                <p className="text-white/40 text-xs">Mon–Fri 8am–5:30pm · Sat 8am–2pm</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
