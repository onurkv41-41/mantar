import MantarMascot from "./MantarMascot";
import StoreButtons from "./StoreButtons";
import DownloadButton from "./DownloadButton";

export default function MascotCTA() {
  return (
    <section id="indir" className="bg-mantar-cream py-10 sm:py-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[22px] sm:rounded-[28px] bg-mantar-red/8 border border-mantar-red/15 px-5 sm:px-10 py-6 sm:py-8 flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-10">
          {/* Mascot */}
          <div className="w-[120px] sm:w-[160px] flex-shrink-0 relative">
            <MantarMascot winking />
            <svg
              viewBox="0 0 24 24"
              className="absolute top-2 -right-2 w-5 h-5 text-mantar-gold"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="absolute -bottom-2 -left-2 w-4 h-4 text-mantar-gold"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
            </svg>
          </div>

          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-display text-[20px] sm:text-[24px] lg:text-[28px] font-bold tracking-[-0.01em] leading-tight">
              Mantar seninle,
              <br />
              keşfetmek daha eğlenceli!
            </h3>
            <p className="mt-2 text-[14px] text-mantar-muted">
              Hemen indir, keşfetmeye başla!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 items-center lg:items-end">
            <DownloadButton
              ariaLabel="Uygulamayı indir"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-mantar-red text-white font-semibold text-[15px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition"
            >
              Uygulamayı İndir
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v14M6 12l6 6 6-6" />
              </svg>
            </DownloadButton>
            <StoreButtons size="sm" theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
