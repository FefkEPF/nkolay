import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles, PhoneCall } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { ServiceIcon } from "../lib/serviceIcons";
import { useSeo } from "../lib/seo";
import { serviceSchema } from "../lib/schema";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { COMPANY, ROUTES } from "../lib/constants";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_DATA.find((s) => s.id === id);
  const related = SERVICES_DATA.filter((s) => s.id !== id).slice(0, 3);

  const goServices = () => {
    navigate(ROUTES.services);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goContact = () => {
    navigate(ROUTES.contact);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goService = (targetId: string) => {
    navigate(ROUTES.service(targetId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useSeo({
    title: service ? `${service.title} | NKolay Medya` : "Hizmet Bulunamadı",
    description: service?.description,
    path: id ? ROUTES.service(id) : ROUTES.services,
  });

  useEffect(() => {
    // Restores the default title on unmount.
    return () => {
      document.title = "NKolay Medya";
    };
  }, []);

  if (!service) {
    return <Navigate to={ROUTES.services} replace />;
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* HERO HEADER */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-gray-50 via-white to-primary/[0.03] overflow-hidden">
        <div className="absolute top-[-15%] left-[-8%] w-[450px] h-[450px] bg-primary/[0.06] rounded-full blur-[100px]"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={goServices}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-primary transition-colors mb-8"
          >
            <span className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">←</span>
            Hizmetlerimiz
          </motion.button>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-3xl bg-white border border-gray-200 shadow-[var(--shadow-card)] flex items-center justify-center shrink-0"
            >
              <ServiceIcon name={service.iconName} className="w-10 h-10 text-primary" />
            </motion.div>

            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/10 text-primary text-[12px] font-semibold tracking-wide mb-3">
                {service.badge}
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.05]">
                {service.title}
              </h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 font-light max-w-3xl leading-relaxed mt-8"
          >
            {service.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button
              onClick={goContact}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium text-[15px] px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Teklif Al</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 font-medium text-[15px] px-8 py-4 rounded-full transition-all duration-300 shadow-[var(--shadow-subtle)]"
            >
              <PhoneCall className="w-5 h-5 text-primary" />
              <span>{COMPANY.phoneDisplay}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* DETAIL BODY */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-semibold text-2xl text-gray-900 tracking-tight mb-6">Hizmet Kapsamı</h2>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-primary/10">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-[15px] text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            {service.benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-display font-semibold text-2xl text-gray-900 tracking-tight mb-6">Kazançlarınız</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-[15px] text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Detailed Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-white border border-gray-200/60 rounded-3xl p-8 md:p-10 shadow-[var(--shadow-subtle)]"
          >
            <h2 className="font-display font-semibold text-2xl text-gray-900 tracking-tight mb-4">{service.metric}</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {service.detailedContent || service.description}
            </p>
          </motion.div>

          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-center shadow-[var(--shadow-card)]"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
              {service.title} ile tanışmaya hazır mısınız?
            </h3>
            <p className="text-white/80 mt-3 font-light max-w-xl mx-auto">
              Uzman ekibimizle ücretsiz ön görüşme planlayın, markanıza özel stratejiyi birlikte kuralım.
            </p>
            <button
              onClick={goContact}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg mt-6"
            >
              <span>Hemen Teklif Alın</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary/[0.03] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 tracking-tight mb-8">Diğer Hizmetlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item) => (
              <button
                key={item.id}
                onClick={() => goService(item.id)}
                className="text-left bg-white border border-gray-200/60 rounded-3xl p-6 hover:shadow-[var(--shadow-card)] hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-primary-light group-hover:border-primary/10 transition-colors mb-4">
                  <ServiceIcon name={item.iconName} className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
