import { ArrowRight, PhoneCall, Sparkles, Check } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { COMPANY, ROUTES } from "../lib/constants";

interface HeroProps {
  title1?: string;
  title2?: string;
  description?: string;
}

export default function Hero({
  title1 = "NKolay Medya ile",
  title2 = "Dijitalde Zirveye Ulaşın.",
  description = "Veriye dayalı stratejiler, yaratıcı üretim ve performans odaklı reklam yönetimi ile markanızı ölçülebilir sonuçlara taşıyoruz.",
}: HeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative pt-28 pb-16 md:pt-44 md:pb-28 bg-white overflow-hidden" id="hero-section">
      {/* Soft ambient accent — only on the right side, keeps the field clean */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[640px] h-[640px] bg-gradient-to-br from-primary/[0.04] via-primary/[0.02] to-transparent rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — redesigned hero content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2.5 bg-white border border-gray-300 token-pill pl-2 pr-5 py-2 shadow-resting"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                <Sparkles className="h-3 w-3" />
              </span>
              <span className="text-[13px] font-bold text-primary tracking-wide uppercase">
                Yeni Nesil Dijital Ajans
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-7 font-display font-bold text-gray-900 tracking-tight leading-[1.05] text-5xl md:text-6xl lg:text-[72px]"
            >
              {title1}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                {title2}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-7 h-1 w-16 origin-left bg-gradient-to-r from-primary/70 to-transparent rounded-full"
              aria-hidden="true"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-7 max-w-xl text-lg text-gray-500 font-normal leading-[1.7]"
            >
              {description}
            </motion.p>

            {/* Feature pills */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
               {["Veriye Dayalı Strateji", "Ölçülebilir Büyüme", "Kurumsal İletişim"].map((f) => (
                 <li
                   key={f}
                   className="inline-flex items-center gap-2 token-pill border border-gray-200 bg-white px-4 py-2 text-[13px] font-semibold text-gray-700 shadow-resting"
                 >
                   <Check className="h-3.5 w-3.5 text-primary" />
                   {f}
                 </li>
               ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => navigate(ROUTES.contact)}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-200 border-b-4 border-primary-dark shadow-raised active:border-b-0 active:translate-y-0.5"
              >
                <span>Hemen Başlayın</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <a
                href={COMPANY.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 font-medium text-[15px] px-8 py-3.5 rounded-full transition-all duration-200 shadow-resting hover:shadow-raised"
              >
              <PhoneCall className="h-5 w-5 text-primary" />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-5 text-[13px] text-gray-400 font-medium"
            >
              İlk strateji raporu 7 gün içinde • Özel hesap sorumlusu • Esnek iptal politikası
            </motion.p>
          </div>

          {/* Right Column — high-impact N mark with subtle geometric framing */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-10 lg:mt-0 select-none">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border border-gray-100"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute w-[270px] h-[270px] md:w-[360px] md:h-[360px] rounded-full border border-primary/[0.08]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute w-[190px] h-[190px] md:w-[240px] md:h-[240px] rounded-full border border-dashed border-gray-200/70"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
              whileInView={{ y: [0, -12, 0], transition: { repeat: Infinity, duration: 7, ease: "easeInOut" } }}
              viewport={{ once: false, amount: 0.6 }}
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]"
            >
              <picture>
                <source srcSet="/hero_n.512.webp" type="image/webp" />
                <img
                  src="/hero_n.opt.png"
                  alt="NKolay Medya"
                  width={512}
                  height={512}
                  decoding="async"
                  loading="eager"
                  draggable={false}
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(196,30,42,0.22)]"
                />
              </picture>
            </motion.div>

            <div className="absolute top-[18%] right-[12%] w-2 h-2 rounded-full bg-primary/70" aria-hidden="true" />
            <div className="absolute bottom-[22%] left-[10%] w-1.5 h-1.5 rounded-full bg-primary/40" aria-hidden="true" />
            <div className="absolute top-[60%] right-[8%] w-1 h-1 rounded-full bg-primary/30" aria-hidden="true" />
          </div>
        </div>

        {/* Stats — clean, corporate, minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {[
            { value: "4.8x", label: "Ortalama ROAS Oranı", highlight: false },
            { value: "+340%", label: "Erişim Artışı", highlight: true },
            { value: "2.4M", label: "Aylık Aktif Etkileşim", highlight: false },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-300 token-card p-7 text-center shadow-resting hover:shadow-raised transition-all"
            >
              <div
                className={`text-4xl md:text-5xl font-display font-bold tracking-tight ${
                  stat.highlight ? "text-primary" : "text-gray-900"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-[13px] text-gray-600 mt-2.5 font-semibold tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-200/70 to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
