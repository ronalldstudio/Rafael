import type { ServiceData } from "@/types";

interface ServiceDetailProps {
  service: ServiceData;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div>
      {/* Features */}
      <section className="section-padding bg-white" aria-labelledby="features-heading">
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-display font-semibold uppercase tracking-widest text-orange mb-3">
                What&apos;s Included
              </p>
              <h2 id="features-heading" className="font-display font-bold text-navy text-3xl md:text-4xl mb-6">
                Everything You Need, Nothing You Don&apos;t
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.longDescription}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-orange flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-glass rounded-2xl p-8">
              <p className="text-sm font-display font-semibold uppercase tracking-widest text-orange mb-3">
                Our Process
              </p>
              <h3 className="font-display font-bold text-navy text-2xl mb-6">
                How It Works
              </h3>
              <ol className="space-y-6">
                {service.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-full bg-navy text-white font-display font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-display font-bold text-navy">
                        {step.step}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-navy" aria-labelledby="faq-heading">
        <div className="container-narrow max-w-3xl">
          <p className="text-sm font-display font-semibold uppercase tracking-widest text-orange mb-3 text-center">
            FAQs
          </p>
          <h2 id="faq-heading" className="font-display font-bold text-white text-3xl md:text-4xl mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <dt className="font-display font-bold text-white mb-3">
                  {faq.question}
                </dt>
                <dd className="text-white/70 text-sm leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
