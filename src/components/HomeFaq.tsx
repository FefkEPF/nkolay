import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { HOME_FAQ } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, height: "auto" } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  return (
    <section className="py-24 md:py-32 bg-white relative" id="sss">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-4 py-1.5">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">
              Sıkça Sorulan Sorular
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
            Merak Edilenler
          </h2>
          <p className="font-sans text-gray-500 text-lg font-light leading-relaxed">
            Dijital ajans hizmetlerimiz hakkında en çok sorulan soruları yanıtladık.
          </p>
        </div>

        <div className="space-y-3">
          {HOME_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-primary/30 bg-primary-light/40" : "border-gray-200/60 bg-gray-50/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-display font-semibold text-[16px] md:text-[17px] text-gray-900 tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduced ? noMotion : { opacity: 0, height: 0 }}
                      animate={reduced ? noMotion : { opacity: 1, height: "auto" }}
                      exit={reduced ? noMotion : { opacity: 0, height: 0 }}
                      transition={reduced ? instant : spring}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[15px] text-gray-600 font-light leading-relaxed px-6 pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
