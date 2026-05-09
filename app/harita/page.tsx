import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import TurkeyMapClient from "./TurkeyMapClient";

export const metadata = {
  title: "Harita — Mantar",
  description:
    "Mantar'ın aktif olduğu illeri haritada keşfet. Şu anda 5 ilde — yakında daha fazlası.",
};

const ACTIVE_CITIES = ["İstanbul", "Kocaeli", "Sakarya", "Ankara", "Kayseri"];

export default function HaritaPage() {
  return (
    <div className="min-h-screen bg-mantar-cream">
      <Nav />

      <main className="mx-auto max-w-[1280px] px-4 sm:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red text-[12px] font-bold tracking-[0.05em]">
            HARİTA
          </div>
          <h1 className="mt-3 font-display text-[28px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.05]">
            Mantar şu an{" "}
            <span className="text-mantar-red">{ACTIVE_CITIES.length} ilde</span>
          </h1>
          <p className="mt-3 text-[14px] sm:text-[16px] text-mantar-muted max-w-[560px] mx-auto leading-[1.55]">
            Aktif olduğumuz şehirler haritada kırmızı ile işaretli. Yakında{" "}
            {81 - ACTIVE_CITIES.length} il daha eklenecek.
          </p>
        </div>

        {/* Map card */}
        <div className="mt-8 sm:mt-10 bg-white rounded-[22px] sm:rounded-[28px] border border-mantar-line/60 shadow-[0_30px_70px_-30px_rgba(30,10,15,0.1)] p-3 sm:p-6 lg:p-8">
          <TurkeyMapClient />
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12.5px] text-mantar-muted">
            <Legend color="#ae2940" label="Aktif il" />
            <Legend color="#ecdfb5" outline="#b89860" label="Yakında" />
          </div>
        </div>

        {/* Active cities list */}
        <div className="mt-8 sm:mt-10">
          <h2 className="text-center font-display text-[18px] sm:text-[22px] font-bold tracking-[-0.005em] mb-4 sm:mb-5">
            Aktif iller
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ACTIVE_CITIES.map((name) => (
              <div
                key={name}
                className="group relative bg-white rounded-2xl border border-mantar-line/60 px-4 py-4 flex items-center gap-3 hover:border-mantar-red/40 hover:shadow-[0_12px_24px_-16px_rgba(174,41,64,0.35)] transition"
              >
                <div className="relative h-9 w-9 rounded-xl bg-mantar-red/10 grid place-items-center flex-shrink-0">
                  <PinIcon className="w-5 h-5 text-mantar-red" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display font-bold text-[14.5px] truncate">
                    {name}
                  </div>
                  <div className="text-[11.5px] text-mantar-muted">Aktif</div>
                </div>
                <div
                  className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>

        {/* Coming soon strip */}
        <div className="mt-6 sm:mt-8 rounded-[18px] sm:rounded-[22px] bg-mantar-cream-deep/55 border border-mantar-line/60 px-5 sm:px-7 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="h-10 w-10 rounded-full bg-mantar-gold/25 grid place-items-center flex-shrink-0">
            <SparkIcon className="w-5 h-5 text-[var(--color-feat-top-ink)]" />
          </div>
          <div className="flex-1">
            <div className="font-display font-bold text-[15px] sm:text-[16px] tracking-[-0.005em]">
              Yakında {81 - ACTIVE_CITIES.length} il daha aktif olacak.
            </div>
            <div className="text-[12.5px] sm:text-[13px] text-mantar-muted mt-0.5">
              Şehrini Mantar&apos;a getirmek istiyorsan{" "}
              <a
                href="/iletisim"
                className="text-mantar-red font-semibold underline-offset-2 hover:underline"
              >
                bize yaz
              </a>
              .
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function Legend({
  color,
  outline,
  label,
}: {
  color: string;
  outline?: string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="inline-block h-3 w-4 rounded-[3px]"
        style={{
          backgroundColor: color,
          border: outline ? `1px solid ${outline}` : "none",
        }}
        aria-hidden
      />
      {label}
    </span>
  );
}

function PinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}
function SparkIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}
