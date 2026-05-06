"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  instagram: string;
  twitter: string;
  youtube: string;
};

const empty: FormState = {
  fullName: "",
  phone: "",
  email: "",
  instagram: "",
  twitter: "",
  youtube: "",
};

export default function GurmeForm() {
  const [data, setData] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const valid =
    data.fullName.trim().length >= 3 &&
    data.phone.trim().length >= 10 &&
    /\S+@\S+\.\S+/.test(data.email) &&
    data.instagram.trim().length >= 2;

  const update = (patch: Partial<FormState>) =>
    setData((d) => ({ ...d, ...patch }));

  const stripHandle = (v: string) =>
    v.trim().replace(/^@+/, "").replace(/\s+/g, "");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      await addDoc(collection(db, "gurmeApplications"), {
        fullName: data.fullName.trim(),
        phone: data.phone.trim(),
        email: data.email.trim().toLowerCase(),
        instagram: stripHandle(data.instagram),
        twitter: data.twitter.trim() ? stripHandle(data.twitter) : null,
        youtube: data.youtube.trim() ? data.youtube.trim() : null,
        status: "new",
        source: "landing-mantar-gurme-ol",
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("[gurme] başvuru gönderilemedi", err);
      setError(
        "Başvurun gönderilemedi. Lütfen birazdan tekrar dene veya mantarkayit@gmail.com adresine yaz."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[22px] sm:rounded-[28px] border border-mantar-line/60 shadow-[0_30px_70px_-30px_rgba(30,10,15,0.08)] px-6 sm:px-10 py-10 sm:py-14 text-center">
        <div className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#f6a638]/15 grid place-items-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-[#b5651a]" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-[24px] sm:text-[28px] font-bold tracking-[-0.01em]">
          Başvurun bize ulaştı!
        </h3>
        <p className="mt-3 text-[14.5px] sm:text-[15.5px] text-mantar-muted leading-[1.7] max-w-[520px] mx-auto">
          <strong className="text-mantar-ink">48 saat içinde</strong> Mantar
          ekibi tarafından sana geri dönüş yapılacaktır.{" "}
          <strong className="text-mantar-ink">Onaylanması durumunda</strong>{" "}
          gurme hesabın açılacaktır.
        </p>
        <p className="mt-4 text-[13px] text-mantar-muted">
          İlgin için teşekkür ederiz.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-[22px] sm:rounded-[28px] border border-mantar-line/60 shadow-[0_30px_70px_-30px_rgba(30,10,15,0.08)] p-6 sm:p-10"
    >
      <div className="text-center mb-7 sm:mb-9">
        <div className="inline-flex items-center gap-2 h-7 px-3 rounded-full bg-mantar-red/10 text-mantar-red text-[12px] font-bold tracking-[0.05em]">
          BAŞVURU FORMU
        </div>
        <h2 className="mt-3 font-display text-[22px] sm:text-[26px] font-bold tracking-[-0.01em]">
          Bilgilerini bizimle paylaş
        </h2>
        <p className="mt-2 text-[13.5px] text-mantar-muted">
          Twitter ve YouTube alanları isteğe bağlıdır.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <Field label="Ad Soyad" required>
          <input
            value={data.fullName}
            onChange={(e) => update({ fullName: e.target.value })}
            placeholder="Adın Soyadın"
            autoComplete="name"
            className={inputCls}
          />
        </Field>

        <Field label="Telefon Numarası" required>
          <input
            value={data.phone}
            onChange={(e) => update({ phone: e.target.value })}
            inputMode="tel"
            autoComplete="tel"
            placeholder="5XX XXX XX XX"
            className={inputCls}
          />
        </Field>

        <Field label="E-posta Adresi" required wide>
          <input
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
            type="email"
            autoComplete="email"
            placeholder="ornek@mail.com"
            className={inputCls}
          />
        </Field>

        <Field label="Instagram Kullanıcı Adı" required>
          <PrefixInput
            prefix="@"
            value={data.instagram}
            onChange={(v) => update({ instagram: v })}
            placeholder="kullaniciadi"
            autoComplete="off"
          />
        </Field>

        <Field label="Twitter (X) Kullanıcı Adı" optional>
          <PrefixInput
            prefix="@"
            value={data.twitter}
            onChange={(v) => update({ twitter: v })}
            placeholder="kullaniciadi"
            autoComplete="off"
          />
        </Field>

        <Field label="YouTube Kanal Adı" optional wide>
          <input
            value={data.youtube}
            onChange={(e) => update({ youtube: e.target.value })}
            placeholder="Kanal adı veya bağlantı"
            autoComplete="off"
            className={inputCls}
          />
        </Field>
      </div>

      {error && (
        <div className="mt-6 rounded-xl bg-mantar-red/10 border border-mantar-red/25 text-mantar-red text-[13.5px] px-4 py-3 leading-snug">
          {error}
        </div>
      )}

      <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-end gap-3">
        <p className="text-[12.5px] text-mantar-muted text-center sm:text-right sm:flex-1 leading-snug">
          Başvurun bize ulaştığında 48 saat içinde dönüş yapacağız.
        </p>
        <button
          type="submit"
          disabled={!valid || submitting}
          className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-mantar-red text-white font-semibold text-[14.5px] shadow-[0_10px_22px_-8px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Spinner />
              Gönderiliyor...
            </>
          ) : (
            <>
              Başvuruyu Gönder
              <ArrowRight />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full h-12 px-4 rounded-xl border border-mantar-line bg-white text-[15px] text-mantar-ink placeholder:text-mantar-muted/70 focus:border-mantar-red focus:ring-2 focus:ring-mantar-red/15 outline-none transition";

function Field({
  label,
  children,
  required,
  optional,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
  wide?: boolean;
}) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="flex items-center gap-1.5 text-[13px] font-semibold text-mantar-ink mb-2">
        {label}
        {required && <span className="text-mantar-red">*</span>}
        {optional && (
          <span className="text-[11px] font-medium text-mantar-muted">
            (opsiyonel)
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

function PrefixInput({
  prefix,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  prefix: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex items-stretch h-12 rounded-xl border border-mantar-line bg-white focus-within:border-mantar-red focus-within:ring-2 focus-within:ring-mantar-red/15 transition overflow-hidden">
      <span className="grid place-items-center w-9 text-mantar-muted text-[15px] font-medium border-r border-mantar-line bg-mantar-cream/50">
        {prefix}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="flex-1 h-full px-3 text-[15px] text-mantar-ink placeholder:text-mantar-muted/70 bg-transparent outline-none"
      />
    </div>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
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
