import Image from "next/image";
import { Link, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";
import { createTelHref, createWhatsAppHref } from "@/lib/contact";

type ClinicFooterProps = {
  clinic: ClinicDemo;
  logo: string;
};

const navItems = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Tedaviler", href: "#tedaviler" },
  { label: "Doktor", href: "#doktorlar" },
  { label: "Hasta Yorumları", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

export function ClinicFooter({ clinic, logo }: ClinicFooterProps) {
  return (
    <footer className="bg-[#0f1d30] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl shadow-black/10">
              <Image
                src={logo}
                alt={`${clinic.clinicName} logo`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <div className="text-2xl font-bold">{clinic.clinicName}</div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#b9c8c5]">
            {clinic.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Share2, href: clinic.instagramUrl ?? "#hero" },
              { icon: MessageCircle, href: createWhatsAppHref(clinic.whatsapp) },
              { icon: Link, href: clinic.mapsUrl },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  aria-label="Sosyal medya veya iletişim bağlantısı"
                  className="premium-button grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-[var(--clinic-primary)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <FooterList title="Hızlı Bağlantılar" items={navItems} />
        <FooterList
          title="Tedaviler"
          items={clinic.services.slice(0, 6).map((item) => ({
            label: item.title,
            href: "#tedaviler",
          }))}
        />
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#91d7ce]">
            İletişim
          </h2>
          <div className="mt-5 space-y-4 text-sm text-[#c7d4d2]">
            <a className="flex gap-3 transition hover:-translate-y-0.5 hover:text-white" href={createTelHref(clinic.phone)}>
              <Phone className="h-5 w-5 shrink-0 text-[#91d7ce]" />
              {clinic.phone}
            </a>
            {clinic.email ? (
              <a className="flex gap-3 transition hover:-translate-y-0.5 hover:text-white" href={`mailto:${clinic.email}`}>
                <Mail className="h-5 w-5 shrink-0 text-[#91d7ce]" />
                {clinic.email}
              </a>
            ) : null}
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#91d7ce]" />
              {clinic.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-[#aebfbc] md:flex-row md:items-center md:justify-between lg:px-6">
          <p>© 2026 {clinic.clinicName}. Demo ön çalışma.</p>
          <p>Bu sayfa DG Digital tarafından hazırlanmış örnek bir ön çalışmadır.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#91d7ce]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-sm text-[#c7d4d2]">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="transition hover:translate-x-1 hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
