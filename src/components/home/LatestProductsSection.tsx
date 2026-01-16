import { ArrowRight } from "lucide-react";
import DishWasherCard from "./products/DishWasherCard";
import FoldingTableCard from "./products/FoldingTableCard";
import HingesCard from "./products/HingesCard";
import HobsCard from "./products/HobsCard";
import SinksCard from "./products/SinksCard";

const LatestProductsSection = () => {
  return (
    <div className="min-h-screen w-full relative py-20">
      <div className="w-full flex justify-center mb-20">
        <div className="flex gap-30 items-end">
          <div className="flex justify-start mb-25">
            <h1 className="text-[52px] diamond-text leading-none font-semibold font-raleway text-center">
              Explore our latest
              <br />
              Products
            </h1>
          </div>
          <p className="text-[28px]  font-light leading-snug text-white font-roboto">
            Every product category designed with
            <br /> precision and built for modern lifestyles.
          </p>
        </div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
        <HingesCard />
        <SinksCard />
        <FoldingTableCard />
        <HobsCard />
        <DishWasherCard />
      </div>
      <div className="max-w-5xl mx-auto flex justify-end px-10">
        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="text-base uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-4">
              View Products
              <span>
                <ArrowRight size={16} />
              </span>
            </div>
            <div className="h-full w-full absolute border border-white top-1 left-1 bg-black z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProductsSection;
