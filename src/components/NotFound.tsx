import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import GeometricBackground from "./GeometricBackground";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface">
      {/* Geometric background — no blur */}
      <div className="absolute inset-0 z-0">
        <GeometricBackground color1="#FFF1F2" color2="#FCA5A5" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-display font-bold text-[120px] md:text-[180px] lg:text-[220px] leading-none tracking-tighter select-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-dark">4</span>
              <span className="inline-block animate-bounce text-gray-200">0</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-dark">4</span>
            </h1>
            <p className="font-serif italic text-primary text-2xl md:text-3xl lg:text-4xl">
              Aradığınız sayfa bulunamadı.
            </p>
            <p className="text-gray-500 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
              Girdiğiniz adres yanlış olabilir, sayfa taşınmış veya kaldırılmış olabilir.
              Endişe etmeyin — yanlızca birkaç tık uzağınızdayız.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto cursor-pointer"
            >
              <Home className="w-5 h-5" />
              <span>Ana Sayfaya Dön</span>
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 hover:border-gray-300 font-medium text-[15px] px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md w-full sm:w-auto cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri Dön</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
