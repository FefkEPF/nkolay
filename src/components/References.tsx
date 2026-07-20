import { useEffect, useRef } from "react";
import { MessageSquare, Star, Quote, Sparkles, X, ArrowRight, Phone, TrendingUp } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { COMPANY, ROUTES } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function References() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedReferenceId = searchParams.get("ref") || "";
  const spotlightRef = useRef<HTMLDivElement>(null);

  const selectedReference = TESTIMONIALS_DATA.find(
    (item) => item.id === selectedReferenceId
  );

  useEffect(() => {
    if (selectedReferenceId && spotlightRef.current) {
      spotlightRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedReferenceId]);

  const closeSpotlight = () => {
    setSearchParams({}, { replace: true });
  };

  const goContact = () => {
    navigate(ROUTES.contact);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0, scale: 1, height: "auto" } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white min-h-screen" id="references-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 mb-2 shadow-sm">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-[13px] font-medium text-gray-800 tracking-wide">
              Müşteri Hikayeleri
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight">
            Mutlu <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Müşterilerimiz</span>
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            İş ortaklarımızın dijital dünyada elde ettiği somut başarılara göz atın.
          </p>
        </div>

        {/* SPOTLIGHT SECTION */}
        <AnimatePresence>
          {selectedReference && (
            <motion.div
              initial={reduced ? noMotion : { opacity: 0, height: 0, scale: 0.96 }}
              animate={reduced ? noMotion : { opacity: 1, height: "auto", scale: 1 }}
              exit={reduced ? noMotion : { opacity: 0, height: 0, scale: 0.96 }}
              transition={reduced ? instant : spring}
              className="overflow-hidden"
            >
              <div
                ref={spotlightRef}
                className="mb-16 max-w-5xl mx-auto bg-gray-950 text-white rounded-3xl p-8 md:p-12 lg:p-16 relative shadow-[var(--shadow-elevated)] border border-white/5"
                id="testimonial-spotlight"
              >
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
                  <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
                </div>
                <Quote className="absolute right-12 bottom-12 w-48 h-48 text-neutral-900 opacity-20 pointer-events-none" />

                <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-8 relative z-10">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-gray-300 text-sm font-medium tracking-wide">
                      Öne Çıkan Başarı Hikayesi
                    </span>
                  </div>
                  <button
                    onClick={closeSpotlight}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
                    title="Kapat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-8 text-left relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-1" role="img" aria-label="5 yıldız">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-400">
                        {selectedReference.statGrew} Büyüme
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                    {selectedReference.company}
                  </h3>

                  <p className="font-sans text-xl sm:text-3xl text-gray-200 leading-relaxed font-light">
                    "{selectedReference.text}"
                  </p>

                  <div className="flex items-center space-x-5 pt-8 border-t border-white/10 mt-10">
                    <img
                      src={selectedReference.avatarUrl}
                      alt={selectedReference.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/10 shadow-md"
                    />
                    <div>
                      <h4 className="font-sans font-medium text-lg text-white leading-snug">
                        {selectedReference.name}
                      </h4>
                      <p className="font-sans text-sm text-gray-400 mt-1">
                        {selectedReference.role}, {selectedReference.company}
                      </p>
                      <p className="text-[13px] text-primary font-medium mt-1">
                        {selectedReference.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => {
            const isSelected = item.id === selectedReferenceId;
            return (
              <motion.div
                initial={reduced ? noMotion : { opacity: 0, y: 30 }}
                whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
                whileHover={reduced ? undefined : { y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={reduced ? instant : { ...spring, delay: index * 0.05 }}
                key={item.id}
                onClick={() => setSearchParams({ ref: item.id })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSearchParams({ ref: item.id });
                  }
                }}
                className={`bg-gray-50 border p-8 rounded-3xl flex flex-col justify-between relative cursor-pointer transition-all duration-300 group shadow-sm text-left overflow-hidden ${
                  isSelected
                    ? "border-primary ring-4 ring-primary/10 scale-[1.02] bg-white"
                    : "border-gray-200/60 hover:border-primary/20 hover:bg-white hover:shadow-md"
                }`}
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-200 pointer-events-none group-hover:text-primary-light transition-colors z-0" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1" role="img" aria-label="5 yıldız">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-[12px] font-medium text-emerald-600 bg-emerald-50 rounded-full px-3 py-1 border border-emerald-100">
                      {item.statGrew}
                    </span>
                  </div>

                  <p className="font-sans text-[15px] text-gray-700 leading-relaxed font-light">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200/60 mt-8 relative z-10">
                  <img
                    src={item.avatarUrl}
                    alt={`${item.name} - ${item.company}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={150}
                    height={150}
                    className="w-12 h-12 rounded-full object-cover shadow-sm border border-gray-100"
                  />
                  <div>
                    <h4 className="font-sans font-medium text-[15px] text-gray-900 leading-snug">{item.name}</h4>
                    <p className="font-sans text-[13px] text-gray-500 font-light mt-0.5">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action section at the bottom */}
        <motion.div
          initial={reduced ? noMotion : { opacity: 0, y: 30 }}
          whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduced ? instant : spring}
          className="mt-24 bg-gray-50 rounded-3xl border border-gray-200/60 p-10 md:p-16 text-center max-w-4xl mx-auto space-y-8 shadow-[var(--shadow-subtle)]"
        >
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-gray-900">
              Sıradaki Başarı Hikayesi Siz Olun
            </h3>
            <p className="font-sans text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Markanıza özel stratejilerle dijital dünyada fark yaratmak için hemen bizimle iletişime geçin.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={goContact}
              className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white font-medium text-[15px] px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Teklif İsteyin</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 font-medium text-[15px] px-8 py-4 rounded-full transition-all shadow-sm"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
