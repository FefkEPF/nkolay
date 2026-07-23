import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, PhoneCall, MessageCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { COMPANY, ROUTES } from "../lib/constants";

export default function StickyCta() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8 && !dismissed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-0 inset-x-0 z-[60] md:hidden px-3 pb-3"
        >
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-float rounded-2xl p-2 pl-4">
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-gray-900 leading-tight truncate">
                Ücretsiz strateji raporu
              </p>
              <p className="text-[11px] text-gray-500 leading-tight truncate">
                7 gün içinde hazır
              </p>
            </div>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary"
              aria-label="Telefon"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                navigate(ROUTES.contact);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-1.5 bg-primary text-white font-semibold text-[13px] px-4 h-10 rounded-xl"
            >
              <span>Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="flex items-center justify-center w-8 h-10 text-gray-400"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
