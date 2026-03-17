export const SITE_NAME = "Southwest Auto Glass";
export const PHONE = "915-595-4444";
export const EMAIL = "sales@southwestautoglass.com";
export const FOUNDED = 1992;
export const COMBINED_EXPERIENCE = 175;
export const BBB_AWARD_YEAR = 2000;
export const TAGLINE = "The Most Respected Auto Glass Company in the Southwest";
export const SHORT_TAGLINE = "Expert Auto Glass Repair & Replacement Since 1992";
export const SITE_URL = "https://southwestautoglass.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Auto Glass Repair & Replacement", href: "/services/auto-glass-repair" },
      { label: "Windshield Chip Repair", href: "/services/chip-repair" },
      { label: "ADAS Recalibration", href: "/services/adas-recalibration" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "El Paso, TX", href: "/locations/el-paso-tx" },
      { label: "Las Cruces, NM", href: "/locations/las-cruces-nm" },
      { label: "Alamogordo, NM", href: "/locations/alamogordo-nm" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
