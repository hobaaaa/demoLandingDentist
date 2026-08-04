import Image from "next/image";
import { ArrowRight, Check, Phone, Star } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";
import { DEMO_BOOKING_URL } from "@/lib/booking";
import { createTelHref, createWhatsAppHref } from "@/lib/contact";
import { getClinicImage } from "@/lib/images";

type ClinicHeroProps = {
  clinic: ClinicDemo;
};

export function ClinicHero({ clinic }: ClinicHeroProps) {
  const heroImage = getClinicImage(clinic, "heroImage");
  const whatsappHref = createWhatsAppHref(
    clinic.whatsapp,
    `${clinic.clinicName} için randevu oluşturmak istiyorum.`,
  );

  return (
    <section id="hero" className="relative overflow-hidden bg-[#f6fbfa]">
      <div className="absolute inset-x-0 top-0 h-40 bg-white" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-6 lg:py-20">
        <div className="flex flex-col justify-center" data-reveal="left">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#cfe5e1] bg-white px-4 py-2 text-sm font-semibold text-[var(--clinic-primary)] shadow-sm">
            <Star className="h-4 w-4 fill-[#d9a441] text-[#d9a441]" />
            DG Digital tarafından hazırlanmış kişiye özel demo
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-[#13233a] md:text-6xl lg:text-7xl">
            {clinic.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#536966] md:text-xl">
            {clinic.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-button group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white shadow-[0_16px_38px_rgba(15,95,92,0.24)]"
            >
              <span>Randevu Al</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref}
              className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-[#b7d8d4] bg-white px-7 text-base font-semibold text-[#103d3b] hover:border-[var(--clinic-primary)] hover:bg-[var(--clinic-secondary)]"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href={createTelHref(clinic.phone)}
              className="premium-button inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#b7d8d4] bg-white px-7 text-base font-semibold text-[#103d3b] hover:border-[var(--clinic-primary)] hover:bg-[var(--clinic-secondary)]"
            >
              <Phone className="h-5 w-5" />
              <span>Hemen Ara</span>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" data-reveal-stagger>
            {[
              "Modern teknoloji",
              "Şeffaf planlama",
              "Kolay randevu",
              "Mobil uyumlu",
            ].map((item) => (
              <div
                key={item}
                className="premium-card rounded-2xl border border-[#dce8e6] bg-white p-4 text-sm font-semibold text-[#203c39] shadow-sm"
              >
                <Check className="premium-card-icon mb-3 h-5 w-5 rounded-full text-[var(--clinic-primary)]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-[660px]">
          <div className="float-soft absolute left-0 top-8 z-10 hidden w-44 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur md:block">
            <p className="text-3xl font-bold text-[#13233a]">4.9</p>
            <p className="mt-1 text-sm text-[#5a6d6b]">Hasta memnuniyeti</p>
            <div className="mt-3 flex text-[#d9a441]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="float-soft absolute bottom-8 right-0 z-10 hidden max-w-64 rounded-3xl bg-[#13233a] p-5 text-white shadow-2xl md:block [animation-delay:1.2s]">
            <p className="text-sm text-[#bfe8e2]">Bugün uygun saat</p>
            <p className="mt-1 text-lg font-semibold">17:30 Muayene</p>
            <p className="mt-3 text-sm text-white/70">Demo randevu alanı</p>
          </div>
          <div
            className="premium-image-wrap relative ml-auto h-full overflow-hidden rounded-[2.4rem] bg-[#dce8e6] shadow-[0_34px_90px_rgba(19,35,58,0.18)] transition-shadow duration-300 hover:shadow-[0_44px_110px_rgba(19,35,58,0.24)]"
            data-reveal="right"
          >
            <Image
              src={heroImage}
              alt={`${clinic.clinicName} klinik atmosferi`}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="premium-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
