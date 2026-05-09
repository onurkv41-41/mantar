import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Harita — Mantar",
  description: "Mantar haritası üzerinde yakınındaki mekanları keşfet.",
};

export default function HaritaPage() {
  return (
    <div className="min-h-screen bg-mantar-cream">
      <Nav />

      <main className="mx-auto max-w-[1280px] px-4 sm:px-8 py-10 sm:py-16">
        <div className="text-center max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red text-[12px] font-bold tracking-[0.05em]">
            HARİTA
          </div>
          <h1 className="mt-3 font-display text-[28px] sm:text-[40px] font-bold tracking-[-0.01em]">
            Mantar Haritası
          </h1>
          <p className="mt-3 text-[14px] sm:text-[15.5px] text-mantar-muted">
            Yakındaki mekanları, kampanyaları ve gurme önerilerini tek bir
            haritada keşfet.
          </p>
        </div>

        {/* Placeholder map area — content to be designed */}
        <div className="mt-8 sm:mt-10 rounded-[22px] sm:rounded-[28px] border border-dashed border-mantar-line bg-white/70 px-6 sm:px-10 py-16 sm:py-24 text-center">
          <p className="text-[14px] text-mantar-muted">
            Harita ekranı yakında burada tasarlanacak.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
