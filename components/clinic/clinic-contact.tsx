import type React from "react";
import { CalendarCheck, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";
import { DEMO_BOOKING_URL } from "@/lib/booking";
import { createTelHref, createWhatsAppHref } from "@/lib/contact";

type ClinicContactProps = {
  clinic: ClinicDemo;
};

export function ClinicContact({ clinic }: ClinicContactProps) {
  const telHref = createTelHref(clinic.phone);
  const whatsappHref = createWhatsAppHref(
    clinic.whatsapp,
    `${clinic.clinicName} için randevu almak istiyorum.`,
  );

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div
            className="pulse-soft overflow-hidden rounded-[2rem] bg-[#13233a] px-6 py-12 text-white md:px-10 lg:px-14"
            data-reveal="scale"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9fd7cf]">
                  Randevu
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                  Gülüşünüz için ilk adımı bugün atın.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  Muayene ve tedavi seçenekleri hakkında bilgi almak için
                  bizimle iletişime geçin.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  className="premium-button inline-flex h-14 items-center justify-center rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white"
                  href={DEMO_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Randevu Oluştur</span>
                </a>
                <a
                  className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-[#b7d8d4] bg-white px-7 text-base font-semibold text-[#103d3b]"
                  href={telHref}
                >
                  <span>Bizi Arayın</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-[#f6fbfa] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="max-w-3xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
              İletişim
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
              Randevu talebini kolaylaştıran net iletişim alanı.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5a6d6b]">
              Telefon, WhatsApp, adres ve harita bağlantısı tek bölümde
              toplanarak ziyaretçinin karar anı desteklenir.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5" data-reveal-stagger>
              <InfoCard icon={MapPin} title="Adres" text={clinic.address} href={clinic.mapsUrl} />
              <InfoCard icon={Phone} title="Telefon" text={clinic.phone} href={telHref} />
              {clinic.email ? (
                <InfoCard
                  icon={Mail}
                  title="E-posta"
                  text={clinic.email}
                  href={`mailto:${clinic.email}`}
                  textClassName="break-all"
                />
              ) : null}
              <InfoCard
                icon={Clock}
                title="Çalışma saatleri"
                text={<WorkingHoursList hours={clinic.workingHours} />}
              />
            </div>
            <div
              className="premium-card grid min-h-[420px] place-items-center rounded-[2rem] border border-[#dce8e6] bg-[linear-gradient(135deg,var(--clinic-secondary),#ffffff)] p-6 text-center"
              data-reveal="right"
            >
              <div>
                <MapPin className="mx-auto h-12 w-12 text-[var(--clinic-primary)]" />
                <p className="mt-4 text-2xl font-bold text-[#13233a]">
                  {clinic.clinicName}
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#5a6d6b]">
                  Harita alanı bu demo mimarisinde link olarak çalışır. İleri
                  sürümde aynı alana gömülü harita veya randevu formu eklenebilir.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappHref}
                    className="premium-button inline-flex h-12 items-center justify-center rounded-full bg-[var(--clinic-primary)] px-6 text-sm font-semibold text-white"
                  >
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button inline-flex h-12 items-center justify-center rounded-full border border-[#b7d8d4] bg-white px-6 text-sm font-semibold text-[#103d3b]"
                  >
                    <span>Yol Tarifi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-[1fr_auto] gap-3 md:inset-auto md:bottom-6 md:right-6 md:flex md:flex-col">
        <a
          href={DEMO_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="premium-button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#13233a] px-5 text-sm font-semibold text-white shadow-2xl shadow-[#13233a]/25 md:hidden"
        >
          <CalendarCheck className="h-5 w-5" />
          Randevu Al
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          className="premium-button inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#19a36b] text-white shadow-2xl shadow-[#19a36b]/30 hover:bg-[#148a5a] md:h-14 md:w-14"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
  href,
  textClassName,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: React.ReactNode;
  href?: string;
  textClassName?: string;
}) {
  const content = (
    <div className="premium-card flex min-w-0 gap-4 rounded-3xl border border-[#dce8e6] bg-white p-5 shadow-sm">
      <span className="premium-card-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#6a7c79]">{title}</p>
        <div className={`mt-1 font-bold leading-7 text-[#13233a] ${textClassName ?? ""}`}>
          {text}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function WorkingHoursList({
  hours,
}: {
  hours: ClinicDemo["workingHours"];
}) {
  return (
    <ul className="space-y-1">
      {hours.map((item) => (
        <li key={item.day} className="grid gap-1 text-sm leading-6 sm:grid-cols-[1fr_auto]">
          <span className="font-semibold text-[#13233a]">{item.day}</span>
          <span className="font-semibold text-[#5a6d6b] sm:text-right">{item.hours}</span>
        </li>
      ))}
    </ul>
  );
}
