import { Star } from "lucide-react";
import Image from "next/image";

const HobsCard = () => {
  return (
    <div className="rounded-[15px] md:rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 p-2 md:p-6 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden pt-5 md:pt-16" data-aos="fade-up" data-aos-delay="300">
      <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
      <h3 className="text-white text-[16px] md:text-[28px] font-semibold">Hobs</h3>

      <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed font-light">
        There is no sudden change in curvature. As a result, the corner appears
        smoother.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-white/70 text-[14px] md:text-[20px] font-medium">PURE FLAMES</span>

      </div>

      <div className="flex justify-center">
        <div className="relative mt-6 md:w-51.5 md:h-40 w-23 h-18 rounded-xl md:rounded-4xl overflow-hidden">
          <Image
            src="/home/pr41.png"
            alt="Hob"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HobsCard;
