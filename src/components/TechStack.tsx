import { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "../lib/useReducedMotion";

type Tech = {
  name: string;
  group: "Frontend" | "Backend" | "Platform";
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  keywords?: string[];
};

const TECHS: Tech[] = [
  {
    name: "React",
    group: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22l-5-2.5v-7.5l5 2.5 5-2.5V9.5l-5-2.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Component tabanlı, hook destekli modern UI framework",
    benefits: ["Hızlı render performansı", "Büyük topluluk desteği", "Developer deneyimi"],
    keywords: ["JavaScript", "UI", "Component", "Hooks"],
  },
  {
    name: "TypeScript",
    group: "Frontend",
    icon: (
      <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-[#3178C6]">
        <span className="text-white text-[10px] font-bold">TS</span>
      </div>
    ),
    description: "Type safety ile JavaScript geliştirme",
    benefits: ["Hata önleme", "Kod dışarıya doğrulama", "IDE desteği"],
    keywords: ["Type Safety", "JavaScript", "Compiler", "IDE"],
  },
  {
    name: "Tailwind CSS",
    group: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#38BDF8" strokeWidth="2">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C13.9 7.5 12.9 6 12 6zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C8.9 13.5 7.9 12 7 12z" />
      </svg>
    ),
    description: "Utility-first CSS framework",
    benefits: ["Hızlı prototip geliştirme", "Ölçeklenebilir stiller", "Responsive tasarım"],
    keywords: ["CSS", "Utility", "Responsive", "Design System"],
  },
  {
    name: "Vite",
    group: "Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#646CFF" strokeWidth="2">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22l-5-2.5v-7.5l5 2.5 5-2.5V9.5l-5-2.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Hızlı geliştirme ve build aracı",
    benefits: ["Instant HMR", "Düşük bundle boyutu", "ESM desteği"],
    keywords: ["Build Tool", "Development Server", "ESM", "Hot Reload"],
  },
  {
    name: "Next.js",
    group: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#000" strokeWidth="2">
        <circle cx="12" cy="12" r="11" fill="none" />
        <path d="M8.5 8.5v8.5h1.6v-5.7l1.6 4.2h1.4l1.6-4.2v5.7h1.6V8.5h-2l-1.4 3.7-1.4-3.7h-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "React tabanlı fullstack framework",
    benefits: ["SSR/SSG desteği", "Otomatik optimize", "File-based routing"],
    keywords: ["React", "SSR", "SSG", "Routing"],
  },
  {
    name: "Node.js",
    group: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#539E43">
        <path d="M12 2 3 6.5v8L12 22l9-7.5v-8L12 2zm-1 5h2v6h-2v-2H9V9h2V7zm5 0h2v2h-2v4h-2V7z" />
      </svg>
    ),
    description: "Event-driven, non-blocking runtime",
    benefits: ["Yüksek I/O performansı", "Tek dil (JavaScript) ekosistemi", "Gerçek zamanlı uygulamalar"],
    keywords: ["JavaScript", "Runtime", "Event Loop", "Non-blocking"],
  },
  {
    name: "Python",
    group: "Backend",
    icon: (
      <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-[#387EB8]">
        <span className="text-white text-[10px] font-bold">Py</span>
      </div>
    ),
    description: "Verimli veri çekme ve makine öğrenmesi",
    benefits: ["Verimlilik", "Veri bilimi", "Makine öğrenmesi", "Veritabanı entegrasyonu"],
    keywords: ["Python", "Data Science", "AI", "ML"],
  },
  {
    name: "PostgreSQL",
    group: "Backend",
    icon: (
      <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-[#336791]">
        <span className="text-white text-[10px] font-bold">PG</span>
      </div>
    ),
    description: "Güçlü, açık kaynaklı ilişkisel veritabanı",
    benefits: ["ACID compliance", "JSON desteği", "Gelişmiş sorgu optimizasyonu"],
    keywords: ["Database", "SQL", "Relational", "ACID"],
  },
  {
    name: "MongoDB",
    group: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#4DB33D">
        <path d="M12 2c1 3 4 5 4 9 0 3-1 4-1 6 0 2-2 3-3 5-1-2-3-3-3-5 0-2-1-3-1-6 0-4 3-6 4-9z" />
      </svg>
    ),
    description: "Schema-less, ölçeklenebilir NoSQL veritabanı",
    benefits: ["Esnek veri modeli", "Hızlı geliştirme", "Sharding desteği"],
    keywords: ["NoSQL", "Database", "Document", "Schema-less"],
  },
  {
    name: "Redis",
    group: "Backend",
    icon: (
      <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-[#DC382D]">
        <span className="text-white text-[10px] font-bold">R</span>
      </div>
    ),
    description: "Hafızada veri önbelleği",
    benefits: ["Yüksek performans", "Cache yönetimi", "Session store"],
    keywords: ["Cache", "In-Memory", "Performance", "Session"],
  },
  {
    name: "Docker",
    group: "Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2496ED">
        <path d="M3 11h3v3H3v-3zm4 0h3v3H7v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8 4h3v3H7v-3zm4 0h3v3h-3v-3zm4-8h3v3h-3V7zm-4 0h3v3h-3V7zm-8 1h3v3H3V8zm0 7c0 2 2 4 6 4 1.5 0 2 1 3 1 2 0 3-2 5-2 3 0 6-2 6-5 0-1-.8-2-2-2-1 0-2 1-3 1-1 0-2-1-4-1-2 0-3 1-3 1-1 0-2-1-4-1-1 0-2 1-2 1v2z" />
      </svg>
    ),
    description: "Uygulama containerizasyonu",
    benefits: ["Ortam tutarlılığı", "Hızlı dağıtım", "Ölçeklenebilirlik"],
    keywords: ["Containerization", "DevOps", "Deployment", "Microservices"],
  },
  {
    name: "AWS",
    group: "Platform",
    icon: (
      <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-[#FF9900]">
        <span className="text-black text-[10px] font-bold">AWS</span>
      </div>
    ),
    description: "Bulut altyapısı ve hizmetleri",
    benefits: ["Yüksek erişilebilirlik", "Global altyapı", "Ölçeklenebilir kaynaklar"],
    keywords: ["Cloud", "Infrastructure", "Serverless", "Deploy"],
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  Frontend: "Ön Yüz",
  Backend: "Arka Yüz",
  Platform: "Platform",
};

function TechPill({ tech, isHovering }: { tech: Tech; isHovering: boolean }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative group"
      data-tech-name={tech.name}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        className="inline-flex items-center gap-2.5 select-none rounded-full border border-gray-200/70 bg-white px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] cursor-pointer"
        role="listitem"
        aria-label={`${tech.name} - ${tech.description}`}
      >
        <span className="text-gray-500 group-hover:text-primary transition-colors duration-300">{tech.icon}</span>
        <span className="font-semibold text-sm tracking-wide">{tech.name}</span>
      </span>
      {showTooltip && tech.description && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-5 py-4 rounded-2xl shadow-card bg-white border border-gray-100 text-gray-900 text-sm w-max max-w-xs z-50 opacity-100 visible transition-all duration-300 backdrop-blur-xl">
          <div className="font-semibold mb-2 text-gray-900">{tech.name}</div>
          <p className="text-gray-500 text-xs mb-3 leading-relaxed">{tech.description}</p>
          {tech.benefits && (
            <ul className="text-gray-500 text-xs space-y-1.5">
              {tech.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function TechMarqueeRow({ items, reduced }: { items: Tech[]; reduced: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="tech-marquee flex items-center overflow-hidden">
        <div
          className="flex items-center gap-4 gpu-accelerated"
          style={{
            animation: reduced ? "none" : "tech-scroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...items, ...items].map((tech, i) => (
            <TechPill
              key={`${tech.name}-${i}`}
              tech={tech}
              isHovering={hoveredIndex === i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const reduced = useReducedMotion();
  const groups = Object.entries(CATEGORY_LABELS);

  return (
    <section className="py-24 md:py-32 bg-white border-y border-gray-100 overflow-hidden" id="teknolojiler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">Teknik Uzmanlık</span>
          </div>
          <h2 id="tech-stack-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Kullandığımız <span className="text-gradient">Teknolojiler</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Modern, ölçeklenebilir ve güvenilir çözümler için seçtiğimiz teknoloji yığını.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {groups.map(([key, label]) => {
          const items = TECHS.filter((t) => t.group === key as Tech["group"]);
          return (
            <div key={key}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
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