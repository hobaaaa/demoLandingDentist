import Image from "next/image";
import type React from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
} from "lucide-react";
import {
  brand,
  clinicImage,
  doctors,
  faqs,
  heroImage,
  processSteps,
  reasons,
  smileAfterImage,
  smileBeforeImage,
  stats,
  testimonials,
  treatments,
  trustItems,
} from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonClassName } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#f6fbfa]">
      <div className="absolute inset-x-0 top-0 h-40 bg-white" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-6 lg:py-20">
        <div className="flex flex-col justify-center" data-reveal="left">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#cfe5e1] bg-white px-4 py-2 text-sm font-semibold text-[#0f5f5c] shadow-sm">
            <Star className="h-4 w-4 fill-[#d9a441] text-[#d9a441]" />
            Denizli merkezli premium diş hekimliği deneyimi
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-[#13233a] md:text-6xl lg:text-7xl">
            Gülüşünüzü güvenle yenileyin.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#536966] md:text-xl">
            Deneyimli hekim kadromuz, modern teknolojimiz ve kişiye özel
            tedavi yaklaşımımızla sağlıklı gülüşler tasarlıyoruz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className={buttonClassName({ size: "lg" })} href="#iletisim">
              Randevu Al
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              className={buttonClassName({ variant: "secondary", size: "lg" })}
              href="#tedaviler"
            >
              Tedavileri İncele
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" data-reveal-stagger>
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#dce8e6] bg-white p-4 text-sm font-semibold text-[#203c39] shadow-sm"
              >
                <Check className="mb-3 h-5 w-5 text-[#0f5f5c]" />
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
            className="relative ml-auto h-full overflow-hidden rounded-[2.4rem] bg-[#dce8e6] shadow-[0_34px_90px_rgba(19,35,58,0.18)]"
            data-reveal="right"
          >
            <Image
              src={heroImage}
              alt="Modern bir klinikte diş hekimi ve hasta görüşmesi"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-10">
      <div
        className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-6"
        data-reveal-stagger
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-[#dce8e6] bg-[#fbfdfc] p-6 text-center"
          >
            <p className="text-4xl font-bold text-[#0f5f5c]">{item.value}</p>
            <p className="mt-2 text-sm font-semibold text-[#536966]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="hakkimizda" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]" data-reveal="left">
          <Image
            src={clinicImage}
            alt="Modern ve ferah diş kliniği ortamı"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center" data-reveal="right">
          <SectionIntro
            eyebrow="Hakkımızda"
            title="Tedaviden önce güvenli ve konforlu bir deneyim tasarlıyoruz."
            description="Liva Dental Clinic olarak yalnızca diş tedavisi değil, güvenli ve konforlu bir tedavi deneyimi sunuyoruz."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2" data-reveal-stagger>
            {[
              "Modern klinik ortamı",
              "Uzman hekim kadrosu",
              "Dijital diş hekimliği",
              "Yüksek hijyen standartları",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#203c39]">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eef8f6] text-[#0f5f5c]">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-8 text-[#5a6d6b]">
            Muayeneden tedavi sonrası takibe kadar her adım, hastanın kendini
            bilgilendirilmiş ve rahat hissetmesi için planlanır. Dijital
            görüntüleme, sterilizasyon protokolleri ve sakin klinik atmosferi
            aynı standart altında bir araya gelir.
          </p>
        </div>
      </div>
    </section>
  );
}

export function TreatmentsSection() {
  return (
    <section id="tedaviler" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Tedaviler"
            title="Kliniğinizin değerini gösteren kapsamlı tedavi sunumu."
            description="Her tedavi kartı hastanın anlayacağı netlikte, güven veren ve satış demosunda ikna edici olacak şekilde düzenlendi."
          />
          <a
            className={buttonClassName({ variant: "secondary", size: "md" })}
            href="#iletisim"
            data-reveal="right"
          >
            Tedavi danışmanlığı al
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {treatments.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={cn(
                  "group rounded-3xl border border-[#dce8e6] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
                  item.highlight && "md:col-span-2 lg:col-span-2",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef8f6] text-[#0f5f5c]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-[#9a7740]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#13233a]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5a6d6b]">
                  {item.description}
                </p>
                <a
                  href="#iletisim"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0f5f5c] transition group-hover:gap-3"
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

export function ReasonsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Neden bizi tercih etmelisiniz?"
          title="Hasta güvenini artıran her detay görünür olsun."
          description="Demo site, kliniğin hizmet kalitesini yalnızca anlatmaz; düzenli bilgi mimarisiyle hissettirir."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-[#dce8e6] bg-[#fbfdfc] p-6"
              >
                <Icon className="h-7 w-7 text-[#0f5f5c]" />
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
  );
}

export function DoctorsSection() {
  return (
    <section id="doktorlar" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Doktorlarımız"
          title="Güven veren uzmanlık profilleri."
          description="Örnek doktor kartları, gerçek bir kliniğin ekip sayfası gibi tutarlı ve profesyonel görünür."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal-stagger>
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-3xl border border-[#dce8e6] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/4.3]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} portre fotoğrafı`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#13233a]">{doctor.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#0f5f5c]">
                  {doctor.specialty}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#5a6d6b]">
                  Hastanın beklentisini dinleyen, tedavi sürecini açık biçimde
                  anlatan ve doğal sonuçlara odaklanan yaklaşım.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Tedavi süreci"
          title="Belirsizliği azaltan açık ve sakin bir yol haritası."
          description="Hastalar hangi adımda ne olacağını gördüğünde randevu alma eşiği düşer."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4" data-reveal-stagger>
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-3xl bg-[#13233a] p-6 text-white">
              <span className="text-sm font-semibold text-[#9fd7cf]">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="yorumlar" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="Hasta yorumları"
          title="Abartısız, doğal ve güven veren deneyimler."
          description="Kısa hasta yorumları, reklam dili yerine gerçekçi karar destek noktaları sunar."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-[#0f5f5c]" />
              <p className="mt-5 text-sm leading-7 text-[#4f625f]">{item.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-bold text-[#13233a]">{item.name}</p>
                <div className="flex text-[#d9a441]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SmileDesignSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <div className="flex flex-col justify-center" data-reveal="left">
          <SectionIntro
            eyebrow="Gülüş tasarımı"
            title="Gülüş tasarımında doğal sonuçlar"
            description="Estetik diş hekimliğinde hedef; yüz ifadesiyle uyumlu, temiz ve doğal bir görünüm oluşturmaktır."
          />
          <p className="mt-6 text-base leading-8 text-[#5a6d6b]">
            Bu sunum alanı gerçek hasta sonucu iddiası taşımaz; klinik için
            hazırlanabilecek estetik vaka anlatımının görsel düzenini gösterir.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2" data-reveal-stagger>
          {[
            { label: "Planlama", src: smileBeforeImage },
            { label: "Hedef görünüm", src: smileAfterImage },
          ].map((item) => (
            <div key={item.label} className="overflow-hidden rounded-3xl bg-[#eef8f6]">
              <div className="relative aspect-[4/4.5]">
                <Image
                  src={item.src}
                  alt={`${item.label} için demo gülüş tasarımı görseli`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-[#0f5f5c]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="sss" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-6">
        <SectionIntro
          eyebrow="Sık sorulanlar"
          title="Randevu öncesi en çok merak edilenler."
          description="Accordion yapısı mobilde de rahat okunacak şekilde kurgulandı."
        />
        <Accordion
          type="single"
          collapsible
          className="rounded-3xl border border-[#dce8e6] bg-white px-6"
          data-reveal="right"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
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
                Muayene ve tedavi seçenekleri hakkında bilgi almak için bizimle
                iletişime geçin.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className={buttonClassName({ size: "lg" })} href="#iletisim">
                Randevu Oluştur
              </a>
              <a
                className={buttonClassName({ variant: "secondary", size: "lg" })}
                href={brand.phoneHref}
              >
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="iletisim" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionIntro
          eyebrow="İletişim"
          title="Randevu talebini kolaylaştıran net iletişim alanı."
          description="Telefon, WhatsApp, form ve harita alanı tek bölümde toplanarak ziyaretçinin karar anı desteklenir."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5" data-reveal-stagger>
            <InfoCard icon={MapPin} title="Adres" text={brand.address} />
            <InfoCard icon={Phone} title="Telefon" text={brand.phone} href={brand.phoneHref} />
            <InfoCard icon={Mail} title="E-posta" text={brand.email} href={`mailto:${brand.email}`} />
            <InfoCard icon={Clock} title="Çalışma saatleri" text={brand.hours} />
            <div className="grid min-h-64 place-items-center rounded-[2rem] border border-[#dce8e6] bg-[linear-gradient(135deg,#eaf7f4,#ffffff)] p-6 text-center">
              <div>
                <MapPin className="mx-auto h-10 w-10 text-[#0f5f5c]" />
                <p className="mt-4 text-lg font-bold text-[#13233a]">
                  Denizli merkez demo harita alanı
                </p>
                <p className="mt-2 text-sm text-[#5a6d6b]">
                  Gerçek projede Google Maps veya Yandex Maps yerleşimi eklenebilir.
                </p>
              </div>
            </div>
          </div>
          <div data-reveal="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-3xl border border-[#dce8e6] bg-white p-5 shadow-sm">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eef8f6] text-[#0f5f5c]">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="text-sm font-semibold text-[#6a7c79]">{title}</p>
        <p className="mt-1 font-bold text-[#13233a]">{text}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
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
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f5f5c]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#5a6d6b]">{description}</p>
    </div>
  );
}
