import {
  AboutSection,
  ContactSection,
  CtaSection,
  DoctorsSection,
  FaqSection,
  HeroSection,
  ProcessSection,
  ReasonsSection,
  SmileDesignSection,
  StatsSection,
  TestimonialsSection,
  TreatmentsSection,
} from "@/components/sections/home-sections";
import { FloatingActions } from "@/components/layout/floating-actions";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { RevealObserver } from "@/components/ui/reveal-observer";
import { brand } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: brand.name,
    description:
      "Liva Dental Clinic; implant, estetik diş hekimliği, diş beyazlatma ve ortodonti tedavilerinde modern ve kişiye özel çözümler sunar.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yenişehir Mah. Sağlık Cad. No: 24",
      addressLocality: "Merkezefendi",
      addressRegion: "Denizli",
      addressCountry: "TR",
    },
    telephone: brand.phone,
    email: brand.email,
    openingHours: "Mo-Sa 09:00-19:00",
    medicalSpecialty: "Dentistry",
    url: "https://livadentalclinic.example.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevealObserver />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <TreatmentsSection />
        <ReasonsSection />
        <DoctorsSection />
        <ProcessSection />
        <TestimonialsSection />
        <SmileDesignSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
