import Link from "next/link";
import { PHONE, EMAIL, SITE_NAME, FOUNDED } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center h-9 w-9 rounded-md bg-orange flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 10H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 5L6 2M16 5L18 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-white leading-tight">
                  Southwest Auto Glass
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Since {FOUNDED}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              The most respected auto glass company in the Southwest. Over 175
              years of combined experience serving El Paso, Las Cruces, and
              Alamogordo.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <svg
                className="h-4 w-4 text-orange"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>BBB Torch Award for Marketplace Ethics {FOUNDED + 8}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Auto Glass Repair & Replacement", href: "/services/auto-glass-repair" },
                { label: "Windshield Chip Repair", href: "/services/chip-repair" },
                { label: "ADAS Recalibration", href: "/services/adas-recalibration" },
                { label: "Get a Free Quote", href: "/quote" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/40 mb-4">
              Locations
            </h3>
            <ul className="space-y-4">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-sm font-semibold text-white/80 hover:text-orange transition-colors block"
                  >
                    {loc.city}, {loc.state}
                  </Link>
                  <p className="text-xs text-white/40 mt-0.5">{loc.address}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+1${PHONE.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-orange transition-colors"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-orange transition-colors"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 rounded-md bg-orange px-4 py-2 text-sm font-display font-semibold text-white hover:bg-orange-dark transition-colors"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-white/60 transition-colors">
              Contact
            </Link>
            <Link href="/about" className="hover:text-white/60 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
