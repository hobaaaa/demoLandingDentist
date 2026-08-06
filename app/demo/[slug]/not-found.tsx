export default function DemoNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7fbfa] px-6 text-[#10201d]">
      <section className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Demo bulunamadi
        </p>
        <h1 className="mt-4 text-3xl font-semibold">
          Bu slug ile kayitli bir demo yok.
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Lutfen size paylasilan demo baglantisini kontrol edin.
        </p>
      </section>
    </main>
  );
}
