import Image from "next/image";
import type React from "react";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ExternalLink,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RevealObserver } from "@/components/clinic/reveal-observer";
import { DEMO_BOOKING_URL } from "@/lib/booking";
import { createTelHref, createWhatsAppHref } from "@/lib/contact";
import type { PsychologistDemo } from "@/types/psychologist";

type Props = {
  demo: PsychologistDemo;
};

type Assets = {
  logo: string;
  heroImage: string;
  officeImage: string;
  profileImage: string;
  telHref: string;
  whatsappHref: string;
};

const nav = [
  { label: "Alanlar", href: "#alanlar" },
  { label: "Yaklasim", href: "#yaklasim" },
  { label: "Uzman", href: "#uzman" },
  { label: "Iletisim", href: "#iletisim" },
];

function assets(demo: PsychologistDemo): Assets {
  return {
    logo: demo.logo || "/demos/default/logo.png",
    heroImage: demo.heroImage || "/demos/psychology/hero.jpg",
    officeImage: demo.officeImage || "/demos/default/about.png",
    profileImage: demo.profileImage || "/demos/default/doctor.png",
    telHref: createTelHref(demo.phone),
    whatsappHref: createWhatsAppHref(
      demo.whatsapp,
      `${demo.practiceName} icin seans bilgisi almak istiyorum.`,
    ),
  };
}

function styleVars(demo: PsychologistDemo): React.CSSProperties {
  return {
    "--clinic-primary": demo.primaryColor,
    "--clinic-secondary": demo.secondaryColor,
    "--therapy-accent": demo.accentColor,
  } as React.CSSProperties;
}

