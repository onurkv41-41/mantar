import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import StoreButtons from "@/components/StoreButtons";
import MantarIcon from "@/components/MantarIcon";
import DownloadButton from "@/components/DownloadButton";

export const metadata = {
  title: "Haftanın Enleri — Mantar",
  description:
    "Her hafta il bazlı olarak seçilen en iyi mekan, en iyi ürün ve en iyi yorum. Mantar Haftanın Enleri her pazartesi yayında!",
};

export default function HaftaninEnleriPage() {
  return (
    <div className="min-h-screen bg-mantar-cream">
      <Nav />

      {/* ========== Hero ========== */}
      <section className="relative overflow-hidden pt-4 sm:pt-8 pb-14 sm:pb-20">
        <HeroOrnaments />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-mantar-gold/20 border border-mantar-gold/40 text-[12px] font-semibold tracking-[0.04em] text-[var(--color-feat-top-ink)]">
                <CrownIcon className="w-3.5 h-3.5" />
                HER PAZARTESİ YENİLENİR
              </div>
              <h1 className="mt-4 font-display font-bold leading-[1.02] tracking-[-0.02em] text-[34px] sm:text-[48px] lg:text-[68px]">
                <span className="text-mantar-red">Haftanın</span>
                <br />
                Enleri
              </h1>
              <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17.5px] leading-[1.55] text-mantar-muted max-w-[480px] mx-auto lg:mx-0">
                Her hafta <strong className="text-mantar-ink">il bazlı</strong> olarak seçilen
                {" "}<span className="text-mantar-red font-semibold">en iyi mekan</span>,
                {" "}<span className="text-mantar-red font-semibold">en iyi ürün</span> ve
                {" "}<span className="text-mantar-red font-semibold">en iyi yorum</span>.
                Şehrinin parlayan yıldızlarıyla tanış.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <a
                  href="#nasil-secilir"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-mantar-red text-white font-semibold text-[14.5px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition"
                >
                  Nasıl Seçilir?
                  <ArrowRight />
                </a>
                <DownloadButton
                  ariaLabel="Uygulamayı indir"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full border-2 border-mantar-red text-mantar-red font-semibold text-[14.5px] hover:bg-mantar-red hover:text-white transition"
                >
                  Uygulamayı İndir
                  <DownloadIcon />
                </DownloadButton>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <Podium />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Üç Kategori ========== */}
      <section id="nasil-secilir" className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red text-[12px] font-bold tracking-[0.04em]">
              ÜÇ KATEGORİ
            </div>
            <h2 className="mt-3 font-display text-[26px] sm:text-[34px] font-bold tracking-[-0.01em]">
              Şehrinin Haftanın Üç Yıldızı
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15.5px] text-mantar-muted leading-relaxed">
              Mantar topluluğu her hafta tek bir kazanan değil, üç kategoride zirveyi seçer.
              Sen de oy ver, yorum yaz, ürün paylaş — ödülün sahibi sen olabilirsin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            <CategoryCard
              eyebrow="01 · Haftanın En İyi"
              title="Mekanı"
              description="En yüksek puan ortalaması, en çok doğrulanmış yorum ve haftalık etkileşim skoruna göre il bazında bir kazanan seçilir."
              tone="red"
              preview={<VenuePreview />}
            />
            <CategoryCard
              eyebrow="02 · Haftanın En İyi"
              title="Ürünü"
              description="Kullanıcıların paylaştığı menü öğeleri, yorum sayısı ve beğeni oranlarıyla yarışır. Şehrinin haftalık imza tadı belli olur."
              tone="gold"
              preview={<ProductPreview />}
            />
            <CategoryCard
              eyebrow="03 · Haftanın En İyi"
              title="Yorumu"
              description="Topluluğun en çok beğendiği, en faydalı bulduğu ve doğrulanmış yorum kazanır. Yazana özel rozet ve MantarPuan."
              tone="green"
              preview={<ReviewPreview />}
            />
          </div>
        </div>
      </section>

      {/* ========== İl Bazlı Seçim ========== */}
      <section className="relative bg-mantar-cream-deep/55 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 sm:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red text-[12px] font-bold tracking-[0.04em]">
                İL BAZLI YARIŞ
              </div>
              <h2 className="mt-3 font-display text-[24px] sm:text-[32px] font-bold tracking-[-0.01em] leading-tight">
                Her şehrin kendi
                <br />
                <span className="text-mantar-red">Haftanın Enleri</span> listesi var.
              </h2>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] text-mantar-muted leading-relaxed max-w-[520px]">
                İstanbul&apos;daki bir köfteciyle Eskişehir&apos;deki bir kafe yarışmaz —
                herkes kendi şehrinde, adil koşullarda mücadele eder. Bulunduğun ile göre
                liste otomatik filtrelenir; hem keşif yerel hem de rekabet eşit olur.
              </p>

              <ul className="mt-6 space-y-3">
                <BulletItem text="81 il, 81 ayrı liste — küçük şehirlerin lokal yıldızları da parlar." />
                <BulletItem text="Konumun kapatıldığında bile şehir seçimini sen yaparsın." />
                <BulletItem text="Her hafta sıfırdan yarış — geçen haftanın kazananı bu hafta tekrar yarışmaya katılır." />
              </ul>
            </div>

            <CityMosaic />
          </div>
        </div>
      </section>

      {/* ========== Pazartesi Yayın ========== */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-gold/20 text-[var(--color-feat-top-ink)] text-[12px] font-bold tracking-[0.04em]">
              <ClockIcon className="w-3 h-3" />
              YAYIN GÜNÜ
            </div>
            <h2 className="mt-3 font-display text-[26px] sm:text-[34px] font-bold tracking-[-0.01em]">
              Pazartesi sabahları,
              <br />
              <span className="text-mantar-red">yeni kazananlar.</span>
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15.5px] text-mantar-muted leading-relaxed">
              Hafta boyunca verilen tüm puanlar, atılan tüm yorumlar ve paylaşılan tüm ürünler
              pazar gece yarısı dondurulur — pazartesi 09:00&apos;da kazananlar ana ekranında belirir.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* ========== Nasıl seçilir kuralları ========== */}
      <section className="bg-mantar-cream-deep/55 py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="bg-white rounded-[22px] sm:rounded-[32px] border border-mantar-line/60 shadow-[0_20px_50px_-30px_rgba(30,10,15,0.08)] p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-7 sm:mb-9">
              <MantarIcon size={36} />
              <h2 className="font-display text-[22px] sm:text-[26px] font-bold tracking-[-0.01em]">
                Kazananlar nasıl seçilir?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <RuleCard
                num="01"
                icon={<TrophyIcon />}
                title="Skor algoritması"
                description="Puan ortalaması, yorum sayısı, doğrulanmış ziyaret oranı, beğeniler ve haftalık etkileşim ağırlıklandırılır."
              />
              <RuleCard
                num="02"
                icon={<ShieldIcon />}
                title="Doğrulama şartı"
                description="Sadece konum doğrulamasıyla yapılan yorumlar ve ziyaretler skora katılır. Sahte oy mümkün değil."
              />
              <RuleCard
                num="03"
                icon={<RefreshIcon />}
                title="Haftalık reset"
                description="Her pazartesi 00:00&apos;da skorlar sıfırlanır. Yarış baştan başlar, yeni isimler zirveye çıkabilir."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Kazananlara ödüller ========== */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red text-[12px] font-bold tracking-[0.04em]">
              ÖDÜLLER
            </div>
            <h2 className="mt-3 font-display text-[26px] sm:text-[34px] font-bold tracking-[-0.01em]">
              Kazanan üçlüye ne düşer?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <RewardCard
              icon={<MedalIcon />}
              title="Özel Rozet"
              description="Profilinde haftalık olarak yenilenen 'Haftanın En İyisi' rozeti."
            />
            <RewardCard
              icon={<CoinIcon />}
              title="MantarPuan"
              description="Üç kategorinin kazananları MantarPuan ile ödüllendirilir, ödüllerle takas edilir."
            />
            <RewardCard
              icon={<MegaphoneIcon />}
              title="Ana Ekran Vitrini"
              description="Tüm ilin Mantar kullanıcılarına bir hafta boyunca vitrinde gözükürsün."
            />
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section id="indir" className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-mantar-red via-mantar-red to-mantar-red-deep text-white px-6 sm:px-12 py-10 sm:py-14">
            {/* Ornaments */}
            <div className="pointer-events-none absolute -top-12 -right-12 w-[260px] h-[260px] rounded-full bg-mantar-gold/15 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 left-1/4 w-[180px] h-[180px] rounded-full bg-white/10 blur-2xl" aria-hidden />

            <div className="relative grid lg:grid-cols-[minmax(0,1fr)_auto] items-center gap-8">
              <div className="text-center lg:text-left">
                <div className="font-display text-[26px] sm:text-[34px] font-bold tracking-[-0.01em] leading-tight">
                  Bu hafta zirve senin olabilir.
                </div>
                <p className="mt-3 text-[14px] sm:text-[15.5px] text-white/80 max-w-[520px] mx-auto lg:mx-0">
                  Mantar&apos;ı indir, mekan keşfet, yorum bırak ve ürün paylaş.
                  Pazartesi sabahı şehrindeki Haftanın Enleri listesinde adın olsun.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-end flex-wrap">
                <StoreButtons size="md" theme="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ============================================================
   Hero — Podium with three cups
