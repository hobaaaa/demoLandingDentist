import {
  Award,
  BadgeCheck,
  Baby,
  Bone,
  Braces,
  CalendarCheck,
  Camera,
  CheckCircle2,
  HeartPulse,
  Gem,
  Microscope,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

export const brand = {
  name: "Liva Dental Clinic",
  slogan: "Sağlıklı ve estetik gülüşler için modern diş hekimliği.",
  city: "Denizli",
  phone: "+90 258 000 00 00",
  phoneHref: "tel:+902580000000",
  whatsappHref:
    "https://wa.me/902580000000?text=Merhaba%2C%20Liva%20Dental%20Clinic%20i%C3%A7in%20randevu%20bilgisi%20almak%20istiyorum.",
  email: "info@livadentalclinic.com",
  address: "Yenişehir Mah. Sağlık Cad. No: 24, Merkezefendi / Denizli",
  hours: "Pzt - Cmt 09:00 - 19:00",
};

export const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Tedaviler", href: "#tedaviler" },
  { label: "Doktorlarımız", href: "#doktorlar" },
  { label: "Hasta Yorumları", href: "#yorumlar" },
  { label: "Sık Sorulanlar", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export const stats = [
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "5.000+", label: "Mutlu Hasta" },
  { value: "4.9", label: "Hasta Memnuniyeti" },
  { value: "8", label: "Uzman Hekim" },
];

export const trustItems = [
  "15+ yıllık deneyim",
  "5.000+ mutlu hasta",
  "Modern teknoloji",
  "Kişiye özel tedavi",
];

export const treatments = [
  {
    title: "İmplant Tedavisi",
    description:
      "Eksik dişler için doğal görünüme ve güçlü çiğneme konforuna odaklanan kalıcı çözümler.",
    icon: Bone,
    highlight: true,
  },
  {
    title: "Estetik Diş Hekimliği",
    description:
      "Yüz hatlarınızla uyumlu, doğal ve dengeli bir gülüş tasarımı için kişisel planlama.",
    icon: Sparkles,
  },
  {
    title: "Zirkonyum Kaplama",
    description:
      "Işık geçirgenliği yüksek, dayanıklı ve estetik restorasyon seçenekleri.",
    icon: Gem,
  },
  {
    title: "Diş Beyazlatma",
    description:
      "Kontrollü klinik protokollerle daha aydınlık ve canlı bir gülüş görünümü.",
    icon: Smile,
  },
  {
    title: "Ortodonti",
    description:
      "Şeffaf plak ve klasik tedavi seçenekleriyle diş dizilimini iyileştiren yaklaşımlar.",
    icon: Braces,
  },
  {
    title: "Çocuk Diş Hekimliği",
    description:
      "Çocukların kliniğe güvenle alışmasını sağlayan sakin ve koruyucu tedavi deneyimi.",
    icon: Baby,
  },
  {
    title: "Kanal Tedavisi",
    description:
      "Dişi korumaya odaklanan, modern görüntüleme destekli endodontik tedaviler.",
    icon: Syringe,
  },
  {
    title: "Diş Eti Tedavileri",
    description:
      "Diş eti sağlığını güçlendiren, erken teşhis ve takip odaklı periodontal bakım.",
    icon: HeartPulse,
  },
];

export const reasons = [
  {
    title: "Uzman ve deneyimli hekim kadrosu",
    description: "Her tedavi alanında doğru uzmanlıkla planlama yapılır.",
    icon: Users,
  },
  {
    title: "Dijital görüntüleme teknolojileri",
    description: "Muayene ve tedavi planı net verilerle desteklenir.",
    icon: Camera,
  },
  {
    title: "Kişiye özel tedavi planı",
    description: "İhtiyaç, beklenti ve zaman planınız birlikte değerlendirilir.",
    icon: CalendarCheck,
  },
  {
    title: "Şeffaf bilgilendirme",
    description: "Tedavi seçenekleri, süreç ve maliyetler açıkça paylaşılır.",
    icon: BadgeCheck,
  },
  {
    title: "Hijyenik ve konforlu klinik ortamı",
    description: "Sterilizasyon protokolleri ve hasta konforu birlikte ele alınır.",
    icon: ShieldCheck,
  },
  {
    title: "Tedavi sonrası destek",
    description: "Kontroller ve takip süreci tedavinin doğal bir parçasıdır.",
    icon: CheckCircle2,
  },
];

export const doctors = [
  {
    name: "Dt. Elif Demir",
    specialty: "Estetik Diş Hekimliği",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dr. Emre Kaya",
    specialty: "İmplantoloji",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dt. Selin Arslan",
    specialty: "Ortodonti",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
  },
];

export const processSteps = [
  {
    title: "İlk görüşme",
    description: "Şikayetiniz, beklentiniz ve sağlık geçmişiniz sakin şekilde dinlenir.",
  },
  {
    title: "Detaylı muayene",
    description: "Dijital görüntüleme ve klinik değerlendirme ile tablo netleştirilir.",
  },
  {
    title: "Kişiye özel tedavi planı",
    description: "Alternatifler, süre ve bütçe bilgisi anlaşılır şekilde sunulur.",
  },
  {
    title: "Tedavi ve takip",
    description: "Tedavi kontrollü ilerler; sonrasında düzenli takip planlanır.",
  },
];

export const testimonials = [
  {
    name: "Ayşe K.",
    text: "İmplant tedavisi konusunda çok tedirgindim ancak bütün süreç ayrıntılı şekilde anlatıldı. Tedavi beklediğimden daha rahat geçti.",
  },
  {
    name: "Mehmet T.",
    text: "İlk muayenede acele edilmeden dinlendim. Tedavi planı ve fiyat bilgisi net şekilde paylaşılınca güven duydum.",
  },
  {
    name: "Zeynep A.",
    text: "Diş beyazlatma sonrası görünüm doğal kaldı. Klinik ortamı temiz, ekip de oldukça sakin ve ilgiliydi.",
  },
  {
    name: "Burak D.",
    text: "Ortodonti sürecimde randevular düzenli ilerledi. Sorularımı her kontrolde açıklayıcı şekilde yanıtladılar.",
  },
];

export const faqs = [
  {
    question: "İmplant tedavisi ne kadar sürer?",
    answer:
      "Süre, kemik yapısı ve tedavi planına göre değişir. İlk muayeneden sonra cerrahi aşama, iyileşme dönemi ve protez aşaması net bir takvimle paylaşılır.",
  },
  {
    question: "Diş beyazlatma işlemi kalıcı mıdır?",
    answer:
      "Beyazlatma etkisi ağız bakımı, beslenme alışkanlıkları ve düzenli kontrollerle daha uzun süre korunabilir. Kalıcılık kişiden kişiye değişir.",
  },
  {
    question: "İlk muayenede hangi işlemler yapılır?",
    answer:
      "Ağız içi muayene, gerekli dijital görüntüleme, beklenti analizi ve uygun tedavi seçeneklerinin değerlendirilmesi yapılır.",
  },
  {
    question: "Tedavi öncesinde fiyat bilgisi veriliyor mu?",
    answer:
      "Evet. Muayene sonrasında tedavi seçenekleri, kapsamı ve yaklaşık maliyetler şeffaf biçimde paylaşılır.",
  },
  {
    question: "Çocuk hastalar için hizmet veriyor musunuz?",
    answer:
      "Evet. Çocuk hastalar için koruyucu diş hekimliği, çürük tedavileri ve takip programları sunulur.",
  },
  {
    question: "Randevu nasıl oluşturabilirim?",
    answer:
      "Telefon, WhatsApp veya iletişim formu üzerinden randevu talebi bırakabilirsiniz. Ekip en kısa sürede uygun saatleri paylaşır.",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85";
export const clinicImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85";
export const smileBeforeImage =
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85";
export const smileAfterImage =
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=85";

export const serviceIcons = {
  award: Award,
  microscope: Microscope,
  stethoscope: Stethoscope,
};
