import Image from "next/image";
import { Check } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";
import { getClinicImage } from "@/lib/images";

type ClinicAboutProps = {
  clinic: ClinicDemo;
};

export function ClinicAbout({ clinic }: ClinicAboutProps) {
  const aboutImage = getClinicImage(clinic, "aboutImage");

  return (
    <section id="hakkimizda" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <div
          className="premium-image-wrap relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(19,35,58,0.12)] transition-shadow duration-300 hover:shadow-[0_34px_90px_rgba(19,35,58,0.18)]"
          data-reveal="left"
        >
          <Image
            src={aboutImage}
            alt={`${clinic.clinicName} klinik ortamı`}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="premium-image object-cover"
          />
        </div>
        <div className="flex flex-col justify-center" data-reveal="right">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
            Hakkımızda
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
            Tedaviden önce güvenli ve konforlu bir deneyim tasarlıyoruz.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5a6d6b]">{clinic.aboutText}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2" data-reveal-stagger>
            {[
              "Modern klinik ortamı",
              "Dijital diş hekimliği",
              "Yüksek hijyen standartları",
              "Kişiye özel tedavi planı",
            ].map((item) => (
              <div
                key={item}
                className="premium-card flex items-center gap-3 rounded-2xl border border-transparent p-2 text-[#203c39]"
              >
                <span className="premium-card-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
