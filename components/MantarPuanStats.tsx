export default function MantarPuanStats() {
  return (
    <section id="puan" className="bg-mantar-cream-deep/40 py-14 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-8 items-start">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-[1.1] tracking-[-0.02em]">
              <span className="text-mantar-red">MantarPuan</span> ile
              <br />
              <span className="text-mantar-red">Her</span> Ziyaretin Değerli!
            </h2>
            <p className="mt-4 sm:mt-5 text-[14px] sm:text-[15px] text-mantar-muted leading-[1.55] max-w-[420px] mx-auto lg:mx-0">
              Mekanlardan mantar topla, seviyeni yükselt, özel ödüllerin ve
              sürprizlerin tadını çıkar.
            </p>
          </div>

          {/* Right: stats card */}
          <div className="rounded-[22px] sm:rounded-[24px] bg-white border border-mantar-line/60 p-5 sm:p-8">
            <div className="grid sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-5 sm:gap-6 items-center">
              <div>
                <div className="text-[13px] text-mantar-muted font-semibold">
                  Toplam Mantarın
                </div>
                <div className="mt-2 inline-flex items-baseline gap-2">
                  <span className="font-display font-extrabold text-[54px] leading-none">
                    120
                  </span>
                  <MantarGlyph size={38} />
                </div>
                <div className="mt-3 text-[13px] text-mantar-muted">
                  Seviye 3
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex-1 h-2 bg-mantar-red/10 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-mantar-red rounded-full" />
                  </div>
                  <div className="text-[12px] text-mantar-muted">120/150</div>
                </div>
              </div>
              <div className="flex items-center gap-5 sm:border-l sm:border-mantar-line/60 sm:pl-6">
                <div>
                  <div className="text-[13px] text-mantar-muted font-semibold">
                    Sonraki Ödül
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="font-display font-extrabold text-[30px] leading-none">
                      30
                    </span>
                    <span className="text-[14px] text-mantar-muted">
                      Mantar kaldı
                    </span>
                  </div>
                </div>
                <GiftBox />
              </div>
            </div>
          </div>
        </div>

        {/* Info rows */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <InfoRow
            icon={<GiftIcon />}
            title="Günde 2 Mantar Toplama Hakkın Var"
            desc="Her gün en fazla 2 mantar toplayabilirsin."
          />
          <InfoRow
            icon={<MantarGlyph size={24} />}
            title="Her Mekandan 1 Mantar"
            desc="Her mekandan sadece 1 kere mantar toplayabilirsin."
          />
          <InfoRow
            icon={<GiftIcon />}
            title="15 Mantarda Mekan Ödülü"
            desc="Her 15 mantarda gittiğin mekandan ödül kazan."
          />
          <InfoRow
            icon={<PigIcon />}
            title="50 Mantarda Mantar App Ödülü"
            desc="Toplamda her 50 mantarda Mantar App'ten ödül kazan."
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-11 w-11 rounded-full bg-mantar-red/10 grid place-items-center text-mantar-red flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-display text-[14px] font-bold leading-tight">
          {title}
        </div>
        <p className="mt-1.5 text-[12.5px] text-mantar-muted leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}

function MantarGlyph({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" style={{ width: size, height: size }} fill="currentColor" aria-hidden>
      <path d="M5 13c0-5 5-9 11-9s11 4 11 9c0 1-.6 1.6-1.6 1.6H6.6C5.6 14.6 5 14 5 13z" />
      <rect x="12" y="14.6" width="8" height="12" rx="1.5" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13M3 13h18M7.5 8a2.5 2.5 0 010-5c2 0 3 2 4.5 5M16.5 8a2.5 2.5 0 000-5c-2 0-3 2-4.5 5" />
    </svg>
  );
}
function PigIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M20 10c0-3.3-3.6-6-8-6s-8 2.7-8 6c0 0.5.1 1 .2 1.5L2 13v4l2.3.6c.6 1.1 1.5 2 2.7 2.6V22h3v-1.1c.6.1 1.3.1 2 .1s1.4 0 2-.1V22h3v-1.8c1.2-.6 2.1-1.5 2.7-2.6L22 17v-4l-2.2-1.5c.1-.5.2-1 .2-1.5zm-14 3a1 1 0 110-2 1 1 0 010 2zm6 2c-1 0-2-.4-2-1h4c0 .6-1 1-2 1zm4-2a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}
function GiftBox() {
  return (
    <svg viewBox="0 0 80 80" className="w-20 h-20" aria-hidden>
      <rect x="12" y="32" width="56" height="42" rx="4" fill="#f4dfb8" />
      <rect x="12" y="32" width="56" height="10" fill="#e5ceaa" />
      <rect x="36" y="32" width="8" height="42" fill="#ae2940" />
      <path d="M24 20 Q 40 4 40 20 Q 40 4 56 20 Q 56 36 40 26 Q 24 36 24 20Z" fill="#ae2940" />
      <circle cx="40" cy="22" r="3" fill="#f4dfb8" />
      <circle cx="10" cy="14" r="2" fill="#f5c842" />
      <circle cx="70" cy="14" r="2.5" fill="#f5c842" />
    </svg>
  );
}
