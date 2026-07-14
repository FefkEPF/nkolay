import { motion } from "motion/react";
import { LEGAL_DOCS } from "../data";
import { useSeo } from "../lib/seo";
import { useNavigate } from "react-router-dom";
import { COMPANY, ROUTES } from "../lib/constants";

export default function LegalPage({ page }: { page: "kvkk" | "terms" | "privacy" }) {
  const navigate = useNavigate();
  const doc = LEGAL_DOCS[page];

  useSeo(doc?.title ?? "Yasal Bilgilendirme");

  if (!doc) {
    return (
      <div className="bg-surface min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-gray-900 mb-4">Sayfa bulunamadı</h1>
          <button
            onClick={() => navigate(ROUTES.home)}
            className="text-primary font-medium hover:underline"
          >
            Ana sayfaya dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-24">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate(ROUTES.home)}
          className="inline-flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-primary transition-colors mb-10"
        >
          <span className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">←</span>
          Ana Sayfa
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light border border-primary/10 text-primary text-[12px] font-semibold tracking-wide uppercase">
            Yasal Bilgilendirme
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 tracking-tight mt-5 leading-tight">
            {doc.title}
          </h1>
          <p className="text-[13px] text-gray-400 mt-3 font-medium">
            Son güncelleme: {doc.updatedAt}
          </p>

          <p className="text-lg text-gray-600 font-light leading-relaxed mt-8">
            {doc.intro}
          </p>

          <div className="mt-12 space-y-10">
            {doc.sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <h2 className="font-display font-semibold text-xl text-gray-900 tracking-tight mb-3">
                  {section.heading}
                </h2>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                  {section.body}
                </p>
              </motion.section>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-3xl bg-white border border-gray-200/60 shadow-[var(--shadow-subtle)]">
            <p className="text-[14px] text-gray-500 font-light leading-relaxed">
              Bu belgeyle ilgili sorularınız için{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-primary font-medium hover:underline">
                {COMPANY.email}
              </a>{" "}
              adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
