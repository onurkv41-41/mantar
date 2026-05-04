import Link from "next/link";
import MantarLogo from "./MantarLogo";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Keşfet",
    links: [
      { label: "Yakınımdaki Mekanlar", href: "/#yakinimdaki" },
      { label: "Kategoriler", href: "/#kategoriler" },
      { label: "Harita", href: "/#harita" },
    ],
  },
  {
    title: "Mantar AI",
    links: [
      { label: "Ne Yapsak AI", href: "/#ne-yapsak-ai" },
      { label: "Önerilen Mekanlar", href: "/#onerilen" },
      { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
    ],
  },
  {
    title: "MantarPuan",
    links: [
      { label: "Puanlarım", href: "/#puanlarim" },
      { label: "Nasıl Puan Kazanırım?", href: "/#nasil-puan" },
      { label: "Ödüller", href: "/#oduller" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/#hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-mantar-red text-white">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <MantarLogo variant="white" width={120} />
            <p className="mt-4 text-[13.5px] leading-[1.55] text-white/80 max-w-[220px]">
              Yakınındaki en iyi mekanları keşfet, puanla, yorum yap ve fırsatları kaçırma.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialIcon href="#"><InstagramIcon /></SocialIcon>
              <SocialIcon href="#"><XIcon /></SocialIcon>
              <SocialIcon href="#"><YouTubeIcon /></SocialIcon>
              <SocialIcon href="#"><TikTokIcon /></SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-[15px] font-bold mb-4">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13.5px] text-white/85 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 text-center text-[12.5px] text-white/75">
          © {new Date().getFullYear()} Mantar. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="h-9 w-9 rounded-full bg-white/10 hover:bg-white hover:text-mantar-red text-white grid place-items-center transition"
    >
      {children}
    </a>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M18.244 2H21l-6.52 7.455L22 22h-6.82l-5.34-6.99L3.6 22H.84l6.98-7.98L2 2h6.99l4.83 6.38L18.24 2zm-2.39 18h1.61L7.23 4H5.52l10.34 16z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.4.5A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8 3 3 0 002.1 2.1c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 002.1-2.1A31.2 31.2 0 0024 12a31.2 31.2 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M19.3 6.7a5.5 5.5 0 01-3-1.2 5.2 5.2 0 01-1.6-2.7h-3.3v12a2.6 2.6 0 11-1.8-2.5V8.9A5.8 5.8 0 1013.4 15V9.3a8.2 8.2 0 005.9 2.3V8.3a5.3 5.3 0 01-.0-1.6z" />
    </svg>
  );
}
