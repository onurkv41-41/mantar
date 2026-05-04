type Props = {
  className?: string;
  winking?: boolean;
};

export default function MantarMascot({ className = "w-full h-full", winking = false }: Props) {
  return (
    <svg viewBox="0 0 240 280" className={className} aria-hidden>
      <defs>
        <radialGradient id="mmCap" cx="0.5" cy="0.3" r="0.75">
          <stop offset="0%" stopColor="#d63250" />
          <stop offset="100%" stopColor="#8a1f33" />
        </radialGradient>
        <linearGradient id="mmBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5e6" />
          <stop offset="100%" stopColor="#f2e0c4" />
        </linearGradient>
      </defs>

      {/* shadow */}
      <ellipse cx="120" cy="268" rx="70" ry="8" fill="#000" opacity="0.12" />

      {/* Body */}
      <path
        d="M76 150 Q 62 165 66 200 L 66 234 Q 66 258 90 264 L 150 264 Q 174 258 174 234 L 174 200 Q 178 165 164 150 Z"
        fill="url(#mmBody)"
        stroke="#e5ceaa"
        strokeWidth="1"
      />

      {/* Arms */}
      <ellipse cx="58" cy="198" rx="11" ry="22" fill="#f4dfb8" stroke="#e5ceaa" strokeWidth="1" transform="rotate(-18 58 198)" />
      <ellipse cx="182" cy="200" rx="11" ry="22" fill="#f4dfb8" stroke="#e5ceaa" strokeWidth="1" transform="rotate(18 182 200)" />

      {/* Cap */}
      <path
        d="M22 150 Q 22 48 120 38 Q 218 48 218 150 Q 218 162 198 162 L 42 162 Q 22 162 22 150 Z"
        fill="url(#mmCap)"
      />
      {/* Cap shine */}
      <ellipse cx="88" cy="72" rx="28" ry="16" fill="#fff" opacity="0.22" />
      {/* Cap spots */}
      <ellipse cx="60" cy="108" rx="12" ry="9" fill="#fff" opacity="0.92" />
      <ellipse cx="168" cy="92" rx="14" ry="10" fill="#fff" opacity="0.92" />
      <ellipse cx="130" cy="140" rx="10" ry="7" fill="#fff" opacity="0.92" />
      {/* Cap ring highlight */}
      <path d="M22 150 Q 22 148 24 146 Q 120 134 216 146 Q 218 148 218 150 Z" fill="#fff" opacity="0.35" />

      {/* Face: eyes */}
      {winking ? (
        <>
          <circle cx="94" cy="200" r="7" fill="#1a1715" />
          <circle cx="96" cy="198" r="2" fill="#fff" />
          <path
            d="M138 200 Q 145 194 152 200"
            stroke="#1a1715"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </>
      ) : (
        <>
          <circle cx="94" cy="200" r="7" fill="#1a1715" />
          <circle cx="96" cy="198" r="2" fill="#fff" />
          <circle cx="146" cy="200" r="7" fill="#1a1715" />
          <circle cx="148" cy="198" r="2" fill="#fff" />
        </>
      )}

      {/* Cheeks */}
      <ellipse cx="78" cy="218" rx="7" ry="4" fill="#f4b4c2" opacity="0.6" />
      <ellipse cx="162" cy="218" rx="7" ry="4" fill="#f4b4c2" opacity="0.6" />

      {/* Mouth */}
      <path
        d="M110 228 Q 120 238 130 228"
        stroke="#1a1715"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
