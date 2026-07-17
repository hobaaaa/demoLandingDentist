import { Quote, Star } from "lucide-react";
import type { ClinicDemo } from "@/types/clinic";

type ClinicTestimonialsProps = {
  clinic: ClinicDemo;
};

export function ClinicTestimonials({ clinic }: ClinicTestimonialsProps) {
  return (
    <section id="yorumlar" className="bg-[#f6fbfa] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="max-w-3xl" data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--clinic-primary)]">
            Hasta yorumları
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#13233a] md:text-5xl">
            Abartısız, doğal ve güven veren deneyimler.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5a6d6b]">
            Kısa hasta yorumları, reklam dili yerine gerçekçi karar destek
            noktaları sunar.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {clinic.testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="premium-card rounded-3xl border border-transparent bg-white p-6 shadow-sm"
            >
              <span className="premium-card-icon inline-grid h-12 w-12 place-items-center rounded-2xl bg-[var(--clinic-secondary)] text-[var(--clinic-primary)]">
                <Quote className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm leading-7 text-[#4f625f]">
                {testimonial.comment}
              </p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="font-bold text-[#13233a]">{testimonial.name}</p>
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
