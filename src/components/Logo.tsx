import { useState } from "react";

interface LogoProps {
  className?: string;
  lightBackground?: boolean;
}

export default function Logo({ className = "", lightBackground = true }: LogoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`select-none ${className}`} id="nkolay-medya-logo">
        <svg viewBox="0 0 160 40" className="h-10 sm:h-12 w-auto" aria-label="NKolay Medya">
          <rect width="160" height="40" rx="8" fill="#C41E2A" />
          <text x="80" y="26" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#fff" fontFamily="system-ui">
            NKolay
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`select-none ${className}`} id="nkolay-medya-logo">
      <img
        src="/nkolay_logo.png"
        alt="NKolay Medya"
        className="h-10 sm:h-12 w-auto object-contain"
        style={!lightBackground ? { filter: "brightness(0) invert(1)" } : undefined}
        draggable={false}
        onError={() => setErrored(true)}
      />
    </div>
  );
}
