import type { ServiceData } from "@/types";

export const SERVICES: ServiceData[] = [
  {
    slug: "auto-glass-repair",
    title: "Auto Glass Repair & Replacement",
    shortDescription:
      "Complete windshield and auto glass replacement using OEM-quality glass with a lifetime warranty.",
    longDescription:
      "When a crack or break is too large to repair, our certified technicians will replace your windshield or auto glass quickly and correctly. We use OEM-quality glass and AGSC-certified adhesives to ensure your safety and your vehicle's structural integrity. Most replacements are completed same day.",
    heroImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80",
    iconPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    features: [
      "OEM-quality glass for all makes and models",
      "AGSC-certified technicians",
      "Lifetime warranty on workmanship",
      "Same-day service available",
      "Mobile service — we come to you",
      "Insurance claim assistance",
      "Proper adhesive cure time guaranteed",
      "All vehicle types: cars, trucks, SUVs, vans, RVs",
    ],
    process: [
      {
        step: "Free Estimate",
        description:
          "Call us or fill out our quote form. We'll provide a no-obligation estimate for your specific vehicle and damage.",
      },
      {
        step: "Schedule Service",
        description:
          "Choose a time that works for you — at our shop or at your location. We offer flexible scheduling.",
      },
      {
        step: "Expert Installation",
        description:
          "Our AGSC-certified technicians remove the damaged glass, prep the frame, and install your new glass using professional-grade adhesive.",
      },
      {
        step: "Safe Drive-Away",
        description:
          "We follow proper cure protocols so your vehicle is safe to drive. We'll advise you on the exact safe drive-away time.",
      },
    ],
    faqs: [
      {
        question: "How long does a windshield replacement take?",
        answer:
          "Most windshield replacements take 1–2 hours. However, you should wait the recommended adhesive cure time (typically 1 hour for safe drive-away, up to 24 hours for full cure) before washing your vehicle.",
      },
      {
        question: "Will my insurance cover a windshield replacement?",
        answer:
          "Many comprehensive auto insurance policies cover windshield replacement with little or no deductible. We work directly with most major insurance companies and can handle your claim paperwork.",
      },
      {
        question: "Do you offer mobile windshield replacement?",
        answer:
          "Yes! We offer mobile service throughout El Paso, Las Cruces, and Alamogordo. Our technicians come to your home, office, or wherever is convenient for you.",
      },
      {
        question: "What kind of warranty do you offer?",
        answer:
          "We offer a lifetime warranty on all workmanship defects. If you experience any leaks or installation issues, we'll fix them at no charge.",
      },
    ],
  },
  {
    slug: "chip-repair",
    title: "Windshield Chip Repair",
    shortDescription:
      "Stop a small chip before it becomes a big crack. Fast, affordable chip repairs that restore clarity and strength.",
    longDescription:
      "A rock chip left untreated will almost always spread into a crack, eventually requiring a full replacement. Our chip repair process uses professional resin injection to restore the structural integrity of your windshield and improve its appearance — often making the damage nearly invisible. Most repairs take under 30 minutes.",
    heroImage:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=80",
    iconPath:
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    features: [
      "Repairs most chips under 1 inch in diameter",
      "Prevents chips from spreading into cracks",
      "Restores structural integrity",
      "Often covered by insurance at no cost to you",
      "Results in under 30 minutes",
      "Dramatically improves appearance",
      "Saves money versus full replacement",
      "Mobile service available",
    ],
    process: [
      {
        step: "Damage Assessment",
        description:
          "Our technician evaluates the chip type, size, and location to confirm it's repairable (not all damage qualifies for repair).",
      },
      {
        step: "Surface Preparation",
        description:
          "We clean the damaged area and remove any moisture or debris from the chip to ensure a clean bond.",
      },
      {
        step: "Resin Injection",
        description:
          "Using a professional injector, we fill the chip with optically clear resin that matches the refractive index of your glass.",
      },
      {
        step: "UV Cure & Polish",
        description:
          "The resin is cured under UV light, then polished to restore clarity. Your windshield is ready to drive immediately.",
      },
    ],
    faqs: [
      {
        question: "Can all chips be repaired?",
        answer:
          "Most chips smaller than a quarter and outside the driver's primary line of sight can be repaired. Chips directly in the driver's view, or those with multiple cracks radiating outward, may require a full replacement.",
      },
      {
        question: "Will the chip be completely invisible after repair?",
        answer:
          "The structural integrity is fully restored, and the appearance improves dramatically. However, a faint mark may still be visible under certain lighting conditions. The goal of chip repair is to stop spreading and restore strength.",
      },
      {
        question: "Is chip repair really covered by insurance?",
        answer:
          "Most comprehensive auto insurance policies cover chip repair at 100% — with no deductible — because it's less expensive than a full replacement. We can verify your coverage before we start.",
      },
    ],
  },
  {
    slug: "adas-recalibration",
    title: "ADAS Recalibration",
    shortDescription:
      "Modern vehicles require camera and sensor recalibration after any windshield replacement. We keep your safety systems working correctly.",
    longDescription:
      "Advanced Driver Assistance Systems (ADAS) — including lane departure warning, automatic emergency braking, adaptive cruise control, and more — rely on cameras and sensors mounted on or near the windshield. Any time a windshield is replaced, these systems must be recalibrated to function correctly. Skipping this step can render your safety systems inaccurate or completely non-functional.",
    heroImage:
      "https://images.unsplash.com/photo-1593950315186-76a92975b60c?auto=format&fit=crop&w=1920&q=80",
    iconPath:
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    features: [
      "Static and dynamic calibration available",
      "Covers all major ADAS systems",
      "OEM-level calibration standards",
      "Covers all major vehicle brands",
      "Required after every windshield replacement on ADAS-equipped vehicles",
      "Detailed calibration report provided",
      "Technicians trained on latest ADAS technology",
      "Protects you, your passengers, and others on the road",
    ],
    process: [
      {
        step: "Vehicle Identification",
        description:
          "We identify your exact vehicle make, model, and year to determine the specific ADAS systems installed and the calibration requirements.",
      },
      {
        step: "Static or Dynamic Calibration",
        description:
          "Depending on your vehicle, we perform static calibration (using targets in a controlled environment) or dynamic calibration (driving at specific speeds on marked roads).",
      },
      {
        step: "System Verification",
        description:
          "After calibration, we use diagnostic equipment to verify all ADAS systems are reading correctly and functioning within manufacturer specifications.",
      },
      {
        step: "Documentation",
        description:
          "We provide a calibration report confirming all systems have been properly recalibrated for your records.",
      },
    ],
    faqs: [
      {
        question: "Does my car need ADAS recalibration?",
        answer:
          "If your vehicle was manufactured after approximately 2015 and has features like lane departure warning, automatic emergency braking, or adaptive cruise control, it almost certainly requires recalibration after a windshield replacement.",
      },
      {
        question: "What happens if I skip ADAS recalibration?",
        answer:
          "Without proper recalibration, your ADAS systems may give false alerts, fail to detect hazards, or trigger braking or steering at the wrong time. This can create dangerous driving conditions.",
      },
      {
        question: "How long does ADAS recalibration take?",
        answer:
          "Static calibration typically takes 1–2 hours. Dynamic calibration requires a road test of approximately 30–60 minutes. Both are commonly done on the same visit as your windshield replacement.",
      },
      {
        question: "Is ADAS recalibration covered by insurance?",
        answer:
          "Many insurance policies that cover windshield replacement also cover necessary ADAS recalibration. We can help confirm your coverage before the service.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
