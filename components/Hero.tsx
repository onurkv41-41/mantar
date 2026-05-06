import StoreButtons from "./StoreButtons";
import DownloadButton from "./DownloadButton";
import Link from "next/link";
import Image from "next/image";

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
      {/* Right phone: Venue detail */}
      <div
        className="absolute right-0 sm:right-2 top-0 w-[180px] sm:w-[220px] lg:w-[260px] anim-float"
        style={{ transform: "rotate(6deg)" }}
      >
        <PhoneScreenshot
          src="/hero-venue.png"
          alt="Mantar — Mekan detay ekranı"
        />
      </div>

      {/* Left phone: Discover home */}
      <div
        className="absolute left-0 sm:left-4 top-4 sm:top-6 w-[180px] sm:w-[220px] lg:w-[260px] anim-float-2"
        style={{ transform: "rotate(-6deg)" }}
      >
        <PhoneScreenshot
          src="/hero-discover.png"
          alt="Mantar — Keşfet ekranı"
        />
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

/* ============= Phone frame with screenshot ============= */
function PhoneScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative phone-shadow rounded-[44px] bg-[#0b0b0c] p-[6px] aspect-[260/540]">
      <div className="relative h-full w-full rounded-[38px] overflow-hidden bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 180px"
          priority
          className="object-cover"
        />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[22px] w-[84px] rounded-full bg-[#0b0b0c] z-10" />
      </div>
    </div>
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
