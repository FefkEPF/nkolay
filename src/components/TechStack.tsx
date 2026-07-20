import { motion, useReducedMotion } from "motion/react";

type Tech = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const TECHS: Tech[] = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22l-5-2.5v-7.5l5 2.5 5-2.5V9.5l-5-2.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#3178C6]">
        <span className="text-white text-xs font-bold">TS</span>
      </div>
    ),
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#38BDF8" strokeWidth="2">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C13.9 7.5 12.9 6 12 6zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C8.9 13.5 7.9 12 7 12z" />
      </svg>
    ),
    color: "#38BDF8",
  },
  {
    name: "Vite",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#646CFF" strokeWidth="2">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22l-5-2.5v-7.5l5 2.5 5-2.5V9.5l-5-2.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#646CFF",
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#000" strokeWidth="2">
        <circle cx="12" cy="12" r="11" fill="none" />
        <path d="M8.5 8.5v8.5h1.6v-5.7l1.6 4.2h1.4l1.6-4.2v5.7h1.6V8.5h-2l-1.4 3.7-1.4-3.7h-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#539E43">
        <path d="M12 2 3 6.5v8L12 22l9-7.5v-8L12 2zm-1 5h2v6h-2v-2H9V9h2V7zm5 0h2v2h-2v4h-2V7z" />
      </svg>
    ),
    color: "#539E43",
  },
  {
    name: "Python",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#387EB8]">
        <span className="text-white text-xs font-bold">Py</span>
      </div>
    ),
    color: "#387EB8",
  },
  {
    name: "PostgreSQL",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#336791]">
        <span className="text-white text-xs font-bold">PG</span>
      </div>
    ),
    color: "#336791",
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4DB33D">
        <path d="M12 2c1 3 4 5 4 9 0 3-1 4-1 6 0 2-2 3-3 5-1-2-3-3-3-5 0-2-1-3-1-6 0-4 3-6 4-9z" />
      </svg>
    ),
    color: "#4DB33D",
  },
  {
    name: "Redis",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#DC382D]">
        <span className="text-white text-xs font-bold">R</span>
      </div>
    ),
    color: "#DC382D",
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#2496ED">
        <path d="M3 11h3v3H3v-3zm4 0h3v3H7v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8 4h3v3H7v-3zm4 0h3v3h-3v-3zm4-8h3v3h-3V7zm-4 0h3v3h-3V7zm-8 1h3v3H3V8zm0 7c0 2 2 4 6 4 1.5 0 2 1 3 1 2 0 3-2 5-2 3 0 6-2 6-5 0-1-.8-2-2-2-1 0-2 1-3 1-1 0-2-1-4-1-2 0-3 1-3 1-1 0-2-1-4-1-1 0-2 1-2 1v2z" />
      </svg>
    ),
    color: "#2496ED",
  },
  {
    name: "AWS",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#FF9900]">
        <span className="text-black text-xs font-bold">AWS</span>
      </div>
    ),
    color: "#FF9900",
  },
];

function TechMarquee() {
  const reduced = useReducedMotion();
  const items = [...TECHS, ...TECHS];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center"
        style={{
          animation: reduced ? "none" : "tech-scroll 20s linear infinite",
          width: "max-content",
          gap: 0,
        }}
      >
        {items.map((tech, i) => (
          <TechHoverPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

function TechHoverPill({ tech }: { tech: Tech }) {
  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.25 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.div
        className="p-3 rounded-2xl border border-gray-100 bg-white shadow-sm transition-colors"
        style={{ color: tech.color }}
        whileHover={{
          backgroundColor: `${tech.color}15`,
          borderColor: `${tech.color}40`,
          boxShadow: `0 8px 30px ${tech.color}20`,
        }}
        transition={{ duration: 0.2 }}
      >
        {tech.icon}
      </motion.div>
      <span className="sr-only">{tech.name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="teknolojiler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">Teknik Uzmanlık</span>
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

      <style>{`
        @keyframes tech-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}