import { TRUST_BADGES } from "../data";

export default function TrustBadges() {
  return (
    <section className="border-y border-gray-100 bg-white" id="guven">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="text-center md:text-left">
              <div className="font-display font-bold text-lg text-gray-900 tracking-tight">
                {badge.label}
              </div>
              <div className="text-[13px] text-gray-500 font-light mt-0.5">
                {badge.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
