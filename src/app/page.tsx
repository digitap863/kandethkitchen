import AboutSection from "@/components/home/AboutSection";
import BrandSection from "@/components/home/BrandSection";
import HeroSection from "@/components/home/HeroSection";
import KitchenDesign from "@/components/home/KitchenDesign";
import LatestProductsSection from "@/components/home/LatestProductsSection";
import BottomGlow from "@/components/home/sub/BottomGlow";
import TopGlow from "@/components/home/sub/TopGlow";
import UpgradeSection from "@/components/home/UpgradeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopGlow>
        <BrandSection />
        <KitchenDesign />
      </TopGlow>
      <BottomGlow />
      <UpgradeSection />
      <LatestProductsSection />
    </>
  );
}
