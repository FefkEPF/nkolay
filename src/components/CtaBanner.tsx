import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { COMPANY, ROUTES } from "../lib/constants";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function CtaBanner({
  variant = "band",
}: {
  variant?: "band" | "split";
}) {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  const goContact = () => {
    navigate(ROUTES.contact);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-6 lg:px-8 py-16 md:py-20 bg-surface" id="teklif">
      <motion.div
        initial={reduced ? noMotion : { opacity: 0, y: 28 }}
        whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={reduced ? instant : spring}
        className="max-w-[1400px] mx-auto relative overflow-hidden rounded-[2rem] px-8 md:px-14 py-12 md:py-16 text-white"
        style={{ background: "linear-gradient(135deg, #9B1720 0%, #C41E2A 60%, #E11D2F 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(900px 400px at 110% -20%, rgba(255,255,255,0.18), transparent 60%)" }} />
        <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-white/10 blur-[80px]" />

        <div className={variant === "split" ? "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" : "relative z-10 max-w-3xl"}>
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[12px] font-semibold uppercase tracking-wide">Ücretsiz Strateji Raporu</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              Markanız için ilk adımı bugün atın
            </h2>
            <p className="font-sans text-white/85 text-lg font-light leading-relaxed mt-4 max-w-xl">
              Size özel, veriye dayalı büyüme planınızı 7 gün içinde hazırlıyoruz. Taahhüt yok, sadece net bir yol haritası.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 lg:justify-end">
            <button
              onClick={goContact}
              className="group inline-flex items-center justify-center gap-2.5 font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-200 active:scale-[0.98] bg-white text-primary shadow-lg"
            >
              <span>Hemen Teklif Al</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 font-medium text-[15px] px-8 py-4 rounded-full transition-all duration-200 bg-white/10 border border-white/30 hover:bg-white/20 text-white"
            >
              <PhoneCall className="h-5 w-5" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
