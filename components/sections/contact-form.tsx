"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { treatments } from "@/data/site";
import { Button } from "@/components/ui/button";

const initial = {
  name: "",
  phone: "",
  email: "",
  treatment: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setForm(initial);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-[#dce8e6] bg-white p-5 shadow-[0_24px_70px_rgba(19,35,58,0.10)] sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Ad Soyad"
          id="name"
          value={form.name}
          onChange={(value) => setForm((current) => ({ ...current, name: value }))}
          required
        />
        <Field
          label="Telefon"
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
          required
        />
        <Field
          label="E-posta"
          id="email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
          required
        />
        <label className="grid gap-2 text-sm font-semibold text-[#203c39]">
          İlgilendiğiniz Tedavi
          <select
            required
            value={form.treatment}
            onChange={(event) =>
              setForm((current) => ({ ...current, treatment: event.target.value }))
            }
            className="h-12 rounded-2xl border border-[#d7e5e2] bg-[#fbfdfc] px-4 text-[#203c39] outline-none transition focus:border-[#0f5f5c] focus:ring-4 focus:ring-[#0f5f5c]/10"
          >
            <option value="">Tedavi seçin</option>
            {treatments.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-[#203c39]">
        Mesaj
        <textarea
          required
          minLength={10}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          rows={5}
          className="resize-none rounded-2xl border border-[#d7e5e2] bg-[#fbfdfc] px-4 py-3 text-[#203c39] outline-none transition focus:border-[#0f5f5c] focus:ring-4 focus:ring-[#0f5f5c]/10"
          placeholder="Kısaca ihtiyacınızı yazın"
        />
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Gönder
          <Send className="h-4 w-4" />
        </Button>
        {sent ? (
          <p className="rounded-full bg-[#eef8f6] px-4 py-2 text-sm font-semibold text-[#0f5f5c]">
            Talebiniz demo olarak alındı. En kısa sürede dönüş yapılır.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#203c39]" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-[#d7e5e2] bg-[#fbfdfc] px-4 text-[#203c39] outline-none transition focus:border-[#0f5f5c] focus:ring-4 focus:ring-[#0f5f5c]/10"
      />
    </label>
  );
}
