import { ArrowRight, Quote, Star, TrendingUp } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function ResultSpotlight() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  const featured = TESTIMONIALS_DATA[0];

  if (!featured) return null;

  const goReferences = () => {
    navigate(ROUTES.references);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-24 bg-surface" id="basari">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={reduced ? noMotion : { opacity: 0, y: 28 }}
          whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reduced ? instant : spring}
          className="relative overflow-hidden rounded-[2rem] bg-gray-950 text-white p-8 md:p-12 lg:p-16 shadow-[var(--shadow-elevated)]"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/15 rounded-full blur-[80px]" />
          </div>
          <Quote className="absolute right-10 bottom-10 w-40 h-40 text-neutral-800 opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-5">
                <SparklesInline />
                <span className="text-[13px] font-semibold uppercase tracking-wide text-primary">
                  Öne Çıkan Başarı Hikayesi
                </span>
              </div>
              <div className="flex items-center space-x-1 mb-5" role="img" aria-label="5 yıldız">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-sans text-xl md:text-3xl leading-relaxed font-light text-gray-100">
                "{featured.text}"
              </p>
              <div className="flex items-center space-x-4 mt-7">
                <img
                  src={featured.avatarUrl}
                  alt={featured.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h4 className="font-medium text-white">{featured.name}</h4>
                  <p className="text-[13px] text-gray-400">
                    {featured.role}, {featured.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">
                  {featured.statGrew}
                </span>
              </div>
              <button
                onClick={goReferences}
                className="group inline-flex items-center justify-center gap-2 font-medium text-[14px] px-6 py-3 rounded-full bg-white text-gray-900 transition-all hover:bg-gray-100"
              >
                <span>Tüm Hikayeler</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SparklesInline() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
      </svg>
    </span>
  );
}
