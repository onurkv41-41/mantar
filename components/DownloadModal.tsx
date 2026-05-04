"use client";

import { useEffect, useState } from "react";
import { STORE_LINKS } from "@/lib/store-links";

export const OPEN_DOWNLOAD_EVENT = "mantar:open-download";

export default function DownloadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_DOWNLOAD_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_DOWNLOAD_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Uygulamayı indir"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Kapat"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm animate-[fadeIn_0.18s_ease-out]"
      />

      {/* Sheet */}
      <div className="relative w-full sm:w-auto sm:min-w-[420px] sm:max-w-[440px] bg-mantar-cream rounded-t-[28px] sm:rounded-[28px] border-t sm:border border-mantar-line/60 shadow-[0_-30px_80px_-20px_rgba(0,0,0,0.4)] sm:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] p-6 sm:p-7 pb-8 animate-[slideUp_0.28s_cubic-bezier(.22,.61,.36,1)] sm:animate-[fadeIn_0.22s_ease-out]">
        {/* Mobile grab handle */}
        <div className="sm:hidden mx-auto mb-4 h-1.5 w-11 rounded-full bg-mantar-line" aria-hidden />

        {/* Close button */}
        <button
          type="button"
          aria-label="Kapat"
          onClick={() => setOpen(false)}
          className="hidden sm:inline-flex absolute top-4 right-4 h-9 w-9 items-center justify-center rounded-full bg-mantar-cream-deep/70 hover:bg-mantar-cream-deep text-mantar-ink/70 hover:text-mantar-ink transition"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="text-center">
          <div className="font-display text-[22px] sm:text-[24px] font-bold tracking-[-0.01em]">
            Mantar&apos;ı indir
          </div>
          <p className="mt-1.5 text-[13.5px] text-mantar-muted">
            Hangi cihazı kullanıyorsun?
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <StoreLink
            href={STORE_LINKS.ios}
            label="iPhone / iPad"
            sub="App Store"
            icon={<AppleIcon />}
          />
          <StoreLink
            href={STORE_LINKS.android}
            label="Android"
            sub="Google Play"
            icon={<PlayIcon />}
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="sm:hidden mt-5 w-full h-12 rounded-full text-mantar-ink/70 font-semibold text-[14px]"
        >
          Vazgeç
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0.4 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  );
}

function StoreLink({
  href,
  label,
  sub,
  icon,
}: {
  href: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      onClick={(e) => {
        if (isPlaceholder) e.preventDefault();
      }}
      className={[
        "group flex items-center gap-4 w-full h-[68px] px-5 rounded-2xl border transition",
        "bg-white border-mantar-line/60 hover:border-mantar-red hover:bg-mantar-red hover:text-white",
        isPlaceholder ? "cursor-default" : "",
      ].join(" ")}
    >
      <span className="h-11 w-11 rounded-xl bg-mantar-cream-deep group-hover:bg-white/20 grid place-items-center text-mantar-ink group-hover:text-white transition">
        {icon}
      </span>
      <span className="flex-1 text-left leading-tight">
        <span className="block text-[11px] font-medium opacity-70">{sub}</span>
        <span className="block text-[15.5px] font-bold tracking-[-0.005em]">{label}</span>
      </span>
      <span className="text-mantar-ink/40 group-hover:text-white transition">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="w-6 h-6" aria-hidden>
      <path d="M99.6 14.4C90.5 18.9 85 28.2 85 39.9v432.2c0 11.7 5.5 21 14.6 25.5L325 256 99.6 14.4z" fill="#2196F3" />
      <path d="M378.6 198.8L325 256l53.6 57.2L439 277c14.7-9 14.7-31 0-40l-60.4-38.2z" fill="#FFC107" />
      <path d="M99.6 14.4L325 256 378.6 198.8 133.8 54 99.6 14.4z" fill="#4CAF50" />
      <path d="M99.6 497.6L378.6 313.2 325 256 99.6 497.6z" fill="#F44336" />
    </svg>
  );
}
