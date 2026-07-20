import { motion } from "motion/react";
import { useReducedMotion } from "../lib/useReducedMotion";

type Tech = {
  name: string;
  group: "Frontend" | "Backend" | "Platform";
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  color: string;
};

const TECHS: Tech[] = [
  {
    name: "React",
    group: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22l-5-2.5v-7.5l5 2.5 5-2.5V9.5l-5-2.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Component tabanlı, hook destekli modern UI framework",
    benefits: ["Hızlı render performansı", "Büyük topluluk desteği", "Developer deneyimi"],
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    group: "Frontend",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#3178C6]">
        <span className="text-white text-xs font-bold">TS</span>
      </div>
    ),
    description: "Type safety ile JavaScript geliştirme",
    benefits: ["Hata önleme", "Kod dışarıya doğrulama", "IDE desteği"],
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    group: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#38BDF8" strokeWidth="2">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C13.9 7.5 12.9 6 12 6zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.3-1.5.8.2 1.4.8 1.9 1.6.9 1.4 1.9 2.9 3.9 2.9 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.3 1.5-.8-.2-1.4-.8-1.9-1.6C8.9 13.5 7.9 12 7 12z" />
      </svg>
    ),
    description: "Utility-first CSS framework",
    benefits: ["Hızlı prototip geliştirme", "Ölçeklenebilir stiller", "Responsive tasarım"],
    color: "#38BDF8",
  },
  {
    name: "Vite",
    group: "Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#646CFF" strokeWidth="2">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22l-5-2.5v-7.5l5 2.5 5-2.5V9.5l-5-2.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "Hızlı geliştirme ve build aracı",
    benefits: ["Instant HMR", "Düşük bundle boyutu", "ESM desteği"],
    color: "#646CFF",
  },
  {
    name: "Next.js",
    group: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#000" strokeWidth="2">
        <circle cx="12" cy="12" r="11" fill="none" />
        <path d="M8.5 8.5v8.5h1.6v-5.7l1.6 4.2h1.4l1.6-4.2v5.7h1.6V8.5h-2l-1.4 3.7-1.4-3.7h-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "React tabanlı fullstack framework",
    benefits: ["SSR/SSG desteği", "Otomatik optimize", "File-based routing"],
    color: "#000000",
  },
  {
    name: "Node.js",
    group: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#539E43">
        <path d="M12 2 3 6.5v8L12 22l9-7.5v-8L12 2zm-1 5h2v6h-2v-2H9V9h2V7zm5 0h2v2h-2v4h-2V7z" />
      </svg>
    ),
    description: "Event-driven, non-blocking runtime",
    benefits: ["Yüksek I/O performansı", "Tek dil (JavaScript) ekosistemi", "Gerçek zamanlı uygulamalar"],
    color: "#539E43",
  },
  {
    name: "Python",
    group: "Backend",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#387EB8]">
        <span className="text-white text-xs font-bold">Py</span>
      </div>
    ),
    description: "Verimli veri çekme ve makine öğrenmesi",
    benefits: ["Verimlilik", "Veri bilimi", "Makine öğrenmesi", "Veritabanı entegrasyonu"],
    color: "#387EB8",
  },
  {
    name: "PostgreSQL",
    group: "Backend",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#336791]">
        <span className="text-white text-xs font-bold">PG</span>
      </div>
    ),
    description: "Güçlü, açık kaynaklı ilişkisel veritabanı",
    benefits: ["ACID compliance", "JSON desteği", "Gelişmiş sorgu optimizasyonu"],
    color: "#336791",
  },
  {
    name: "MongoDB",
    group: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#4DB33D">
        <path d="M12 2c1 3 4 5 4 9 0 3-1 4-1 6 0 2-2 3-3 5-1-2-3-3-3-5 0-2-1-3-1-6 0-4 3-6 4-9z" />
      </svg>
    ),
    description: "Schema-less, ölçeklenebilir NoSQL veritabanı",
    benefits: ["Esnek veri modeli", "Hızlı geliştirme", "Sharding desteği"],
    color: "#4DB33D",
  },
  {
    name: "Redis",
    group: "Backend",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#DC382D]">
        <span className="text-white text-xs font-bold">R</span>
      </div>
    ),
    description: "Hafızada veri önbelleği",
    benefits: ["Yüksek performans", "Cache yönetimi", "Session store"],
    color: "#DC382D",
  },
  {
    name: "Docker",
    group: "Platform",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#2496ED">
        <path d="M3 11h3v3H3v-3zm4 0h3v3H7v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8 4h3v3H7v-3zm4 0h3v3h-3v-3zm4-8h3v3h-3V7zm-4 0h3v3h-3V7zm-8 1h3v3H3V8zm0 7c0 2 2 4 6 4 1.5 0 2 1 3 1 2 0 3-2 5-2 3 0 6-2 6-5 0-1-.8-2-2-2-1 0-2 1-3 1-1 0-2-1-4-1-2 0-3 1-3 1-1 0-2-1-4-1-1 0-2 1-2 1v2z" />
      </svg>
    ),
    description: "Uygulama containerizasyonu",
    benefits: ["Ortam tutarlılığı", "Hızlı dağıtım", "Ölçeklenebilirlik"],
    color: "#2496ED",
  },
  {
    name: "AWS",
    group: "Platform",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#FF9900]">
        <span className="text-black text-xs font-bold">AWS</span>
      </div>
    ),
    description: "Bulut altyapısı ve hizmetleri",
    benefits: ["Yüksek erişilebilirlik", "Global altyapı", "Ölçeklenebilir kaynaklar"],
    color: "#FF9900",
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  Frontend: "Ön Yüz",
  Backend: "Arka Yüz",
  Platform: "Platform",
};

function TechCard({ tech, index, reduced }: { tech: Tech; index: number; reduced: boolean }) {
  return (
    <motion.div
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduced ? { duration: 0 } : { duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${tech.color}08 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${tech.color}15`,
              color: tech.color,
            }}
          >
            {tech.icon}
          </div>
          <div
            className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ backgroundColor: tech.color }}
          />
        </div>

        <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {tech.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {tech.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.benefits.slice(0, 3).map((benefit, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 group-hover:bg-gray-100 transition-colors"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const reduced = useReducedMotion();
  const groups = Object.entries(CATEGORY_LABELS);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden" id="teknolojiler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">Teknik Uzmanlık</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Kullandığımız <span className="text-gradient">Teknolojiler</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Modern, ölçeklenebilir ve güvenilir çözümler için seçtiğimiz teknoloji yığını.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHS.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}