============================================================ */
function Podium() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[5/4]">
      {/* Soft halo */}
      <div className="absolute inset-0 rounded-full bg-mantar-gold/15 scale-[0.82]" aria-hidden />
      <div className="absolute inset-0 rounded-full bg-mantar-red/8 scale-[0.95] translate-y-6" aria-hidden />

      {/* Floating sparkles */}
      <Sparkle className="absolute top-4 left-[20%] text-mantar-gold anim-float" size={18} />
      <Sparkle className="absolute top-[18%] right-[14%] text-mantar-gold anim-float-2" size={14} />
      <Sparkle className="absolute bottom-[28%] left-[8%] text-mantar-red anim-float-3" size={12} />
      <Sparkle className="absolute top-[40%] left-[48%] text-mantar-gold anim-float-2" size={10} />

      {/* Podium platforms */}
      <svg viewBox="0 0 520 416" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="podiumGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fce38a" />
            <stop offset="100%" stopColor="#f5c842" />
          </linearGradient>
          <linearGradient id="podiumRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c73551" />
            <stop offset="100%" stopColor="#8a1f33" />
          </linearGradient>
          <linearGradient id="podiumCream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f4ecda" />
          </linearGradient>
        </defs>
        {/* Floor shadow */}
        <ellipse cx="260" cy="380" rx="190" ry="14" fill="#000" opacity="0.08" />

        {/* Left platform (silver/cream) */}
        <rect x="80" y="270" width="120" height="100" rx="10" fill="url(#podiumCream)" stroke="#eae3d2" strokeWidth="1.5" />
        <text x="140" y="335" textAnchor="middle" className="font-display" fontWeight="800" fontSize="44" fill="#6b6b6b">2</text>

        {/* Right platform (cream) */}
        <rect x="320" y="290" width="120" height="80" rx="10" fill="url(#podiumCream)" stroke="#eae3d2" strokeWidth="1.5" />
        <text x="380" y="345" textAnchor="middle" className="font-display" fontWeight="800" fontSize="40" fill="#6b6b6b">3</text>

        {/* Center platform (gold) */}
        <rect x="200" y="230" width="120" height="140" rx="10" fill="url(#podiumGold)" />
        <rect x="200" y="230" width="120" height="14" rx="10" fill="#fff" opacity="0.35" />
        <text x="260" y="320" textAnchor="middle" className="font-display" fontWeight="800" fontSize="56" fill="#a07a12">1</text>

        {/* Trophies above each platform */}
        {/* Center trophy (gold, big) */}
        <g transform="translate(260,150)">
          <ellipse cx="0" cy="78" rx="36" ry="6" fill="#000" opacity="0.1" />
          <path d="M-26 -40 h52 v18 a26 26 0 0 1 -52 0 z" fill="url(#podiumGold)" />
          <path d="M-26 -36 c -22 0 -22 26 0 26" stroke="#f5c842" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M26 -36 c 22 0 22 26 0 26" stroke="#f5c842" strokeWidth="6" fill="none" strokeLinecap="round" />
          <rect x="-8" y="-2" width="16" height="22" fill="#f5c842" />
          <rect x="-22" y="20" width="44" height="10" rx="2" fill="#a07a12" />
          <rect x="-30" y="30" width="60" height="14" rx="2" fill="#a07a12" />
          {/* Star on cup */}
          <path d="M0 -28 l3 6 6 1 -4.5 4 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4 6 -1 z" fill="#fff" opacity="0.9" />
        </g>

        {/* Left trophy (silver/red small) */}
        <g transform="translate(140,200)">
          <path d="M-18 -28 h36 v12 a18 18 0 0 1 -36 0 z" fill="url(#podiumRed)" />
          <rect x="-5" y="-4" width="10" height="14" fill="#8a1f33" />
          <rect x="-14" y="10" width="28" height="6" rx="2" fill="#6d1527" />
        </g>

        {/* Right trophy */}
        <g transform="translate(380,220)">
          <path d="M-16 -24 h32 v10 a16 16 0 0 1 -32 0 z" fill="#fce38a" />
          <rect x="-4" y="-4" width="8" height="12" fill="#f5c842" />
          <rect x="-13" y="8" width="26" height="6" rx="2" fill="#a07a12" />
        </g>

        {/* Confetti */}
        <circle cx="100" cy="80" r="4" fill="#ae2940" />
        <circle cx="430" cy="60" r="5" fill="#f5c842" />
        <rect x="60" y="160" width="6" height="6" fill="#3ec572" transform="rotate(20 63 163)" />
        <rect x="450" y="180" width="6" height="6" fill="#b8a8ff" transform="rotate(-30 453 183)" />
        <circle cx="40" cy="240" r="3" fill="#f5c842" />
        <circle cx="490" cy="280" r="4" fill="#ae2940" />
      </svg>

      {/* Crown badge top-center */}
      <div className="absolute top-[6%] left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-white border border-mantar-line/60 grid place-items-center shadow-[0_8px_20px_-8px_rgba(30,10,15,0.15)]">
        <CrownIcon className="w-6 h-6 text-mantar-gold" />
      </div>
    </div>
  );
}

