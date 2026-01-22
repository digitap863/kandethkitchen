import { Star } from "lucide-react";
import Image from "next/image";

const SinksCard = () => {
  return (
    <div className="rounded-[15px] md:rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 p-2 md:p-6 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden pt-5 md:pt-16">
      <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
      <h3 className="text-white text-[16px] md:text-[28px]  font-semibold">Sinks</h3>

      <p className="text-white/60 text-[12px] md:text-sm mt-2 leading-relaxed font-light">
        Each icon has been carefully crafted with love and attention to detail,
        ensuring that every icon is visually consistent.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-white/70 text-[14px] md:text-[20px] font-medium">FRANKE</span>
        <span className="text-[#CE1919] font-semibold text-[20px] flex gap-2">
          4.5{" "}
          <span className="text-yellow-400 pt-0.5">
            <Star size={22} />
          </span>
        </span>
      </div>

      <div className="flex justify-center ">
        <div className="relative mt-6 md:w-51.5 md:h-40 w-23.25 h-18.25 rounded-[15px] md:rounded-4xl overflow-hidden">
          <Image
            src="/home/pr21.png"
            alt="Sink"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SinksCard;
