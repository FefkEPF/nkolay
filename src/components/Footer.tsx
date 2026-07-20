import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, ROUTES } from "../lib/constants";

export default function Footer() {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-surface border-t border-white/5 pt-16 pb-8 text-gray-400 relative" id="footer-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5 text-left">

          {/* Brand Info (Col span 1) */}
          <div className="space-y-6">
            <button onClick={() => go(ROUTES.home)} className="cursor-pointer focus:outline-none">
              <div className="inline-block bg-white rounded-xl px-4 py-3">
                <Logo lightBackground={true} />
              </div>
            </button>
            <p className="text-[13px] leading-relaxed text-gray-500 font-light">
              Hedef kitlenize odaklı, veriye dayalı stratejilerle büyüten yeni nesil 360° dijital dönüşüm ajansı.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-[13px] font-semibold text-white mb-4 uppercase tracking-wider">Keşfedin</h4>
            <ul className="space-y-3 text-[13px]">
              <li>
                <button onClick={() => go(ROUTES.home)} className="hover:text-primary transition-colors cursor-pointer">Ana Sayfa</button>
              </li>
              <li>
                <button onClick={() => go(ROUTES.services)} className="hover:text-primary transition-colors cursor-pointer">Hizmetlerimiz</button>
              </li>
              <li>
                <button onClick={() => go(ROUTES.references)} className="hover:text-primary transition-colors cursor-pointer">Referanslar</button>
              </li>
              <li>
                <button onClick={() => go(ROUTES.blog)} className="hover:text-primary transition-colors cursor-pointer">Blog</button>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-display text-[13px] font-semibold text-white mb-4 uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-3 text-[13px]">
              <li>
                <button onClick={() => go(ROUTES.contact)} className="hover:text-primary transition-colors cursor-pointer">Bize Ulaşın</button>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">{COMPANY.email}</a>
              </li>
              <li>
                <a href={COMPANY.phoneHref} className="hover:text-primary transition-colors">{COMPANY.phoneDisplay}</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-[13px] font-semibold text-white mb-4 uppercase tracking-wider">Adres</h4>
            <div className="space-y-3 text-[13px] leading-relaxed font-light text-gray-400">
              <p>{COMPANY.address}</p>
              <div className="pt-2">
                <a
                  href={COMPANY.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-primary transition-colors"
                >
                  <span>Haritada Gör</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer (Copyright & Credits) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-gray-600 font-light">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.legalName} Tüm Hakları Saklıdır.
          </p>
          <div className="flex space-x-6">
            <button onClick={() => go(ROUTES.legal("privacy"))} className="hover:text-white cursor-pointer transition-colors">Gizlilik</button>
            <button onClick={() => go(ROUTES.legal("terms"))} className="hover:text-white cursor-pointer transition-colors">Kullanım Koşulları</button>
            <button onClick={() => go(ROUTES.legal("kvkk"))} className="hover:text-white cursor-pointer transition-colors">KVKK</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
