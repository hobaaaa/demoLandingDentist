import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://livadentalclinic.example.com"),
  title: "Liva Dental Clinic | Denizli Diş Kliniği",
  description:
    "Liva Dental Clinic; implant, estetik diş hekimliği, diş beyazlatma ve ortodonti tedavilerinde modern ve kişiye özel çözümler sunar.",
  keywords: [
    "Denizli diş kliniği",
    "implant tedavisi",
    "estetik diş hekimliği",
    "diş beyazlatma",
    "ortodonti",
  ],
  openGraph: {
    title: "Liva Dental Clinic | Denizli Diş Kliniği",
    description:
      "Modern teknoloji, deneyimli hekim kadrosu ve kişiye özel tedavi planlamasıyla premium diş kliniği deneyimi.",
    url: "https://livadentalclinic.example.com",
    siteName: "Liva Dental Clinic",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
