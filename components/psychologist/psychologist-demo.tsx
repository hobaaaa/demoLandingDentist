import Image from "next/image";
import type React from "react";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { PsychologistDemo } from "@/types/psychologist";
import { DEMO_BOOKING_URL } from "@/lib/booking";
import { createTelHref, createWhatsAppHref } from "@/lib/contact";
import { RevealObserver } from "@/components/clinic/reveal-observer";

type PsychologistDemoPageProps = {
  demo: PsychologistDemo;
};

export function PsychologistDemoPage({ demo }: PsychologistDemoPageProps) {
  const logo = demo.logo || "/demos/default/logo.png";
  const heroImage = demo.heroImage || "/demos/default/hero.png";
  const officeImage = demo.officeImage || "/demos/default/about.png";
  const profileImage = demo.profileImage || "/demos/default/doctor.png";
  const telHref = createTelHref(demo.phone);
  const whatsappHref = createWhatsAppHref(
    demo.whatsapp,
    `${demo.practiceName} için seans bilgisi almak istiyorum.`,
  );

  return (
    <main
      style={
        {
          "--clinic-primary": demo.primaryColor,
          "--clinic-secondary": demo.secondaryColor,
          "--therapy-accent": demo.accentColor,
        } as React.CSSProperties
      }
      className="min-h-screen bg-[#f7faf4] text-[#223025]"
    >
      <RevealObserver />
      <Header demo={demo} logo={logo} telHref={telHref} />
      <Hero demo={demo} heroImage={heroImage} whatsappHref={whatsappHref} telHref={telHref} />
      <TherapyAreas demo={demo} />
      <Approach demo={demo} officeImage={officeImage} />
      <Profile demo={demo} profileImage={profileImage} />
      <Process demo={demo} />
      <Testimonials demo={demo} />
      <Contact demo={demo} telHref={telHref} whatsappHref={whatsappHref} />
      <Footer demo={demo} logo={logo} telHref={telHref} whatsappHref={whatsappHref} />
    </main>
  );
}

