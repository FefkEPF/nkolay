import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (TESTIMONIALS_DATA.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const item = TESTIMONIALS_DATA[index];

  if (!item) return null;

  return (
    <section className="py-16 md:py-20 bg-surface" id="yorumlar">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight mb-10">
          Müşterilerimiz Ne Diyor?
        </h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white border border-gray-200/60 rounded-3xl p-8 md:p-10 shadow-[var(--shadow-subtle)] w-full"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4 mx-auto" />
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-sans text-[15px] md:text-base text-gray-700 font-light leading-relaxed">
                "{item.text}"
              </blockquote>
              <figcaption className="mt-5 text-[14px] text-gray-900 font-medium">
                {item.name} <span className="text-gray-400 font-normal">— {item.company}, {item.city}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS_DATA.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
