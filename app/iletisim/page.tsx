"use client";

import { useState } from "react";
import Nav from "@/components/Nav";

const SUBJECTS = [
  "Genel Bilgi",
  "İşletme Başvurusu",
  "Teknik Destek",
  "İş Birliği",
  "Basın / Medya",
  "Diğer",
];

export default function IletisimPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (patch: Partial<typeof form>) =>
    setForm((f) => ({ ...f, ...patch }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="min-h-screen bg-mantar-cream">
      <Nav />

      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-16">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 sm:gap-10 items-center">
              {/* Left: copy */}
              <div className="text-center lg:text-left">
                <h1 className="font-display font-bold leading-[1.02] tracking-[-0.02em] text-[36px] sm:text-[48px] lg:text-[68px]">
                  Bizimle
                  <br />
                  <span className="text-mantar-red">İletişime Geçin</span>
                </h1>
                <p className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] leading-[1.6] text-mantar-muted max-w-[520px] mx-auto lg:mx-0">
                  Sorularınız, önerileriniz veya iş birliği talepleriniz için
                  size yardımcı olmaktan mutluluk duyarız.
                </p>

                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-[560px] mx-auto lg:mx-0">
                  <Badge
                    icon={<BubbleIcon />}
                    title="Hızlı Yanıt"
                    sub="24 saat içinde dönüş"
                  />
                  <Badge
                    icon={<ShieldIcon />}
                    title="Güvenli İletişim"
                    sub="Verileriniz korunur"
                  />
                  <Badge
                    icon={<HeadsetIcon />}
                    title="Destek Ekibi"
                    sub="Her zaman yanınızda"
                  />
                </div>
              </div>

              {/* Right: illustration */}
              <div className="relative flex justify-center lg:justify-end">
                <ContactIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="relative pb-16 sm:pb-24">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-5 sm:gap-6">
              {/* Form card */}
              <div className="bg-white rounded-[22px] sm:rounded-[28px] p-5 sm:p-10 border border-mantar-line/50 shadow-[0_20px_50px_-30px_rgba(30,10,15,0.08)]">
                <h2 className="font-display text-[26px] font-bold tracking-[-0.01em]">
                  Mesajınızı Bırakın
                </h2>
                <p className="mt-2 text-[14px] text-mantar-muted">
                  Formu doldurun, en kısa sürede size geri dönüş sağlayalım.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Adınız Soyadınız">
                      <Input
                        value={form.fullName}
                        onChange={(v) => update({ fullName: v })}
                        placeholder="Adınız Soyadınız"
                      />
                    </Field>
                    <Field label="E-posta Adresiniz">
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(v) => update({ email: v })}
                        placeholder="ornek@mail.com"
                      />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Telefon Numaranız">
                      <Input
                        value={form.phone}
                        onChange={(v) => update({ phone: v })}
                        placeholder="5XX XXX XX XX"
                        inputMode="tel"
                      />
                    </Field>
                    <Field label="Konu">
                      <div className="relative">
                        <select
                          value={form.subject}
                          onChange={(e) => update({ subject: e.target.value })}
                          className="w-full h-12 px-4 pr-10 rounded-xl border border-mantar-line bg-white text-[15px] text-mantar-ink focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition appearance-none"
                        >
                          <option value="" disabled>
                            Konu seçiniz
                          </option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mantar-muted">
                          <ChevronDown />
                        </span>
                      </div>
                    </Field>
                  </div>
                  <Field label="Mesajınız">
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => update({ message: e.target.value })}
                      placeholder="Mesajınızı buraya yazabilirsiniz..."
                      className="w-full px-4 py-3 rounded-xl border border-mantar-line bg-white text-[15px] text-mantar-ink placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition resize-none"
                    />
                  </Field>

                  <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
                    <div className="flex items-center gap-2 text-[13px] text-mantar-muted">
                      <ShieldIcon small />
                      Kişisel verileriniz gizli tutulur.
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-mantar-red text-white font-semibold text-[15px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition"
                    >
                      {submitted ? "Gönderildi ✓" : "Mesajı Gönder"}
                      {!submitted && <PaperPlane />}
                    </button>
                  </div>
                </form>
              </div>

              {/* Info card + Map */}
              <aside className="flex flex-col gap-6">
                <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-mantar-line/50 shadow-[0_20px_50px_-30px_rgba(30,10,15,0.08)]">
                  <h3 className="font-display text-[20px] font-bold">
                    İletişim Bilgileri
                  </h3>

                  <div className="mt-6 space-y-6">
                    <InfoRow
                      icon={<PinIcon />}
                      label="Adres"
                      value={null}
                      placeholder="Yakında"
                    />
                    <InfoRow
                      icon={<PhoneIcon />}
                      label="Telefon"
                      value={null}
                      placeholder="Yakında"
                    />
                    <InfoRow
                      icon={<MailIcon />}
                      label="E-posta"
                      value="iletisim@mantar.com"
                    />
                    <InfoRow
                      icon={<ClockIcon />}
                      label="Çalışma Saatleri"
                      value={null}
                      placeholder="Yakında"
                    />
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="relative rounded-[28px] overflow-hidden border border-mantar-line/50 aspect-[16/11] bg-mantar-cream-deep">
                  <MapPlaceholder />
                  <button
                    type="button"
                    className="absolute bottom-5 left-5 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white text-mantar-ink font-semibold text-[13px] shadow-[0_10px_24px_-8px_rgba(30,10,15,0.2)] hover:bg-mantar-cream transition"
                  >
                    <PinIcon small />
                    Haritada Görüntüle
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Badge({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-full bg-mantar-red/10 grid place-items-center text-mantar-red flex-shrink-0">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-[14px] font-bold text-mantar-ink">{title}</div>
        <div className="text-[12px] text-mantar-muted mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-mantar-ink mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type,
  inputMode,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  inputMode?: "tel" | "email" | "text" | "numeric";
}) {
  return (
    <input
      type={type ?? "text"}
      inputMode={inputMode}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-12 px-4 rounded-xl border border-mantar-line bg-white text-[15px] text-mantar-ink placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition"
    />
  );
}

function InfoRow({
  icon,
  label,
  value,
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | null;
  placeholder?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-full bg-mantar-red/10 grid place-items-center text-mantar-red flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-mantar-ink">{label}</div>
        {value ? (
          <div className="text-[14px] text-mantar-muted mt-1 leading-snug">
            {value}
          </div>
        ) : (
          <div className="text-[13px] text-mantar-muted/60 mt-1 italic">
            {placeholder ?? "Yakında"}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Illustrations ---------------- */

function ContactIllustration() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[5/4]">
      {/* Soft circle bg */}
      <div className="absolute inset-0 rounded-full bg-mantar-red/8 scale-[0.8]" aria-hidden />
      <svg viewBox="0 0 500 400" className="relative w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="envGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fde3ea" />
            <stop offset="100%" stopColor="#f5b6c4" />
          </linearGradient>
          <linearGradient id="envBack" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f4b7c2" />
            <stop offset="100%" stopColor="#e98fa0" />
          </linearGradient>
          <linearGradient id="bubbleGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#c6253d" />
            <stop offset="100%" stopColor="#8a1f33" />
          </linearGradient>
        </defs>

        {/* Envelope back */}
        <g transform="translate(200,170)">
          <rect x="0" y="0" width="260" height="170" rx="14" fill="url(#envBack)" />
          <path d="M0 0 L130 110 L260 0 Z" fill="url(#envGrad)" />
          <path d="M0 170 L110 85 M260 170 L150 85" stroke="#e98fa0" strokeWidth="3" fill="none" />
        </g>

        {/* Chat bubble */}
        <g transform="translate(290,70)">
          <path
            d="M0 60 Q 0 0 70 0 L 130 0 Q 200 0 200 60 Q 200 120 130 120 L 90 120 L 60 150 L 72 120 L 70 120 Q 0 120 0 60 Z"
            fill="url(#bubbleGrad)"
          />
          <circle cx="70" cy="60" r="6" fill="#fff" />
          <circle cx="100" cy="60" r="6" fill="#fff" />
          <circle cx="130" cy="60" r="6" fill="#fff" />
        </g>

        {/* Phone floating chip */}
        <g transform="translate(100,140)">
          <circle cx="40" cy="40" r="40" fill="#fde3ea" />
          <path
            d="M28 22 Q 28 18 32 18 L 36 18 Q 40 18 42 22 L 46 30 Q 47 34 44 36 L 41 38 Q 46 48 52 54 L 54 51 Q 56 48 60 49 L 68 53 Q 72 55 72 59 L 72 62 Q 72 66 68 66 Q 44 66 30 52 Q 24 46 22 38 Q 18 28 22 24 L 28 22 Z"
            fill="#ae2940"
          />
        </g>

        {/* Email floating chip */}
        <g transform="translate(100,250)">
          <circle cx="40" cy="40" r="40" fill="#fde3ea" />
          <rect x="20" y="26" width="40" height="28" rx="4" fill="#ae2940" />
          <path d="M20 30 L 40 46 L 60 30" stroke="#fde3ea" strokeWidth="3" fill="none" strokeLinejoin="round" />
        </g>

        {/* Confetti */}
        <g fill="#f5c842">
          <polygon points="380,40 384,48 392,50 384,52 380,60 376,52 368,50 376,48" />
          <polygon points="450,180 453,186 460,188 453,190 450,196 447,190 440,188 447,186" />
        </g>
        <g fill="#ae2940">
          <circle cx="420" cy="90" r="4" />
          <circle cx="470" cy="220" r="3" />
          <circle cx="300" cy="340" r="3" />
          <circle cx="200" cy="40" r="3" />
        </g>
        <g fill="#b8a8ff">
          <circle cx="410" cy="320" r="4" />
          <circle cx="250" cy="300" r="3" />
        </g>

        {/* Wave at bottom */}
        <path
          d="M 300 370 Q 380 350 440 380 L 500 400 L 300 400 Z"
          fill="#ae2940"
          opacity="0.12"
        />
      </svg>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-full" aria-hidden>
      <rect width="400" height="280" fill="#eadfc8" />
      {/* Streets grid */}
      <g stroke="#cbbb99" strokeWidth="8" fill="none">
        <path d="M-20 80 L 420 60" />
        <path d="M-20 150 L 420 170" />
        <path d="M-20 220 L 420 230" />
        <path d="M80 -20 L 70 300" />
        <path d="M180 -20 L 190 300" />
        <path d="M290 -20 L 300 300" />
      </g>
      {/* Minor streets */}
      <g stroke="#d8cba8" strokeWidth="3" fill="none">
        <path d="M-20 120 L 420 115" />
        <path d="M-20 190 L 420 200" />
        <path d="M130 -20 L 125 300" />
        <path d="M240 -20 L 245 300" />
      </g>
      {/* Parks */}
      <rect x="20" y="95" width="50" height="40" rx="5" fill="#bfd6a0" />
      <rect x="320" y="205" width="60" height="40" rx="5" fill="#bfd6a0" />
      {/* Water */}
      <path d="M0 240 Q 100 260 200 250 T 400 265 L 400 280 L 0 280 Z" fill="#a8c8e0" />

      {/* Pin ring */}
      <circle cx="200" cy="140" r="34" fill="#ae2940" opacity="0.18" />
      <circle cx="200" cy="140" r="20" fill="#ae2940" opacity="0.3" />
      {/* Pin */}
      <path
        d="M200 110 C 210 110 218 118 218 128 C 218 140 200 158 200 158 C 200 158 182 140 182 128 C 182 118 190 110 200 110 Z"
        fill="#ae2940"
      />
      <circle cx="200" cy="127" r="5" fill="#fff" />
    </svg>
  );
}

/* ---------------- Icons ---------------- */

function BubbleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M4 5a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3H9l-5 4V5z" />
    </svg>
  );
}
function ShieldIcon({ small }: { small?: boolean }) {
  const sz = small ? "w-4 h-4" : "w-5 h-5";
  return (
    <svg viewBox="0 0 24 24" className={sz} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" fill={small ? "none" : "currentColor"} stroke={small ? "currentColor" : "none"} />
      {small && <path d="M9 12l2 2 4-4" />}
    </svg>
  );
}
function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" fill="currentColor" stroke="none" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" fill="currentColor" stroke="none" />
      <path d="M21 18v1a3 3 0 01-3 3h-3" />
    </svg>
  );
}
function PinIcon({ small }: { small?: boolean }) {
  const sz = small ? "w-4 h-4" : "w-5 h-5";
  return (
    <svg viewBox="0 0 24 24" className={sz} fill="currentColor" aria-hidden>
      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.5.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.6 3.5 1 1 0 01-.25 1l-2.25 2.3z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function PaperPlane() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
      <path d="M21.4 2.6L2.7 9.9c-.9.4-.8 1.7.2 1.9l6.5 1.7 2 6.8c.3 1 1.6 1.1 2 .1l6.9-16.3c.3-.8-.5-1.7-1.3-1.4z" />
    </svg>
  );
}
