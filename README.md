# DG Digital Demo Platform

Bu proje DG Digital'in kurumsal web sitesi değildir. Yalnızca potansiyel müşterilere gösterilecek kişiselleştirilmiş diş kliniği demo sayfalarını üretmek için hazırlanmıştır.

Tek Next.js projesi ve tek Vercel deployment kullanılır. Her müşteri kendi slug değeriyle ayrı bir demo URL'sine sahip olur.

## 1. Projeyi yerelde çalıştırma

```bash
npm install
npm run dev
```

Yerel demo URL'leri:

```text
http://localhost:3000/demo/genel
http://localhost:3000/demo/alp-dis
```

Root URL `/` otomatik olarak `/demo/genel` sayfasına yönlenir.

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
```

## 3. Klinik verilerini değiştirme

Klinik adı, doktor adı, telefon, WhatsApp, adres, hizmetler, doktor tanıtımı, yorumlar, çalışma saatleri, marka renkleri ve SEO metinleri `data/clinics.ts` üzerinden yönetilir.

Tip kuralları `types/clinic.ts` dosyasındaki `ClinicDemo` modeliyle belirlenir.

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
demo.dgdigital.com.tr
```

DNS tarafında Vercel'in verdiği CNAME veya A kaydı eklenir. Subdomain bağlandıktan sonra demo adresleri şu şekilde olur:

```text
https://demo.dgdigital.com.tr/demo/genel
https://demo.dgdigital.com.tr/demo/alp-dis
```

## 8. Genel demo ve kişiselleştirilmiş demo farkı

`/demo/genel` kişiye özel hazırlık yapılmadan önce paylaşılabilecek genel diş kliniği demosudur.

`/demo/alp-dis` gibi slug'lar belirli bir müşteri için hazırlanmış kişiselleştirilmiş örnek sayfalardır. Bu sayfalarda marka rengi, görseller, doktor adı, iletişim bilgileri, hizmetler ve SEO bilgileri ayrı kayıt üzerinden gelir.

## Kalite kontrol

Teslim öncesi kullanılan kontroller:

```bash
npm run lint
npm run typecheck
npm run build
```

Demo sayfaları arama motorları tarafından indekslenmemesi için `robots` metadata değerleriyle `index: false` ve `follow: false` olarak ayarlanmıştır.
