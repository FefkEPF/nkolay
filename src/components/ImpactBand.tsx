import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { IMPACT_STATS } from "../data";

function parseValue(v: string): { num: number; decimals: number } {
  const decimals = v.includes(".") ? v.split(".")[1].length : 0;
  return { num: parseFloat(v), decimals };
}

function CountUp({
  value,
  suffix,
  reduced,
}: {
  value: string;
  suffix?: string;
  reduced: boolean;
}) {
  const { num, decimals } = parseValue(value);
  const [display, setDisplay] = useState(reduced ? num : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduced) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(parseFloat((num * eased).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num, decimals, reduced]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function ImpactBand() {
  const reduced = useReducedMotion();

  return (
    <section className="bg-primary text-white" id="etki">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display font-black text-4xl sm:text-5xl tracking-tight">
                <CountUp value={stat.value} suffix={stat.suffix} reduced={!!reduced} />
              </div>
              <div className="text-[13px] mt-2 font-medium text-white/80 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
