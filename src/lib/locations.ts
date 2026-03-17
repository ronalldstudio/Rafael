import type { LocationData } from "@/types";

export const LOCATIONS: LocationData[] = [
  {
    slug: "el-paso-tx",
    city: "El Paso",
    state: "TX",
    zip: "79912",
    address: "811 Southwestern Dr. Suite H, El Paso, TX 79912",
    phone: "915-595-4444",
    email: "sales@southwestautoglass.com",
    hours: {
      weekdays: "Mon – Fri: 8:00 AM – 5:30 PM",
      saturday: "Sat: 8:00 AM – 2:00 PM",
      sunday: "Sun: Closed",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.7!2d-106.5!3d31.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d9087b5c33d%3A0x2f92cbf10b82eece!2s811%20Southwestern%20Dr%20Suite%20H%2C%20El%20Paso%2C%20TX%2079912!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
    metaDescription:
      "Southwest Auto Glass El Paso TX — windshield repair, chip repair & ADAS recalibration at 811 Southwestern Dr. BBB Torch Award winner. Call 915-595-4444.",
    description:
      "Our El Paso headquarters has been serving the Sun City since 1992. As the oldest locally owned auto glass specialist in El Paso, we bring unmatched expertise to every repair and replacement.",
  },
  {
    slug: "las-cruces-nm",
    city: "Las Cruces",
    state: "NM",
    zip: "88001",
    address: "Las Cruces, NM 88001",
    phone: "915-595-4444",
    email: "sales@southwestautoglass.com",
    hours: {
      weekdays: "Mon – Fri: 8:00 AM – 5:30 PM",
      saturday: "Sat: 8:00 AM – 2:00 PM",
      sunday: "Sun: Closed",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53863.0!2d-106.78!3d32.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e1b36a3e35f78d%3A0x9e9f1e59e69a9a9!2sLas%20Cruces%2C%20NM!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus",
    heroImage:
      "https://images.unsplash.com/photo-1601599963565-b7b5b77b1e95?auto=format&fit=crop&w=1920&q=80",
    metaDescription:
      "Southwest Auto Glass Las Cruces NM — professional windshield repair, chip repair & ADAS recalibration. Serving Las Cruces and the Mesilla Valley. Call 915-595-4444.",
    description:
      "Serving Las Cruces and the Mesilla Valley with the same quality and care that has made us the Southwest's most trusted auto glass company. Mobile service available throughout the area.",
  },
  {
    slug: "alamogordo-nm",
    city: "Alamogordo",
    state: "NM",
    zip: "88310",
    address: "Alamogordo, NM 88310",
    phone: "915-595-4444",
    email: "sales@southwestautoglass.com",
    hours: {
      weekdays: "Mon – Fri: 8:00 AM – 5:30 PM",
      saturday: "Sat: 8:00 AM – 2:00 PM",
      sunday: "Sun: Closed",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53863.0!2d-105.96!3d32.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbfe6c0e5a2b3f%3A0x9e9f1e59e69a9a9!2sAlamogordo%2C%20NM!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus",
    heroImage:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=1920&q=80",
    metaDescription:
      "Southwest Auto Glass Alamogordo NM — expert auto glass repair & replacement near White Sands. Serving Alamogordo and surrounding areas. Call 915-595-4444.",
    description:
      "Serving Alamogordo and the Tularosa Basin with expert auto glass services. Whether you're near White Sands or Holloman Air Force Base, our team brings professional glass repair to your area.",
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
