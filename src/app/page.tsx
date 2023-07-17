import Collections from "@/components/Collections";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SellNFT from "@/components/SellNFT";
import TopCreators from "@/components/TopCreators";

export default function Home() {
  return (
    <section>
      <Hero />
      <TopCreators />
      <Collections />
      <Features />
      <SellNFT />
    </section>
  );
}
