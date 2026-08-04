import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PsychologistDemoPage } from "@/components/psychologist/psychologist-demo";
import { getPsychologistBySlug, psychologists } from "@/data/psychologists";

type PsychologistDemoRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.values(psychologists).map((demo) => ({
    slug: demo.slug,
  }));
}

export async function generateMetadata({
  params,
}: PsychologistDemoRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getPsychologistBySlug(slug);

  if (!demo) {
    return {
      title: "Demo bulunamadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: demo.seoTitle,
    description: demo.seoDescription,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: demo.seoTitle,
      description: demo.seoDescription,
      type: "website",
    },
  };
}

export default async function PsychologistDemoRoute({
  params,
}: PsychologistDemoRouteProps) {
  const { slug } = await params;
  const demo = getPsychologistBySlug(slug);

  if (!demo) {
    notFound();
  }

  return <PsychologistDemoPage demo={demo} />;
}
