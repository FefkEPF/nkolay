interface LogoProps {
  className?: string;
  lightBackground?: boolean;
}

export default function Logo({ className = "", lightBackground = true }: LogoProps) {
  return (
    <div className={`select-none ${className}`} id="nkolay-medya-logo">
      <img
        src="/nkolay_logo.png"
        alt="NKolay Medya"
        className="h-10 sm:h-12 w-auto object-contain"
        style={!lightBackground ? { filter: "brightness(0) invert(1)" } : undefined}
        draggable={false}
      />
    </div>
  );
}
