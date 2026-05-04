import { ReactNode } from "react";

type Props = {
  className?: string;
  rotate?: number;
  label?: string;
  children?: ReactNode;
  tone?: "light" | "red";
};

/**
 * Empty iPhone-shaped placeholder. The inner screen area is where real
 * screenshots will go later; we keep it as a subtle dotted canvas for now.
 */
export default function PhoneFrame({
  className = "",
  rotate = 0,
  label,
  children,
  tone = "light",
}: Props) {
  const screenBg = tone === "red" ? "bg-mantar-red/5" : "bg-mantar-cream";

  return (
    <div
      className={`relative phone-shadow ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Outer frame */}
      <div className="relative rounded-[44px] bg-[#0b0b0c] p-[6px] w-[260px] aspect-[260/540]">
        {/* Side buttons */}
        <span className="absolute -left-[2px] top-24 h-12 w-[3px] rounded-full bg-[#0b0b0c]" />
        <span className="absolute -left-[2px] top-40 h-20 w-[3px] rounded-full bg-[#0b0b0c]" />
        <span className="absolute -right-[2px] top-32 h-16 w-[3px] rounded-full bg-[#0b0b0c]" />

        {/* Inner bezel */}
        <div className={`relative h-full w-full rounded-[38px] overflow-hidden ${screenBg}`}>
          {children ?? (
            <div className="absolute inset-0 phone-placeholder-grid flex items-center justify-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-mantar-red/40 font-semibold">
                {label ?? "görsel yakında"}
              </span>
            </div>
          )}

          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[22px] w-[84px] rounded-full bg-[#0b0b0c]" />
        </div>
      </div>
    </div>
  );
}
