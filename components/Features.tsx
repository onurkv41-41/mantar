type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  ink: string;
  extra?: React.ReactNode;
};

export default function Features() {
  const features: Feature[] = [
    {
      icon: <BrainIcon />,
      title: "Mantar AI",
      description:
        "Sana 5 soru soralım, en uygun mekanı senin için bulalım. Günlük 3 hakkın var!",
      bg: "bg-feat-ai/30",
      ink: "text-feat-ai-ink",
    },
    {
      icon: <DiceIcon />,
      title: "MantarChallenge",
      description:
        "Karar veremiyor musun? Zar at, sürpriz mekanı seç, indirim kodunu kap!",
      bg: "bg-feat-challenge/25",
      ink: "text-feat-challenge-ink",
    },
    {
      icon: <TrophyIcon />,
      title: "Haftanın Enleri",
      description:
        "Haftanın en iyi restoranı, yorumu ve lezzetini keşfet!",
      bg: "bg-feat-top/35",
      ink: "text-feat-top-ink",
    },
    {
      icon: <StarIcon />,
      title: "Puanla & Yorumla",
      description:
        "Lezzet, servis, ambiyans puanla, fotoğraflarınla deneyimini paylaş.",
      bg: "bg-feat-rate/25",
      ink: "text-feat-rate-ink",
    },
    {
      icon: <CheckIcon />,
      title: "Doğrulanmış Yorumlar",
      description: "Sadece mekandayken yapılan yorumlara güven.",
      bg: "bg-feat-verified/25",
      ink: "text-feat-verified-ink",
      extra: (
        <div className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-feat-rate-ink">
          Verified Review
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="ozellikler" className="relative bg-mantar-cream py-24">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-[44px] lg:text-[52px] font-bold leading-tight tracking-[-0.02em]">
            Mantar ile <span className="text-mantar-red">daha fazlası</span>
          </h2>
          <p className="mt-3 text-mantar-muted text-[16px]">
            Lezzet dolu bir deneyim için tasarlandı.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-white rounded-3xl p-7 border border-mantar-line/60 hover:border-mantar-red/30 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`h-16 w-16 rounded-2xl ${f.bg} grid place-items-center mb-5`}>
                <div className={`${f.ink}`}>{f.icon}</div>
              </div>
              <h3 className={`font-display text-[20px] font-bold ${f.ink} leading-tight`}>
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-mantar-muted">
                {f.description}
              </p>
              {f.extra}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10c-4 0-7 3-7 7 0 2 .8 3.5 2 4.6-1.2 1.2-2 2.8-2 4.6 0 3 2 5.4 4.7 6.2.3 3.2 3 5.6 6.3 5.6 1.7 0 3.2-.7 4.3-1.8" />
      <path d="M32 10c4 0 7 3 7 7 0 2-.8 3.5-2 4.6 1.2 1.2 2 2.8 2 4.6 0 3-2 5.4-4.7 6.2-.3 3.2-3 5.6-6.3 5.6-1.7 0-3.2-.7-4.3-1.8" />
      <path d="M24 14v24" />
      <path d="M18 20h4M26 20h4M18 28h4M26 28h4" />
    </svg>
  );
}

function DiceIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="32" height="32" rx="6" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="32" cy="16" r="2" fill="currentColor" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="16" cy="32" r="2" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8h20v10c0 5.5-4.5 10-10 10s-10-4.5-10-10V8z" />
      <path d="M14 12H9c0 4 2 7 5 7M34 12h5c0 4-2 7-5 7" />
      <path d="M20 28v6c0 2-1 3-3 3h-2v3h18v-3h-2c-2 0-3-1-3-3v-6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="currentColor">
      <path d="M24 6l5.4 12L42 19.7l-9 9.1 2.4 13.2L24 35.7 11.6 42l2.4-13.2-9-9.1L17.6 18 24 6z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="currentColor">
      <circle cx="24" cy="24" r="20" />
      <path d="M15 24l6 6 12-13" fill="none" stroke="white" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
