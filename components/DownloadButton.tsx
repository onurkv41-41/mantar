"use client";

import { OPEN_DOWNLOAD_EVENT } from "./DownloadModal";

type Props = {
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function DownloadButton({ className = "", children, ariaLabel }: Props) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={() => window.dispatchEvent(new Event(OPEN_DOWNLOAD_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}
