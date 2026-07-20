import { ArrowRight } from "lucide-react";
import { SERVICES_DATA, SERVICE_CATEGORIES } from "../data";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ServiceIcon } from "../lib/serviceIcons";
import { ROUTES } from "../lib/constants";
import { cn } from "../lib/utils";
import { useReducedMotion } from "../lib/useReducedMotion";
import type { ServiceCategory } from "../types";

export default function Services() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const noMotion = { opacity: 1, y: 0 } as const;
  const instant = { duration: 0.01 } as const;
  const spring = { type: "spring" as const, stiffness: 80, damping: 18, mass: 0.8 };

  const handleServiceClick = (id: string) => {
    navigate(ROUTES.service(id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-surface relative" id="hizmetler">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2.5 bg-gray-50/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-gray-600 tracking-wide">
              Hizmetlerimiz
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight">
            İşletmeniz için
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark"> 360° Dijital Çözümler</span>
          </h2>
          <p className="font-sans text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            İhtiyacınız olan tüm dijital hizmetler, tek bir çatı altında, en üst düzey kalite standartlarıyla sunuluyor.
          </p>
        </div>

        {/* Categorized Groups */}
        <div className="space-y-16 md:space-y-20">
          {SERVICE_CATEGORIES.map((category) => (
            <CategoryGroup
              key={category.id}
              category={category.id}
              label={category.label}
              description={category.description}
              reduced={reduced}
              noMotion={noMotion}
              instant={instant}
              spring={spring}
              onServiceClick={handleServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryGroup({
  category,
  label,
  description,
  reduced,
  noMotion,
  instant,
  spring,
  onServiceClick,
}: {
  category: ServiceCategory;
  label: string;
  description: string;
  reduced: boolean;
  noMotion: { opacity: number; y: number };
  instant: { duration: number };
  spring: { type: "spring"; stiffness: number; damping: number; mass: number };
  onServiceClick: (id: string) => void;
}) {
  const services = SERVICES_DATA.filter((s) => s.category === category);
  const isPrimary = category === "performance";

  if (services.length === 0) return null;

  return (
    <div>
      {/* Category Header */}
      <div className="flex items-end justify-between gap-6 mb-8 border-b border-gray-200/70 pb-5">
        <div>
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 tracking-tight">
            {label}
          </h3>
          <p className="font-sans text-gray-500 text-[15px] font-light mt-1.5 max-w-xl">
            {description}
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-medium text-gray-400 whitespace-nowrap">
          {services.length} Hizmet
        </span>
      </div>

      {/* Cards */}
      <div
        className={cn(
          "grid grid-cols-1 gap-5",
          isPrimary ? "md:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}
      >
        {services.map((service, index) => (
          <motion.button
            key={service.id}
            initial={reduced ? noMotion : { opacity: 0, y: 24 }}
            whileInView={reduced ? noMotion : { opacity: 1, y: 0 }}
            whileHover={reduced ? undefined : { y: -4, transition: { type: "spring", stiffness: 120, damping: 14 } }}
            viewport={{ once: true, margin: "-40px" }}
            transition={reduced ? instant : { ...spring, delay: index * 0.04 }}
            onClick={() => onServiceClick(service.id)}
            className={cn(
              "group relative bg-white border border-gray-200/60 rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)] text-left w-full",
              isPrimary && "lg:p-8"
            )}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-105 group-hover:bg-primary-light group-hover:border-primary/10 transition-all duration-500 ease-out">
                <ServiceIcon name={service.iconName} className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-[17px] text-gray-900 tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="font-sans text-[14px] text-gray-500 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="pt-6">
              <div className="inline-flex items-center text-[13px] font-medium text-gray-500 group-hover:text-primary transition-colors duration-300">
                <span>Detaylı İncele</span>
                <div className="w-5 h-5 ml-2 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-gray-100 group-hover:border-primary">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
