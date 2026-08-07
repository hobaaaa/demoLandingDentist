import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clinics, getClinicBySlug } from "@/data/clinics";
import { ClinicDemoPage } from "@/components/clinic/clinic-demo";
import { isArchivedDentalDemo } from "@/lib/archived-demos";

type DemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.values(clinics)
    .filter((clinic) => !isArchivedDentalDemo(clinic.slug))
    .map((clinic) => ({
      slug: clinic.slug,
    }));
}

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic || isArchivedDentalDemo(slug)) {
    return {
      title: "Demo bulunamadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: clinic.seoTitle,
    description: clinic.seoDescription,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: clinic.seoTitle,
      description: clinic.seoDescription,
      type: "website",
    },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic || isArchivedDentalDemo(slug)) {
    notFound();
  }

  return <ClinicDemoPage clinic={clinic} />;
}
