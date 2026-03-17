"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Maria G.",
    location: "El Paso, TX",
    rating: 5,
    text: "Southwest Auto Glass replaced my windshield same day and even helped me file my insurance claim. The technician was professional, fast, and the work looks perfect. I've been recommending them to everyone.",
  },
  {
    name: "James R.",
    location: "Las Cruces, NM",
    rating: 5,
    text: "I had a rock chip that was starting to crack. Called Southwest Auto Glass and they came to my office parking lot within hours. The chip repair was flawless — you can barely see where it was. Incredibly convenient.",
  },
  {
    name: "Sarah M.",
    location: "Alamogordo, NM",
    rating: 5,
    text: "After my windshield was replaced, they let me know my car needed ADAS recalibration for the lane-departure system. I had no idea! They handled it all in one visit. True professionals who know their stuff.",
  },
  {
    name: "Carlos T.",
    location: "El Paso, TX",
    rating: 5,
    text: "I've been using Southwest Auto Glass for years for my personal vehicles and my fleet. Their pricing is fair, their work is top-notch, and they always stand behind it with their warranty. A+ company.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-orange" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-navy" aria-labelledby="testimonials-heading">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          subtitle="Don't just take our word for it — hear from the thousands of customers who trust Southwest Auto Glass."
          centered
          light
          className="mb-12 md:mb-16"
        />

        <div className="max-w-3xl mx-auto">
          {/* Active testimonial */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center border border-white/10">
            <div className="flex justify-center mb-4">
              <StarRating rating={testimonials[active].rating} />
            </div>
            <blockquote>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed italic">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-display font-bold text-white">
                  {testimonials[active].name}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {testimonials[active].location}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                  i === active
                    ? "w-8 h-2.5 bg-orange"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`View testimonial ${i + 1}`}
                aria-pressed={i === active}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="p-2 rounded-full border border-white/20 text-white hover:border-orange hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() =>
                setActive((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="p-2 rounded-full border border-white/20 text-white hover:border-orange hover:text-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