/* ============================================================
   Category Card
============================================================ */
function CategoryCard({
  eyebrow,
  title,
  description,
  preview,
  tone,
}: {
  eyebrow: string;
  title: string;
  description: string;
  preview: React.ReactNode;
  tone: "red" | "gold" | "green";
}) {
  const tones = {
    red: {
      chip: "bg-mantar-red/10 text-mantar-red",
      ring: "from-mantar-red/12 to-mantar-red/0",
    },
    gold: {
      chip: "bg-mantar-gold/25 text-[var(--color-feat-top-ink)]",
      ring: "from-mantar-gold/22 to-mantar-gold/0",
    },
    green: {
      chip: "bg-[var(--color-feat-rate)]/15 text-[var(--color-feat-rate-ink)]",
      ring: "from-[var(--color-feat-rate)]/15 to-[var(--color-feat-rate)]/0",
    },
  }[tone];

  return (
    <div className="relative bg-white rounded-[22px] sm:rounded-[26px] border border-mantar-line/60 shadow-[0_20px_50px_-30px_rgba(30,10,15,0.08)] p-5 sm:p-6 flex flex-col">
      <div
        className={`absolute -top-px left-6 right-6 h-px bg-gradient-to-r ${tones.ring} rounded-full`}
        aria-hidden
      />
      <div className={`inline-flex self-start items-center h-7 px-3 rounded-full text-[11.5px] font-bold tracking-[0.05em] ${tones.chip}`}>
        {eyebrow.toUpperCase()}
      </div>
      <div className="mt-3 font-display text-[22px] sm:text-[26px] font-bold tracking-[-0.01em] leading-tight">
        {title}
      </div>
      <p className="mt-2 text-[13.5px] sm:text-[14px] text-mantar-muted leading-relaxed">
        {description}
      </p>
      <div className="mt-5">{preview}</div>
    </div>
  );
}

