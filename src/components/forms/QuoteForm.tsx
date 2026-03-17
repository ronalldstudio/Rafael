"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuoteFormSchema, type QuoteFormData } from "@/types";
import { FormField, inputClass, selectClass } from "./FormField";
import Button from "@/components/ui/Button";

interface QuoteFormProps {
  defaultLocation?: QuoteFormData["location"];
  defaultService?: QuoteFormData["service"];
  compact?: boolean;
}

export default function QuoteForm({
  defaultLocation,
  defaultService,
  compact = false,
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      location: defaultLocation,
      service: defaultService,
      contactMethod: "either",
      preferredTime: "either",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 space-y-4">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-2xl">
          Quote Request Received!
        </h3>
        <p className="text-gray-600 max-w-md">
          Thank you! We&apos;ll review your request and get back to you shortly. For
          urgent needs, call us directly at{" "}
          <a href="tel:+19155954444" className="text-orange font-semibold hover:underline">
            915-595-4444
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      aria-label="Request a free auto glass quote"
    >
      {serverError && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {serverError}
        </div>
      )}

      {/* Contact info */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <FormField id="name" label="Full Name" error={errors.name} required>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            className={inputClass}
            autoComplete="name"
            {...register("name")}
          />
        </FormField>

        <FormField id="phone" label="Phone Number" error={errors.phone} required>
          <input
            id="phone"
            type="tel"
            placeholder="(915) 555-0100"
            className={inputClass}
            autoComplete="tel"
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField id="email" label="Email Address" error={errors.email} required>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          className={inputClass}
          autoComplete="email"
          {...register("email")}
        />
      </FormField>

      {/* Location */}
      <FormField id="location" label="Preferred Location" error={errors.location} required>
        <div className="relative">
          <select id="location" className={selectClass} {...register("location")}>
            <option value="">Select a location...</option>
            <option value="el-paso">El Paso, TX</option>
            <option value="las-cruces">Las Cruces, NM</option>
            <option value="alamogordo">Alamogordo, NM</option>
            <option value="mobile">Mobile Service (come to me)</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </FormField>

      {/* Vehicle info */}
      {!compact && (
        <div className="grid grid-cols-3 gap-4">
          <FormField id="vehicleYear" label="Year" error={errors.vehicleYear}>
            <input
              id="vehicleYear"
              type="text"
              placeholder="2022"
              maxLength={4}
              className={inputClass}
              {...register("vehicleYear")}
            />
          </FormField>
          <FormField id="vehicleMake" label="Make" error={errors.vehicleMake}>
            <input
              id="vehicleMake"
              type="text"
              placeholder="Ford"
              className={inputClass}
              {...register("vehicleMake")}
            />
          </FormField>
          <FormField id="vehicleModel" label="Model" error={errors.vehicleModel}>
            <input
              id="vehicleModel"
              type="text"
              placeholder="F-150"
              className={inputClass}
              {...register("vehicleModel")}
            />
          </FormField>
        </div>
      )}

      {/* Service */}
      <fieldset>
        <legend className="block text-sm font-display font-semibold text-navy mb-3">
          Service Needed <span className="text-orange" aria-hidden="true">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { value: "windshield-replacement", label: "Windshield Replacement" },
            { value: "chip-repair", label: "Chip / Crack Repair" },
            { value: "adas-recalibration", label: "ADAS Recalibration" },
            { value: "other", label: "Other / Not Sure" },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer hover:border-orange/50 transition-colors has-[:checked]:border-orange has-[:checked]:bg-orange/5"
            >
              <input
                type="radio"
                value={opt.value}
                className="accent-orange"
                {...register("service")}
              />
              <span className="text-sm text-navy font-sans">{opt.label}</span>
            </label>
          ))}
        </div>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-600" role="alert">
            {errors.service.message}
          </p>
        )}
      </fieldset>

      {!compact && (
        <>
          {/* Contact method */}
          <div className={`grid gap-4 sm:grid-cols-2`}>
            <FormField id="contactMethod" label="Preferred Contact">
              <div className="relative">
                <select id="contactMethod" className={selectClass} {...register("contactMethod")}>
                  <option value="either">Phone or Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </FormField>

            <FormField id="preferredTime" label="Preferred Time">
              <div className="relative">
                <select id="preferredTime" className={selectClass} {...register("preferredTime")}>
                  <option value="either">Morning or Afternoon</option>
                  <option value="morning">Morning (8am – 12pm)</option>
                  <option value="afternoon">Afternoon (12pm – 5pm)</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </FormField>
          </div>

          {/* Notes */}
          <FormField id="notes" label="Additional Notes">
            <textarea
              id="notes"
              rows={3}
              placeholder="Describe the damage, any special circumstances, or questions you have..."
              className={`${inputClass} resize-y min-h-[80px]`}
              {...register("notes")}
            />
          </FormField>
        </>
      )}

      <Button
        type="submit"
        fullWidth
        size="lg"
        disabled={isSubmitting}
        className="mt-2"
      >
        {isSubmitting ? "Sending Request…" : "Request My Free Quote"}
      </Button>

      <p className="text-center text-xs text-gray-400">
        No obligation. We&apos;ll contact you within 1 business hour.
      </p>
    </form>
  );
}
