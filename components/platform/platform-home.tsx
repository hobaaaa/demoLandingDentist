import type React from "react";
import Link from "next/link";
import { ArrowRight, Brain, Stethoscope } from "lucide-react";

const sectors = [
  {
    title: "Diş Kliniği",
    description:
      "Tedaviler, doktor profili, hasta yorumları ve hızlı randevu CTA'ları olan klinik demosu.",
    href: "/demo/dis-klinigi/genel",
    legacyHref: "/demo/genel",
    icon: Stethoscope,
    color: "#0f5f5c",
    background: "#eef8f6",
  },
  {
    title: "Psikolog",
    description:
      "Terapi alanları, uzman yaklaşımı, gizlilik vurgusu ve seans bilgisi odaklı psikolog demosu.",
    href: "/demo/psikolog/genel",
    icon: Brain,
    color: "#5b5f97",
    background: "#f1effb",
  },
];

export function PlatformHome() {
  return (
    <main className="min-h-screen bg-[#fbfdfc] px-5 py-10 text-[#13233a] sm:px-6">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f5f5c]">
            DG Digital Demo Platform
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#13233a] md:text-6xl">
            Müşterilere özel sektör demo sayfaları.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a6d6b] md:text-lg">
            Bu alan outreach sonrası paylaşılacak ön çalışmalar için kullanılır.
            Her sektör kendi tasarım dili ve veri modeliyle tek platform altında
            çalışır.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <article
                key={sector.href}
                style={
                  {
                    "--sector-color": sector.color,
                    "--sector-bg": sector.background,
                  } as React.CSSProperties
                }
                className="premium-card rounded-3xl border border-[#dce8e6] bg-white p-6 shadow-sm"
              >
                <span className="premium-card-icon grid h-12 w-12 place-items-center rounded-2xl bg-[var(--sector-bg)] text-[var(--sector-color)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-[#13233a]">
                  {sector.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5a6d6b]">
                  {sector.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={sector.href}
                    className="premium-button group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--sector-color)] px-6 text-sm font-semibold text-white"
                  >
                    <span>Genel Demo</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {sector.legacyHref ? (
                    <Link
                      href={sector.legacyHref}
                      className="premium-button inline-flex h-12 items-center justify-center rounded-full border border-[#b7d8d4] bg-white px-6 text-sm font-semibold text-[#103d3b]"
                    >
                      <span>Eski Link</span>
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
