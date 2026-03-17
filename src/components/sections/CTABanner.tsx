import Button from "@/components/ui/Button";
import { PHONE } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  phone?: string;
}

export default function CTABanner({
  title = "Ready to Get Started?",
  subtitle = "Get a free, no-obligation quote in minutes. We serve El Paso, Las Cruces, and Alamogordo.",
  phone = PHONE,
}: CTABannerProps) {
  return (
    <section className="bg-orange py-14 md:py-16" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl text-balance">
          {title}
        </h2>
        <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/quote" variant="secondary" size="lg">
            Get a Free Quote
          </Button>
          <a
            href={`tel:+1${phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 text-white font-display font-bold text-lg hover:text-navy transition-colors"
            aria-label={`Call us at ${phone}`}
          >
            <svg
              className="h-5 w-5"
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
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