/* ---------- Category previews ---------- */
function VenuePreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-mantar-line/60 bg-mantar-cream/40">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[#5a3820] via-[#7a4a28] to-[#a06a38]">
        <svg viewBox="0 0 200 120" className="absolute inset-0 w-full h-full" aria-hidden>
          <rect width="200" height="120" fill="#5a3820" />
          <rect x="20" y="20" width="160" height="80" rx="6" fill="#3a2718" opacity="0.5" />
          <rect x="28" y="28" width="44" height="40" fill="#d4a574" opacity="0.6" />
          <rect x="78" y="28" width="44" height="40" fill="#c99465" opacity="0.6" />
          <rect x="128" y="28" width="44" height="40" fill="#d4a574" opacity="0.6" />
          <circle cx="50" cy="92" r="4" fill="#fff3d6" opacity="0.5" />
          <circle cx="150" cy="92" r="4" fill="#fff3d6" opacity="0.5" />
        </svg>
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 h-6 px-2 rounded-full bg-mantar-gold text-[10px] font-bold text-[#5a3a0a]">
          <CrownIcon className="w-2.5 h-2.5" />
          #1 ANKARA
        </div>
      </div>
      <div className="px-3.5 py-3 flex items-center justify-between">
        <div className="min-w-0">
          <div className="font-bold text-[13px] truncate">Köşedeki Köfteci</div>
          <div className="text-[11px] text-mantar-muted">Et &amp; Mangal · Çankaya</div>
        </div>
        <div className="flex items-center gap-1 text-[12px] font-bold">
          <StarSmall />
          4.9
        </div>
      </div>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-mantar-line/60 bg-mantar-cream/40 p-3">
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-mantar-gold to-[#f6a638] grid place-items-center flex-shrink-0">
          <PlateIcon />
        </div>
        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-1 h-5 px-2 rounded-full bg-mantar-gold/30 text-[var(--color-feat-top-ink)] text-[10px] font-bold">
            <CrownIcon className="w-2.5 h-2.5" />
            EN İYİ ÜRÜN
          </div>
          <div className="mt-1.5 font-bold text-[13.5px] truncate">Mantar Pizza</div>
          <div className="text-[11px] text-mantar-muted truncate">Luzzo · İstanbul</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <Stat label="Yorum" value="142" />
        <Stat label="Beğeni" value="2.4K" />
        <Stat label="Skor" value="98" />
      </div>
    </div>
  );
}

