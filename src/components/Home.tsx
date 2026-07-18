import HeroGeometric from "./HeroGeometric";
import ReferencesTicker from "./ReferencesTicker";
import Services from "./Services";
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
      <Services />
    </>
  );
}
