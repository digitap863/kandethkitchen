import { Star } from "lucide-react";
import Image from "next/image";

const DishWasherCard = () => {
  return (
    <div className="rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 p-6 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden pt-16">
      <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
      <h3 className="text-white text-[28px]  font-semibold">Dish washer</h3>

      <p className="text-white/60 text-sm mt-2 leading-relaxed font-light">
        Apple like corner smoothing. There is a difference, however small. The
        resulting shape is known as a super-ellipse.
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-white/70 text-[20px] font-medium">FABER</span>
        <span className="text-[#CE1919] font-semibold text-[20px] flex gap-2">
          4.5{" "}
          <span className="text-yellow-400 pt-0.5">
            <Star size={22} />
          </span>
        </span>
      </div>

      <div className="flex justify-center">
        <div className="relative mt-6 w-[206px] h-[160px] rounded-4xl overflow-hidden">
          <Image
            src="/home/pr51.png"
            alt="Dish washer"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DishWasherCard;
