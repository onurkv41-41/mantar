import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import StoreButtons from "@/components/StoreButtons";
import MantarIcon from "@/components/MantarIcon";
import DownloadButton from "@/components/DownloadButton";

export const metadata = {
  title: "Mantar AI Nasıl Çalışır? — Mantar",
  description:
    "Mantar AI ile zevklerine uygun mekanları bulmanın en eğlenceli ve akıllı yolu.",
};

export default function MantarAIPage() {
  return (
    <div className="min-h-screen bg-mantar-cream">
      <Nav />

      {/* ========== Hero ========== */}
      <section className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20">
        <HeroOrnaments />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 sm:gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-[32px] sm:text-[44px] lg:text-[64px]">
                <span className="text-mantar-red">Mantar AI</span>
                <br />
                Nasıl Çalışır?
              </h1>
              <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] leading-[1.55] text-mantar-muted max-w-[460px] mx-auto lg:mx-0">
                Zevklerine uygun mekanları bulmanın en eğlenceli ve akıllı yolu.
              </p>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <MascotWithBubble />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Step Cards ========== */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-[22px] sm:rounded-[32px] border border-mantar-line/60 shadow-[0_20px_50px_-30px_rgba(30,10,15,0.08)] p-5 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <MantarIcon size={36} />
              <h2 className="font-display text-[22px] sm:text-[24px] font-bold tracking-[-0.01em]">
                Adım Adım Mantar AI
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <StepCard
                num="01"
                title="3 Hakkın Var"
                description="Günde 3 kez Mantar AI'yı kullanabilirsin. Her kullanımda 3 canın olur."
              >
                <StepPhone1 />
              </StepCard>
              <StepCard
                num="02"
                title="Ne Arıyorsun?"
                description="Yemek mi, kahve mi, eğlence mi? Seçimini yap ve keşfe başla."
              >
                <StepPhone2 />
              </StepCard>
              <StepCard
                num="03"
                title="Keşfet ve Kaydır"
                description="Sana özel 25-30 mekan kartı karşına gelir. Beğendiğin mekanları sağa, beğenmediklerini sola kaydır."
              >
                <StepPhone3 />
              </StepCard>
              <StepCard
                num="04"
                title="Tercihlerini Öğrenir"
                description="Sağa ve sola kaydırdığın tercihlerine göre Mantar AI, zevkini öğrenir."
              >
                <StepPhone4 />
              </StepCard>
              <StepCard
                num="05"
                title="Sana Özel 3 Öneri"
                description="Mantar AI, seçimlerine göre çevrendeki en uygun 3 mekanı sana önerir."
              >
                <StepPhone5 />
              </StepCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Akıllı Öneri Mantığı ========== */}
      <section className="relative bg-mantar-cream-deep/50 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-[760px] mx-auto mb-10 sm:mb-14">
            <h2 className="font-display text-[24px] sm:text-[32px] font-bold tracking-[-0.01em]">
              Mantar AI&apos;ın Akıllı Öneri Mantığı
            </h2>
            <p className="mt-3 text-[13.5px] sm:text-[15px] text-mantar-muted leading-relaxed">
              Mantar AI, senin kaydırma davranışlarını analiz ederek beğenilerini öğrenir;
              konumunu, tercihlerini ve geçmiş seçimlerini birleştirerek en uygun 3 mekanı sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-6 items-start">
            <LogicStep
              icon={<SwipeCardIcon />}
              title="Sağa & Sola Kaydır"
              description="Tercihlerini Mantar AI'a öğretirsin."
            />
            <FlowArrow />
            <LogicStep
              icon={<BrainIcon />}
              title="Analiz & Öğrenme"
              description="AI, beğenilerini analiz eder ve zevkini anlar."
            />
            <FlowArrow />
            <LogicStep
              icon={<LocationIcon />}
              title="Konum & Tercihler"
              description="Bulunduğun konum ve tercihlerinle eşleştirir."
            />
            <FlowArrow />
            <LogicStep
              icon={<StarIcon />}
              title="En Uygun 3 Mekan"
              description="Sana en uygun 3 mekanı önerir."
            />
          </div>
        </div>
      </section>

      {/* ========== Pink CTA banner ========== */}
      <section className="py-8 sm:py-10 bg-mantar-cream-deep/50">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="relative rounded-[28px] bg-mantar-red/10 border border-mantar-red/15 px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
            <div className="flex-shrink-0">
              <MantarIcon size={64} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="font-display text-[20px] sm:text-[22px] font-bold tracking-[-0.01em]">
                Keşfet, kaydır, keşfet!
              </div>
              <p className="mt-1 text-[14px] text-mantar-muted leading-snug">
                Mantar AI ile zevkine en uygun mekanları bulmak artık çok daha kolay ve eğlenceli.
              </p>
            </div>
            <DownloadButton
              ariaLabel="Uygulamayı indir"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-mantar-red text-white font-semibold text-[15px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition flex-shrink-0"
            >
              Hemen Dene
              <ArrowRight />
            </DownloadButton>
          </div>
        </div>
      </section>

      {/* ========== Bottom CTA ========== */}
      <section className="py-10 sm:py-14 bg-mantar-cream-deep/50">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="rounded-[28px] bg-white border border-mantar-line/60 px-6 sm:px-10 py-7 flex flex-col lg:flex-row items-center gap-6 justify-between">
            <div className="text-center lg:text-left">
              <div className="text-[14px] text-mantar-muted">
                Mantar AI&apos;ı Denemeye Başla!
              </div>
              <div className="font-display text-[24px] sm:text-[26px] font-bold tracking-[-0.01em] mt-1">
                Günde 3 hakkın seni bekliyor.
              </div>
              <div className="text-[13px] text-mantar-muted mt-1">
                En iyi mekanlar, senin zevkine göre burada.
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <DownloadButton
                ariaLabel="Uygulamayı indir"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border-2 border-mantar-red text-mantar-red font-semibold text-[14px] hover:bg-mantar-red hover:text-white transition"
              >
                Uygulamayı İndir
                <DownloadIcon />
              </DownloadButton>
              <StoreButtons size="sm" theme="dark" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ============= Step card shell ============= */
function StepCard({
  num,
  title,
  description,
  children,
}: {
  num: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white border border-mantar-line/60 p-4 flex flex-col">
      <div className="inline-flex self-start items-center justify-center h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red font-bold text-[12px]">
        {num}
      </div>
      <h3 className="mt-3 font-display text-[16px] font-bold leading-tight">
        {title}
      </h3>
      <p className="mt-1.5 text-[12.5px] text-mantar-muted leading-snug min-h-[52px]">
        {description}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* ============= Small phone frame ============= */
function MiniPhone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto rounded-[22px] bg-[#1a1715] p-[3px] w-full max-w-[180px] aspect-[180/300] ${className}`}
    >
      <div className="relative h-full w-full rounded-[19px] overflow-hidden bg-white">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-[14px] w-[48px] rounded-full bg-[#1a1715] z-10" />
        {children}
      </div>
    </div>
  );
}

function PhoneHeader({ dots = true }: { dots?: boolean }) {
  return (
    <div className="flex items-center justify-between px-3 pt-6 pb-2">
      <button className="text-mantar-ink/70 text-[12px]">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <div className="text-[10px] font-bold tracking-[0.12em] text-mantar-ink">MANTAR AI</div>
      {dots ? (
        <button className="text-mantar-ink/70">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <circle cx="5" cy="12" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="19" cy="12" r="1.6" />
          </svg>
        </button>
      ) : (
        <span className="w-3.5" />
      )}
    </div>
  );
}

/* ============= Step 1 phone ============= */
function StepPhone1() {
  return (
    <MiniPhone>
      <PhoneHeader />
      <div className="px-4 pt-4 flex flex-col items-center text-center">
        <div className="text-[10.5px] text-mantar-ink/80 leading-snug">
          Bugün kullanabileceğin
          <br />
          <span className="font-bold">3 hakkın var!</span>
        </div>
        <div className="flex items-center gap-3 mt-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-8 w-8 grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-mantar-red" fill="currentColor">
                <path d="M12 21s-8-5.5-8-11.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
              </svg>
            </div>
          ))}
        </div>
        <button className="mt-6 h-8 w-full rounded-lg bg-mantar-red text-white text-[11px] font-semibold">
          Başla
        </button>
      </div>
    </MiniPhone>
  );
}

