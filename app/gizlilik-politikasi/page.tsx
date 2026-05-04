import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Gizlilik Politikası — Mantar",
  description:
    "Mantar App gizlilik politikası: hangi verileri topladığımız, nasıl kullandığımız ve haklarınız.",
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-mantar-cream">
      <Nav />

      <main className="relative overflow-hidden">
        <BackgroundOrnaments />

        <div className="relative z-10 mx-auto max-w-[960px] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24">
          {/* Hero */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="h-16 w-16 sm:h-[84px] sm:w-[84px] rounded-full bg-mantar-red/10 grid place-items-center flex-shrink-0">
              <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-10 sm:h-10 text-mantar-red" fill="currentColor">
                <path d="M16 2L4 7v9c0 7 5 12 12 14 7-2 12-7 12-14V7l-12-5z" />
                <path d="M11 16l3.5 3.5L22 12" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div>
              <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[46px] font-bold tracking-[-0.02em] leading-[1.05]">
                Mantar App Gizlilik Politikası
              </h1>
              <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-mantar-red font-semibold text-[12.5px] sm:text-[14px]">
                <CalendarIcon />
                Son Güncelleme Tarihi: 24 Mart 2026
              </div>
            </div>
          </div>

          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-mantar-ink/85">
            Mantar App (&quot;Biz&quot;, &quot;Uygulama&quot; veya &quot;Mantar&quot;), kullanıcılarımızın (&quot;Siz&quot; veya &quot;Kullanıcı&quot;) gizliliğine ve kişisel verilerinin korunmasına büyük önem vermektedir. Bu Gizlilik Politikası, uygulamamızı kullandığınızda topladığımız verilerin türlerini, bu verileri nasıl kullandığımızı, kimlerle paylaştığımızı ve haklarınızı açıklar. Uygulamamızı kullanarak bu politikada belirtilen uygulamaları kabul etmiş olursunuz.
          </p>

          <Divider />

          {/* Section 1 */}
          <Section number={1} title="Topladığımız Veriler">
            <p>
              Uygulamanın çalışması ve size en iyi mekan önerilerini sunabilmesi için aşağıdaki veri türlerini topluyoruz:
            </p>

            <SubSection
              icon={<UserIcon />}
              letter="a"
              title="Kişisel Kayıt Verileri"
            >
              <p>Hesap oluşturduğunuzda veya profilinizi güncellediğinizde aşağıdaki bilgileri sağlayabilirsiniz:</p>
              <BulletList
                columns={2}
                items={[
                  "Ad ve Soyad",
                  "Kullanıcı Adı",
                  "E-posta Adresi",
                  "Telefon Numarası",
                  "Doğum Tarihi",
                  "Profil Fotoğrafı ve Biyografisi (İsteğe bağlı)",
                ]}
              />
            </SubSection>

            <SubSection
              icon={<PinIcon />}
              letter="b"
              title="Konum Verileri"
            >
              <p>
                Sizi çevrenizdeki mekanlarla (&quot;Mekan Bul &amp; Skorla&quot;) eşleştirmek ve &quot;Ne Yapsak AI&quot; (Mantar AI) üzerinden lokasyon bazlı öneriler sunmak için:
              </p>
              <BulletList
                items={[
                  "Cihazınızın sağladığı anlık konum verisi (GPS) toplanır. Konum verisi yalnızca uygulamayı kullanırken (Foreground) veya size özel bildirimler sağlamak üzere rızanız dahilinde (Background) işlenebilir.",
                ]}
              />
            </SubSection>

            <SubSection
              icon={<StarIcon />}
              letter="c"
              title="Kullanım Verileri ve Tercihleri"
            >
              <p>Uygulamayı kullanımınıza bağlı olarak aşağıdaki veriler otomatik toplanır:</p>
              <BulletList
                items={[
                  "Mekanlara verdiğiniz puanlar, yorumlar, favoriler",
                  "Uygulama içi etkileşimler (Hangi mekanlara tıkladığınız, takip edilen restoranlar)",
                  "Mantar AI (Gemini) üzerinden yaptığınız mekan aramaları ve tercih filtreleriniz (Örn: Fiyat aralığı, mesafe, mekan türü).",
                ]}
              />
            </SubSection>

            <SubSection
              icon={<DeviceIcon />}
              letter="d"
              title="Cihaz ve Log Verileri"
            >
              <p>
                Güvenliği sağlamak ve hataları gidermek amacıyla cihaz modeliniz, işletim sisteminiz, IP adresiniz ve uygulama çökme raporları (Crashlytics vb.) toplanabilir.
              </p>
            </SubSection>
          </Section>

          <Divider />

          {/* Section 2 */}
          <Section number={2} title="Verileri Nasıl Kullanıyoruz?">
            <p>Toplanan kişisel veya teknik veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
            <BulletList
              accent
              items={[
                <><strong className="font-semibold">Hizmet Sağlama ve Kişiselleştirme:</strong> Size en uygun restoran/mekan önerilerini sunmak ve &quot;Mantar AI&quot; deneyimini daha iyi hale getirmek.</>,
                <><strong className="font-semibold">Hesap Yönetimi:</strong> E-posta doğrulaması, şifre sıfırlama ve hesap kurtarma işlemlerini gerçekleştirmek.</>,
                <><strong className="font-semibold">İletişim ve Bildirimler:</strong> Kampanyalarımızdan haberdar olmak istediğiniz (&quot;Takip Edilen&quot;) mekanlardan size anlık bildirim (Push Notification) göndermek.</>,
                <><strong className="font-semibold">Analiz ve Geliştirme:</strong> Uygulama performansını izlemek, kullanıcı davranışlarını analiz ederek yeni özellikler geliştirmek.</>,
                <><strong className="font-semibold">Güvenlik ve Dolandırıcılığı Önleme:</strong> Sahte hesapları engellemek ve platform içi bütünlüğü korumak.</>,
              ]}
            />
          </Section>

          <Divider />

          {/* Section 3 */}
          <Section number={3} title="Verilerin Paylaşımı ve Üçüncü Taraflar">
            <p>
              Kişisel verileriniz hiçbir koşulda ticari kazanç amacıyla yetkisiz üçüncü taraflarla satılmaz. Ancak aşağıdaki durumlarda paylaşılabilir:
            </p>
            <BulletList
              accent
              items={[
                <><strong className="font-semibold">Hizmet Sağlayıcılar:</strong> Altyapımızı (Veritabanı, Sunucu) sağlayan Google Firebase (Firestore, Cloud Functions, Authentication) ve yapay zeka model sağlayıcısı <strong className="font-semibold">Google Gemini</strong>.</>,
                <><strong className="font-semibold">Yasal Zorunluluklar:</strong> Kanunların veya yerel/uluslararası yetkili resmi kurumların resmi talepleri doğrultusunda.</>,
                <><strong className="font-semibold">Geri Bildirimler ve Yorumlar:</strong> Uygulama içinde mekanlara yazdığınız yorumlar ve verdiğiniz puanlar diğer kullanıcılar (ve mekan sahipleri) tarafından görüntülenebilir.</>,
              ]}
            />
          </Section>

          <Divider />

          {/* Section 4 */}
          <Section number={4} title="Veri Saklama ve Güvenliği">
            <p>
              Verileriniz güvenli bulut sunucularında (Google Firebase altyapısında) uçtan uca şifreleme ve modern güvenlik standartlarına uygun bir şekilde saklanmaktadır. Mantar App, verilerinizin güvenliği için endüstri standardı olan çeşitli idari ve teknik önlemler almaktadır; ancak internet üzerinden hiçbir veri aktarımının %100 güvenli olduğunu garanti edemeyiz.
            </p>
            <p className="mt-3">
              Dilediğiniz zaman uygulama içi ayarlardan hesabınızı tamamen silebilirsiniz. Hesap silme talebi sonucunda kişisel verileriniz, oluşturduğunuz yorumlar ve gönderiler kalıcı olarak sistemlerimizden silinir.
            </p>
          </Section>

          <Divider />

          {/* Section 5 */}
          <Section number={5} title="Çocukların Gizliliği">
            <p>
              Mantar App, özellikle restoran, mekan keşfi ve yapay zeka entegrasyonuna dayandığından, 13 yaşın (veya yerel kanunların belirlediği dijital rıza yaşının) altındaki çocuklara yönelik değildir. 13 yaşından küçük bir kullanıcının kişisel veri sağladığını fark edersek bu verileri zaman kaybetmeden sileriz.
            </p>
          </Section>

          <Divider />

          {/* Section 6 */}
          <Section number={6} title="Kullanıcı Hakları (Veri Silme ve İtiraz)">
            <p>Ulaşabileceğiniz haklar:</p>
            <BulletList
              items={[
                "Verilerinize erişme, güncelleme veya değiştirme hakkı (Profil ayarlarından).",
                "Bildirim ve pazarlama e-postalarını almayı reddetme hakkı.",
                "Hesabınızı ve ilişkili tüm kişisel verilerinizi kalıcı olarak silme hakkı. Ayarlar > Hesabı Sil veya Destek kanalları üzerinden işleminizi gerçekleştirebilirsiniz.",
              ]}
            />
          </Section>

          <Divider />

          {/* Section 7 */}
          <Section number={7} title="İletişim">
            <p>
              Bu Gizlilik Politikası, kişisel verileriniz veya uygulama içindeki güvenlik süreçleriyle ilgili tüm sorunlar için bizimle e-posta aracılığıyla iletişime geçebilirsiniz.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <ContactCard
                icon={<BuildingIcon />}
                label="Firma / Unvan"
                value="Mantar App"
              />
              <ContactCard
                icon={<MailIcon />}
                label="E-Posta"
                value="mantarappdestek@gmail.com"
              />
              <ContactCard
                icon={<GlobeIcon />}
                label="Web Sitesi"
                value="https://www.mantarapp.com"
              />
            </div>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/* ---------------- Building blocks ---------------- */

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-9 w-9 rounded-full bg-mantar-red text-white grid place-items-center font-display font-bold text-[15px]">
          {number}
        </div>
        <h2 className="font-display text-[22px] sm:text-[24px] font-bold tracking-[-0.01em]">
          {number}. {title}
        </h2>
      </div>
      <div className="pl-0 sm:pl-13 text-[14.5px] leading-[1.7] text-mantar-ink/85 space-y-2">
        {children}
      </div>
    </section>
  );
}

