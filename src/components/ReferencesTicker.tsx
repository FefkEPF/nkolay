import { Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TESTIMONIALS_DATA } from "../data";
import { ROUTES } from "../lib/constants";

export default function ReferencesTicker() {
  const navigate = useNavigate();

  // Duplicate the data once for a seamless infinite scroll loop.
  const doubleData = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  const onLogoClick = (id: string) => {
    navigate(`${ROUTES.references}?ref=${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-white border-y border-gray-100 py-10 md:py-12 overflow-hidden relative select-none"
      id="references-ticker"
    >
      <div className="text-center mb-6">
        <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
          Güvenilen Markalar
        </span>
      </div>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center overflow-hidden">
        <div className="flex space-x-16 sm:space-x-24 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] px-10">
          {doubleData.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              onClick={() => onLogoClick(item.id)}
              className="flex items-center gap-3 cursor-pointer transition-all duration-500 transform opacity-30 hover:opacity-100 hover:scale-105 active:scale-95 group"
              title={`${item.company} hakkımızda ne dedi? Öğrenmek için tıklayın.`}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary-light transition-colors">
                <Building2 className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-display font-semibold text-gray-700 group-hover:text-gray-900 text-base transition-colors">
                {item.company}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
