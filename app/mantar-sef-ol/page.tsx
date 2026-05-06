import Link from "next/link";
import MantarLogo from "@/components/MantarLogo";

export const metadata = {
  title: "Mantar Şef Ol — Yakında",
  description: "Mantar Şef üyeliği yakında başvuruya açılacak.",
};

export default function MantarSefOlPage() {
  return (
    <div className="relative min-h-screen bg-mantar-cream overflow-hidden flex flex-col">
      {/* Background ornaments */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-mantar-red/6 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[40%] -left-40 w-[380px] h-[380px] rounded-full bg-mantar-gold/12 blur-3xl"
        aria-hidden
      />

      {/* Top bar */}
      <header className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 py-5 sm:py-7">
          <Link href="/" className="inline-block">
            <MantarLogo width={100} className="sm:hidden" />
            <MantarLogo width={124} className="hidden sm:block" />
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-[640px] text-center">
          <div className="relative mx-auto w-[160px] sm:w-[200px] mb-8 sm:mb-10">
            <img
              src="/mantar-mascot-cap.svg"
              alt="Mantar"
              className="w-full h-auto select-none anim-float"
              draggable={false}
            />
            <Sparkle className="absolute top-2 -right-2 text-mantar-gold anim-float-2" size={22} />
            <Sparkle className="absolute bottom-2 -left-3 text-mantar-gold anim-float-3" size={16} />
            <Sparkle className="absolute top-[40%] -left-6 text-mantar-red/70" size={12} />
          </div>

          <div className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-mantar-red/10 text-mantar-red text-[12.5px] font-bold tracking-[0.05em]">
            <ClockIcon className="w-3.5 h-3.5" />
            ÇOK YAKINDA
          </div>

          <h1 className="mt-5 font-display font-bold leading-[1.05] tracking-[-0.02em] text-[36px] sm:text-[52px] lg:text-[64px]">
            <span className="text-mantar-red">Mantar Şef</span>
            <br />
            yakında geliyor.
          </h1>

          <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.55] text-mantar-muted max-w-[480px] mx-auto">
            Şef üyeliği için başvurular kısa süre içinde burada açılacak.
            O zamana kadar Mantar&apos;ı keşfetmeye devam et.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-mantar-red text-white font-semibold text-[14.5px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition"
            >
              <ArrowLeft />
              Anasayfaya Dön
            </Link>
            <Link
              href="/mantar-gurme-ol"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 border-mantar-red text-mantar-red font-semibold text-[14px] hover:bg-mantar-red hover:text-white transition"
            >
              Mantar Gurme Ol
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function ClockIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 18l-6-6 6-6" />
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
