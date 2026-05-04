import { STORE_LINKS } from "@/lib/store-links";

type Props = {
  className?: string;
  size?: "md" | "sm";
  theme?: "dark" | "light";
};

export default function StoreButtons({ className = "", size = "md", theme = "dark" }: Props) {
  const height = size === "sm" ? "h-11" : "h-14";
  const textSize = size === "sm" ? "text-[10px]" : "text-[11px]";
  const titleSize = size === "sm" ? "text-sm" : "text-base";
  const bg = theme === "light"
    ? "bg-white text-mantar-ink border border-mantar-line"
    : "bg-black text-white";

  const isPlaceholderIos = STORE_LINKS.ios === "#";
  const isPlaceholderAndroid = STORE_LINKS.android === "#";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* App Store */}
      <a
        href={STORE_LINKS.ios}
        target={isPlaceholderIos ? undefined : "_blank"}
        rel={isPlaceholderIos ? undefined : "noopener noreferrer"}
        className={`${bg} ${height} inline-flex items-center gap-3 rounded-xl px-4 transition hover:opacity-90`}
        aria-label="App Store'dan indir"
      >
        <svg viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor" aria-hidden>
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
        <div className="text-left leading-tight">
          <div className={`${textSize} opacity-80`}>App Store&apos;dan</div>
          <div className={`${titleSize} font-semibold`}>İndir</div>
        </div>
      </a>

      {/* Google Play */}
      <a
        href={STORE_LINKS.android}
        target={isPlaceholderAndroid ? undefined : "_blank"}
        rel={isPlaceholderAndroid ? undefined : "noopener noreferrer"}
        className={`${bg} ${height} inline-flex items-center gap-3 rounded-xl px-4 transition hover:opacity-90`}
        aria-label="Google Play'den indir"
      >
        <svg viewBox="0 0 512 512" className="w-6 h-6" aria-hidden>
          <path d="M99.6 14.4C90.5 18.9 85 28.2 85 39.9v432.2c0 11.7 5.5 21 14.6 25.5L325 256 99.6 14.4z" fill="#2196F3"/>
          <path d="M378.6 198.8L325 256l53.6 57.2L439 277c14.7-9 14.7-31 0-40l-60.4-38.2z" fill="#FFC107"/>
          <path d="M99.6 14.4L325 256 378.6 198.8 133.8 54 99.6 14.4z" fill="#4CAF50"/>
          <path d="M99.6 497.6L378.6 313.2 325 256 99.6 497.6z" fill="#F44336"/>
        </svg>
        <div className="text-left leading-tight">
          <div className={`${textSize} opacity-80`}>Google Play</div>
          <div className={`${titleSize} font-semibold`}>DEN ALIN</div>
        </div>
      </a>
    </div>
  );
}
