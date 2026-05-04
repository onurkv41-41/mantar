import MantarIcon from "./MantarIcon";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isMantar?: boolean;
};

const features: Feature[] = [
  {
    title: "Mantar AI ile Keşfet",
    description: "Sana özel mekan önerilerini tinder gibi kaydırarak keşfet.",
    icon: <MantarIcon size={56} />,
    isMantar: true,
  },
  {
    title: "Mantar Topla",
    description: "Gittiğin mekanlarda QR göster, mantar topla, ödülleri kazan.",
    icon: <MantarIcon size={56} />,
    isMantar: true,
  },
  {
    title: "Ödülleri Yakala",
    description: "15 mantarda mekan ödülü, 50 mantarda Mantar App ödülü!",
    icon: <GiftIcon />,
  },
  {
    title: "Seviyeni Yükselt",
    description: "Topladıkça ilerle, seviyen artar, daha büyük ödüller kazan.",
    icon: <TrophyIcon />,
  },
];

export default function FeatureBadges() {
  return (
    <section className="py-10 sm:py-12 bg-mantar-cream">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              {f.isMantar ? (
                <div className="flex-shrink-0">{f.icon}</div>
              ) : (
                <div className="h-14 w-14 rounded-full bg-mantar-red/10 grid place-items-center text-mantar-red flex-shrink-0">
                  {f.icon}
                </div>
              )}
              <div>
                <h3 className="font-display text-[16px] font-bold leading-tight">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-mantar-muted leading-snug">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="8" width="18" height="13" rx="2" />
      <path d="M12 8v13M3 13h18M7.5 8a2.5 2.5 0 010-5c2 0 3 2 4.5 5M16.5 8a2.5 2.5 0 000-5c-2 0-3 2-4.5 5" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
      <path d="M7 6H4c0 2 1 3.5 2.5 3.5M17 6h3c0 2-1 3.5-2.5 3.5" />
      <path d="M10 14v3c0 1-.5 1.5-1.5 1.5H8V21h8v-2.5h-.5c-1 0-1.5-.5-1.5-1.5v-3" />
    </svg>
  );
}
