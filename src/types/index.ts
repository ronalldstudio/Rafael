import { z } from "zod";

export const QuoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^[\d\s\-().+]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  location: z.enum(["el-paso", "las-cruces", "alamogordo", "mobile"]),
  vehicleYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a valid 4-digit year")
    .optional()
    .or(z.literal("")),
  vehicleMake: z.string().optional(),
  vehicleModel: z.string().optional(),
  service: z.enum(["windshield-replacement", "chip-repair", "adas-recalibration", "other"]),
  contactMethod: z.enum(["phone", "email", "either"]),
  preferredTime: z.enum(["morning", "afternoon", "either"]),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof QuoteFormSchema>;

export interface LocationData {
  slug: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleMapsEmbedUrl: string;
  heroImage: string;
  metaDescription: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  iconPath: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}
