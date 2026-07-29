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
  "mustafa-resul-basgun": {
    slug: "mustafa-resul-basgun",
    clinicName: "Dt. Mustafa Resul Başgün",
    doctorName: "Dt. Mustafa Resul Başgün",
    title: "Denizli'de güven veren, modern ve estetik diş hekimliği deneyimi",
    description:
      "Dt. Mustafa Resul Başgün için hazırlanan bu demo sayfası; hastaların adres, telefon, hizmetler ve randevu aksiyonlarına hızlıca ulaşabileceği premium bir klinik sunumu sağlar.",
    phone: "+90 531 575 83 32",
    whatsapp: "+90 531 575 83 32",
    email: "iletisim@mustafaresulbasgun.com",
    address:
      "Sırakapılar, Selçuk Cd. No:37, 20010, 20040 Denizli Merkezefendi/Denizli",
    instagramUrl: "https://www.instagram.com/",
    mapsUrl:
      "https://maps.google.com/?q=S%C4%B1rakap%C4%B1lar%20Sel%C3%A7uk%20Cd.%20No%3A37%20Merkezefendi%20Denizli",
    logo: "/demos/mustafa-resul-basgun/logo.png",
    heroImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85",
    aboutImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    doctorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    primaryColor: "#075a88",
    secondaryColor: "#eef7fb",
    services: [
      {
        title: "Estetik Diş Hekimliği",
        description:
          "Gülüş estetiğini destekleyen doğal görünümlü restorasyon ve bakım planlamaları.",
      },
      {
        title: "Diş Beyazlatma",
        description:
          "Daha aydınlık bir gülüş için kontrollü, güvenli ve klinik ortamında uygulanan beyazlatma işlemleri.",
      },
      {
        title: "İmplant Danışmanlığı",
        description:
          "Eksik dişler için muayene, görüntüleme ve kişiye uygun tedavi seçeneklerinin değerlendirilmesi.",
      },
      {
        title: "Rutin Muayene ve Bakım",
        description:
          "Düzenli kontrol, diş taşı temizliği ve koruyucu ağız-diş sağlığı takibi.",
      },
    ],
    aboutText:
      "Denizli Merkezefendi'de yer alan bu demo klinik sayfası; adres, telefon ve randevu aksiyonlarını görünür tutan, hastanın güvenle karar vermesini kolaylaştıran sade ve premium bir yapı ile hazırlandı.",
    doctorBiography:
      "Dt. Mustafa Resul Başgün için hazırlanan bu demo profil, modern diş hekimliği yaklaşımını, hasta bilgilendirmesini ve konforlu randevu deneyimini öne çıkarır.",
    testimonials: [
      {
        name: "Hasta Yorumu",
        comment:
          "Muayene öncesinde adres ve iletişim bilgilerine kolayca ulaşmak güven verdi. Randevu aksiyonları çok netti.",
      },
      {
        name: "Denizli Hastası",
        comment:
          "Sayfa sade, hızlı ve mobilde rahat okunuyor. Hizmetler ve doktor bilgisi karar vermeyi kolaylaştırıyor.",
      },
      {
        name: "Örnek Yorum",
        comment:
          "Klinik bilgileri profesyonel görünüyor. Telefon ve WhatsApp bağlantıları hızlı iletişim için yeterli.",
      },
    ],
    workingHours: [
      { day: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
      { day: "Cumartesi", hours: "10:00 - 15:00" },
      { day: "Pazar", hours: "Kapalı" },
    ],
    seoTitle: "Dt. Mustafa Resul Başgün Demo Web Sitesi",
    seoDescription:
      "Dt. Mustafa Resul Başgün için hazırlanmış kişiselleştirilmiş diş hekimliği demo sayfası.",
  },
} satisfies Record<string, ClinicDemo>;

export type ClinicSlug = keyof typeof clinics;

export function getClinicBySlug(slug: string): ClinicDemo | undefined {
  return clinics[slug as ClinicSlug];
}
