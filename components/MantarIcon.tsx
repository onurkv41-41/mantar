type Props = {
  size?: number;
  className?: string;
  rounded?: boolean;
};

/**
 * Mantar brand icon — red square background + white mushroom + red eyes.
 * Uses the canonical SVG from /public/mantar-icon.svg.
 * Default is rounded-square (app-icon look). Pass `rounded={false}` for sharp corners.
 */
export default function MantarIcon({
  size = 40,
  className = "",
  rounded = true,
}: Props) {
  return (
    <span
      className={`inline-block ${rounded ? "rounded-[22%]" : ""} overflow-hidden ${className}`}
      style={{ width: size, height: size, lineHeight: 0 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mantar-icon.svg"
        alt=""
        aria-hidden
        width={size}
        height={size}
        className="block w-full h-full"
      />
    </span>
  );
}
