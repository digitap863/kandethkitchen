import { Star } from "lucide-react";
import Image from "next/image";

const HingesCard = () => {
  return (
    <div className="rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 p-6 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden pt-16">
      <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
      <h3 className="text-white text-[28px]  font-semibold">Hinges</h3>

      <p className="text-white/60 text-sm mt-2 leading-relaxed font-light">
        coolicons PRO comes in three styles that are empowered by Figma&apos;s
        Variants, allowing you to swap styles effortlessly.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-white/70 text-[20px] font-medium">EBCO</span>
        <span className="text-[#CE1919] font-semibold text-[20px] flex gap-2">
          4.5{" "}
          <span className="text-yellow-400 pt-0.5">
            <Star size={22} />
          </span>
        </span>
      </div>

      {/* Multiple Images */}
      <div className="mt-14 flex flex-wrap justify-center gap-3 px-10">
        {[
          "/home/pr11.svg",
          "/home/pr12.svg",
          "/home/pr13.svg",
          "/home/pr14.svg",
          "/home/pr15.svg",
          "/home/pr16.svg",
          "/home/pr17.svg",

        ].map((i,index) => (
          <div key={index} className="relative w-[70px] h-[70px]">
            <Image
              src={i}
              alt="Hinge"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HingesCard;
