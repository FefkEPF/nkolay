import { Check } from "lucide-react";
import { WORK_PROCESS } from "../data";
import { motion } from "motion/react";
import { useReducedMotion } from "../lib/useReducedMotion";

export default function ProcessSection() {
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring", stiffness: 80, damping: 18, mass: 0.8 } as const;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="surec">
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-light rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-200/60 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">
              Nasıl Çalışıyoruz
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight">
            Dijital Büyümenin{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              4 Adımlı Yolu
            </span>
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Şeffaf, veriye dayalı ve ölçülebilir bir süreçle markanızı sonuç odaklı büyütüyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_PROCESS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={reduced ? noMotion : { opacity: 0, y: 28 }}
              whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
              whileHover={reduced ? undefined : { y: -4, transition: { type: "spring", stiffness: 140, damping: 14 } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={reduced ? instant : { ...spring, delay: index * 0.06 }}
              className="relative bg-gray-50/70 border border-gray-200/60 rounded-3xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-black text-4xl text-primary/15 tracking-tighter">
                  {item.step}
                </span>
                <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-[14px] text-gray-500 font-light leading-relaxed mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
