"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { brand, navItems } from "@/data/site";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
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

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe8e6] bg-white/92 backdrop-blur-xl">
      <div className="hidden bg-[#13233a] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#9fd7cf]" />
              {brand.hours}
            </span>
            <a
              className="inline-flex items-center gap-2 hover:text-[#bfe8e2]"
              href={brand.phoneHref}
            >
              <Phone className="h-4 w-4 text-[#9fd7cf]" />
              {brand.phone}
            </a>
          </div>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#9fd7cf]" />
            {brand.city}
          </span>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6"
        aria-label="Ana navigasyon"
      >
        <a href="#hero" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0f5f5c] text-white shadow-lg shadow-[#0f5f5c]/20">
            <CalendarDays className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-[#13233a]">
              {brand.name}
            </span>
            <span className="block text-xs font-medium text-[#627673]">
              Denizli Diş Kliniği
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-semibold text-[#425653] transition hover:bg-[#eef8f6] hover:text-[#0f5f5c]",
                active === item.href && "bg-[#eef8f6] text-[#0f5f5c]",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className={buttonClassName({ size: "md" })} href="#iletisim">
            Randevu Al
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7e5e2] text-[#13233a] lg:hidden"
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
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-semibold text-[#203c39]",
                  active === item.href && "bg-[#eef8f6] text-[#0f5f5c]",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={closeMenu}
              className={cn(buttonClassName({ size: "lg" }), "mt-2 w-full")}
            >
              Randevu Al
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
