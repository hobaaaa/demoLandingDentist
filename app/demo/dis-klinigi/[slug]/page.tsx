import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicDemoPage } from "@/components/clinic/clinic-demo";
import { clinics, getClinicBySlug } from "@/data/clinics";

type DentalDemoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.values(clinics).map((clinic) => ({
    slug: clinic.slug,
  }));
}

export async function generateMetadata({
  params,
}: DentalDemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
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

export default async function DentalDemoPage({ params }: DentalDemoPageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  return <ClinicDemoPage clinic={clinic} />;
}
