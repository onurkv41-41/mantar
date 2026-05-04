import MantarIcon from "./MantarIcon";

const steps = [
  {
    num: "01",
    title: "Tercihini Seç",
    description: "Yemek mi, kahve mi, eğlence mi? Seçimini yap.",
    illustration: <StepSelect />,
  },
  {
    num: "02",
    title: "Kaydır ve Keşfet",
    description:
      "Mekan kartlarını sağa (istiyorum) ve sola (istemiyorum) kaydır.",
    illustration: <StepSwipe />,
  },
  {
    num: "03",
    title: "Mantar AI Öğrenir",
    description: "Tercihlerini analiz eder, zevkine uygun mekanları bulur.",
    illustration: <StepLearn />,
  },
  {
    num: "04",
    title: "3 Mekan Önerir",
    description: "Çevrendeki en uygun 3 mekanı senin için önerir.",
    illustration: <StepMap />,
  },
  {
    num: "05",
    title: "Git, QR Göster, Mantar Topla!",
    description: "Mekanlardaki QR'ı göster, mantarını topla, ödülleri kazan.",
    illustration: <StepGift />,
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-mantar-cream py-14 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-display text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-[-0.02em] px-4">
          Mantar Nasıl Çalışır?
        </h2>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-x-4 gap-y-8 sm:gap-y-10 items-start">
          {steps.map((s, i) => (
            <div key={`wrap-${s.num}`} className="contents">
              <div className="flex flex-col items-center text-center max-w-[240px] mx-auto">
                <div className="h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-mantar-red/5 grid place-items-center">
                  {s.illustration}
                </div>
                <div className="mt-3 sm:mt-4 text-[13px] font-bold text-mantar-red">{s.num}</div>
                <div className="mt-1.5 sm:mt-2 font-display text-[15px] sm:text-[16px] font-bold leading-tight tracking-[-0.01em]">
                  {s.title}
                </div>
                <p className="mt-1.5 sm:mt-2 text-[12.5px] text-mantar-muted leading-snug px-2">
                  {s.description}
                </p>
              </div>
              {i < steps.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowArrow() {
  return (
    <div className="hidden md:flex items-center justify-center text-mantar-red/40 mt-20">
      <svg viewBox="0 0 32 12" className="w-8 h-3" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6h26M24 2l4 4-4 4" />
      </svg>
    </div>
  );
}

/* ============= Step illustrations ============= */
function StepSelect() {
  return (
    <div className="relative w-[110px] h-[150px] rounded-[18px] bg-white border border-mantar-line/60 shadow-sm p-2.5">
      <div className="space-y-1.5">
        {[
          { l: "Yemek", c: "text-mantar-red" },
          { l: "Kahve", c: "text-amber-700" },
          { l: "Eğlence", c: "text-purple-600" },
        ].map((it) => (
          <div key={it.l} className="flex items-center gap-1.5 h-7 px-2 rounded-lg bg-mantar-cream">
            <span className={`h-4 w-4 rounded ${it.c} bg-current/10 grid place-items-center`}>
              <svg viewBox="0 0 8 8" className="w-2 h-2" fill="currentColor"><circle cx="4" cy="4" r="2" /></svg>
            </span>
            <span className="text-[10px] font-semibold text-mantar-ink">{it.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepSwipe() {
  return (
    <div className="relative w-[130px] h-[150px]">
      <div className="absolute inset-x-0 top-0 rounded-[18px] bg-white border border-mantar-line/60 overflow-hidden h-[130px]">
        <div className="h-[78px] bg-gradient-to-br from-[#6a4325] to-[#8c5a30]">
          <svg viewBox="0 0 100 80" className="w-full h-full">
            <rect x="10" y="15" width="80" height="40" rx="4" fill="#3a2518" opacity="0.5" />
            <rect x="15" y="20" width="20" height="30" fill="#d4a574" opacity="0.6" />
            <rect x="40" y="20" width="20" height="30" fill="#c99465" opacity="0.6" />
          </svg>
        </div>
        <div className="px-2.5 pt-1.5">
          <div className="text-[10px] font-bold">Luzzo</div>
          <div className="text-[8px] text-mantar-muted">İtalyan Mutfağı</div>
        </div>
      </div>
      {/* X and heart */}
      <div className="absolute bottom-0 left-2 h-7 w-7 rounded-full bg-white border border-mantar-line grid place-items-center text-mantar-ink/60">
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-2 h-7 w-7 rounded-full bg-emerald-400 grid place-items-center text-white shadow">
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
          <path d="M12 21s-8-5.5-8-11.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
        </svg>
      </div>
    </div>
  );
}

function StepLearn() {
  return <MantarIcon size={96} />;
}

function StepMap() {
  return (
    <div className="relative w-[120px] h-[100px]">
      <div className="absolute inset-0 rounded-[14px] bg-mantar-cream-deep overflow-hidden">
        <svg viewBox="0 0 120 100" className="w-full h-full">
          <g stroke="#d8c8a4" strokeWidth="4" fill="none">
            <path d="M-10 40 L 130 30" />
            <path d="M-10 70 L 130 80" />
            <path d="M40 -10 L 35 120" />
            <path d="M85 -10 L 90 120" />
          </g>
          <path d="M30 85 Q 60 50 85 30" stroke="#ae2940" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
        </svg>
      </div>
      <div className="absolute left-[30%] top-[30%]">
        <svg viewBox="0 0 24 32" className="w-6 h-8 text-mantar-red" fill="currentColor">
          <path d="M12 0C5 0 0 5 0 11c0 8 12 20 12 20s12-12 12-20c0-6-5-11-12-11z" />
          <circle cx="12" cy="11" r="4" fill="#fff" />
        </svg>
      </div>
    </div>
  );
}

function StepGift() {
  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24" aria-hidden>
      {/* Box */}
      <rect x="20" y="50" width="80" height="60" rx="6" fill="#f4dfb8" stroke="#e5ceaa" />
      <rect x="20" y="50" width="80" height="14" fill="#e5ceaa" />
      {/* Ribbon */}
      <rect x="54" y="50" width="12" height="60" fill="#ae2940" />
      {/* Bow */}
      <path d="M40 32 Q 60 12 60 32 Q 60 12 80 32 Q 80 52 60 40 Q 40 52 40 32Z" fill="#ae2940" />
      <circle cx="60" cy="36" r="4" fill="#f4dfb8" />
      {/* Sparkles */}
      <circle cx="16" cy="20" r="2" fill="#f5c842" />
      <circle cx="102" cy="18" r="2.5" fill="#f5c842" />
      <circle cx="108" cy="58" r="2" fill="#f5c842" />
    </svg>
  );
}
