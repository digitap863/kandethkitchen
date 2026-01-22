import { Star } from "lucide-react";
import Image from "next/image";

const HobsCard = () => {
  return (
    <div className="rounded-[15px] md:rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 p-2 md:p-6 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden pt-5 md:pt-16">
      <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
      <h3 className="text-white text-[16px] md:text-[28px] font-semibold">Hobs</h3>

      <p className="text-white/60 text-xs md:text-sm mt-2 leading-relaxed font-light">
        There is no sudden change in curvature. As a result, the corner appears
        smoother.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-white/70 text-[14px] md:text-[20px] font-medium">PURE FLAMES</span>
        <span className="text-[#CE1919] font-semibold text-[20px] flex gap-2">
          4.5{" "}
          <span className="text-yellow-400 pt-0.5">
            <Star size={22} />
          </span>
        </span>
      </div>

      <div className="flex justify-center">
        <div className="relative mt-6 md:w-[206px] md:h-[160px] w-[92px] h-[72px] rounded-[12px] md:rounded-4xl overflow-hidden">
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