function SubSection({
  icon,
  letter,
  title,
  children,
}: {
  icon: React.ReactNode;
  letter: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 pl-0 sm:pl-0">
      <div className="flex items-start gap-4">
        <div className="h-9 w-9 rounded-full bg-mantar-red/10 grid place-items-center text-mantar-red flex-shrink-0 mt-0.5">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15.5px] font-semibold text-mantar-red">
            {letter}) {title}
          </h3>
          <div className="mt-2 space-y-2 text-[14.5px] leading-[1.7] text-mantar-ink/85">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function BulletList({
  items,
  columns = 1,
  accent = false,
}: {
  items: React.ReactNode[];
  columns?: 1 | 2;
  accent?: boolean;
}) {
  return (
    <ul
      className={`mt-2 ${
        columns === 2 ? "sm:grid sm:grid-cols-2 sm:gap-x-8" : ""
      } space-y-2`}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span
            className={`mt-[7px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${
              accent ? "bg-mantar-red" : "bg-mantar-red"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-mantar-line" />;
}

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-mantar-line/70 bg-white px-5 py-4 flex items-center gap-4">
      <div className="h-11 w-11 rounded-full bg-mantar-red/10 text-mantar-red grid place-items-center flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[12px] font-semibold text-mantar-muted uppercase tracking-wide">
          {label}
        </div>
        <div className="text-[14px] font-semibold text-mantar-ink truncate">
          {value}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Background ornaments ---------------- */

function BackgroundOrnaments() {
  const MushPath =
    "M0 30 C 0 12, 18 0, 40 0 C 62 0, 80 12, 80 30 C 80 34, 78 36, 72 36 L 8 36 C 2 36, 0 34, 0 30 Z";
  return (
    <>
      <svg className="absolute left-0 top-40 w-32 h-56 opacity-40 pointer-events-none" viewBox="0 0 120 200" aria-hidden>
        <path d="M0 0 Q 80 40 40 100 Q 0 160 80 200 L 0 200 Z" fill="#f4d0d6" opacity="0.6" />
        <g transform="translate(20,60)" fill="#ea9aa7" opacity="0.55">
          <path d={MushPath} />
          <rect x="28" y="36" width="24" height="58" rx="4" />
        </g>
      </svg>
      <svg className="absolute right-0 top-56 w-28 h-52 opacity-40 pointer-events-none" viewBox="0 0 120 200" aria-hidden>
        <path d="M120 0 Q 40 40 80 100 Q 120 160 40 200 L 120 200 Z" fill="#f4d0d6" opacity="0.6" />
        <g transform="translate(30,80)" fill="#ea9aa7" opacity="0.55">
          <path d={MushPath} />
          <rect x="28" y="36" width="24" height="58" rx="4" />
        </g>
      </svg>
      <svg className="absolute right-2 bottom-40 w-24 h-40 opacity-30 pointer-events-none" viewBox="0 0 100 180" aria-hidden>
        <g transform="translate(10,40)" fill="#ea9aa7">
          <path d={MushPath} />
          <rect x="28" y="36" width="24" height="58" rx="4" />
        </g>
      </svg>
    </>
  );
}

/* ---------------- Icons ---------------- */

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4v-1z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5 2 9.5l7-1L12 2z" />
    </svg>
  );
}
function DeviceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 19h2" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18" />
      <path d="M9 10h1v4H9zM14 10h1v4h-1z" fill="currentColor" stroke="none" />
      <path d="M10 21v-4h4v4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
    </svg>
  );
}
