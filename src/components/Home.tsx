import HeroGeometric from "./HeroGeometric";
import ReferencesTicker from "./ReferencesTicker";
import TechStack from "./TechStack";
import Services from "./Services";
import ProcessSection from "./ProcessSection";
import CtaBanner from "./CtaBanner";
import HomeFaq from "./HomeFaq";
import ImpactBand from "./ImpactBand";
import ResultSpotlight from "./ResultSpotlight";
import WhyUs from "./WhyUs";
import TrustBadges from "./TrustBadges";
import TestimonialCarousel from "./TestimonialCarousel";
import StickyCta from "./StickyCta";
import { useSeo } from "../lib/seo";

export default function Home() {
  useSeo({
    title: "Ana Sayfa",
    description:
      "NKolay Medya ile işletmenizi büyütün. Performans odaklı reklam, yaratıcı video prodüksiyonu ve stratejik marka danışmanlığı ile tanışın.",
    path: "/",
  });

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF1F2] to-[#FCA5A5]">
        <HeroGeometric />
      </div>
      <ReferencesTicker />
      <TechStack />
      <ImpactBand />
      <WhyUs />
      <Services />
      <ResultSpotlight />
      <ProcessSection />
      <TestimonialCarousel />
      <CtaBanner variant="split" />
      <HomeFaq />
      <TrustBadges />
      <StickyCta />
    </>
  );
}
