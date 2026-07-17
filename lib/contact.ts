export function normalizePhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("00")) {
    return `+${digits.slice(2)}`;
  }

  if (digits.startsWith("90")) {
    return `+${digits}`;
  }

  if (digits.startsWith("0")) {
    return `+90${digits.slice(1)}`;
  }

  if (digits.length === 10) {
    return `+90${digits}`;
  }

  return value.startsWith("+") ? value : `+${digits}`;
}

export function createTelHref(value: string): string {
  return `tel:${normalizePhoneNumber(value)}`;
}

export function createWhatsAppHref(value: string, message?: string): string {
  const normalized = normalizePhoneNumber(value).replace(/\D/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${normalized}${query}`;
}
