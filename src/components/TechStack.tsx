import { useReducedMotion } from "motion/react";
import {
  siReact,
  siTypescript,
  siTailwindcss,
  siVite,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siPostgresql,
  siMongodb,
  siRedis,
  siDocker,
  siGooglecloud,
  siKubernetes,
  siGo,
  siGraphql,
  siFigma,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

const TECHS: SimpleIcon[] = [
  siReact,
  siTypescript,
  siTailwindcss,
  siNextdotjs,
  siVite,
  siNodedotjs,
  siPython,
  siGo,
  siGraphql,
  siPostgresql,
  siMongodb,
  siRedis,
  siDocker,
  siKubernetes,
  siGooglecloud,
  siVercel,
  siFigma,
];

function TechLogo({ icon }: { icon: SimpleIcon }) {
  return (
    <div
      className="tech-logo-cell group relative flex h-24 w-32 shrink-0 items-center justify-center"
      style={{ ["--brand" as string]: `#${icon.hex}` }}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-label={icon.title}
        className="tech-logo h-10 w-10"
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    </div>
  );
}

function TechMarquee() {
  const reduced = useReducedMotion();
  // Two identical sequences back-to-back. Animating to -50% lands the
  // second copy exactly where the first started -> perfectly seamless.
  const sequence = [...TECHS, ...TECHS];

  return (
    <div
      className="tech-marquee relative w-full"
      onMouseEnter={(e) => e.currentTarget.style.setProperty("--play", "paused")}
      onMouseLeave={(e) => e.currentTarget.style.setProperty("--play", "running")}
    >
      <div
        className="flex w-max"
        style={{
          animation: reduced ? "none" : "tech-scroll 40s linear infinite",
          animationPlayState: "var(--play, running)" as string,
        }}
      >
        {sequence.map((icon, i) => (
          <TechLogo key={`${icon.title}-${i}`} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="teknolojiler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">
              Teknik Uzmanlık
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Kullandığımız <span className="text-gradient">Teknolojiler</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Modern, ölçeklenebilir ve güvenilir çözümler için seçtiğimiz teknoloji yığını.
          </p>
        </div>
      </div>

      <TechMarquee />
    </section>
  );
}