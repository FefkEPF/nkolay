interface LogoProps {
  className?: string;
  lightBackground?: boolean;
}

export default function Logo({ className = "", lightBackground = true }: LogoProps) {
  return (
    <div className={`select-none ${className}`} id="nkolay-medya-logo">
      <svg
        viewBox="0 0 260 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 sm:h-12 w-auto"
        aria-label="NKolay Medya"
        role="img"
      >
        <defs>
          <linearGradient id="nGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C41E2A" />
            <stop offset="100%" stopColor="#7A1420" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-display font-bold"
          style={{ fontSize: 88, letterSpacing: -4 }}
          fill="url(#nGradient)"
        >
          N
        </text>
        <text
          x="50%"
          y="88%"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-display font-semibold"
          style={{ fontSize: 22, letterSpacing: 8 }}
          fill="#6B7280"
        >
          MEDYA
        </text>
      </svg>
    </div>
  );
}
