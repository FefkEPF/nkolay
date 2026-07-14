import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ServiceIcon } from "../lib/serviceIcons";
import { ROUTES } from "../lib/constants";

export default function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (id: string) => {
    navigate(ROUTES.service(id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-surface relative" id="hizmetler">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
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

        {/* Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative bg-white border border-gray-200/60 rounded-3xl p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)]"
              onClick={() => handleServiceClick(service.id)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") handleServiceClick(service.id); }}
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-105 group-hover:bg-primary-light group-hover:border-primary/10 transition-all duration-500 ease-out">
                  <ServiceIcon name={service.iconName} className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="font-display font-semibold text-lg text-gray-900 tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[14px] text-gray-500 font-light leading-relaxed line-clamp-3">
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
