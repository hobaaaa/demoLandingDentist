import { CalendarCheck, MessageCircle } from "lucide-react";
import { brand } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-[1fr_auto] gap-3 md:inset-auto md:bottom-6 md:right-6 md:flex md:flex-col">
      <a
        href="#iletisim"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#13233a] px-5 text-sm font-semibold text-white shadow-2xl shadow-[#13233a]/25 md:hidden"
      >
        <CalendarCheck className="h-5 w-5" />
        Randevu Al
      </a>
      <a
        href={brand.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#19a36b] text-white shadow-2xl shadow-[#19a36b]/30 transition hover:bg-[#148a5a] md:h-14 md:w-14"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
