"use client";

import { useState } from "react";
import Link from "next/link";
import MantarLogo from "@/components/MantarLogo";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type Category = "yemek" | "kahve" | "eglence";

type FormState = {
  category: Category | "";
  businessName: string;
  fullName: string;
  phone: string;
  email: string;
};

const TOTAL_STEPS = 4;

export default function MekanOlPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [data, setData] = useState<FormState>({
    category: "",
    businessName: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const canContinue = (() => {
    if (step === 1) return data.category !== "";
    if (step === 2) return data.businessName.trim().length >= 2;
    if (step === 3)
      return (
        data.fullName.trim().length >= 3 &&
        data.phone.trim().length >= 10 &&
        /\S+@\S+\.\S+/.test(data.email)
      );
    return true;
  })();

  const submitApplication = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      await addDoc(collection(db, "businessApplications"), {
        category: data.category,
        businessName: data.businessName.trim(),
        fullName: data.fullName.trim(),
        phone: data.phone.trim(),
        email: data.email.trim().toLowerCase(),
        status: "new",
        source: "landing-mekan-ol",
        createdAt: serverTimestamp(),
      });
      setStep(4);
    } catch (err) {
      console.error("[mekan-ol] başvuru gönderilemedi", err);
      setSubmitError(
        "Başvurun gönderilemedi. Lütfen birazdan tekrar dene veya bilgi@mantarapp.com adresine yaz."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const next = () => {
    if (!canContinue || submitting) return;
    if (step === 3) {
      void submitApplication();
      return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div className="relative min-h-screen bg-mantar-cream overflow-hidden">
      <BackgroundOrnaments />

      {/* Top bar */}
      <header className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 py-5 sm:py-7 flex items-center gap-3">
          <Link href="/" className="flex-shrink-0">
            <MantarLogo width={100} className="sm:hidden" />
            <MantarLogo width={124} className="hidden sm:block" />
          </Link>
        </div>
      </header>

      {/* Card */}
      <main className="relative z-10 mx-auto w-full max-w-[1100px] px-3 sm:px-6 lg:px-10 pb-16 sm:pb-24">
        <div className="bg-white rounded-[22px] sm:rounded-[32px] shadow-[0_30px_60px_-20px_rgba(30,10,15,0.08)] border border-mantar-line/50 px-4 sm:px-12 py-7 sm:py-14 w-full">
          {/* Step indicator */}
          <div className="flex items-center gap-3 sm:gap-8 mb-8 sm:mb-12">
            <div className="font-display text-[18px] sm:text-[22px] font-bold leading-none flex-shrink-0">
              <span className="text-mantar-red">
                {String(step).padStart(2, "0")}
              </span>
              <span className="text-mantar-muted/60"> / 0{TOTAL_STEPS}</span>
            </div>
            <StepTrack step={step} total={TOTAL_STEPS} />
          </div>

          {/* Step content */}
          <div className="min-h-[320px] sm:min-h-[380px]">
            {step === 1 && (
              <Step1
                value={data.category}
                onChange={(c) => setData((d) => ({ ...d, category: c }))}
              />
            )}
            {step === 2 && (
              <Step2
                value={data.businessName}
                onChange={(v) =>
                  setData((d) => ({ ...d, businessName: v }))
                }
              />
            )}
            {step === 3 && (
              <Step3
                data={data}
                onChange={(patch) => setData((d) => ({ ...d, ...patch }))}
              />
            )}
            {step === 4 && <Step4 />}
          </div>

          {/* Footer actions */}
          {step < 4 && (
            <>
              {submitError && (
                <div className="mt-6 rounded-xl bg-mantar-red/10 border border-mantar-red/25 text-mantar-red text-[13.5px] px-4 py-3 leading-snug">
                  {submitError}
                </div>
              )}
              <div className="mt-8 sm:mt-12 flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 1 || submitting}
                  className="inline-flex items-center gap-1.5 sm:gap-2 h-11 sm:h-12 px-4 sm:px-6 rounded-full border border-mantar-line bg-white text-mantar-ink font-semibold text-[14px] sm:text-[15px] hover:border-mantar-red/40 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeft />
                  Geri
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue || submitting}
                  className="inline-flex items-center gap-1.5 sm:gap-2 h-11 sm:h-12 px-5 sm:px-7 rounded-full bg-mantar-red text-white font-semibold text-[14px] sm:text-[15px] shadow-[0_10px_20px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Spinner />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      {step === 3 ? "Başvuruyu Gönder" : "Devam Et"}
                      <ArrowRight />
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

// ------- Step indicator track -------
function StepTrack({ step, total }: { step: number; total: number }) {
  const progress = total > 1 ? ((step - 1) / (total - 1)) * 100 : 0;
  return (
    <div className="flex-1 min-w-0 relative">
      <div className="grid grid-cols-4 relative w-full">
        {/* Base track */}
        <div className="absolute left-3 right-3 sm:left-4 sm:right-4 top-1/2 h-[2px] -translate-y-1/2 bg-mantar-line rounded-full" />
        {/* Active track */}
        <div
          className="absolute left-3 sm:left-4 top-1/2 h-[2px] -translate-y-1/2 bg-mantar-red rounded-full transition-all"
          style={{
            width: `calc((100% - 24px) * ${progress / 100})`,
          }}
        />
        {Array.from({ length: total }).map((_, i) => {
          const n = i + 1;
          const done = n <= step;
          return (
            <div key={n} className="relative flex justify-center min-w-0">
              <div
                className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full grid place-items-center text-[11px] sm:text-[13px] font-bold transition flex-shrink-0 ${
                  done
                    ? "bg-mantar-red text-white"
                    : "bg-white border border-mantar-line text-mantar-muted"
                }`}
              >
                {n}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ------- Step 1: Category -------
function Step1({
  value,
  onChange,
}: {
  value: Category | "";
  onChange: (c: Category) => void;
}) {
  const options: {
    id: Category;
    title: string;
    desc: string;
    icon: React.ReactNode;
    tone: string;
  }[] = [
    {
      id: "yemek",
      title: "Yemek",
      desc: "Restoran, lokanta, büfe vb.",
      icon: <ForkKnifeIcon />,
      tone: "text-mantar-red bg-mantar-red/10",
    },
    {
      id: "kahve",
      title: "Kahve",
      desc: "Kafe, kahve dükkanı vb.",
      icon: <CoffeeIcon />,
      tone: "text-amber-700 bg-amber-100",
    },
    {
      id: "eglence",
      title: "Eğlence",
      desc: "Bar, pub, gece kulübü vb.",
      icon: <MicIcon />,
      tone: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <>
      <StepHeader
        title="İşletmeniz ne işletmesi?"
        subtitle="İşletme kategorinizi seçin."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-[760px] mx-auto">
        {options.map((o) => {
          const selected = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChange(o.id)}
              className={`relative text-left rounded-2xl border-2 p-4 sm:p-5 transition focus:outline-none ${
                selected
                  ? "border-mantar-red bg-mantar-red/5"
                  : "border-mantar-line hover:border-mantar-red/40 bg-white"
              }`}
            >
              <span
                className={`absolute top-3 sm:top-4 right-3 sm:right-4 h-5 w-5 rounded-full grid place-items-center border-2 transition ${
                  selected
                    ? "border-mantar-red bg-mantar-red"
                    : "border-mantar-line bg-white"
                }`}
              >
                {selected && (
                  <span className="h-2 w-2 rounded-full bg-white" />
                )}
              </span>
              <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl grid place-items-center mb-3 sm:mb-4 ${o.tone}`}>
                {o.icon}
              </div>
              <div className="font-display text-[16px] sm:text-[18px] font-bold leading-none">
                {o.title}
              </div>
              <div className="mt-1.5 sm:mt-2 text-[12.5px] sm:text-[13px] text-mantar-muted leading-snug">
                {o.desc}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

// ------- Step 2: Business name -------
function Step2({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <>
      <StepHeader
        title="İşletmenizin ismi nedir?"
        subtitle="İşletmenizin adını girin."
      />
      <div className="max-w-[680px] mx-auto">
        <Field label="İşletme Adı">
          <input
            autoFocus
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Örn. Mantar Cafe"
            className="w-full h-13 px-4 py-3.5 rounded-xl border border-mantar-line bg-white text-[15px] text-mantar-ink placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition"
          />
        </Field>
      </div>
    </>
  );
}

// ------- Step 3: Contact info -------
function Step3({
  data,
  onChange,
}: {
  data: FormState;
  onChange: (patch: Partial<FormState>) => void;
}) {
  return (
    <>
      <StepHeader
        title="Yetkili isim, soyisim ve iletişim bilgileri"
        subtitle="Sizinle iletişime geçebilmemiz için bilgilerinizi girin."
      />
      <div className="max-w-[560px] mx-auto space-y-5">
        <Field label="Ad Soyad">
          <input
            value={data.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            placeholder="Adınız Soyadınız"
            className="w-full h-13 px-4 py-3.5 rounded-xl border border-mantar-line bg-white text-[15px] placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition"
          />
        </Field>
        <Field label="Telefon Numarası">
          <input
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            inputMode="tel"
            placeholder="5XX XXX XX XX"
            className="w-full h-13 px-4 py-3.5 rounded-xl border border-mantar-line bg-white text-[15px] placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition"
          />
        </Field>
        <Field label="E-posta Adresi">
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="ornek@mail.com"
            className="w-full h-13 px-4 py-3.5 rounded-xl border border-mantar-line bg-white text-[15px] placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition"
          />
        </Field>
      </div>
    </>
  );
}

// ------- Step 4: Success -------
function Step4() {
  return (
    <div className="flex flex-col items-center text-center pt-4 pb-2">
      <SuccessIllustration />
      <h2 className="mt-8 font-display text-[26px] sm:text-[30px] font-bold leading-tight tracking-[-0.01em]">
        Mantar işletmesi olmak için
        <br />
        başvurunuzu aldık!
      </h2>
      <p className="mt-3 text-[15px] text-mantar-muted max-w-[480px]">
        24 saat içinde size geri dönüş sağlayacağız ve detaylı bilgileri alacağız.
      </p>
      <p className="mt-4 text-[15px] font-bold text-mantar-red">
        İlginiz için teşekkür ederiz.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center h-12 px-8 rounded-full bg-mantar-red text-white font-semibold text-[15px] shadow-[0_10px_20px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
}

// ------- Small UI atoms -------
function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="font-display text-[20px] sm:text-[28px] font-bold leading-tight tracking-[-0.01em] px-2">
        {title}
      </h2>
      <p className="mt-2 text-[13.5px] sm:text-[15px] text-mantar-muted">{subtitle}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-mantar-ink mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

// ------- Icons -------
function ForkKnifeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden>
      <path d="M10 4v9a3 3 0 01-2 2.83V28a2 2 0 11-4 0V15.83A3 3 0 012 13V4a1 1 0 112 0v7h1V4a1 1 0 112 0v7h1V4a1 1 0 112 0zM22 4c-3 0-6 3-6 8 0 3 2 5 4 6v10a2 2 0 104 0V4z" />
    </svg>
  );
}
function CoffeeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h18v7a7 7 0 01-7 7h-4a7 7 0 01-7-7v-7z" />
      <path d="M23 14h2a3 3 0 010 6h-2" />
      <path d="M10 4c0 2 2 2 2 4s-2 2-2 4M15 4c0 2 2 2 2 4s-2 2-2 4" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="12" y="3" width="8" height="16" rx="4" fill="currentColor" stroke="none" />
      <path d="M7 14a9 9 0 0018 0" />
      <path d="M16 23v5M11 28h10" />
    </svg>
  );
}
function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 animate-spin" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" opacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// ------- Background ornaments -------
function BackgroundOrnaments() {
  return (
    <>
      <svg
        viewBox="0 0 200 400"
        className="absolute left-0 top-24 h-[560px] w-auto opacity-40 pointer-events-none"
        aria-hidden
      >
        <path
          d="M10,0 Q 100,40 60,160 Q 20,280 90,380 L 0 400 L 0 0 Z"
          fill="#f4d0d6"
          opacity="0.55"
        />
        <g transform="translate(40,120)" fill="#ea9aa7" opacity="0.55">
          <path d="M0 30 C 0 12, 18 0, 40 0 C 62 0, 80 12, 80 30 C 80 34, 78 36, 72 36 L 8 36 C 2 36, 0 34, 0 30 Z" />
          <rect x="28" y="36" width="24" height="58" rx="4" />
        </g>
      </svg>

      <svg
        viewBox="0 0 200 400"
        className="absolute right-0 top-28 h-[560px] w-auto opacity-40 pointer-events-none"
        aria-hidden
      >
        <path
          d="M200,0 Q 110,40 150,160 Q 190,280 110,380 L 200 400 L 200 0 Z"
          fill="#f4d0d6"
          opacity="0.55"
        />
        <g transform="translate(80,140)" fill="#ea9aa7" opacity="0.55">
          <path d="M0 30 C 0 12, 18 0, 40 0 C 62 0, 80 12, 80 30 C 80 34, 78 36, 72 36 L 8 36 C 2 36, 0 34, 0 30 Z" />
          <rect x="28" y="36" width="24" height="58" rx="4" />
        </g>
      </svg>
    </>
  );
}

// ------- Success illustration -------
function SuccessIllustration() {
  return (
    <div className="relative w-[260px] h-[240px]">
      {/* Soft circle bg */}
      <div className="absolute inset-0 rounded-full bg-mantar-red/10" />
      {/* Silhouette village */}
      <svg viewBox="0 0 260 240" className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <clipPath id="successClip">
            <circle cx="130" cy="120" r="120" />
          </clipPath>
        </defs>
        <g clipPath="url(#successClip)" fill="#f4b7c2" opacity="0.7">
          <path d="M0 200 L 35 200 L 35 160 L 50 150 L 65 160 L 65 200 L 95 200 L 95 155 L 115 155 L 115 170 L 135 170 L 135 200 L 0 200 Z" />
          <path d="M140 200 L 140 155 L 170 155 L 170 170 L 200 170 L 200 150 L 220 140 L 240 150 L 240 200 Z" />
          {/* Trees */}
          <circle cx="55" cy="145" r="8" />
          <circle cx="180" cy="150" r="7" />
          <circle cx="225" cy="135" r="6" />
        </g>

        {/* Stars / confetti */}
        {[
          { cx: 40, cy: 60, r: 2.5, c: "#f3a8c0" },
          { cx: 60, cy: 95, r: 3, c: "#f5c842" },
          { cx: 200, cy: 55, r: 2.5, c: "#b8a8ff" },
          { cx: 225, cy: 90, r: 3, c: "#ae2940" },
          { cx: 80, cy: 25, r: 2, c: "#ae2940" },
          { cx: 180, cy: 25, r: 3, c: "#f5c842" },
          { cx: 30, cy: 165, r: 2, c: "#b8a8ff" },
          { cx: 235, cy: 170, r: 2.5, c: "#f3a8c0" },
        ].map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={s.c} />
        ))}

        {/* Star shapes */}
        <g fill="#f5c842">
          <Star cx={105} cy={40} size={6} />
          <Star cx={158} cy={85} size={4} />
          <Star cx={52} cy={115} size={5} />
        </g>
        <g fill="#b8a8ff">
          <Star cx={218} cy={112} size={5} />
          <Star cx={135} cy={205} size={4} />
        </g>
      </svg>

      {/* Check circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[108px] h-[108px] rounded-full bg-mantar-red grid place-items-center shadow-[0_12px_30px_-8px_rgba(174,41,64,0.6)]">
        <svg viewBox="0 0 48 48" className="w-14 h-14" fill="none" stroke="white" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 25l8 8 16-18" />
        </svg>
      </div>
    </div>
  );
}

function Star({ cx, cy, size }: { cx: number; cy: number; size: number }) {
  const s = size;
  const path = `M${cx} ${cy - s} L${cx + s * 0.3} ${cy - s * 0.3} L${cx + s} ${cy} L${cx + s * 0.3} ${cy + s * 0.3} L${cx} ${cy + s} L${cx - s * 0.3} ${cy + s * 0.3} L${cx - s} ${cy} L${cx - s * 0.3} ${cy - s * 0.3} Z`;
  return <path d={path} />;
}
