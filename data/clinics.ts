import type { ClinicDemo } from "@/types/clinic";

export const clinics = {
  genel: {
    slug: "genel",
    clinicName: "DG Dental Demo Kliniği",
    doctorName: "Dt. Deniz Arslan",
    title: "Modern diş hekimliği için güven veren dijital deneyim",
    description:
      "Randevu odaklı, mobil uyumlu ve premium bir diş kliniği web sitesi demosu. Hastalarınız ihtiyaç duyduğu bilgiye hızla ulaşır ve kolayca iletişime geçer.",
    phone: "+90 555 111 22 33",
    whatsapp: "+90 555 111 22 33",
    email: "demo@dgdigital.com.tr",
    address: "Atatürk Mah. Sağlık Cad. No:12, İstanbul",
    instagramUrl: "https://www.instagram.com/",
    mapsUrl: "https://maps.google.com/?q=Istanbul",
    logo: "/demos/default/logo.png",
    heroImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85",
    aboutImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    doctorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    primaryColor: "#0f5f5c",
    secondaryColor: "#eef8f6",
    services: [
      {
        title: "Estetik Diş Hekimliği",
        description:
          "Gülüş tasarımı, bonding ve estetik restorasyonlarla doğal görünümlü sonuçlar.",
      },
      {
        title: "İmplant Tedavisi",
        description:
          "Eksik dişler için konforlu, uzun ömürlü ve kişiye özel implant planlaması.",
      },
      {
        title: "Diş Beyazlatma",
        description:
          "Klinik ortamında güvenli, kontrollü ve hızlı beyazlatma uygulamaları.",
      },
      {
        title: "Çocuk Diş Hekimliği",
        description:
          "Çocukların kliniğe güvenle alışmasını sağlayan nazik tedavi yaklaşımı.",
      },
    ],
    aboutText:
      "Kliniğimizde dijital görüntüleme, detaylı muayene ve şeffaf tedavi planlaması ile hastalarımıza güvenli bir deneyim sunuyoruz. Her randevuda ihtiyaçları dinleyen, sade anlatan ve sonuç odaklı ilerleyen bir yaklaşım benimsiyoruz.",
    doctorBiography:
      "Dt. Deniz Arslan, estetik diş hekimliği ve koruyucu tedaviler alanında çalışan örnek bir demo profilidir. Tedavi sürecinde hasta konforunu, açık iletişimi ve doğal sonuçları önceliklendirir.",
    testimonials: [
      {
        name: "Elif K.",
        comment:
          "Randevu süreci çok kolaydı. Tedavi planı sade bir şekilde anlatıldı ve sonuçtan çok memnun kaldım.",
      },
      {
        name: "Mert S.",
        comment:
          "Klinik atmosferi güven veriyor. Özellikle WhatsApp üzerinden hızlı dönüş almam büyük kolaylık oldu.",
      },
      {
        name: "Ayşe T.",
        comment:
          "Gülüş tasarımı süreci beklentimin üzerinde geçti. Doğal ve temiz bir sonuç aldım.",
      },
    ],
    workingHours: [
      { day: "Pazartesi - Cuma", hours: "09:00 - 18:30" },
      { day: "Cumartesi", hours: "10:00 - 15:00" },
      { day: "Pazar", hours: "Kapalı" },
    ],
    seoTitle: "Genel Diş Kliniği Web Sitesi Demosu | DG Digital",
    seoDescription:
      "DG Digital tarafından hazırlanmış genel diş kliniği web sitesi demosu.",
  },
  "alp-dis": {
    slug: "alp-dis",
    clinicName: "Alp Diş Kliniği",
    doctorName: "Dt. Alp Yılmaz",
    title: "Sağlıklı ve estetik gülüşler için kişisel tedavi planı",
    description:
      "Alp Diş Kliniği demosu, potansiyel hastaların randevu almaya daha hızlı karar verebilmesi için güven, uzmanlık ve iletişimi öne çıkarır.",
    phone: "+90 532 444 10 20",
    whatsapp: "+90 532 444 10 20",
    email: "iletisim@alpdisdemo.com",
    address: "Mimar Sinan Mah. Klinik Sok. No:8, Denizli",
    instagramUrl: "https://www.instagram.com/",
    mapsUrl: "https://maps.google.com/?q=Denizli",
    logo: "/demos/alp-dis/logo.png",
    heroImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=85",
    aboutImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    doctorImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
    primaryColor: "#1d4ed8",
    secondaryColor: "#dbeafe",
    services: [
      {
        title: "Gülüş Tasarımı",
        description:
          "Yüz hatları, diş formu ve beklentiler birlikte değerlendirilerek planlanır.",
      },
      {
        title: "Ortodontik Danışmanlık",
        description:
          "Çapraşıklık ve kapanış problemleri için anlaşılır, aşamalı yol haritası.",
      },
      {
        title: "İmplant Üstü Protez",
        description:
          "Eksik dişlerin fonksiyon ve estetik bütünlüğünü destekleyen çözümler.",
      },
      {
        title: "Rutin Kontrol",
        description:
          "Düzenli takip, diş taşı temizliği ve koruyucu bakım planlaması.",
      },
    ],
    aboutText:
      "Alp Diş Kliniği demo sayfası, gerçek bir işletmeyi temsil etmeyen örnek içeriklerle hazırlanmıştır. Sayfa yapısı; hizmetleri, doktor profilini, hasta yorumlarını ve iletişim aksiyonlarını tek bir akışta toplar.",
    doctorBiography:
      "Dt. Alp Yılmaz örnek bir demo doktor profilidir. Dijital muayene akışı, sade tedavi anlatımı ve hasta konforuna odaklanan modern bir klinik deneyimini temsil eder.",
    testimonials: [
      {
        name: "Burcu A.",
        comment:
          "İlk muayenede tüm seçenekler net anlatıldı. Randevu almak ve bilgi sormak çok kolaydı.",
      },
      {
        name: "Kerem D.",
        comment:
          "Web sitesi üzerinden kliniği tanımak ve hizmetleri görmek karar vermemi hızlandırdı.",
      },
      {
        name: "Selin E.",
        comment:
          "Doktor tanıtımı ve yorumlar güven verdi. Mobilde her şey çok rahat okunuyor.",
      },
    ],
    workingHours: [
      { day: "Pazartesi - Cuma", hours: "09:30 - 19:00" },
      { day: "Cumartesi", hours: "10:00 - 16:00" },
      { day: "Pazar", hours: "Kapalı" },
    ],
    seoTitle: "Alp Diş Kliniği Demo Web Sitesi",
    seoDescription:
      "Alp Diş Kliniği için hazırlanmış kişiselleştirilmiş diş kliniği demo sayfası.",
  },
} satisfies Record<string, ClinicDemo>;

export type ClinicSlug = keyof typeof clinics;

export function getClinicBySlug(slug: string): ClinicDemo | undefined {
  return clinics[slug as ClinicSlug];
}
