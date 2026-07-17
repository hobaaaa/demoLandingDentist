import {
  ArrowRight,
  Bone,
  Braces,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";

type ClinicServicesProps = {
  clinic: ClinicDemo;
};

export function ClinicServices({ clinic }: ClinicServicesProps) {
  const icons = [Bone, Sparkles, Smile, Braces, HeartPulse, ShieldCheck];

  return (
    <section id="tedaviler" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
              Tedaviler
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
              Kliniğinizin değerini gösteren kapsamlı tedavi sunumu.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5a6d6b]">
              Her tedavi kartı hastanın anlayacağı netlikte, güven veren ve
              randevuya yönlendiren şekilde düzenlendi.
            </p>
          </div>
          <a
            className="premium-button inline-flex h-12 w-fit items-center justify-center rounded-full border border-[#b7d8d4] bg-white px-6 text-sm font-semibold text-[#103d3b] hover:border-[var(--clinic-primary)] hover:bg-[var(--clinic-secondary)]"
            href="#iletisim"
            data-reveal="right"
          >
            <span>Tedavi danışmanlığı al</span>
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {clinic.services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={service.title}
                className={`premium-card group rounded-3xl border border-[#dce8e6] bg-white p-6 shadow-sm ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="premium-card-icon grid h-12 w-12 place-items-center rounded-2xl bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-[#9a7740]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#13233a]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5a6d6b]">
                  {service.description}
                </p>
                <a
                  href="#iletisim"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--clinic-primary)] transition group-hover:gap-3"
                >
                  Detayları incele
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
