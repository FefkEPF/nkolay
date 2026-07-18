import { WHY_US } from "../data";
import { ServiceIcon } from "../lib/serviceIcons";
import { motion } from "motion/react";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function WhyUs() {
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  return (
    <section className="py-20 md:py-28 bg-white" id="neden-biz">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-5">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">
              Neden NKolay Medya
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            İşinizi <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">büyüten</span> fark
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduced ? noMotion : { opacity: 0, y: 24 }}
              whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
              whileHover={reduced ? undefined : { y: -4, transition: { type: "spring", stiffness: 140, damping: 14 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={reduced ? instant : { ...spring, delay: i * 0.06 }}
              className="bg-gray-50/70 border border-gray-200/60 rounded-3xl p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-light border border-primary/10 flex items-center justify-center mb-5">
                <ServiceIcon name={item.iconName} className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-[17px] text-gray-900 tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] text-gray-500 font-light leading-relaxed mt-2.5">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
