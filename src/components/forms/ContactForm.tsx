"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, inputClass, selectClass } from "./FormField";
import Button from "@/components/ui/Button";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  location: z.enum(["el-paso", "las-cruces", "alamogordo", "general"]),
  message: z.string().min(10, "Please provide more detail"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { location: "general" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: "other" }),
      });
      if (!res.ok) throw new Error("Something went wrong.");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again or call us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100">
          <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-xl">Message Sent!</h3>
        <p className="text-gray-600 text-sm max-w-sm">
          We&apos;ll get back to you shortly. Need immediate help? Call{" "}
          <a href="tel:+19155954444" className="text-orange font-semibold">915-595-4444</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate aria-label="Contact form">
      {serverError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField id="c-name" label="Name" error={errors.name} required>
          <input id="c-name" type="text" placeholder="Your name" className={inputClass} {...register("name")} />
        </FormField>
        <FormField id="c-phone" label="Phone" error={errors.phone} required>
          <input id="c-phone" type="tel" placeholder="(915) 555-0100" className={inputClass} {...register("phone")} />
        </FormField>
      </div>

      <FormField id="c-email" label="Email" error={errors.email} required>
        <input id="c-email" type="email" placeholder="you@example.com" className={inputClass} {...register("email")} />
      </FormField>

      <FormField id="c-location" label="Location">
        <div className="relative">
          <select id="c-location" className={selectClass} {...register("location")}>
            <option value="general">General Inquiry</option>
            <option value="el-paso">El Paso, TX</option>
            <option value="las-cruces">Las Cruces, NM</option>
            <option value="alamogordo">Alamogordo, NM</option>
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </FormField>

      <FormField id="c-message" label="Message" error={errors.message} required>
        <textarea
          id="c-message"
          rows={4}
          placeholder="How can we help you?"
          className={`${inputClass} resize-y min-h-[100px]`}
          {...register("message")}
        />
      </FormField>

      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
