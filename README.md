# DG Digital Demo Platform

Bu proje DG Digital'in kurumsal web sitesi değildir. Potansiyel müşterilere gönderilecek sektör bazlı demo web sitelerini tek Next.js projesi ve tek Vercel deployment altında üretmek için hazırlanmıştır.

Tek Next.js projesi ve tek Vercel deployment kullanılır. Her sektör ve müşteri kendi slug değeriyle ayrı bir demo URL'sine sahip olur.

## 1. Projeyi yerelde çalıştırma

```bash
npm install
npm run dev
```

Yerel demo URL'leri:

```text
http://localhost:3000/demo/genel
http://localhost:3000/demo/dis-klinigi/genel
http://localhost:3000/demo/alp-dis
http://localhost:3000/demo/psikolog/genel
http://localhost:3000/demo/psikolog/elif-yildiz
```

Root URL `/` ve `/demo`, sade bir sektör seçim ekranı gösterir.

## 2. Yeni müşteri demosu ekleme

Yeni demo eklemek için ana işlem `data/clinics.ts` dosyasına yeni bir kayıt eklemektir.

```ts
export const clinics = {
  "yeni-klinik": {
    slug: "yeni-klinik",
    clinicName: "Yeni Klinik",
    doctorName: "Dt. Örnek Doktor",
    title: "Klinik için güçlü hero başlığı",
    description: "Kısa açıklama metni",
    phone: "+90 555 000 00 00",
    whatsapp: "+90 555 000 00 00",
    address: "Adres bilgisi",
    mapsUrl: "https://maps.google.com/?q=...",
    primaryColor: "#0f766e",
    secondaryColor: "#d7f3ef",
    services: [],
    aboutText: "...",
    doctorBiography: "...",
    testimonials: [],
    workingHours: [],
    seoTitle: "Yeni Klinik Demo",
    seoDescription: "Yeni Klinik için demo sayfası",
  },
};
```

Kayıt eklendiğinde sayfa otomatik olarak şu adreste çalışır:

```text
/demo/yeni-klinik
/demo/dis-klinigi/yeni-klinik
```

Psikolog demosu eklemek için `data/psychologists.ts` dosyasına yeni kayıt eklenir:

```ts
"yeni-psikolog": {
  slug: "yeni-psikolog",
  practiceName: "Yeni Psikoloji Merkezi",
  psychologistName: "Uzm. Kl. Psk. Örnek İsim",
  title: "Güven veren psikolojik danışmanlık deneyimi",
  description: "Kısa açıklama metni",
  phone: "+90 555 000 00 00",
  whatsapp: "+90 555 000 00 00",
  address: "Adres bilgisi",
  mapsUrl: "https://maps.google.com/?q=...",
  primaryColor: "#59755e",
  secondaryColor: "#eef6ec",
  accentColor: "#b88768",
  therapyAreas: [],
  approachText: "...",
  biography: "...",
  testimonials: [],
  workingHours: [],
  sessionTypes: ["Yüz yüze seans", "Online seans"],
  seoTitle: "Yeni Psikolog Demo",
  seoDescription: "Yeni psikolog için demo sayfası",
}
```

Psikolog kaydı eklendiğinde sayfa şu adreste çalışır:

```text
/demo/psikolog/yeni-psikolog
```

## 3. Klinik verilerini değiştirme

Klinik adı, doktor adı, telefon, WhatsApp, adres, hizmetler, doktor tanıtımı, yorumlar, çalışma saatleri, marka renkleri ve SEO metinleri `data/clinics.ts` üzerinden yönetilir.

Psikolog adı, danışmanlık merkezi adı, terapi alanları, yaklaşım metni, seans türleri, yorumlar, çalışma saatleri, marka renkleri ve SEO metinleri `data/psychologists.ts` üzerinden yönetilir.

Tip kuralları diş klinikleri için `types/clinic.ts`, psikolog demoları için `types/psychologist.ts` dosyasında belirlenir.

Randevu butonları tüm demo sektörlerinde merkezi olarak `lib/booking.ts` içindeki `DEMO_BOOKING_URL` değerini kullanır. V1 demo randevu sistemi:

```text
https://app.artexo.app/book/artexo-demo
```

## 4. Müşteriye özel görsel ekleme

Her müşteri için `public/demos/[slug]/` altında ayrı klasör kullanılabilir.

Örnek:

```text
public/demos/yeni-klinik/logo.png
public/demos/yeni-klinik/hero.png
public/demos/yeni-klinik/about.png
public/demos/yeni-klinik/doctor.png
```

Sonra `data/clinics.ts` içindeki kayıt bu dosyalara işaret eder:

```ts
logo: "/demos/yeni-klinik/logo.png",
heroImage: "/demos/yeni-klinik/hero.png",
aboutImage: "/demos/yeni-klinik/about.png",
doctorImage: "/demos/yeni-klinik/doctor.png",
```

Bir görsel yolu boşsa veya public klasöründe dosya bulunamazsa genel demo görseli kullanılır.

## 5. Slug belirleme

Slug kısa, okunabilir ve URL uyumlu olmalıdır.

İyi örnekler:

```text
alp-dis
mehmet-klinik
denizli-dental
```

Boşluk, Türkçe karakter ve büyük harf kullanmayın.

## 6. Vercel'e deploy etme

1. Projeyi GitHub reposuna gönderin.
2. Vercel'de yeni proje oluşturun.
3. Framework olarak Next.js seçili kalır.
4. Build command: `npm run build`
5. Install command: `npm install`
6. Output ayarı değiştirmeyin.
7. Deploy tamamlandığında demo sayfaları aynı deployment altında çalışır.

## 7. Demo subdomain bağlama

Vercel projesinin Domains bölümünden örnek bir subdomain bağlanabilir:

```text
demo.denizgokbudak.com
```

DNS tarafında Vercel'in verdiği CNAME veya A kaydı eklenir. Subdomain bağlandıktan sonra demo adresleri şu şekilde olur:

```text
https://demo.denizgokbudak.com/demo/genel
https://demo.denizgokbudak.com/demo/dis-klinigi/genel
https://demo.denizgokbudak.com/demo/alp-dis
https://demo.denizgokbudak.com/demo/psikolog/genel
```

## 8. Genel demo ve kişiselleştirilmiş demo farkı

`/demo/genel` kişiye özel hazırlık yapılmadan önce paylaşılabilecek genel diş kliniği demosudur.

`/demo/alp-dis` gibi slug'lar belirli bir müşteri için hazırlanmış kişiselleştirilmiş örnek sayfalardır. Bu sayfalarda marka rengi, görseller, doktor adı, iletişim bilgileri, hizmetler ve SEO bilgileri ayrı kayıt üzerinden gelir.

Sektörlü yeni yapı:

```text
/demo/dis-klinigi/genel
/demo/dis-klinigi/alp-dis
/demo/psikolog/genel
/demo/psikolog/elif-yildiz
```

Eski diş kliniği linkleri kırılmaması için `/demo/[slug]` yapısı korunur.

## Kalite kontrol

Teslim öncesi kullanılan kontroller:

```bash
npm run lint
npm run typecheck
npm run build
```

Demo sayfaları arama motorları tarafından indekslenmemesi için `robots` metadata değerleriyle `index: false` ve `follow: false` olarak ayarlanmıştır.
