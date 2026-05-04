import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import DownloadModal from "@/components/DownloadModal";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mantar — Keşfet. Puanla. Kazan.",
  description:
    "Mantar ile restoran, kafe, eğlence ve spor mekanlarını keşfet, deneyimlerini paylaş, puan topla ve ödüllerin keyfini çıkar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${bricolage.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-mantar-cream text-mantar-ink">
        {children}
        <DownloadModal />
      </body>
    </html>
  );
}
