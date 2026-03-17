import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getLocationBySlug } from "@/lib/locations";
import LocationPage from "@/components/location/LocationPage";

const location = getLocationBySlug("alamogordo-nm");

export const metadata: Metadata = buildMetadata({
  title: "Auto Glass Alamogordo NM",
  description: location?.metaDescription ?? "",
  path: "/locations/alamogordo-nm",
  image: location?.heroImage,
});

export default function AlamogourdoPage() {
  if (!location) notFound();
  return <LocationPage location={location} locationFormValue="alamogordo" />;
}
