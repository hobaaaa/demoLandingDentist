import type { ClinicDemo } from "@/types/clinic";
import { existsSync } from "fs";
import path from "path";

const fallbackImages = {
  logo: "/demos/default/logo.png",
  heroImage: "/demos/default/hero.png",
  aboutImage: "/demos/default/about.png",
  doctorImage: "/demos/default/doctor.png",
} as const;

export function getClinicImage(
  clinic: ClinicDemo,
  key: keyof typeof fallbackImages,
): string {
  const imagePath = clinic[key];

  if (!imagePath) {
    return fallbackImages[key];
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  const relativePath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  const publicPath = path.join(process.cwd(), "public", relativePath);

  return existsSync(publicPath) ? imagePath : fallbackImages[key];
}
