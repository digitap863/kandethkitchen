import BrandSection from "@/components/home/BrandSection";
import HeroSection from "@/components/home/HeroSection";
import KitchenDesign from "@/components/home/KitchenDesign";
import TopGlow from "@/components/home/TopGlow";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopGlow>
        <BrandSection />
        <KitchenDesign />
      </TopGlow>
    </>
  );
}
