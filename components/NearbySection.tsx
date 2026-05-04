import PhoneFrame from "./PhoneFrame";
import DownloadButton from "./DownloadButton";

const bullets = [
  "Harita üzerinde binlerce mekan keşfet",
  "Konumuna göre öneriler al",
  "Kampanyalardan haberdar ol",
  "Hemen rezervasyon yap",
  "Deneyimlerini paylaş, topluluğa katıl",
];

export default function NearbySection() {
  return (
    <section id="mekanlar" className="relative bg-mantar-cream-deep/70 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-12">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <h2 className="font-display text-[44px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.02em]">
              Yakındaki <span className="text-mantar-red">en iyi</span>
              <br />
              mekanlar bir tık uzağında!
            </h2>

            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[16px] text-mantar-ink/90">
                  <span className="mt-1 h-5 w-5 rounded-full bg-mantar-red/12 grid place-items-center text-mantar-red flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <DownloadButton
              ariaLabel="Uygulamayı indir"
              className="inline-flex items-center gap-2 mt-10 h-12 px-6 rounded-full bg-mantar-red text-white font-semibold text-[15px] hover:bg-mantar-red-dark transition shadow-[0_12px_24px_-10px_rgba(174,41,64,0.5)]"
            >
              Hemen Keşfet
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </DownloadButton>
          </div>

          {/* Right: three phones */}
          <div className="relative flex items-end justify-center h-[580px]">
            <div className="absolute left-0 bottom-6">
              <PhoneFrame rotate={-4} label="Harita" className="scale-[0.92]" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
              <PhoneFrame rotate={2} label="Mantar AI" className="scale-[1.02]" />
            </div>
            <div className="absolute right-0 bottom-8">
              <PhoneFrame rotate={5} label="Akış" className="scale-[0.92]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
