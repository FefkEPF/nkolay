import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";

const cases = [
  {
    title: "Soydan Klinik",
    category: "Sağlık / Reels & Reklam",
    result: "+%165 Randevu Talebi",
    emoji: "🦷",
    gradient: "from-rose-50 to-orange-50",
  },
  {
    title: "Alaçatı Lavender Otel",
    category: "Turizm / Video Prodüksiyonu",
    result: "%98 Sürekli Doluluk",
    emoji: "🏨",
    gradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Çelik Gurme Restoran",
    category: "Gastronomi / Sosyal Medya",
    result: "+%190 Müşteri Artışı",
    emoji: "🍽️",
    gradient: "from-amber-50 to-yellow-50",
  },
];

export default function FeaturedWork() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  const goReferences = () => {
    navigate(ROUTES.references);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="calismalar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-gray-50/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[13px] font-medium text-gray-600 tracking-wide">Öne Çıkan Çalışmalar</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
              Son <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Başarılar</span>
            </h2>
          </div>
          <button
            onClick={goReferences}
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-medium text-primary hover:text-primary-dark transition-colors shrink-0"
          >
            Tümünü Gör <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduced ? noMotion : { opacity: 0, y: 24 }}
              whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
              whileHover={reduced ? undefined : { y: -6, transition: { type: "spring", stiffness: 120, damping: 14 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={reduced ? instant : { ...spring, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-200/60 bg-white cursor-pointer transition-all duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className={`h-44 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-7">
                <span className="text-[12px] font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full">{item.category}</span>
                <h3 className="font-display font-semibold text-[18px] text-gray-900 tracking-tight leading-snug mt-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {item.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