function ReviewPreview() {
  return (
    <div className="rounded-2xl overflow-hidden border border-mantar-line/60 bg-mantar-cream/40 p-4">
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-full bg-mantar-red text-white grid place-items-center font-bold text-[13px]">
          AY
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <div className="font-bold text-[13px] truncate">Ayşe Y.</div>
            <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-feat-verified)] text-white">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
          </div>
          <div className="text-[11px] text-mantar-muted">İzmir · Doğrulanmış ziyaret</div>
        </div>
        <div className="flex items-center gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarSmall key={i} small />
          ))}
        </div>
      </div>
      <p className="mt-3 text-[12.5px] leading-relaxed text-mantar-ink/85">
        &quot;Sahil kenarındaki bu küçük kafenin filtre kahvesi şehrin en iyisi.
        Servis çok sıcak, manzara harika — pazartesi sabahları için biçilmiş kaftan.&quot;
      </p>
      <div className="mt-3 flex items-center justify-between text-[11px] text-mantar-muted">
        <span className="inline-flex items-center gap-1">
          <HeartIcon />
          486 beğeni
        </span>
        <span className="inline-flex items-center gap-1 text-[var(--color-feat-top-ink)] font-bold">
          <CrownIcon className="w-3 h-3" />
          Haftanın En İyisi
        </span>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white border border-mantar-line/60 px-2 py-1.5 text-center">
      <div className="text-[12.5px] font-bold leading-none">{value}</div>
      <div className="text-[9.5px] text-mantar-muted mt-0.5 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function StarSmall({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={small ? "w-2.5 h-2.5 text-mantar-gold" : "w-3 h-3 text-mantar-gold"} fill="currentColor">
      <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5 2 9.5l7-1L12 2z" />
    </svg>
  );
}

