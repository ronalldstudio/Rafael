import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getLocationBySlug } from "@/lib/locations";
import LocationPage from "@/components/location/LocationPage";

const location = getLocationBySlug("las-cruces-nm");

export const metadata: Metadata = buildMetadata({
  title: "Auto Glass Las Cruces NM",
  description: location?.metaDescription ?? "",
  path: "/locations/las-cruces-nm",
  image: location?.heroImage,
});

export default function LasCrucesPage() {
  if (!location) notFound();
  return <LocationPage location={location} locationFormValue="las-cruces" />;
}
