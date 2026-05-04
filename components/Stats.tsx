const stats = [
  { icon: <UserIcon />, value: "50K+", label: "Mutlu Kullanıcı" },
  { icon: <PinIcon />, value: "10K+", label: "Mekan" },
  { icon: <ChatIcon />, value: "100K+", label: "Yorum" },
  { icon: <ShroomIcon />, value: "2M+", label: "MantarPuan" },
];

export default function Stats() {
  return (
    <section className="bg-mantar-cream pb-24">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-5">
          {/* Stats bar */}
          <div className="bg-white rounded-3xl border border-mantar-line/60 px-8 py-7 flex flex-wrap items-center justify-around gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-mantar-cream-deep grid place-items-center text-mantar-red">
                  {s.icon}
                </div>
                <div>
                  <div className="font-display text-[28px] font-bold leading-none text-mantar-ink">{s.value}</div>
                  <div className="text-[13px] text-mantar-muted mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Reward banner */}
          <div className="relative overflow-hidden rounded-3xl bg-mantar-red text-white px-7 py-6 flex items-center gap-5">
            <div className="absolute -left-4 -top-4 w-14 h-14 rounded-full bg-white/10" aria-hidden />
            <div className="absolute right-2 -bottom-3 w-20 h-20 rounded-full bg-white/10" aria-hidden />
            <div className="relative flex-1">
              <div className="font-display font-extrabold text-[24px] leading-tight">
                250 ₺
                <span className="block text-[15px] font-semibold tracking-wide mt-1">İNDİRİM KAZANDIN!</span>
              </div>
              <p className="mt-2 text-[12.5px] leading-snug text-white/85">
                Ödüller sayfasından tüm ödüllerini görebilirsin.
              </p>
            </div>
            <div className="relative">
              <GiftBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4v-1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M4 5a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3H9l-5 4V5z" />
    </svg>
  );
}

function ShroomIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M4 10a8 8 0 0116 0c0 1-.5 1.5-1.5 1.5h-13C4.5 11.5 4 11 4 10z" />
      <rect x="9" y="11.5" width="6" height="10" rx="1.5" />
    </svg>
  );
}

function GiftBox() {
  return (
    <svg viewBox="0 0 120 120" className="w-[110px] h-[110px]" aria-hidden>
      {/* Box */}
      <rect x="18" y="48" width="84" height="60" rx="6" fill="#f4ecda" />
      <rect x="18" y="48" width="84" height="14" fill="#e7d9b4" />
      {/* Ribbon */}
      <rect x="54" y="48" width="12" height="60" fill="#ae2940" />
      {/* Bow */}
      <path d="M40 28 Q 60 8 60 28 Q 60 8 80 28 Q 80 48 60 36 Q 40 48 40 28Z" fill="#ae2940" />
      <circle cx="60" cy="32" r="4" fill="#f4ecda" />
      {/* Confetti */}
      <circle cx="16" cy="22" r="2.5" fill="#f5c842" />
      <circle cx="100" cy="18" r="2" fill="#f5c842" />
      <rect x="106" y="50" width="4" height="4" transform="rotate(25 108 52)" fill="#f5c842" />
      <rect x="8" y="60" width="3" height="3" fill="#fce38a" />
    </svg>
  );
}
