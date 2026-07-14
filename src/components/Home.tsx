import Hero from "./Hero";
import ReferencesTicker from "./ReferencesTicker";
import Services from "./Services";
import { useSeo } from "../lib/seo";

export default function Home() {
  useSeo(
    "Ana Sayfa",
    "NKolay Medya ile işletmenizi büyütün. Performans odaklı reklam, yaratıcı video prodüksiyonu ve stratejik marka danışmanlığı ile tanışın."
  );

  return (
    <>
      <Hero />
      <ReferencesTicker />
      <Services />
    </>
  );
}
