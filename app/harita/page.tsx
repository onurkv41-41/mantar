import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Harita — Mantar",
  description:
    "Mantar'ın aktif olduğu illeri haritada keşfet. Şu anda 5 ilde — yakında daha fazlası.",
};

type City = {
  name: string;
  // viewBox 1000 x 380 koordinatları (lon→x, lat→y dönüşümü)
  cx: number;
  cy: number;
  labelX?: number;
  labelY?: number;
  labelAnchor?: "start" | "middle" | "end";
};

const ACTIVE_CITIES: City[] = [
  { name: "İstanbul", cx: 157, cy: 63, labelX: 142, labelY: 50, labelAnchor: "end" },
  { name: "Kocaeli",  cx: 206, cy: 77, labelX: 200, labelY: 102, labelAnchor: "middle" },
  { name: "Sakarya",  cx: 232, cy: 77, labelX: 250, labelY: 50, labelAnchor: "start" },
  { name: "Ankara",   cx: 361, cy: 131, labelX: 376, labelY: 124, labelAnchor: "start" },
  { name: "Kayseri",  cx: 500, cy: 207, labelX: 514, labelY: 200, labelAnchor: "start" },
];

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
            Aktif olduğumuz şehirler haritada işaretli. Yakında {81 - ACTIVE_CITIES.length} il
            daha eklenecek.
          </p>
        </div>

        {/* Map card */}
        <div className="mt-8 sm:mt-10 bg-white rounded-[22px] sm:rounded-[28px] border border-mantar-line/60 shadow-[0_30px_70px_-30px_rgba(30,10,15,0.1)] p-3 sm:p-6 lg:p-8">
          <TurkeyMap />
        </div>

        {/* Active cities list */}
        <div className="mt-6 sm:mt-8">
          <h2 className="text-center font-display text-[18px] sm:text-[22px] font-bold tracking-[-0.005em] mb-4 sm:mb-5">
            Aktif iller
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ACTIVE_CITIES.map((c) => (
              <div
                key={c.name}
                className="group relative bg-white rounded-2xl border border-mantar-line/60 px-4 py-4 flex items-center gap-3 hover:border-mantar-red/40 hover:shadow-[0_12px_24px_-16px_rgba(174,41,64,0.35)] transition"
              >
                <div className="relative h-9 w-9 rounded-xl bg-mantar-red/10 grid place-items-center flex-shrink-0">
                  <PinIcon className="w-5 h-5 text-mantar-red" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display font-bold text-[14.5px] truncate">
                    {c.name}
                  </div>
                  <div className="text-[11.5px] text-mantar-muted">
                    Aktif
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" aria-hidden />
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
              <a href="/iletisim" className="text-mantar-red font-semibold underline-offset-2 hover:underline">
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

/* ---------------------------------------------------
   Turkey map SVG
--------------------------------------------------- */
function TurkeyMap() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1000 380"
        className="w-full h-auto"
        role="img"
        aria-label="Mantar'ın aktif olduğu Türkiye illeri haritası"
      >
        <defs>
          <linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4ecda" />
            <stop offset="100%" stopColor="#e9dec5" />
          </linearGradient>
          <radialGradient id="pinPulse" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ae2940" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#ae2940" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ae2940" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle grid backdrop */}
        <pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="#cdb38a" opacity="0.18" />
        </pattern>
        <rect width="1000" height="380" fill="url(#grid)" />

        {/* Turkey landmass — stylized smooth shape */}
        <path
          d="
            M 12,55
            C 90,18 230,12 360,22
            C 490,30 620,42 760,68
            C 850,90 920,118 960,158
            C 988,205 974,248 922,268
            C 818,298 692,302 540,300
            C 380,298 230,282 130,252
            C 58,225 18,178 10,108
            C 4,82 4,65 12,55 Z
          "
          fill="url(#landFill)"
          stroke="#d4c294"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* North Cyprus little blob (visual nicety) */}
        <ellipse cx="345" cy="335" rx="28" ry="6" fill="#ece2c7" stroke="#d4c294" strokeWidth="1.4" />

        {/* Province soft inner stroke for depth */}
        <path
          d="
            M 12,55
            C 90,18 230,12 360,22
            C 490,30 620,42 760,68
            C 850,90 920,118 960,158
            C 988,205 974,248 922,268
            C 818,298 692,302 540,300
            C 380,298 230,282 130,252
            C 58,225 18,178 10,108
            C 4,82 4,65 12,55 Z
          "
          fill="none"
          stroke="#fff"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          strokeLinejoin="round"
          transform="translate(2,2)"
        />

        {/* Marmara water tint */}
        <ellipse cx="180" cy="80" rx="60" ry="14" fill="#cfe1ec" opacity="0.45" />

        {/* City pins */}
        {ACTIVE_CITIES.map((c) => (
          <CityPin key={c.name} city={c} />
        ))}

        {/* Compass indicator (top right) */}
        <g transform="translate(945,30)" opacity="0.6">
          <circle r="14" fill="#fff" stroke="#d4c294" strokeWidth="1.2" />
          <path d="M 0,-9 L 3,0 L 0,9 L -3,0 Z" fill="#ae2940" />
          <text y="-16" textAnchor="middle" fontSize="9" fill="#6b6b6b" fontWeight="700">
            K
          </text>
        </g>
      </svg>

      {/* Pulse keyframes */}
      <style>{`
        @keyframes mapPulse {
          0%   { transform: scale(0.6); opacity: 0.7; }
          80%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .pin-pulse-a { animation: mapPulse 2.4s ease-out infinite; transform-origin: center; transform-box: fill-box; }
        .pin-pulse-b { animation: mapPulse 2.4s ease-out infinite 1.2s; transform-origin: center; transform-box: fill-box; }
        @media (prefers-reduced-motion: reduce) {
          .pin-pulse-a, .pin-pulse-b { animation: none; opacity: 0.25; }
        }
      `}</style>
    </div>
  );
}

function CityPin({ city }: { city: City }) {
  const { cx, cy, name, labelX, labelY, labelAnchor = "start" } = city;
  return (
    <g>
      {/* Pulsing rings */}
      <circle cx={cx} cy={cy} r={10} fill="url(#pinPulse)" className="pin-pulse-a" />
      <circle cx={cx} cy={cy} r={10} fill="url(#pinPulse)" className="pin-pulse-b" />

      {/* Pin shadow */}
      <ellipse cx={cx} cy={cy + 9} rx="5" ry="1.4" fill="#000" opacity="0.18" />

      {/* Pin body (teardrop) */}
      <path
        d={`M ${cx},${cy - 14} c -5,0 -8,4 -8,8 c 0,5.5 8,12 8,12 s 8,-6.5 8,-12 c 0,-4 -3,-8 -8,-8 z`}
        fill="#ae2940"
        stroke="#fff"
        strokeWidth="1.5"
      />
      {/* Pin inner dot */}
      <circle cx={cx} cy={cy - 6} r="2.6" fill="#fff" />

      {/* Label with halo */}
      <text
        x={labelX ?? cx + 12}
        y={labelY ?? cy - 12}
        textAnchor={labelAnchor}
        fontSize="13"
        fontWeight="700"
        fill="#1a1715"
        stroke="#faf5eb"
        strokeWidth="3.5"
        paintOrder="stroke"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {name}
      </text>
    </g>
  );
}

/* ---------- icons ---------- */
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
