"use client";

import Link from "next/link";
import { useState } from "react";
import MantarLogo from "./MantarLogo";
import { OPEN_DOWNLOAD_EVENT } from "./DownloadModal";

const links = [
  { label: "Keşfet", href: "/#ozellikler" },
  { label: "Mantar AI", href: "/mantar-ai" },
  { label: "MantarPuan", href: "/#puan" },
  { label: "Haftanın Enleri", href: "/haftanin-enleri" },
  { label: "MantarChallenge", href: "/#challenge" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-mantar-cream">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <MantarLogo width={100} className="sm:hidden" />
            <MantarLogo width={124} className="hidden sm:block" />
          </Link>

          <nav className="hidden xl:flex items-center gap-7 text-[15px] font-medium text-mantar-ink/85">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative hover:text-mantar-red transition whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/mantar-sef-ol"
              className="hidden lg:inline-flex items-center justify-center h-9 px-3.5 rounded-full bg-mantar-cream-deep text-mantar-ink/80 font-semibold text-[12.5px] hover:bg-mantar-red hover:text-white transition whitespace-nowrap"
            >
              Mantar Şef Ol
            </Link>
            <Link
              href="/mantar-gurme-ol"
              className="hidden lg:inline-flex items-center justify-center h-9 px-3.5 rounded-full bg-mantar-cream-deep text-mantar-ink/80 font-semibold text-[12.5px] hover:bg-mantar-red hover:text-white transition whitespace-nowrap"
            >
              Mantar Gurme Ol
            </Link>
            <Link
              href="/mekan-ol"
              className="inline-flex items-center justify-center h-10 sm:h-11 px-3 sm:px-5 rounded-full border-2 border-mantar-red text-mantar-red font-semibold text-[12.5px] sm:text-[14px] hover:bg-mantar-red hover:text-white transition whitespace-nowrap"
            >
              İşletme Ol
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_DOWNLOAD_EVENT))}
              className="hidden sm:inline-flex items-center gap-1.5 h-10 sm:h-11 px-4 sm:px-5 rounded-full bg-mantar-red text-white font-semibold text-[13px] sm:text-[14px] shadow-[0_8px_18px_-6px_rgba(174,41,64,0.55)] hover:bg-mantar-red-dark transition whitespace-nowrap"
            >
              Uygulamayı İndir
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v14M6 12l6 6 6-6" />
              </svg>
            </button>

            {/* Mobile burger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menüyü aç/kapat"
              className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-mantar-red/10 text-mantar-red hover:bg-mantar-red hover:text-white transition"
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-mantar-line/60 bg-mantar-cream">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-4">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-mantar-ink/90 py-3 px-3 rounded-xl hover:bg-mantar-red/10 hover:text-mantar-red transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-mantar-line/60">
              <Link
                href="/mantar-sef-ol"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-11 px-3 rounded-full bg-mantar-cream-deep text-mantar-ink/85 font-semibold text-[13px] text-center"
              >
                Mantar Şef Ol
              </Link>
              <Link
                href="/mantar-gurme-ol"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-11 px-3 rounded-full bg-mantar-cream-deep text-mantar-ink/85 font-semibold text-[13px] text-center"
              >
                Mantar Gurme Ol
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <Link
                href="/mekan-ol"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-11 px-5 rounded-full border-2 border-mantar-red text-mantar-red font-semibold text-[14px] text-center"
              >
                İşletme Ol
              </Link>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.dispatchEvent(new Event(OPEN_DOWNLOAD_EVENT));
                }}
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-mantar-red text-white font-semibold text-[14px]"
              >
                Uygulamayı İndir
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v14M6 12l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
