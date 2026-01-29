import { Star } from "lucide-react";
import Image from "next/image";

const FoldingTableCard = () => {
  return (
    <div className="rounded-[15px] md:rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden px-3 py-7 md:p-16 col-span-2 flex gap-5" data-aos="fade-up" data-aos-delay="100">
      <div className="absolute h-100 w-100 bg-[#ACACAC]/90 blur-[600px] -bottom-[50%] -left-[60%]"></div>
      <div>
        <h3 className="text-white text-base md:text-[28px] font-semibold">Folding Table</h3>

        <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed font-light">
          All icons respect Figma’s component overrides like stroke and color
          changes. Crafted pixel precise with a 2px stroke and neatly organized
          in variants.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-white/70 text-xs md:text-[20px] font-medium">FRANKE</span>

        </div>
      </div>

      <div className="mt-6 flex gap-5 md:gap-10 md:pr-10 ">
        <div className="relative md:w-46.25 w-20.75 h-18.25 md:h-41.25 rounded-[15px] md:rounded-4xl overflow-hidden">
          <Image
            src="/home/pr31.png"
            alt="Table 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative md:w-46.25 w-20.75 h-18.25 md:h-41.25 rounded-[15px] md:rounded-4xl overflow-hidden translate-y-6">
          <Image
            src="/home/pr32.png"
            alt="Table 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FoldingTableCard;
