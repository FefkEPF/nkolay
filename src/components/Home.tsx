import HeroGeometric from "./HeroGeometric";
import TechStack from "./TechStack";
import ServicesPreview from "./ServicesPreview";
import FeaturedWork from "./FeaturedWork";
import ProcessSection from "./ProcessSection";
import CtaBanner from "./CtaBanner";
import HomeFaq from "./HomeFaq";
import ImpactBand from "./ImpactBand";
import ResultSpotlight from "./ResultSpotlight";
import WhyUs from "./WhyUs";
import TrustBadges from "./TrustBadges";
import TestimonialCarousel from "./TestimonialCarousel";
import LatestPosts from "./LatestPosts";
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
      <TechStack />
      <ImpactBand />
      <WhyUs />
      <ServicesPreview />
      <FeaturedWork />
      <ResultSpotlight />
      <ProcessSection />
      <TestimonialCarousel />
      <LatestPosts />
      <CtaBanner variant="split" />
      <HomeFaq />
      <TrustBadges />
      <StickyCta />
    </>
  );
}
