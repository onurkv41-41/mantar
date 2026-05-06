import Link from "next/link";
import MantarLogo from "@/components/MantarLogo";
import GurmeForm from "./GurmeForm";

export const metadata = {
  title: "Mantar Gurme Ol — Mantar",
  description:
    "Mantar Gurme; sosyal medyada reklam içerikleri üreten, takipçi sayısı yüksek kullanıcıların Mantar'daki hesaplarını ayırt eden özel üyelik türüdür.",
};

export default function MantarGurmeOlPage() {
  return (
    <div className="relative min-h-screen bg-mantar-cream overflow-hidden">
      {/* Soft background ornaments */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-mantar-red/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-[40%] -left-32 w-[360px] h-[360px] rounded-full bg-mantar-gold/12 blur-3xl"
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

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[920px] px-4 sm:px-8 pt-4 sm:pt-8 pb-10 sm:pb-14 text-center">
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-mantar-gold/20 border border-mantar-gold/40 text-[12px] font-bold tracking-[0.04em] text-[var(--color-feat-top-ink)]">
          <VerifiedIcon className="w-3.5 h-3.5" />
          GURME ÜYELİĞİ
        </div>
        <h1 className="mt-4 font-display font-bold leading-[1.05] tracking-[-0.02em] text-[34px] sm:text-[48px] lg:text-[58px]">
          <span className="text-mantar-red">Mantar</span> Gurme Ol
        </h1>
        <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] leading-[1.55] text-mantar-muted max-w-[600px] mx-auto">
          Sosyal medyadaki etkini Mantar profilinde de göster — gurme rozetiyle
          öne çık, topluluğun güvenini kazan.
        </p>
      </section>

      {/* "Nedir?" Card */}
      <section className="relative z-10 mx-auto max-w-[920px] px-4 sm:px-8 pb-12 sm:pb-16">
        <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-mantar-line/60 shadow-[0_30px_70px_-30px_rgba(30,10,15,0.08)] p-6 sm:p-10">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-mantar-red/10 grid place-items-center flex-shrink-0">
              <ChefHatIcon className="w-6 h-6 sm:w-7 sm:h-7 text-mantar-red" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-[22px] sm:text-[26px] font-bold tracking-[-0.01em]">
                Mantar Gurme nedir?
              </h2>
              <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-mantar-ink/80 leading-[1.7]">
                Mantar Gurme, Mantar kullanıcı hesapları içinde{" "}
                <strong className="text-mantar-ink">gurme olan hesapları ayırt eden</strong>{" "}
                bir üyelik türüdür. Çeşitli sosyal medya platformlarında reklam
                içerikleri üreten, <strong className="text-mantar-ink">takipçi sayısı fazla olan</strong>{" "}
                kullanıcıların Mantar uygulamasındaki hesaplarını da ayırt
                edilebilecek hale getirmek amaçlanmıştır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikleri */}
      <section className="relative z-10 mx-auto max-w-[1080px] px-4 sm:px-8 pb-12 sm:pb-16">
        <div className="text-center max-w-[640px] mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-[#f6a638]/15 text-[#b5651a] text-[12px] font-bold tracking-[0.05em]">
            ÖZELLİKLER
          </div>
          <h2 className="mt-3 font-display text-[24px] sm:text-[32px] font-bold tracking-[-0.01em]">
            Gurme olunca ne kazanırsın?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <FeatureCard
            icon={<ProfileStripeIcon />}
            title="Turuncu çizgi & gurme rozeti"
            description="Profilinin etrafında turuncu çizgi ve adının yanında gurme rozeti görünür."
          />
          <FeatureCard
            icon={<ReviewBadgeIcon />}
            title="Yorumlarda turuncu rozet"
            description="İşletmelere yaptığın tüm yorumlar gurme rozeti ile birlikte gösterilir."
          />
          <FeatureCard
            icon={<FollowableIcon />}
            title="Takip edilebilir hesap"
            description="Hesabın diğer kullanıcılar tarafından takip edilebilir hâle gelir."
          />
          <FeatureCard
            icon={<MapPinIcon />}
            title="Önerdiğin yerler keşfedilsin"
            description="Seni takip eden kullanıcılar, değerlendirdiğin mekanları görür ve oraya gider."
          />
          <FeatureCard
            icon={<SupportIcon />}
            title="Mantar destek ekibi"
            description="Mantar destek ekibiyle direkt iletişim halinde olursun."
            wide
          />
        </div>
      </section>

      {/* Form */}
      <section id="basvuru" className="relative z-10 mx-auto max-w-[920px] px-4 sm:px-8 pb-20 sm:pb-28">
        <GurmeForm />
      </section>
    </div>
  );
}

/* ---------- Feature card ---------- */
function FeatureCard({
  icon,
  title,
  description,
  wide = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  wide?: boolean;
}) {
  return (
    <div
      className={[
        "relative bg-white rounded-2xl border border-mantar-line/60 p-5 sm:p-6 shadow-[0_18px_42px_-30px_rgba(30,10,15,0.08)]",
        wide ? "sm:col-span-2 lg:col-span-1" : "",
      ].join(" ")}
    >
      <div className="absolute top-0 left-5 right-5 h-[3px] rounded-b-full bg-gradient-to-r from-[#f6a638] to-[#f5c842]" aria-hidden />
      <div className="h-11 w-11 rounded-xl bg-[#f6a638]/15 text-[#b5651a] grid place-items-center">
        {icon}
      </div>
      <div className="mt-4 font-display text-[16.5px] sm:text-[17px] font-bold tracking-[-0.005em] leading-tight">
        {title}
      </div>
      <p className="mt-1.5 text-[13.5px] text-mantar-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ---------- icons ---------- */
function ProfileStripeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="9" r="3.5" stroke="currentColor" />
      <path d="M5 21a7 7 0 0114 0" stroke="currentColor" />
      <path d="M3 12a9 9 0 0118 0" stroke="#f6a638" strokeWidth={2.4} strokeDasharray="2 3" />
    </svg>
  );
}
function ReviewBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12a8 8 0 11-16 0 8 8 0 0116 0z" stroke="none" fill="#f6a638" opacity="0.15" />
      <path d="M5 5h14v10a2 2 0 01-2 2H9l-4 4V5z" />
      <path d="M9 11h6M9 8h6" />
    </svg>
  );
}
function FollowableIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0112 0" />
      <path d="M17 8v6M14 11h6" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.4 8.4 0 01-1.9 5.4L21 21l-4.1-1.9A8.4 8.4 0 113 11.5a8.4 8.4 0 1118 0z" />
      <circle cx="9" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="12" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="15" cy="11.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function VerifiedIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 1l2.5 3.1 3.9-.7.6 3.9 3.5 1.8-1.7 3.6 1.7 3.6-3.5 1.8-.6 3.9-3.9-.7L12 23l-2.5-3.1-3.9.7-.6-3.9L1.5 14.9 3.2 11.3 1.5 7.7l3.5-1.8.6-3.9 3.9.7L12 1zm-1.4 14.6l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z" />
    </svg>
  );
}

function ChefHatIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 14a4 4 0 01-2-7.5A4 4 0 0112 5a4 4 0 018 1.5A4 4 0 0118 14" />
      <path d="M6 14h12v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6z" />
      <path d="M9 14v7M15 14v7" />
    </svg>
  );
}
