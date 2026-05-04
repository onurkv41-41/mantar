type Props = {
  variant?: "color" | "white";
  className?: string;
  width?: number;
};

export default function MantarLogo({ variant = "color", className, width = 132 }: Props) {
  const fill = variant === "white" ? "#ffffff" : "#ae2940";
  const textFill = variant === "white" ? "#ffffff" : "#ae2940";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 264.63 86.89"
      className={className}
      width={width}
      height={width * (86.89 / 264.63)}
      aria-label="Mantar"
    >
      {/* Shroom body */}
      <path
        fill={fill}
        d="M1.63,19.56C2.05,11.31,9.21,5.29,17.19,4.47c8.5-.82,16,2.36,19.38,7.78a10.24,10.24,0,0,1,1.65,6.83l0,.3a150.88,150.88,0,0,0-20.82-1.09C10.25,18.37,4.16,18.8,1.63,19.56Z"
      />
      <path
        fill={fill}
        d="M1.89,19.5c10.93,1.88,25.13,2,36-.14-3.8-1.12-11.92-1.77-18-1.7C13.72,17.73,5.51,18.29,1.89,19.5Z"
      />
      <path
        fill={fill}
        d="M17,17.66h6.11c-.14,8.63-.28,18,.56,25,.69,5.58,2.36,8.5,4.86,10.41a16.41,16.41,0,0,0,7.35,2.66h0v2.16c-4.3,1.14-10.69,1.27-16.1,1.27S8,59,3.72,57.88V55.72a15.9,15.9,0,0,0,7.36-2.66c2.49-1.91,4.16-4.83,4.85-10.41C16.77,35.67,16.91,26.29,17,17.66Z"
      />
      <path
        fill={fill}
        d="M3.72,56a109.28,109.28,0,0,0,32.2,0v3.84c0,.92-1.38,1.42-3.19,1.75a83.42,83.42,0,0,1-25.82,0c-1.8-.33-3.19-.83-3.19-1.75Z"
      />
      {/* Dots on cap */}
      <circle fill={variant === "white" ? "#ae2940" : "#ffffff"} cx="26.13" cy="11.1" r="2.5" />
      <circle fill={variant === "white" ? "#ae2940" : "#ffffff"} cx="13.25" cy="11.43" r="2.5" />
      {/* mantar wordmark */}
      <text
        x="47.35"
        y="61.37"
        fontFamily="var(--font-display), ui-sans-serif, system-ui"
        fontWeight={800}
        fontSize="58"
        letterSpacing="-2"
        fill={textFill}
      >
        mantar
      </text>
    </svg>
  );
}
