import StoreButtons from "./StoreButtons";
import DownloadButton from "./DownloadButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-8 pb-16 sm:pb-24">
      <HeroBg />
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-8 items-center">
          {/* Left copy */}
          <div className="text-center lg:text-left">
            <h1 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-[32px] sm:text-[44px] lg:text-[64px]">
              En iyi mekanlar,
              <br />
              <span className="text-mantar-red">Mantar</span>
              <span className="text-mantar-ink">&apos;da keşfedilir!</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] leading-[1.55] text-mantar-muted max-w-[500px] mx-auto lg:mx-0">
              Mantar AI ile zevkine uygun mekanları bul, MantarPuan ile her
              ziyaretinde kazan, ödülleri kaçırma!
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 justify-center lg:justify-start">
              <DownloadButton
                ariaLabel="Uygulamayı indir"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-mantar-red text-white font-semibold text-[15px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition"
              >
                Uygulamayı İndir
                <DownloadIcon />
              </DownloadButton>
              <Link
                href="/mantar-ai"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 border-mantar-red text-mantar-red font-semibold text-[15px] hover:bg-mantar-red hover:text-white transition"
              >
                Mantar AI&apos;yi Keşfet
                <ArrowRight />
              </Link>
            </div>

            <div className="mt-5 flex justify-center lg:justify-start">
              <StoreButtons size="sm" theme="dark" />
            </div>
          </div>

          {/* Right: phones + mascot */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[580px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBg() {
  return (
    <>
      <div className="absolute top-20 right-[-6%] w-[480px] h-[480px] rounded-full bg-mantar-red/5 pointer-events-none" aria-hidden />
      <div className="absolute top-52 right-8 w-[280px] h-[280px] rounded-full bg-mantar-red/5 pointer-events-none" aria-hidden />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-full w-full max-w-[560px] mx-auto">
      {/* Right phone: MantarPuan */}
      <div
        className="absolute right-0 sm:right-2 top-0 w-[180px] sm:w-[220px] lg:w-[260px] anim-float"
        style={{ transform: "rotate(6deg)" }}
      >
        <PhonePuan />
      </div>

      {/* Left phone: Mantar AI */}
      <div
        className="absolute left-0 sm:left-4 top-4 sm:top-6 w-[180px] sm:w-[220px] lg:w-[260px] anim-float-2"
        style={{ transform: "rotate(-6deg)" }}
      >
        <PhoneAI />
      </div>

      {/* Sparkles */}
      <Sparkle className="absolute top-6 right-[18%] text-mantar-gold" size={18} />
      <Sparkle className="absolute top-[35%] right-0 text-mantar-gold" size={14} />
      <Sparkle className="absolute bottom-[20%] right-[4%] text-pink-300" size={12} />
      <Sparkle className="absolute top-[40%] left-[4%] text-pink-300" size={10} />
      <Sparkle className="absolute top-[10%] left-[25%] text-pink-300" size={9} />
    </div>
  );
}

/* ============= Phone: Mantar AI ============= */
function PhoneAI() {
  return (
    <div className="relative phone-shadow rounded-[44px] bg-[#0b0b0c] p-[6px] aspect-[260/540]">
      <div className="relative h-full w-full rounded-[38px] overflow-hidden bg-white">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[22px] w-[84px] rounded-full bg-[#0b0b0c] z-10" />
        <div className="px-4 pt-10 pb-4">
          {/* Top bar */}
          <div className="flex items-center justify-between text-[11px] font-semibold">
            <div className="flex items-center gap-1 text-mantar-red">
              <MushroomGlyph />
              mantar AI
            </div>
            <div className="flex items-center gap-1 text-mantar-red">
              3 <MushroomGlyph small />
            </div>
          </div>

          {/* Category chip */}
          <div className="mt-5 inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-mantar-cream text-[11px] font-semibold">
            <span className="h-4 w-4 rounded bg-mantar-red/15 grid place-items-center text-mantar-red">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor"><rect x="5" y="10" width="14" height="5" rx="2"/></svg>
            </span>
            Kahve
          </div>

          {/* Restaurant photo area */}
          <div className="mt-3 relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#6a4325] to-[#8c5a30]">
            <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full">
              <rect width="200" height="250" fill="#7a5230" />
              <rect x="30" y="40" width="140" height="110" rx="6" fill="#3a2518" opacity="0.5" />
              <rect x="36" y="46" width="40" height="70" fill="#d4a574" opacity="0.6" />
              <rect x="80" y="46" width="40" height="70" fill="#c99465" opacity="0.6" />
              <rect x="124" y="46" width="40" height="70" fill="#d4a574" opacity="0.6" />
              <circle cx="60" cy="190" r="8" fill="#f4d0a0" opacity="0.5" />
              <circle cx="140" cy="186" r="8" fill="#f4d0a0" opacity="0.5" />
            </svg>
            {/* Card overlay */}
            <div className="absolute bottom-2 left-2 right-2 bg-white rounded-xl px-3 py-2">
              <div className="font-bold text-[13px] leading-tight">Luzzo</div>
              <div className="text-[10px] text-mantar-muted leading-none mt-0.5">
                İtalyan Mutfağı · Nişantaşı
              </div>
              <div className="flex items-center gap-2 mt-1 text-[10px]">
                <span className="text-mantar-muted">0.3 km</span>
                <span className="inline-flex items-center gap-0.5">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-mantar-gold" fill="currentColor">
                    <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5 2 9.5l7-1L12 2z" />
                  </svg>
                  4.5
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[8px] px-1.5 h-4 rounded bg-mantar-cream text-mantar-ink/70 grid place-items-center">Balçova</span>
                <span className="text-[8px] px-1.5 h-4 rounded bg-mantar-cream text-mantar-ink/70 grid place-items-center">Akşam Yemeği</span>
                <span className="text-[8px] px-1.5 h-4 rounded bg-mantar-cream text-mantar-ink/70 grid place-items-center">Romantik</span>
              </div>
            </div>
          </div>

          {/* X / Heart buttons */}
          <div className="flex items-center justify-center gap-8 mt-4">
            <button className="h-11 w-11 rounded-full bg-white border border-mantar-line grid place-items-center text-mantar-ink/60 shadow">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <button className="h-11 w-11 rounded-full bg-emerald-400 grid place-items-center text-white shadow">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 21s-8-5.5-8-11.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============= Phone: MantarPuan ============= */
function PhonePuan() {
  return (
    <div className="relative phone-shadow rounded-[44px] bg-[#0b0b0c] p-[6px] aspect-[260/540]">
      <div className="relative h-full w-full rounded-[38px] overflow-hidden bg-white">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[22px] w-[84px] rounded-full bg-[#0b0b0c] z-10" />
        <div className="px-4 pt-10 pb-4 flex flex-col h-full">
          <div className="text-center text-[13px] font-bold text-mantar-red">MantarPuan</div>
          {/* Huge count */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-[42px] leading-none">120</span>
              <MushroomGlyph large />
            </div>
            <div className="mt-2 text-[10px] text-mantar-muted">Seviye 3</div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-mantar-red/10 overflow-hidden">
              <div className="h-full w-[80%] bg-mantar-red rounded-full" />
            </div>
            <div className="mt-1 text-[9px] text-mantar-muted text-right">120/150</div>
          </div>

          {/* Mekanlara göre mantarların */}
          <div className="mt-4 text-[11px] font-bold">Mekanlara Göre Mantarların</div>
          <div className="mt-2 space-y-1.5 flex-1">
            {[
              { n: "Luzzo", s: "İtalyan Mutfağı", v: 12 },
              { n: "Big Chefs", s: "Kahve", v: 8 },
              { n: "Vogue Café", s: "Kafe · Jet", v: 5 },
            ].map((m) => (
              <div key={m.n} className="flex items-center gap-2 p-1.5 rounded-lg bg-mantar-cream/60">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#8a5a30] to-[#6a4a2a] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold leading-none">{m.n}</div>
                  <div className="text-[8px] text-mantar-muted mt-0.5">{m.s}</div>
                </div>
                <div className="inline-flex items-center gap-0.5 text-[10px] font-bold text-mantar-red">
                  {m.v} <MushroomGlyph small />
                </div>
              </div>
            ))}
          </div>

          {/* QR button */}
          <button className="mt-3 h-10 w-full rounded-full bg-mantar-red text-white text-[11px] font-bold inline-flex items-center justify-center gap-1.5">
            <MushroomGlyph />
            QR Kodumu Göster
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============= Helpers ============= */
function MushroomGlyph({ small = false, large = false }: { small?: boolean; large?: boolean }) {
  const sz = large ? "w-6 h-6" : small ? "w-2.5 h-2.5" : "w-3.5 h-3.5";
  return (
    <svg viewBox="0 0 32 32" className={sz} fill="currentColor" aria-hidden>
      <path d="M5 13c0-5 5-9 11-9s11 4 11 9c0 1-.6 1.6-1.6 1.6H6.6C5.6 14.6 5 14 5 13z" />
      <rect x="12" y="14.6" width="8" height="12" rx="1.5" />
    </svg>
  );
}

function Sparkle({ className = "", size = 12 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={{ width: size, height: size }}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v14M6 12l6 6 6-6" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
