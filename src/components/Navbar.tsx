import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { SERVICES_DATA } from "../data";
import { COMPANY, ROUTES } from "../lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const go = (path: string) => {
    setMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { path: string; label: string; hasDropdown?: boolean }[] = [
    { path: ROUTES.home, label: "Ana Sayfa" },
    { path: ROUTES.services, label: "Hizmetlerimiz", hasDropdown: true },
    { path: ROUTES.references, label: "Referanslar" },
    { path: ROUTES.contact, label: "İletişim" },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
        isScrolled ? "pt-3" : "pt-5 md:pt-6"
      }`}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between relative transition-all duration-500 bg-white border border-gray-300 token-card px-6 ${
        isScrolled ? "py-2.5 shadow-raised" : "py-3.5 shadow-resting"
      }`}>
        {/* BRAND LOGO */}
        <button
          onClick={() => go(ROUTES.home)}
          className="flex items-center text-left cursor-pointer focus:outline-none z-10"
          id="nav-logo"
        >
          <Logo lightBackground={true} />
        </button>

        {/* NAVIGATION LINKS - Desktop */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 text-[14px] font-medium text-gray-500" id="nav-menu">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={item.hasDropdown ? () => setIsMegaMenuOpen(true) : undefined}
            >
              <button
                onClick={() => go(item.path)}
                className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive(item.path)
                    ? "text-primary bg-primary/5 font-semibold"
                    : "hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* CTA ACTION BUTTON */}
        <div className="hidden md:flex items-center space-x-4 z-10" id="nav-actions">
          <a
            href={COMPANY.phoneHref}
            className="text-gray-500 hover:text-gray-900 font-medium text-[14px] transition-colors flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-primary" />
            {COMPANY.phoneDisplay}
          </a>
          <button
            onClick={() => go(ROUTES.contact)}
            className="bg-primary text-white hover:bg-primary-dark font-medium text-[14px] px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Teklif Al
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center space-x-3 z-10">
          <button
            onClick={() => go(ROUTES.contact)}
            className="bg-primary text-white text-[13px] font-medium px-4 py-2 rounded-full"
          >
            Teklif Al
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MEGA MENU - Desktop */}
        <AnimatePresence>
          {isMegaMenuOpen && (
             <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-gray-300 shadow-float hidden md:block token-card overflow-hidden z-40"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <div className="p-8">
                <div className="grid grid-cols-4 gap-5">
                  {SERVICES_DATA.slice(0, 16).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => go(ROUTES.service(service.id))}
                      className="flex items-start text-left group cursor-pointer p-3 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mr-3 group-hover:border-primary/20 group-hover:bg-primary-light transition-colors">
                        <span className="text-gray-400 group-hover:text-primary transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-[14px] text-gray-900 group-hover:text-primary transition-colors truncate">
                          {service.title}
                        </span>
                        <span className="text-[13px] text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                          {service.description}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {mobileMenuOpen && (
             <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-gray-300 shadow-float token-card overflow-hidden z-40 md:hidden"
            >
              <div className="p-6 flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => go(item.path)}
                    className={`text-left text-lg font-medium px-4 py-3 rounded-2xl transition-all ${
                      isActive(item.path)
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-4">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center space-x-3 text-gray-900 font-medium px-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center border border-primary/10">
                      <PhoneCall className="w-5 h-5 text-primary" />
                    </div>
                    <span>{COMPANY.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
