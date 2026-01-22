import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full relative z-20">
      <div className="relative h-[80vh] md:h-screen w-full">
        <div className="absolute inset-0 md:bg-[linear-gradient(90deg,rgba(8,10,12,1)_0%,rgba(8,10,12,1)_20%,rgba(8,10,12,1)_50%,rgba(8,10,12,1)_55%,rgba(8,10,12,1)_60%,rgba(8,10,12,0.9)_70%,rgba(8,10,12,0.7)_80%,rgba(8,10,12,0.2)_100%)] z-10     bg-[linear-gradient(90deg,rgba(8,10,12,1)_0%,rgba(8,10,12,1)_20%,rgba(8,10,12,0.9)_50%,rgba(8,10,12,0.8)_55%,rgba(8,10,12,0.7)_60%,rgba(8,10,12,0.6)_70%,rgba(8,10,12,0.5)_80%,rgba(8,10,12,0.2)_100%)]"></div>         

        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Content */}
          <div className="absolute z-10 h-[80vh] md:h-screen w-full">
            <div className="h-full max-w-6xl mx-auto flex flex-col items-center md:items-start justify-center">

              {/* Shrink-wrap wrapper */}
              <div className="inline-block text-center">
                <h1 className="text-[36px] md:text-[68px] diamond-text leading-none font-semibold font-raleway">
                  Premium Kitchen
                  <br /> Accessories &<br /> Appliances
                </h1>

                {/* Button */}
                <div className="mt-10 flex justify-center">
                  <div className="relative">
                    <div className="text-base uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-4">
                      Explore Products
                      <span>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                    <div className="h-full w-full absolute border border-white top-1 left-1 bg-black z-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="absolute right-0 bottom-0 md:top-0 w-191 h-full">
            <Image src={"/home/hero.png"} fill alt="theater1" />
            <div className="absolute w-191 right-0 bottom-0 h-30 bg-linear-to-t from-[#0D0D0D] to-[#0D0D0D]/0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
