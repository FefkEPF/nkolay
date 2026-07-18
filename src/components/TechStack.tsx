import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

type Tech = {
  name: string;
  group: "Frontend" | "Backend" | "Platform";
  svg: JSX.Element;
};

const TechLogo = ({ d, children, className }: { d?: string; children?: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className ?? "w-6 h-6"} fill="currentColor" aria-hidden="true">
    {d ? <path d={d} /> : children}
  </svg>
);

const TECHS: Tech[] = [
  {
    name: "React",
    group: "Frontend",
    svg: <TechLogo d="M12 2 3.6 6.3v7.4L12 22l8.4-4.3V6.3L12 2zm0 2.3 6.3 3.2v6.2L12 19.7 5.7 13.7V8.5L12 6.3zM12 8.2l-3.8 2v3.6L12 16l3.8-2V10.2L12 8.2zm0 2.2 1.9 1v1.8L12 13.8 10.1 13V11.2L12 10.4z" />,
  },
  {
    name: "TypeScript",
    group: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <rect x="1" y="1" width="22" height="22" rx="3" fill="#3178C6" />
        <path d="M12.7 12.9c.6.4 1 .9 1 1.7 0 1.4-1 2.2-2.6 2.2-1.5 0-2.5-.7-2.9-1.7l1.4-.8c.3.6.7.9 1.4.9.6 0 1-.3 1-.8 0-.5-.3-.7-1.1-1l-1.4-.6c-1-.4-1.5-1-1.5-1.9 0-1.2 1-2 2.5-2 1.3 0 2.2.6 2.5 1.5l-1.4.8c-.3-.5-.6-.8-1.1-.8-.5 0-.9.3-.9.7 0 .5.3.6 1.1 1l1.4.6z" fill="#fff" />
        <path d="M17.5 8.8h-1.8v8.4h1.8V8.8zM17.5 6.2h-1.8v1.6h1.8V6.2z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    group: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#000" />
        <path d="M8.5 8.5v8.5h1.6v-5.7l1.6 4.2h1.4l1.6-4.2v5.7h1.6V8.5h-2l-1.4 3.7-1.4-3.7h-2z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    group: "Frontend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C13.9 7.5 12.9 6 12 6zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C8.9 13.5 7.9 12 7 12z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    group: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2 3 6.5v8L12 22l9-7.5v-8L12 2zm-1 5h2v6h-2v-2H9V9h2V7zm5 0h2v2h-2v4h-2V7z" fill="#539E43" />
      </svg>
    ),
  },
  {
    name: "Python",
    group: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M11.9 2c-2.2 0-3.8.9-3.8 3.2v2h4v.7h-6.4C5.4 8 4 9.4 4 12c0 2.6 1.3 4 4 4h1.4v-2.4c0-2.3 1-3.6 3.5-3.6h3.2c1.7 0 2.9-1.3 2.9-3S17.2 2 14.9 2h-3z" fill="#387EB8" />
        <path d="M12.1 22c2.2 0 3.8-.9 3.8-3.2v-2h-4v-.7h6.4c2.4 0 3.8-1.4 3.8-4 0-2.6-1.3-4-4-4h-1.4v2.4c0 2.3-1 3.6-3.5 3.6h-3.2c-1.7 0-2.9 1.3-2.9 3s1.1 3.9 3.4 3.9h3z" fill="#FFCD3D" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    group: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#336791" fontFamily="monospace">PG</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    group: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2c1 3 4 5 4 9 0 3-1 4-1 6 0 2-2 3-3 5-1-2-3-3-3-5 0-2-1-3-1-6 0-4 3-6 4-9z" fill="#4DB33D" />
      </svg>
    ),
  },
  {
    name: "Redis",
    group: "Backend",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#DC382D" fontFamily="monospace">R</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    group: "Platform",
    svg: <TechLogo d="M12 2 22 21H2L12 2z" />,
  },
  {
    name: "Docker",
    group: "Platform",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M3 11h3v3H3v-3zm4 0h3v3H7v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8 4h3v3H7v-3zm4 0h3v3h-3v-3zm4-8h3v3h-3V7zm-4 0h3v3h-3V7zm-8 1h3v3H3V8zm0 7c0 2 2 4 6 4 1.5 0 2 1 3 1 2 0 3-2 5-2 3 0 6-2 6-5 0-1-.8-2-2-2-1 0-2 1-3 1-1 0-2-1-4-1-2 0-3 1-3 1-1 0-2-1-4-1-1 0-2 1-2 1v2z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "AWS",
    group: "Platform",
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path d="M7 9h2l1 4 1-4h2l-2 7h-2l-2-7z" fill="#FF9900" />
        <text x="14" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#FF9900" fontFamily="monospace">AWS</text>
      </svg>
    ),
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  Frontend: "Ön Yüz",
  Backend: "Arka Yüz",
  Platform: "Platform",
};

function TechPill({ tech, style, className }: { tech: Tech; style?: React.CSSProperties; className?: string }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2.5 select-none",
        "rounded-full border border-gray-200/70 bg-white",
        "px-5 py-2.5",
        "text-gray-600 hover:text-gray-900 hover:border-gray-300",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]",
        className ?? "",
      ].join(" ")}
      style={style}
    >
      <span className="text-gray-500 group-hover:text-primary transition-colors">{tech.svg}</span>
      <span className="font-display font-semibold text-[15px] tracking-tight">{tech.name}</span>
    </span>
  );
}

function TechMarqueeRow({ items, reduced }: { items: Tech[]; reduced: boolean }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div ref={marqueeRef} className="tech-marquee flex items-center overflow-hidden">
        <div
          className="flex items-center gap-4 will-change-transform"
          style={{
            animation: reduced ? "none" : "tech-scroll 28s linear infinite",
            animationPlayState: "running",
            width: "max-content",
          }}
        >
          {[...items, ...items].map((tech, i) => (
            <TechPill key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1 } as const;
  const instant = { duration: 0.01 } as const;
  const groups = Object.entries(CATEGORY_LABELS);

  return (
    <section className="bg-white border-y border-gray-100 py-14 md:py-16 overflow-hidden" id="teknolojiler">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">Teknik Uzmanlık</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight">
            Kullandığımız <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Teknolojiler</span>
          </h2>
          <p className="font-sans text-gray-500 text-base font-light leading-relaxed">
            Modern, ölçeklenebilir ve güvenilir çözümler için seçtiğimiz teknoloji yığını.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {groups.map(([key, label]) => {
          const items = TECHS.filter((t) => t.group === key as Tech["group"]);
          return (
            <div key={key}>
              <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-3">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.18em]">{label}</span>
              </div>
              <TechMarqueeRow items={items} reduced={!!reduced} />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes tech-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-marquee:hover [style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
