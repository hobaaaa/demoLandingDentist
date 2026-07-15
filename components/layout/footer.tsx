import { Link, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { brand, navItems, treatments } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0f1d30] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-6">
        <div>
          <div className="text-2xl font-bold">{brand.name}</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#b9c8c5]">
            {brand.slogan} Modern klinik deneyimini, şeffaf bilgilendirme ve
            kişiye özel tedavi planlamasıyla birleştiriyoruz.
          </p>
          <div className="mt-6 flex gap-3">
            {[Share2, MessageCircle, Link].map((Icon, index) => (
              <a
                key={index}
                href="#hero"
                aria-label="Sosyal medya bağlantısı"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#0f5f5c]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterList title="Hızlı Bağlantılar" items={navItems.slice(1, 6)} />
        <FooterList
          title="Tedaviler"
          items={treatments.slice(0, 6).map((item) => ({
            label: item.title,
            href: "#tedaviler",
          }))}
        />
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#91d7ce]">
            İletişim
          </h2>
          <div className="mt-5 space-y-4 text-sm text-[#c7d4d2]">
            <a className="flex gap-3 hover:text-white" href={brand.phoneHref}>
              <Phone className="h-5 w-5 shrink-0 text-[#91d7ce]" />
              {brand.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={`mailto:${brand.email}`}>
              <Mail className="h-5 w-5 shrink-0 text-[#91d7ce]" />
              {brand.email}
            </a>
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#91d7ce]" />
              {brand.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-[#aebfbc] md:flex-row md:items-center md:justify-between lg:px-6">
          <p>© 2026 {brand.name}. Tüm hakları saklıdır.</p>
          <div className="flex gap-5">
            <a href="#hero" className="hover:text-white">
              KVKK
            </a>
            <a href="#hero" className="hover:text-white">
              Gizlilik Politikası
            </a>
          </div>
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
            <a href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
