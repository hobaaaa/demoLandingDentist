import Link from "next/link";

export default function DemoNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7fbfa] px-6 text-[#10201d]">
      <section className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Demo bulunamadı
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Bu slug ile kayıtlı bir klinik demosu yok.
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Lütfen demo bağlantısını kontrol edin veya genel demo sayfasını
          görüntüleyin.
        </p>
        <Link
          href="/demo/genel"
          className="premium-button mt-7 inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
        >
          <span>Genel Demoya Git</span>
        </Link>
      </section>
    </main>
  );
}