function Header({
  demo,
  logo,
  telHref,
}: {
  demo: PsychologistDemo;
  logo: string;
  telHref: string;
}) {
  const navItems = [
    { label: "Alanlar", href: "#alanlar" },
    { label: "Yaklaşım", href: "#yaklasim" },
    { label: "Uzman", href: "#uzman" },
    { label: "Süreç", href: "#surec" },
    { label: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe8dc] bg-[#f7faf4]/92 backdrop-blur-xl">
      <div className="hidden bg-[#26392d] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-[var(--therapy-accent)]" />
            {demo.workingHours[0]?.hours ?? "10:00 - 19:00"}
          </span>
          <a className="inline-flex items-center gap-2 hover:text-[#d9c2a6]" href={telHref}>
            <Phone className="h-4 w-4 text-[var(--therapy-accent)]" />
            {demo.phone}
          </a>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
        <a href="#hero" className="group flex min-w-0 items-center gap-3">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#dfe8dc] bg-white shadow-lg shadow-stone-900/10 transition duration-300 group-hover:-translate-y-0.5">
            <Image src={logo} alt={`${demo.practiceName} logo`} fill sizes="48px" className="object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold tracking-tight text-[#26392d]">
              {demo.practiceName}
            </span>
            <span className="block truncate text-xs font-medium text-[#63715f]">
              {demo.psychologistName}
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-[#5f6d5b] transition hover:-translate-y-0.5 hover:bg-[var(--clinic-secondary)] hover:text-[var(--clinic-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={DEMO_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="premium-button hidden h-12 items-center justify-center rounded-full bg-[var(--clinic-primary)] px-6 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(89,117,94,0.22)] lg:inline-flex"
        >
          <span>Randevu Al</span>
        </a>
      </nav>
    </header>
  );
}

function Hero({
  demo,
  heroImage,
  whatsappHref,
  telHref,
}: {
  demo: PsychologistDemo;
  heroImage: string;
  whatsappHref: string;
  telHref: string;
}) {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#f7faf4]">
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,#eef6ec,rgba(238,246,236,0))]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-6 lg:py-20">
        <div className="flex flex-col justify-center" data-reveal="left">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#dfe8dc] bg-white/90 px-4 py-2 text-sm font-semibold text-[var(--clinic-primary)] shadow-sm">
            <ShieldCheck className="h-4 w-4 text-[var(--therapy-accent)]" />
            Psikologlar için kişiye özel demo
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight text-[#26392d] md:text-6xl lg:text-7xl">
            {demo.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6d5b] md:text-xl">
            {demo.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="premium-button group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white shadow-[0_16px_38px_rgba(89,117,94,0.22)]"
            >
              <span>Randevu Al</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappHref}
              className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-[#d6dfd2] bg-white px-7 text-base font-semibold text-[#26392d] hover:border-[var(--clinic-primary)] hover:bg-[var(--clinic-secondary)]"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href={telHref}
              className="premium-button inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#d6dfd2] bg-white px-7 text-base font-semibold text-[#26392d] hover:border-[var(--clinic-primary)] hover:bg-[var(--clinic-secondary)]"
            >
              <Phone className="h-5 w-5" />
              <span>Hemen Ara</span>
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3" data-reveal-stagger>
            {demo.sessionTypes.map((item) => (
              <div
                key={item}
                className="premium-card rounded-[1.5rem] border border-[#dfe8dc] bg-white/86 p-4 text-sm font-semibold text-[#26392d] shadow-sm"
              >
                <Check className="premium-card-icon mb-3 h-5 w-5 rounded-full text-[var(--clinic-primary)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[500px] lg:min-h-[660px]">
          <div className="absolute left-0 top-8 z-10 hidden w-56 rounded-[1.75rem] border border-white/80 bg-white/92 p-5 shadow-2xl shadow-[#26392d]/10 backdrop-blur md:block">
            <p className="text-sm font-semibold text-[#63715f]">Gizlilik ve etik çerçeve</p>
            <p className="mt-2 text-2xl font-bold text-[#26392d]">Güvenli Alan</p>
          </div>
          <div className="absolute bottom-8 right-0 z-10 hidden max-w-72 rounded-[1.75rem] bg-[#26392d] p-5 text-white shadow-2xl shadow-[#26392d]/20 md:block">
            <p className="text-sm text-[#d9c2a6]">Ön görüşme</p>
            <p className="mt-1 text-lg font-semibold">15 dk bilgilendirme</p>
            <p className="mt-3 text-sm text-white/70">Demo danışan akışı</p>
          </div>
          <div
            className="premium-image-wrap relative ml-auto h-full overflow-hidden rounded-[3rem_1.5rem_3rem_1.5rem] bg-[#e7efe3] shadow-[0_34px_90px_rgba(38,57,45,0.16)] transition-shadow duration-300 hover:shadow-[0_44px_110px_rgba(38,57,45,0.22)]"
            data-reveal="right"
          >
            <Image
              src={heroImage}
              alt={`${demo.practiceName} danışmanlık atmosferi`}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="premium-image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TherapyAreas({ demo }: PsychologistDemoPageProps) {
  const icons = [HeartHandshake, Sparkles, UserRound, ShieldCheck];

  return (
    <section id="alanlar" className="bg-[#eef6ec] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Çalışma alanları"
          title="Danışanın kendini doğru yerde hissetmesini sağlayan net uzmanlık alanları."
          description="Psikolog demosu; reklam dili yerine güven, etik çerçeve ve anlaşılır hizmet sunumu üzerine kuruldu."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {demo.therapyAreas.map((area, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={area.title}
                className={`premium-card group rounded-[2rem] border border-[#dfe8dc] bg-white p-6 shadow-sm ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="premium-card-icon grid h-12 w-12 place-items-center rounded-full bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-[var(--therapy-accent)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#26392d]">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6d5b]">{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Approach({
  demo,
  officeImage,
}: PsychologistDemoPageProps & { officeImage: string }) {
  return (
    <section id="yaklasim" className="bg-[#fbfcf8] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <div
          className="premium-image-wrap relative min-h-[440px] overflow-hidden rounded-[1.5rem_3rem_1.5rem_3rem] bg-[#e7efe3] shadow-[0_24px_70px_rgba(38,57,45,0.12)]"
          data-reveal="left"
        >
          <Image
            src={officeImage}
            alt={`${demo.practiceName} görüşme alanı`}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="premium-image object-cover"
          />
        </div>
        <div className="flex flex-col justify-center" data-reveal="right">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
            Yaklaşım
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#26392d] md:text-5xl">
            Sakin, güvenli ve danışanı merkeze alan bir ilk izlenim.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f6d5b]">{demo.approachText}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2" data-reveal-stagger>
            {["Gizlilik ilkesi", "Etik sınırlar", "Yapılandırılmış süreç", "Online görüşme"].map(
              (item) => (
                <div
                  key={item}
                  className="premium-card flex items-center gap-3 rounded-2xl border border-[#dfe8dc] bg-white/70 p-3 text-[#26392d]"
                >
                  <span className="premium-card-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-semibold">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Profile({
  demo,
  profileImage,
}: PsychologistDemoPageProps & { profileImage: string }) {
  return (
    <section id="uzman" className="bg-[#f7faf4] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.85fr] lg:px-6">
        <div className="flex flex-col justify-center" data-reveal="left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
            Uzman
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#26392d] md:text-5xl">
            {demo.psychologistName}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#5f6d5b]">{demo.biography}</p>
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="premium-button mt-8 inline-flex h-14 w-fit items-center justify-center rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white shadow-[0_16px_38px_rgba(89,117,94,0.22)]"
          >
            <span>Ön Görüşme Talep Et</span>
          </a>
        </div>
        <article
          className="premium-card overflow-hidden rounded-[2rem] border border-[#dfe8dc] bg-white shadow-sm"
          data-reveal="right"
        >
          <div className="premium-image-wrap relative aspect-[4/4.35] overflow-hidden rounded-b-[2.5rem] bg-[#e7efe3]">
            <Image
              src={profileImage}
              alt={`${demo.psychologistName} profil fotoğrafı`}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="premium-image object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#26392d]">{demo.psychologistName}</h3>
            <p className="mt-2 text-sm font-semibold text-[var(--clinic-primary)]">
              {demo.practiceName}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Process({ demo }: PsychologistDemoPageProps) {
  const steps = [
    {
      title: "İlk temas",
      description: "Danışan telefon veya WhatsApp üzerinden uygun görüşme seçeneğini sorar.",
    },
    {
      title: "Ön bilgilendirme",
      description: "Seans türü, görüşme süresi ve uygun saatler net şekilde paylaşılır.",
    },
    {
      title: "Güvenli seans alanı",
      description: "Gizlilik ve etik çerçeve korunarak görüşme süreci başlatılır.",
    },
    {
      title: "Düzenli takip",
      description: "İhtiyaca göre seans sıklığı ve süreç hedefleri birlikte değerlendirilir.",
    },
  ];

  return (
    <section id="surec" className="bg-[#fbfcf8] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Danışan süreci"
          title="Randevu öncesi belirsizliği azaltan açık bir yol haritası."
          description={`${demo.practiceName} için hazırlanan akış, danışanın ilk adımı daha rahat atmasını hedefler.`}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4" data-reveal-stagger>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="premium-card rounded-[2rem] border border-[#dfe8dc] bg-white p-6 shadow-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--clinic-primary)] text-sm font-bold text-white">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-xl font-bold text-[#26392d]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f6d5b]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ demo }: PsychologistDemoPageProps) {
  return (
    <section className="bg-[#eef6ec] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Danışan izlenimleri"
          title="Sakin, ölçülü ve güven veren sosyal kanıt."
          description="Demo yorumları gerçek danışan iddiası taşımaz; sayfanın güven mimarisini göstermek için kullanılır."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3" data-reveal-stagger>
          {demo.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="premium-card rounded-[2rem] border border-[#dfe8dc] bg-white p-6 shadow-sm"
            >
              <HeartHandshake className="h-8 w-8 text-[var(--clinic-primary)]" />
              <p className="mt-5 text-sm leading-7 text-[#5f6d5b]">{testimonial.comment}</p>
              <p className="mt-6 font-bold text-[#26392d]">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({
  demo,
  telHref,
  whatsappHref,
}: PsychologistDemoPageProps & { telHref: string; whatsappHref: string }) {
  return (
    <section id="iletisim" className="bg-[#f7faf4] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div
          className="pulse-soft overflow-hidden rounded-[2rem] bg-[#26392d] px-6 py-12 text-white md:px-10 lg:px-14"
          data-reveal="scale"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9c2a6]">
                İletişim
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                İlk adımı sade ve güven veren bir iletişim alanıyla kolaylaştırın.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                Telefon, WhatsApp, adres ve çalışma saatleri tek bölümde net
                şekilde gösterilir.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white"
              >
                <span>Randevu Al</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-white/25 bg-white px-7 text-base font-semibold text-[#26392d]"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4" data-reveal-stagger>
          <InfoCard icon={MapPin} title="Adres" text={demo.address} href={demo.mapsUrl} />
          <InfoCard icon={Phone} title="Telefon" text={demo.phone} href={telHref} />
          {demo.email ? (
            <InfoCard
              icon={Mail}
              title="E-posta"
              text={demo.email}
              href={`mailto:${demo.email}`}
              textClassName="break-all"
            />
          ) : null}
          <InfoCard
            icon={Clock}
            title="Çalışma saatleri"
            text={<WorkingHoursList hours={demo.workingHours} />}
          />
        </div>
      </div>
      <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-[1fr_auto] gap-3 md:inset-auto md:bottom-6 md:right-6 md:flex md:flex-col">
        <a
          href={DEMO_BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="premium-button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#26392d] px-5 text-sm font-semibold text-white shadow-2xl shadow-[#26392d]/25 md:hidden"
        >
          <CalendarCheck className="h-5 w-5" />
          <span>Randevu</span>
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
    </section>
  );
}

function Footer({
  demo,
  logo,
  telHref,
  whatsappHref,
}: {
  demo: PsychologistDemo;
  logo: string;
  telHref: string;
  whatsappHref: string;
}) {
  return (
    <footer className="bg-[#1f2d24] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white">
              <Image src={logo} alt={`${demo.practiceName} logo`} fill sizes="48px" className="object-cover" />
            </span>
            <div className="text-2xl font-bold">{demo.practiceName}</div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#dce6d7]">{demo.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9c2a6]">
            Sayfa
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-[#dce6d7]">
            {[
              { label: "Çalışma alanları", href: "#alanlar" },
              { label: "Yaklaşım", href: "#yaklasim" },
              { label: "Uzman", href: "#uzman" },
              { label: "Randevu", href: DEMO_BOOKING_URL },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9c2a6]">
            İletişim
          </h2>
          <div className="mt-5 space-y-4 text-sm text-[#dce6d7]">
            <a className="flex gap-3 transition hover:-translate-y-0.5 hover:text-white" href={telHref}>
              <Phone className="h-5 w-5 shrink-0 text-[#d9c2a6]" />
              {demo.phone}
            </a>
            <a className="flex gap-3 transition hover:-translate-y-0.5 hover:text-white" href={whatsappHref}>
              <MessageCircle className="h-5 w-5 shrink-0 text-[#d9c2a6]" />
              WhatsApp
            </a>
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#d9c2a6]" />
              {demo.address}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-[#c7d5c2] md:flex-row md:items-center md:justify-between lg:px-6">
          <p>© 2026 {demo.practiceName}. Demo ön çalışma.</p>
          <p>Bu sayfa DG Digital tarafından hazırlanmış örnek bir ön çalışmadır.</p>
        </div>
      </div>
    </footer>
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
    <div className="premium-card flex h-full min-w-0 gap-4 rounded-[1.5rem] border border-[#dfe8dc] bg-white p-5 shadow-sm">
      <span className="premium-card-icon grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#63715f]">{title}</p>
        <div className={`mt-1 font-bold leading-7 text-[#26392d] ${textClassName ?? ""}`}>
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

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl" data-reveal>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#26392d] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#5f6d5b]">{description}</p>
    </div>
  );
}

function WorkingHoursList({
  hours,
}: {
  hours: PsychologistDemo["workingHours"];
}) {
  return (
    <ul className="space-y-1">
      {hours.map((item) => (
        <li key={item.day} className="grid gap-1 text-sm leading-6 sm:grid-cols-[1fr_auto]">
          <span className="font-semibold text-[#26392d]">{item.day}</span>
          <span className="font-semibold text-[#5f6d5b] sm:text-right">{item.hours}</span>
        </li>
      ))}
    </ul>
  );
}
