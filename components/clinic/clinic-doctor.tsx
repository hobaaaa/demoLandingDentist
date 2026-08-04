import Image from "next/image";
import { BadgeCheck, CalendarCheck, Camera, ShieldCheck } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";
import { DEMO_BOOKING_URL } from "@/lib/booking";
import { getClinicImage } from "@/lib/images";

type ClinicDoctorProps = {
  clinic: ClinicDemo;
};

export function ClinicDoctor({ clinic }: ClinicDoctorProps) {
  const doctorImage = getClinicImage(clinic, "doctorImage");
  const reasons = [
    {
      title: "Uzman ve deneyimli yaklaşım",
      description: "Tedavi alanına göre doğru planlama yapılır.",
      icon: BadgeCheck,
    },
    {
      title: "Dijital görüntüleme",
      description: "Muayene ve tedavi planı net verilerle desteklenir.",
      icon: Camera,
    },
    {
      title: "Şeffaf bilgilendirme",
      description: "Süreç, alternatifler ve randevu akışı açıkça paylaşılır.",
      icon: CalendarCheck,
    },
    {
      title: "Konforlu klinik deneyimi",
      description: "Hasta güveni ve hijyen standartları birlikte ele alınır.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <section id="doktorlar" className="bg-[#f6fbfa] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.85fr] lg:px-6">
          <div className="flex flex-col justify-center" data-reveal="left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
              Doktor
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
              {clinic.doctorName}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5a6d6b]">
              {clinic.doctorBiography}
            </p>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-button mt-8 inline-flex h-14 w-fit items-center justify-center rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white shadow-[0_16px_38px_rgba(15,95,92,0.24)]"
            >
              <span>Muayene Randevusu Al</span>
            </a>
          </div>
          <article
            className="premium-card overflow-hidden rounded-3xl border border-[#dce8e6] bg-white shadow-sm"
            data-reveal="right"
          >
            <div className="premium-image-wrap relative aspect-[4/4.3] overflow-hidden">
              <Image
                src={doctorImage}
                alt={`${clinic.doctorName} portre fotoğrafı`}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="premium-image object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#13233a]">{clinic.doctorName}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--clinic-primary)]">
                {clinic.clinicName}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="max-w-3xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
              Neden tercih edilir?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
              Hasta güvenini artıran her detay görünür olsun.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="premium-card rounded-3xl border border-[#dce8e6] bg-[#fbfdfc] p-6"
                >
                  <span className="premium-card-icon inline-grid h-11 w-11 place-items-center rounded-2xl bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#13233a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5a6d6b]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
