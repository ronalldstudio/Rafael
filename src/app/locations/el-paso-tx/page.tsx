import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getLocationBySlug } from "@/lib/locations";
import LocationPage from "@/components/location/LocationPage";

const location = getLocationBySlug("el-paso-tx");

export const metadata: Metadata = buildMetadata({
  title: "Auto Glass El Paso TX",
  description: location?.metaDescription ?? "",
  path: "/locations/el-paso-tx",
  image: location?.heroImage,
});

export default function ElPasoPage() {
  if (!location) notFound();
  return <LocationPage location={location} locationFormValue="el-paso" />;
}
