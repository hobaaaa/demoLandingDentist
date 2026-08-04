import type { CSSProperties } from "react";
import type { ClinicDemo } from "@/types/clinic";
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

type ClinicDemoPageProps = {
  clinic: ClinicDemo;
};

export function ClinicDemoPage({ clinic }: ClinicDemoPageProps) {
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
