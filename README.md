# Liva Dental Clinic Demo

Liva Dental Clinic, potansiyel diş hekimi ve diş kliniği müşterilerine sunulmak üzere hazırlanmış satış odaklı bir Next.js demo web sitesidir. Site tek sayfalı, mobil öncelikli, modern ve premium bir özel diş kliniği hissi verecek şekilde tasarlanmıştır.

## Kullanılan Teknolojiler

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui yaklaşımıyla hazırlanmış yerel UI bileşenleri
- Radix UI Accordion
- Lucide Icons
- next/image
- next/font

## Çalıştırma Komutları

```bash
npm install
npm run dev
npm run build
npm run lint
```

Geliştirme sunucusu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## İçerik ve Marka Bilgileri

Marka adı, telefon, WhatsApp bağlantısı, adres, çalışma saatleri, menü bağlantıları, tedaviler, doktorlar, yorumlar ve sık sorulan sorular `data/site.ts` dosyasından değiştirilebilir.

Ana marka bilgileri:

- Marka: `Liva Dental Clinic`
- Telefon: `+90 258 000 00 00`
- Şehir: `Denizli`
- Ana vurgu rengi: `#0f5f5c`
- Koyu kurumsal renk: `#13233a`
- Arka plan: `#fbfdfc`

## Görseller

Görsel URL'leri `data/site.ts` içinde tanımlıdır. Görseller `next/image` ile kullanılır ve `next.config.ts` dosyasında `images.unsplash.com` için izin verilmiştir. Gerçek bir müşteri projesinde bu URL'ler klinikten alınan profesyonel fotoğraflarla veya `public` klasörüne eklenen optimize edilmiş görsellerle değiştirilmelidir.

## Formu Backend'e Bağlama

İletişim formu şu anda frontend validasyonu yapar ve demo başarı mesajı gösterir. Gerçek backend bağlantısı için `components/sections/contact-form.tsx` içindeki `onSubmit` fonksiyonunda şu yapılabilir:

- `fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })` ile API route'a gönderim
- E-posta servisi, CRM veya Supabase tablosuna kayıt
- Sunucu tarafında spam kontrolü, KVKK onayı ve hata yönetimi

## Vercel'e Deploy

1. Projeyi GitHub reposuna gönderin.
2. Vercel panelinde `New Project` seçeneğiyle repoyu içe aktarın.
3. Framework olarak Next.js otomatik algılanır.
4. Build command: `npm run build`
5. Output ayarı gerektirmez.
6. Deploy tamamlandıktan sonra gerçek alan adı Vercel üzerinden bağlanabilir.

## Düzenleme Notları

- Ana sayfa `app/page.tsx` içinden section bileşenlerini çağırır.
- Büyük sayfa alanları `components/sections/home-sections.tsx` içindedir.
- Header, footer ve sabit mobil aksiyonlar `components/layout` altında bulunur.
- Yeniden kullanılabilir UI yardımcıları `components/ui` ve `lib/utils.ts` altında tutulur.