/* ============= Step 2 phone ============= */
function StepPhone2() {
  const items = [
    { label: "Yemek", icon: <ForkKnifeIcon />, bg: "bg-mantar-red/10", text: "text-mantar-red" },
    { label: "Kahve", icon: <CoffeeIcon />, bg: "bg-amber-100", text: "text-amber-700" },
    { label: "Eğlence", icon: <MicIcon />, bg: "bg-purple-100", text: "text-purple-600" },
  ];
  return (
    <MiniPhone>
      <PhoneHeader />
      <div className="px-3 pt-3">
        <div className="text-center text-[10.5px] text-mantar-ink/80 font-medium">
          Bugün ne arıyorsun?
        </div>
        <div className="mt-3 space-y-2">
          {items.map((it) => (
            <button
              key={it.label}
              className="w-full h-9 rounded-xl border border-mantar-line bg-white flex items-center gap-2.5 pl-3"
            >
              <span className={`h-6 w-6 rounded-md ${it.bg} ${it.text} grid place-items-center`}>
                {it.icon}
              </span>
              <span className="text-[11px] font-semibold">{it.label}</span>
            </button>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

/* ============= Step 3 phone ============= */
function StepPhone3() {
  return (
    <MiniPhone>
      <PhoneHeader />
      <div className="px-2 pt-2">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#6a4a2a] via-[#8a5a30] to-[#a06a38] aspect-[4/5]">
          {/* Restaurant illustration */}
          <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full" aria-hidden>
            <rect width="100" height="120" fill="#6a4a2a" />
            <rect x="10" y="20" width="80" height="60" rx="4" fill="#3a2718" opacity="0.6" />
            <rect x="14" y="24" width="22" height="30" fill="#d4a574" opacity="0.7" />
            <rect x="40" y="24" width="22" height="30" fill="#c99465" opacity="0.7" />
            <rect x="66" y="24" width="22" height="30" fill="#d4a574" opacity="0.7" />
            <circle cx="30" cy="90" r="4" fill="#fff3d6" opacity="0.4" />
            <circle cx="60" cy="88" r="4" fill="#fff3d6" opacity="0.4" />
          </svg>
          <button className="absolute top-1.5 right-1.5 h-6 w-6 rounded-full bg-mantar-red text-white grid place-items-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          {/* Info card overlay */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white rounded-lg px-2.5 py-1.5">
            <div className="font-bold text-[10.5px] leading-tight">Luzzo</div>
            <div className="text-[8.5px] text-mantar-muted leading-none mt-0.5">İtalyan Mutfağı</div>
            <div className="flex items-center gap-2 mt-1 text-[8px] text-mantar-muted">
              <span>0.3 km</span>
              <span className="inline-flex items-center gap-0.5">
                <svg viewBox="0 0 24 24" className="w-2 h-2 text-mantar-gold" fill="currentColor">
                  <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5 2 9.5l7-1L12 2z" />
                </svg>
                4.8
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 mt-2">
          <button className="h-7 w-7 rounded-full border border-mantar-line bg-white grid place-items-center text-mantar-ink/70">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button className="h-7 w-7 rounded-full bg-mantar-red grid place-items-center text-white">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M12 21s-8-5.5-8-11.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
            </svg>
          </button>
        </div>
      </div>
    </MiniPhone>
  );
}

/* ============= Step 4 phone ============= */
function StepPhone4() {
  return (
    <MiniPhone>
      <PhoneHeader dots={false} />
      <div className="px-4 pt-4 flex flex-col items-center text-center">
        <div className="text-[10px] text-mantar-ink/80 leading-snug">
          Tercihlerini analiz
          <br />
          ediyorum...
        </div>
        <div className="my-5">
          <MushroomMascot small />
        </div>
        <div className="w-full">
          <div className="h-1.5 w-full rounded-full bg-mantar-red/15 overflow-hidden">
            <div className="h-full w-[70%] bg-mantar-red rounded-full" />
          </div>
          <div className="text-[9px] text-mantar-muted mt-1 text-right">%70</div>
        </div>
      </div>
    </MiniPhone>
  );
}

/* ============= Step 5 phone ============= */
function StepPhone5() {
  const places = [
    { name: "Luzzo", dist: "0.3 km", rate: "4.8", tone: "from-[#8a5a30] to-[#a06a38]" },
    { name: "Nokta Cadde", dist: "0.6 km", rate: "4.6", tone: "from-[#3a2a20] to-[#6a4a2a]" },
    { name: "Vogue Café", dist: "0.4 km", rate: "4.5", tone: "from-[#6a4a2a] to-[#8a5a30]" },
  ];
  return (
    <MiniPhone>
      <PhoneHeader />
      <div className="px-3 pt-3">
        <div className="text-center text-[10.5px] font-bold">
          Sana Özel 3 Öneri
        </div>
        <div className="mt-3 space-y-1.5">
          {places.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 p-1.5 rounded-lg bg-mantar-cream/60 border border-mantar-line"
            >
              <div className={`w-9 h-9 rounded-md bg-gradient-to-br ${p.tone} flex-shrink-0 overflow-hidden relative`}>
                <svg viewBox="0 0 40 40" className="w-full h-full" aria-hidden>
                  <circle cx="12" cy="24" r="3" fill="#fff3d6" opacity="0.5" />
                  <circle cx="28" cy="22" r="3" fill="#fff3d6" opacity="0.5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold leading-none">{p.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5 text-[8px] text-mantar-muted">
                  <span>{p.dist}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-0.5">
                    <svg viewBox="0 0 24 24" className="w-2 h-2 text-mantar-gold" fill="currentColor">
                      <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5 2 9.5l7-1L12 2z" />
                    </svg>
                    {p.rate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

/* ============= Logic step ============= */
function LogicStep({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-[240px] mx-auto">
      <div className="h-24 w-24 rounded-full bg-mantar-red/10 grid place-items-center mb-4">
        <div className="h-16 w-16 rounded-full bg-white/50 grid place-items-center text-mantar-red">
          {icon}
        </div>
      </div>
      <div className="font-display text-[15.5px] font-bold leading-tight">
        {title}
      </div>
      <p className="mt-1.5 text-[12.5px] text-mantar-muted leading-snug">
        {description}
      </p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden md:flex items-center justify-center text-mantar-muted/50 pt-8">
      <svg viewBox="0 0 40 12" className="w-10 h-3" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6h34M30 2l6 4-6 4" />
      </svg>
    </div>
  );
}

/* ============= Mascot + Speech Bubble ============= */
function MascotWithBubble() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[5/4]">
      {/* Soft pink circle */}
      <div
        className="absolute inset-0 rounded-full bg-mantar-red/8 scale-[0.9]"
        aria-hidden
      />
      {/* Speech bubble */}
      <div className="absolute left-0 top-[28%] z-10 bg-white rounded-2xl px-4 py-3 shadow-[0_12px_30px_-12px_rgba(30,10,15,0.1)] border border-mantar-line/50 max-w-[220px]">
        <p className="text-[13.5px] leading-[1.4] text-mantar-ink">
          Merhaba!
          <br />
          Ben Mantar AI.
          <br />
          Zehrine en uygun
          <br />
          mekanları bulman
          <br />
          için buradayım!
        </p>
        {/* Bubble tail */}
        <div className="absolute -right-2 top-14 w-4 h-4 bg-white border-r border-b border-mantar-line/50 rotate-[-45deg]" />
      </div>

      {/* Mushroom mascot */}
      <div className="absolute right-0 top-0 w-[60%] aspect-square flex items-end justify-center">
        <MushroomMascot />
      </div>

      {/* Sparkles */}
      <Sparkle className="absolute top-6 right-[20%] text-mantar-gold" size={16} />
      <Sparkle className="absolute top-[45%] right-4 text-mantar-gold" size={14} />
      <Sparkle className="absolute bottom-10 left-[30%] text-pink-300" size={10} />
      <Sparkle className="absolute top-[30%] left-[45%] text-pink-300" size={8} />
      <Sparkle className="absolute bottom-[20%] right-[8%] text-mantar-gold" size={12} />
    </div>
  );
}

/* ============= Mushroom Mascot ============= */
function MushroomMascot({ small = false }: { small?: boolean }) {
  const size = small ? "w-20 h-20" : "w-full h-full max-w-[280px] max-h-[320px]";
  return (
    <img
      src="/mantar-mascot-cap.svg"
      alt="Mantar"
      className={`${size} object-contain select-none`}
      draggable={false}
    />
  );
}

/* ============= Sparkle ============= */
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

/* ============= Hero background ornaments ============= */
function HeroOrnaments() {
  return (
    <>
      <div className="absolute top-20 right-[10%] w-[360px] h-[360px] rounded-full bg-mantar-red/5 blur-2xl pointer-events-none" aria-hidden />
      <div className="absolute top-40 right-0 w-[260px] h-[260px] rounded-full bg-mantar-red/5 pointer-events-none" aria-hidden />
    </>
  );
}

/* ============= Generic icons ============= */
function ForkKnifeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden>
      <path d="M8 3v6a2 2 0 01-1.3 1.9V21a1 1 0 11-2 0v-10A2 2 0 013 9V3a.75.75 0 011.5 0v4.5h.75V3a.75.75 0 011.5 0v4.5h.75V3a.75.75 0 011.5 0zM16 3c-2 0-4 2-4 5.5 0 2 1.3 3.4 2.7 4V21a1 1 0 102 0V3z" />
    </svg>
  );
}
function CoffeeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 10h13v4a5 5 0 01-5 5H9a5 5 0 01-5-5v-4z" />
      <path d="M17 12h1.5a2.5 2.5 0 010 5H17" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M6 11a6 6 0 0012 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17v4M9 21h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function SwipeCardIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="8" width="22" height="30" rx="3" />
      <path d="M30 20h6M30 26h4" />
      <circle cx="17" cy="18" r="4" fill="currentColor" stroke="none" />
      <path d="M32 40l4-2-1 4" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 10a6 6 0 00-11 3 5 5 0 00-2 8 5 5 0 003 8 5 5 0 0010 2V10z" />
      <path d="M24 10a6 6 0 0111 3 5 5 0 012 8 5 5 0 01-3 8 5 5 0 01-10 2V10z" />
      <path d="M18 18h4M26 18h4M18 26h4M26 26h4" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4c-7 0-13 5.5-13 13 0 9 13 23 13 23s13-14 13-23c0-7.5-6-13-13-13z" />
      <circle cx="24" cy="17" r="5" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinejoin="round">
      <path d="M24 5l6 12 13 2-9.5 9 2.2 13L24 34.5 12.3 41l2.2-13L5 19l13-2 6-12z" />
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
function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v14M6 12l6 6 6-6" />
    </svg>
  );
}
