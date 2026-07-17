"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";
import { createTelHref } from "@/lib/contact";

type ClinicHeaderProps = {
  clinic: ClinicDemo;
  logo: string;
};

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Tedaviler", href: "#tedaviler" },
  { label: "Doktor", href: "#doktorlar" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

export function ClinicHeader({ clinic, logo }: ClinicHeaderProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.12, 0.28, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe8e6] bg-white/92 backdrop-blur-xl">
      <div className="hidden bg-[#13233a] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--clinic-secondary)]" />
              {clinic.workingHours[0]?.hours ?? "09:00 - 18:00"}
            </span>
            <a
              className="inline-flex items-center gap-2 hover:text-[var(--clinic-secondary)]"
              href={createTelHref(clinic.phone)}
            >
              <Phone className="h-4 w-4 text-[var(--clinic-secondary)]" />
              {clinic.phone}
            </a>
          </div>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--clinic-secondary)]" />
            {clinic.address}
          </span>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6"
        aria-label="Ana navigasyon"
      >
        <a href="#hero" className="group flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-2xl border border-[#dce8e6] bg-white shadow-lg shadow-teal-900/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl">
            <Image
              src={logo}
              alt={`${clinic.clinicName} logo`}
              fill
              sizes="48px"
              className="object-cover"
            />
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-[#13233a]">
              {clinic.clinicName}
            </span>
            <span className="block text-xs font-medium text-[#627673]">
              {clinic.doctorName}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[var(--clinic-secondary)] hover:text-[var(--clinic-primary)] ${
                active === item.href
                  ? "bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]"
                  : "text-[#425653]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className="premium-button hidden h-12 items-center justify-center rounded-full bg-[var(--clinic-primary)] px-6 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(15,95,92,0.24)] lg:inline-flex"
          href="#iletisim"
        >
          <span>Randevu Al</span>
        </a>

        <button
          type="button"
          className="premium-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e5e2] text-[#13233a] hover:border-[var(--clinic-primary)] hover:bg-[var(--clinic-secondary)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Menüyü aç veya kapat"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#dbe8e6] bg-white px-5 py-4 shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[var(--clinic-secondary)] hover:text-[var(--clinic-primary)] ${
                  active === item.href
                    ? "bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]"
                    : "text-[#203c39]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="premium-button mt-2 inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--clinic-primary)] px-7 text-base font-semibold text-white"
            >
              <span>Randevu Al</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
