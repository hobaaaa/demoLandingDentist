import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PsychologistVariantThreeRedesign } from "@/components/psychologist/psychologist-variant-redesigns";
import { getPsychologistBySlug, psychologists } from "@/data/psychologists";
import { isArchivedPsychologistDemo } from "@/lib/archived-demos";

type PsychologistVariantRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.values(psychologists)
    .filter((demo) => !isArchivedPsychologistDemo(demo.slug))
    .map((demo) => ({
      slug: demo.slug,
    }));
}

export async function generateMetadata({
  params,
}: PsychologistVariantRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getPsychologistBySlug(slug);

  if (!demo || isArchivedPsychologistDemo(slug)) {
    return {
      title: "Demo bulunamadı",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${demo.seoTitle} | Tasarım V3`,
    description: demo.seoDescription,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: `${demo.seoTitle} | Tasarım V3`,
      description: demo.seoDescription,
      type: "website",
    },
  };
}

export default async function PsychologistVariantThreeRoute({
  params,
}: PsychologistVariantRouteProps) {
  const { slug } = await params;
  const demo = getPsychologistBySlug(slug);

  if (!demo || isArchivedPsychologistDemo(slug)) {
    notFound();
  }

  return <PsychologistVariantThreeRedesign demo={demo} />;
}