export function PsychologistVariantTwoRedesign({ demo }: Props) {
  const a = assets(demo);

  return (
    <main
      style={styleVars(demo)}
      className="min-h-screen bg-[#f4efe6] text-[#211c18]"
    >
      <RevealObserver />
      <header className="sticky top-0 z-50 border-b border-[#211c18]/10 bg-[#f4efe6]/88 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-4 lg:px-8">
          <Brand demo={demo} logo={a.logo} rounded="rounded-[1.1rem]" />
          <NavLinks tone="warm" />
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="premium-button hidden h-12 items-center justify-center rounded-full bg-[#211c18] px-6 text-sm font-black text-white md:inline-flex"
          >
            Randevu Al
          </a>
        </div>
      </header>

      <section id="hero" className="relative isolate overflow-hidden">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[30vw] bg-[linear-gradient(90deg,rgba(222,210,194,0),#e2d6c6)] lg:block" />
        <div className="absolute left-0 top-24 -z-10 h-56 w-56 rounded-full bg-[var(--clinic-secondary)] blur-3xl" />
        <div className="mx-auto grid max-w-[92rem] gap-8 px-5 py-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-12">
          <div
            className="flex flex-col justify-between gap-12"
            data-reveal="left"
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#211c18]/10 bg-white/70 px-4 py-2 text-sm font-black text-[#5f554b] shadow-sm">
                <Sparkles className="h-4 w-4 text-[var(--clinic-primary)]" />
                Seans oncesi guvenli baslangic
              </p>
              <h1 className="mt-8 max-w-4xl text-[clamp(2.8rem,6.2vw,6.8rem)] font-black leading-[0.92] tracking-tight">
                Sakin bir ilk adim.
                <span className="block text-[var(--clinic-primary)]">
                  Guvenli bir gorusme alani.
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#665c51] md:text-xl">
                {demo.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {demo.sessionTypes.map((item) => (
                <div
                  key={item}
                  className="border-y border-[#211c18]/12 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#4c443d]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="grid gap-5 lg:grid-cols-[1fr_14rem]"
            data-reveal="right"
          >
            <div className="premium-image-wrap relative min-h-[540px] overflow-hidden rounded-[3.5rem] bg-[#dacfbf] shadow-[0_36px_100px_rgba(33,28,24,0.2)]">
              <Image
                src={a.heroImage}
                alt={`${demo.practiceName} terapi atmosferi`}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="premium-image object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-[2rem] border border-white/40 bg-white/78 p-5 shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#75695d]">
                  {demo.practiceName}
                </p>
                <p className="mt-2 text-2xl font-black text-[#211c18]">
                  {demo.psychologistName}
                </p>
              </div>
            </div>

            <aside className="grid gap-5 lg:grid-rows-[1fr_auto]">
              <div className="rounded-[2.4rem] bg-[#211c18] p-6 text-white shadow-[0_24px_70px_rgba(33,28,24,0.2)]">
                <ShieldCheck className="h-9 w-9 text-[#d8c3a4]" />
                <p className="mt-8 text-2xl font-black leading-tight">
                  Ilk gorusmede ne bekleyeceginiz net olsun.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Gizlilik, seans suresi, gorusme turu ve uygun saatler ilk
                  temasta acikca paylasilir.
                </p>
                <div className="mt-8 space-y-3 text-sm font-bold text-white/78">
                  <p>Seans: Online veya yuz yuze</p>
                  <p>Odak: Ihtiyaca gore planlama</p>
                  <p>Yaklasim: Etik ve danisan merkezli</p>
                </div>
              </div>
              <div className="grid gap-3">
                <a
                  href={DEMO_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--clinic-primary)] px-6 text-sm font-black text-white"
                >
                  Randevu Al
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={a.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-[#211c18]/12 bg-white px-6 text-sm font-black text-[#211c18]"
                >
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe6] py-14">
        <div
          className="mx-auto grid max-w-[92rem] gap-5 px-5 md:grid-cols-3 lg:px-8"
          data-reveal-stagger
        >
          {[
            {
              title: "Ilk temas",
              text: "Randevu talebinizden sonra gorusme turu ve uygun saatler netlestirilir.",
            },
            {
              title: "Seans cercevesi",
              text: "Gizlilik, etik sinirlar ve seans akisi gorusme baslamadan once aciklanir.",
            },
            {
              title: "Takip ve plan",
              text: "Surec, ihtiyaciniza gore duzenli ve olculebilir adimlarla ilerler.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="premium-card rounded-[2rem] border border-[#211c18]/10 bg-white/70 p-6 shadow-sm"
            >
              <ShieldCheck className="h-7 w-7 text-[var(--clinic-primary)]" />
              <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#665c51]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="alanlar" className="bg-[#211c18] py-20 text-white">
        <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div data-reveal="left">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d8c3a4]">
                Calisma alanlari
              </p>
              <h2 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
                Danisanin ihtiyacina uygun destek alanlari.
              </h2>
            </div>
            <div
              className="grid gap-px overflow-hidden rounded-[2.5rem] bg-white/12 md:grid-cols-2"
              data-reveal-stagger
            >
              {demo.therapyAreas.slice(0, 4).map((area, index) => (
                <article
                  key={area.title}
                  className="group min-h-72 bg-[#2c251f] p-7 transition duration-300 hover:bg-[#372f28]"
                >
                  <span className="text-sm font-black text-[#d8c3a4]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-12 text-3xl font-black leading-tight">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {area.description}
                  </p>
                  <ArrowRight className="mt-8 h-5 w-5 text-[#d8c3a4] transition duration-300 group-hover:translate-x-2" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="yaklasim" className="bg-[#f7f3ec] py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative" data-reveal="left">
            <div className="premium-image-wrap relative min-h-[540px] overflow-hidden rounded-[4rem_1.4rem_4rem_1.4rem] bg-[#ddd0bf] shadow-[0_30px_90px_rgba(33,28,24,0.14)]">
              <Image
                src={a.officeImage}
                alt={`${demo.practiceName} gorusme alani`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="premium-image object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-6 max-w-sm rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_rgba(33,28,24,0.14)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
                Surec
              </p>
              <p className="mt-3 text-2xl font-black leading-tight">
                Ilk temas, on bilgilendirme, guvenli gorusme.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col justify-center pt-8 lg:pt-0"
            data-reveal="right"
          >
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--clinic-primary)]">
              Yaklasim
            </p>
            <h2 className="mt-5 text-5xl font-black leading-[1] tracking-tight md:text-7xl">
              Daha az kalabalik, daha cok guven.
            </h2>
            <p className="mt-7 text-lg leading-9 text-[#665c51]">
              {demo.approachText}
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Gizlilik ilkesi",
                "Etik sinirlar",
                "Net seans akisi",
                "Online gorusme",
              ].map((item) => (
                <div
                  key={item}
                  className="premium-card flex items-center gap-3 rounded-full border border-[#211c18]/10 bg-white px-4 py-3 text-sm font-black"
                >
                  <Check className="h-5 w-5 text-[var(--clinic-primary)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="uzman" className="bg-[#ede5d8] py-20">
        <div className="mx-auto grid max-w-[92rem] gap-10 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div
            className="premium-card overflow-hidden rounded-[3rem] bg-white shadow-[0_28px_80px_rgba(33,28,24,0.13)]"
            data-reveal="left"
          >
            <div className="premium-image-wrap relative aspect-[4/4.6] bg-[#d9cfbf]">
              <Image
                src={a.profileImage}
                alt={`${demo.psychologistName} profil gorseli`}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="premium-image object-cover"
              />
            </div>
            <div className="p-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
                Uzman
              </p>
              <h3 className="mt-2 text-3xl font-black">
                {demo.psychologistName}
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center" data-reveal="right">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--clinic-primary)]">
              Uzman profili
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[1] tracking-tight md:text-7xl">
              Danisanin uzmanla bag kurmasini kolaylastiran sade anlatim.
            </h2>
            <p className="mt-7 text-lg leading-9 text-[#665c51]">
              {demo.biography}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full bg-[#211c18] px-7 text-sm font-black text-white"
              >
                On Gorusme Talep Et
              </a>
              <a
                href={a.telHref}
                className="premium-button inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-black text-[#211c18]"
              >
                <Phone className="h-5 w-5" />
                {demo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection demo={demo} tone="warm" />
      <WarmContact demo={demo} a={a} />
      <VariantFooter demo={demo} a={a} tone="warm" />
      <MobileBar a={a} />
    </main>
  );
}

export function PsychologistVariantThreeRedesign({ demo }: Props) {
  const a = assets(demo);
  const steps = [
    "Randevu talebi",
    "On bilgilendirme",
    "Guvenli gorusme",
    "Duzenli takip",
  ];

  return (
    <main
      style={styleVars(demo)}
      className="min-h-screen bg-[#11180f] text-white"
    >
      <RevealObserver />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11180f]/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
          <Brand demo={demo} logo={a.logo} rounded="rounded-2xl" dark />
          <NavLinks tone="dark" />
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="premium-button hidden h-12 items-center justify-center rounded-full bg-[#d9c2a6] px-6 text-sm font-bold text-[#11180f] md:inline-flex"
          >
            Randevu Al
          </a>
        </div>
      </header>

      <section id="hero" className="relative isolate overflow-hidden">
        <Image
          src={a.heroImage}
          alt={`${demo.practiceName} psikoloji atmosferi`}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-36"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,24,15,0.95),rgba(17,24,15,0.74),rgba(17,24,15,0.42))]" />

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_0.85fr] lg:px-6">
          <div data-reveal="left">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#d9c2a6]" />
              Guvenli ve sakin gorusme sureci
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Ilk gorusmeye giden yolu sade, guvenli ve anlasilir hale getirin.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/76">
              {demo.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="premium-button group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#d9c2a6] px-7 text-base font-bold text-[#11180f]"
              >
                Randevu Al
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href={a.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-white/24 bg-white/10 px-7 text-base font-bold text-white backdrop-blur"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4" data-reveal-stagger>
            <div className="rounded-[2rem] border border-white/14 bg-white/12 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-[#d9c2a6]" />
                <h2 className="text-2xl font-bold">
                  Gizlilik, etik cerceve, net surec
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {demo.approachText}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {demo.sessionTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4 text-sm font-bold text-white backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11180f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-7"
            data-reveal="left"
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d9c2a6]">
              Gorusme cercevesi
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Danisanin kendini hazir hissetmesini saglayan netlik.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              Ilk temas anindan itibaren gizlilik, uygun gorusme turu ve seans
              akisi sade bir dille paylasilir.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3" data-reveal-stagger>
            {[
              ["Gizlilik", "Paylasilan bilgiler etik cercevede korunur."],
              [
                "Uygunluk",
                "Online veya yuz yuze gorusme secenekleri netlestirilir.",
              ],
              [
                "Takip",
                "Surec danisanin ihtiyacina gore duzenli takip edilir.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="premium-card rounded-[2rem] border border-white/10 bg-[#182116] p-6"
              >
                <Check className="h-7 w-7 text-[#d9c2a6]" />
                <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#182116] py-4">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 text-sm font-bold text-white/70 md:grid-cols-3 lg:px-6">
          <a href={a.telHref} className="transition hover:text-white">
            <Phone className="mr-2 inline h-4 w-4 text-[#d9c2a6]" />
            {demo.phone}
          </a>
          <a
            href={demo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <MapPin className="mr-2 inline h-4 w-4 text-[#d9c2a6]" />
            {demo.address}
          </a>
          {demo.instagramUrl ? (
            <a
              href={demo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <ExternalLink className="mr-2 inline h-4 w-4 text-[#d9c2a6]" />
              Instagram
            </a>
          ) : null}
        </div>
      </section>

      <section id="yaklasim" className="bg-[#f7f5ef] py-20 text-[#182116]">
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div data-reveal="left">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--clinic-primary)]">
                Surec
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Randevu oncesi belirsizligi azaltan profesyonel akis.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-4" data-reveal-stagger>
              {steps.map((step, index) => (
                <article
                  key={step}
                  className="premium-card rounded-[2rem] border border-[#e0dacd] bg-white p-5 shadow-sm"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--clinic-primary)] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-7 text-xl font-bold">{step}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f6859]">
                    {index === 0
                      ? "Danisan uygun kanaldan ilk talebini iletir."
                      : index === 1
                        ? "Gorusme turu, saat ve surec netlesir."
                        : index === 2
                          ? "Gizlilik odagiyla gorusme alani kurulur."
                          : "Surec ihtiyaclara gore takip edilir."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="alanlar" className="bg-white py-20 text-[#182116]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1fr] lg:px-6">
          <div
            className="premium-image-wrap relative min-h-[520px] overflow-hidden rounded-[3rem] bg-[#eef4ec] shadow-[0_26px_90px_rgba(24,33,22,0.14)]"
            data-reveal="left"
          >
            <Image
              src={a.officeImage}
              alt={`${demo.practiceName} gorusme atmosferi`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="premium-image object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-reveal="right">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--clinic-primary)]">
              Calisma alanlari
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Destek almak isteyen kisinin dogru alani hizlica bulmasini
              saglayan yapi.
            </h2>
            <div className="mt-8 grid gap-4">
              {demo.therapyAreas.map((area) => (
                <article
                  key={area.title}
                  className="border-b border-[#e3ded2] pb-5"
                >
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f6859]">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="uzman" className="bg-[#f7f5ef] py-20 text-[#182116]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-6">
          <div
            className="premium-image-wrap relative min-h-[500px] overflow-hidden rounded-[3rem] bg-[#e8e0d4]"
            data-reveal="left"
          >
            <Image
              src={a.profileImage}
              alt={`${demo.psychologistName} profil gorseli`}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="premium-image object-cover"
            />
          </div>
          <div className="flex flex-col justify-center" data-reveal="right">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--clinic-primary)]">
              Uzman
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {demo.psychologistName}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#5f6859]">
              {demo.biography}
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection demo={demo} tone="dark" />

      <section id="iletisim" className="bg-[#182116] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
          <div data-reveal="left">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d9c2a6]">
              Iletisim
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Ilk gorusme adimi tek ekranda.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              {demo.address}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full bg-[#d9c2a6] px-7 text-base font-bold text-[#11180f]"
              >
                Randevu Al
              </a>
              <a
                href={a.telHref}
                className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-base font-bold text-white"
              >
                {demo.phone}
              </a>
            </div>
          </div>
          <div className="grid gap-4" data-reveal-stagger>
            {demo.testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="premium-card rounded-[2rem] border border-white/12 bg-white/[0.08] p-5"
              >
                <HeartHandshake className="h-7 w-7 text-[#d9c2a6]" />
                <p className="mt-4 text-sm leading-7 text-white/74">
                  {testimonial.comment}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VariantFooter demo={demo} a={a} tone="dark" />
      <MobileBar a={a} />
    </main>
  );
}

function Brand({
  demo,
  logo,
  rounded,
  dark = false,
}: {
  demo: PsychologistDemo;
  logo: string;
  rounded: string;
  dark?: boolean;
}) {
  return (
    <a href="#hero" className="group flex min-w-0 items-center gap-3">
      <span
        className={`relative h-12 w-12 shrink-0 overflow-hidden ${rounded} bg-white shadow-xl transition duration-300 group-hover:-translate-y-0.5`}
      >
        <Image
          src={logo}
          alt={`${demo.practiceName} logo`}
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
      <span className="min-w-0">
        <span
          className={`block truncate text-sm font-black uppercase tracking-[0.16em] ${dark ? "text-[#d9c2a6]" : "text-[#211c18]"}`}
        >
          {demo.practiceName}
        </span>
        <span
          className={`block truncate text-xs font-semibold ${dark ? "text-white/72" : "text-[#75695d]"}`}
        >
          {demo.psychologistName}
        </span>
      </span>
    </a>
  );
}

function NavLinks({ tone }: { tone: "warm" | "dark" }) {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={
            tone === "dark"
              ? "rounded-full px-4 py-2 text-sm font-bold text-white/70 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              : "rounded-full px-4 py-2 text-sm font-bold text-[#5f554b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#211c18]"
          }
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function WarmContact({ demo, a }: { demo: PsychologistDemo; a: Assets }) {
  return (
    <section id="iletisim" className="bg-[#f4efe6] py-20 text-[#211c18]">
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="rounded-[3rem] bg-[#211c18] p-7 text-white shadow-[0_30px_90px_rgba(33,28,24,0.18)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d8c3a4]">
                Iletisim
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Ilk adimi kolaylastiran sade randevu akisi.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
                Bu sayfa DG Digital tarafindan hazirlanmis ornek bir on
                calismadir.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full bg-[#d8c3a4] px-7 text-sm font-black text-[#211c18]"
              >
                Randevu Al
              </a>
              <a
                href={a.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="premium-button inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white px-7 text-sm font-black text-[#211c18]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <InfoTile
            icon={Phone}
            label="Telefon"
            value={demo.phone}
            href={a.telHref}
          />
          <InfoTile
            icon={MapPin}
            label="Adres"
            value={demo.address}
            href={demo.mapsUrl}
          />
          {demo.instagramUrl ? (
            <InfoTile
              icon={ExternalLink}
              label="Instagram"
              value="Profili ac"
              href={demo.instagramUrl}
            />
          ) : (
            <InfoTile
              icon={MessageCircle}
              label="WhatsApp"
              value="Mesaj gonder"
              href={a.whatsappHref}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({
  demo,
  tone,
}: {
  demo: PsychologistDemo;
  tone: "warm" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section
      className={
        dark
          ? "bg-[#11180f] py-20 text-white"
          : "bg-[#fbfdfc] py-20 text-[#26392d]"
      }
    >
      <div className="mx-auto max-w-[92rem] px-5 lg:px-8">
        <div className="max-w-4xl" data-reveal>
          <p
            className={
              dark
                ? "text-sm font-black uppercase tracking-[0.22em] text-[#d9c2a6]"
                : "text-sm font-black uppercase tracking-[0.22em] text-[var(--clinic-primary)]"
            }
          >
            Danisan izlenimleri
          </p>
          <h2
            className={
              dark
                ? "mt-5 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
                : "mt-5 text-4xl font-black leading-tight tracking-tight text-[#26392d] md:text-6xl"
            }
          >
            Sakin, olculu ve guven veren bir ilk izlenim.
          </h2>
          <p
            className={
              dark
                ? "mt-6 max-w-3xl text-base leading-8 text-white/66"
                : "mt-6 max-w-3xl text-base leading-8 text-[#657461]"
            }
          >
            Randevu, iletisim ve uzmanlik alanlari net sunuldugunda danisanin
            ilk adimi daha rahat atmasi hedeflenir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3" data-reveal-stagger>
          {demo.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={
                dark
                  ? "premium-card rounded-[2rem] border border-white/10 bg-white/[0.08] p-7 shadow-sm"
                  : "premium-card rounded-[2rem] border border-[#dbe8d9] bg-[#f4efe6] p-7 shadow-sm"
              }
            >
              <HeartHandshake
                className={
                  dark
                    ? "h-8 w-8 text-[#d9c2a6]"
                    : "h-8 w-8 text-[var(--clinic-primary)]"
                }
              />
              <p
                className={
                  dark
                    ? "mt-7 text-base leading-8 text-white/70"
                    : "mt-7 text-base leading-8 text-[#657461]"
                }
              >
                {testimonial.comment}
              </p>
              <p
                className={
                  dark
                    ? "mt-7 text-lg font-black text-white"
                    : "mt-7 text-lg font-black text-[#26392d]"
                }
              >
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="premium-card flex min-w-0 gap-4 rounded-[2rem] border border-[#211c18]/10 bg-white p-5 text-[#211c18] shadow-sm"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f0e6d7] text-[var(--clinic-primary)]">
        <Icon className="h-6 w-6" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black uppercase tracking-[0.12em] text-[#75695d]">
          {label}
        </span>
        <span className="mt-1 block break-words text-base font-black leading-7">
          {value}
        </span>
      </span>
    </a>
  );
}

function VariantFooter({
  demo,
  a,
  tone,
}: {
  demo: PsychologistDemo;
  a: Assets;
  tone: "warm" | "dark";
}) {
  return (
    <footer
      className={
        tone === "dark" ? "bg-[#0c120a] text-white" : "bg-[#211c18] text-white"
      }
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_1fr] lg:px-6">
        <div>
          <Brand demo={demo} logo={a.logo} rounded="rounded-2xl" dark />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/64">
            Bu sayfa DG Digital tarafindan hazirlanmis ornek bir on calismadir.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#d9c2a6]">
            Sayfa
          </h2>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-white/66">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#d9c2a6]">
            Iletisim
          </h2>
          <div className="mt-5 space-y-4 text-sm font-semibold text-white/66">
            <a
              className="flex gap-3 transition hover:text-white"
              href={a.telHref}
            >
              <Phone className="h-5 w-5 shrink-0 text-[#d9c2a6]" />
              {demo.phone}
            </a>
            <a
              className="flex gap-3 transition hover:text-white"
              href={a.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5 shrink-0 text-[#d9c2a6]" />
              WhatsApp
            </a>
            <a
              className="flex gap-3 transition hover:text-white"
              href={demo.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="h-5 w-5 shrink-0 text-[#d9c2a6]" />
              <span>{demo.address}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/44 md:flex-row md:items-center md:justify-between lg:px-6">
          <p>Demo on calisma</p>
          <p>denizgokbudak.com</p>
        </div>
      </div>
    </footer>
  );
}

function MobileBar({ a }: { a: Assets }) {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-[1fr_auto] gap-3 md:hidden">
      <a
        href={DEMO_BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className="premium-button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#d9c2a6] px-5 text-sm font-bold text-[#11180f] shadow-2xl"
      >
        <CalendarCheck className="h-5 w-5" />
        Randevu
      </a>
      <a
        href={a.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="premium-button inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#19a36b] text-white shadow-2xl"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
