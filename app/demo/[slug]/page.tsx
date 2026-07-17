import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clinics, getClinicBySlug } from "@/data/clinics";
import { ClinicAbout } from "@/components/clinic/clinic-about";
import { ClinicContact } from "@/components/clinic/clinic-contact";
import { ClinicDoctor } from "@/components/clinic/clinic-doctor";
import { ClinicFooter } from "@/components/clinic/clinic-footer";
import { ClinicHeader } from "@/components/clinic/clinic-header";
import { ClinicHero } from "@/components/clinic/clinic-hero";
import { ClinicServices } from "@/components/clinic/clinic-services";
import { ClinicTestimonials } from "@/components/clinic/clinic-testimonials";
import { RevealObserver } from "@/components/clinic/reveal-observer";
import { getClinicImage } from "@/lib/images";

type DemoPageProps = {
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
}: DemoPageProps): Promise<Metadata> {
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

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  const style = {
    "--clinic-primary": clinic.primaryColor,
    "--clinic-secondary": clinic.secondaryColor,
  } as CSSProperties;
  const logo = getClinicImage(clinic, "logo");

  return (
    <main style={style} className="min-h-screen bg-[#fbfdfc] text-[#13233a]">
      <RevealObserver />
      <ClinicHeader clinic={clinic} logo={logo} />
      <ClinicHero clinic={clinic} />
      <ClinicServices clinic={clinic} />
      <ClinicAbout clinic={clinic} />
      <ClinicDoctor clinic={clinic} />
      <ClinicTestimonials clinic={clinic} />
      <ClinicContact clinic={clinic} />
      <ClinicFooter clinic={clinic} logo={logo} />
    </main>
  );
}