/* ============================================================
   City mosaic — illustrative grid of il chips
============================================================ */
function CityMosaic() {
  const cities = [
    { name: "İstanbul", featured: true },
    { name: "Ankara" },
    { name: "İzmir", featured: true },
    { name: "Bursa" },
    { name: "Antalya", featured: true },
    { name: "Konya" },
    { name: "Eskişehir" },
    { name: "Trabzon" },
    { name: "Gaziantep", featured: true },
    { name: "Adana" },
    { name: "Kayseri" },
    { name: "Diyarbakır" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[36px] bg-mantar-red/5 blur-2xl" aria-hidden />
      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 bg-white border border-mantar-line/60 rounded-[24px] p-4 sm:p-5 shadow-[0_24px_60px_-30px_rgba(30,10,15,0.12)]">
        {cities.map((c) => (
          <div
            key={c.name}
            className={[
              "h-12 sm:h-14 rounded-xl border flex items-center gap-2 px-3 transition",
              c.featured
                ? "bg-mantar-red text-white border-mantar-red shadow-[0_8px_18px_-10px_rgba(174,41,64,0.6)]"
                : "bg-mantar-cream border-mantar-line text-mantar-ink/80",
            ].join(" ")}
          >
            <PinIcon className={c.featured ? "text-white" : "text-mantar-red"} />
            <span className="text-[12.5px] sm:text-[13.5px] font-semibold truncate">
              {c.name}
            </span>
            {c.featured && (
              <span className="ml-auto inline-flex items-center h-5 px-1.5 rounded-full bg-white/20 text-[9.5px] font-bold tracking-wide">
                CANLI
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-[11.5px] text-mantar-muted">
        ve <strong className="text-mantar-ink">81 il</strong> daha — şehrin de listede.
      </div>
    </div>
  );
}

/* ============================================================
   Timeline — Mon → Sun → Mon
============================================================ */
function Timeline() {
  const days = [
    { d: "Pzt", note: "Yeni hafta başlar", win: true },
    { d: "Sal", note: "Yarış" },
    { d: "Çar", note: "Yarış" },
    { d: "Per", note: "Yarış" },
    { d: "Cum", note: "Yarış" },
    { d: "Cmt", note: "Yarış" },
    { d: "Paz", note: "Skorlar dondurulur" },
    { d: "Pzt", note: "Yeni kazananlar 09:00", win: true, end: true },
  ];
  return (
    <div className="relative">
      <div className="hidden sm:block absolute top-[34px] left-6 right-6 h-px bg-mantar-line" aria-hidden />
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
        {days.map((it, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div
              className={[
                "h-[68px] w-[68px] rounded-2xl border flex flex-col items-center justify-center transition",
                it.win
                  ? "bg-mantar-red text-white border-mantar-red shadow-[0_12px_22px_-10px_rgba(174,41,64,0.55)]"
                  : "bg-white text-mantar-ink/80 border-mantar-line",
              ].join(" ")}
            >
              {it.win ? (
                <CrownIcon className="w-5 h-5 text-mantar-gold" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-mantar-line" />
              )}
              <div className="mt-1 text-[12.5px] font-bold tracking-wide">{it.d}</div>
            </div>
            <div className="mt-2.5 text-[11px] text-mantar-muted leading-snug max-w-[110px]">
              {it.note}
            </div>
            {it.end && (
              <div className="mt-1 text-[10.5px] font-bold text-mantar-red">YAYIN</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   Rule Card
============================================================ */
function RuleCard({
  num,
  icon,
  title,
  description,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-mantar-cream/50 border border-mantar-line/60 p-5">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-mantar-red/10 text-mantar-red grid place-items-center">
          {icon}
        </div>
        <div className="text-[11.5px] font-bold text-mantar-muted tracking-[0.06em]">
          {num}
        </div>
      </div>
      <div className="mt-3 font-display text-[17px] font-bold tracking-[-0.005em]">
        {title}
      </div>
      <p className="mt-1.5 text-[13px] text-mantar-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   Reward Card
============================================================ */
function RewardCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[20px] bg-white border border-mantar-line/60 p-5 shadow-[0_18px_42px_-30px_rgba(30,10,15,0.08)] flex flex-col items-start">
      <div className="h-12 w-12 rounded-xl bg-mantar-gold/20 text-[var(--color-feat-top-ink)] grid place-items-center">
        {icon}
      </div>
      <div className="mt-4 font-display text-[18px] font-bold tracking-[-0.005em]">
        {title}
      </div>
      <p className="mt-1.5 text-[13.5px] text-mantar-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ============================================================
   Bullet
============================================================ */
function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-[14px] text-mantar-ink/85">
      <span className="mt-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-mantar-red/12 text-mantar-red flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}

/* ============================================================
   Hero ornaments
============================================================ */
function HeroOrnaments() {
  return (
    <>
      <div
        className="absolute top-16 right-[8%] w-[380px] h-[380px] rounded-full bg-mantar-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-44 right-[20%] w-[220px] h-[220px] rounded-full bg-mantar-red/8 blur-2xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 left-[5%] w-[280px] h-[280px] rounded-full bg-mantar-red/6 blur-3xl pointer-events-none"
        aria-hidden
      />
    </>
  );
}

/* ============================================================
   Icons
============================================================ */
function CrownIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 8l4 3.5L12 5l5 6.5L21 8l-2 11H5L3 8zm3.5 13h11a.5.5 0 010 1h-11a.5.5 0 010-1z" />
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
function ClockIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-4 h-4 ${className}`} fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 4h8v5a4 4 0 01-8 0V4z" />
      <path d="M8 6H5a3 3 0 003 3M16 6h3a3 3 0 01-3 3" />
      <path d="M9 14h6l-1 5H10l-1-5z" />
      <path d="M8 21h8" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12a9 9 0 0115-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 01-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 3l3 6M17 3l-3 6" />
      <circle cx="12" cy="15" r="6" />
      <path d="M10 14l2 2 3-3" />
    </svg>
  );
}
function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9 9h4a2 2 0 010 4h-2a2 2 0 000 4h4" />
    </svg>
  );
}
function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11v2a2 2 0 002 2h2l8 5V4L7 9H5a2 2 0 00-2 2z" />
      <path d="M19 8a4 4 0 010 8" />
    </svg>
  );
}
function PlateIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M9 12h6" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 text-mantar-red" fill="currentColor" aria-hidden>
      <path d="M12 21s-8-5.5-8-11.5A4.5 4.5 0 0112 6a4.5 4.5 0 018 3.5C20 15.5 12 21 12 21z" />
    </svg>
  );
}
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
