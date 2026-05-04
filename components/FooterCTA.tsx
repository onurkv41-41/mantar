import StoreButtons from "./StoreButtons";

const pillars = [
  { label: "Keşfet", icon: <MushroomIcon /> },
  { label: "Puanla", icon: <GiftSmall /> },
  { label: "Kazan", icon: <MushroomAlt /> },
  { label: "Paylaş", icon: <ShareIcon /> },
];

export default function FooterCTA() {
  return (
    <footer id="indir" className="relative bg-mantar-red text-white overflow-hidden">
      <div className="mantar-ornaments absolute inset-0 pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-[1440px] px-8 lg:px-12 py-12">
        <div className="grid lg:grid-cols-[auto_minmax(0,1fr)_auto] gap-10 items-center">
          {/* Icon circle + copy */}
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-full bg-white grid place-items-center flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="#ae2940">
                <path d="M6 18c0-7 6-12 14-12s14 5 14 12c0 1.4-.8 2.2-2.2 2.2H8.2C6.8 20.2 6 19.4 6 18z" />
                <rect x="16" y="20.2" width="8" height="14" rx="1.5" />
                <circle cx="15" cy="14" r="1.8" fill="#fff" />
                <circle cx="25" cy="12" r="1.5" fill="#fff" />
              </svg>
            </div>
            <div>
              <div className="font-display text-[24px] leading-tight font-extrabold">
                Mantar&apos;lı şimdi indir,
              </div>
              <div className="text-[17px] leading-tight">
                lezzet dolu dünyaya katıl!
              </div>
              <div className="mt-3">
                <StoreButtons size="sm" theme="dark" />
              </div>
            </div>
          </div>

          {/* Center spacer */}
          <div />

          {/* Pillars */}
          <div className="flex items-center gap-8">
            {pillars.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-2xl bg-white/10 grid place-items-center">
                  <div className="text-white">{p.icon}</div>
                </div>
                <div className="text-[14px] font-medium">{p.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/75">
          <div>© {new Date().getFullYear()} Mantar. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Gizlilik</a>
            <a href="#" className="hover:text-white">Kullanım Şartları</a>
            <a href="#" className="hover:text-white">İletişim</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MushroomIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
      <path d="M5 13c0-5 5-9 11-9s11 4 11 9c0 1-.6 1.6-1.6 1.6H6.6C5.6 14.6 5 14 5 13z" />
      <rect x="12" y="14.6" width="8" height="12" rx="1.5" />
    </svg>
  );
}

function GiftSmall() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13M3 13h18M7.5 8a2.5 2.5 0 010-5c2 0 3 2 4.5 5M16.5 8a2.5 2.5 0 000-5c-2 0-3 2-4.5 5" />
    </svg>
  );
}

function MushroomAlt() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 15 Q 16 4 26 15 Z" />
      <path d="M13 15 L 13 26 Q 16 28 19 26 L 19 15" />
      <circle cx="13" cy="12" r="1.2" fill="currentColor" />
      <circle cx="19" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="5" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.7 10.7l6.6-4M8.7 13.3l6.6 4" />
    </svg>
  );
}
