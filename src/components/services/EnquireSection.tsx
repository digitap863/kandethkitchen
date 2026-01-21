import { ArrowRight } from "lucide-react";
import Image from "next/image";

const EnquireSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 mt-20">
      {/* Background */}
      <div className="absolute top-0 h-full w-full bg-[linear-gradient(135deg,rgba(206,25,25,0.7)_0%,rgba(206,25,25,0.7)_40%,rgba(104,12,12,0.7)_80%,rgba(104,12,12,0.7)_100%)] z-20"></div>
      <div className="absolute top-0 h-full w-full z-10">
        <Image src={"/aboutus/b3.png"} alt="bg" fill />
      </div>
      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-white text-[24px] md:text-[36px] font-semibold font-raleway">
          Ready to Upgrade Your Kitchen or Wardrobe?
        </h2>

        <p className="mt-3 text-white/80 text-[16px] md:text-[24px] font-roboto font-light">
          Visit our showroom or get in touch with our experts today.
        </p>

        <div className="mt-14 flex justify-center gap-6 flex-wrap">
          <div className=" flex justify-center">
            <div className="relative">
              <div className="text-base font-sans uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-4">
                Enquire Now
                <span>
                  <ArrowRight size={16} />
                </span>
              </div>
              <div className="h-full w-full absolute border border-white top-1 left-1 bg-white z-0"></div>
            </div>
          </div>

          <button className="px-6 py-2 font-sans uppercase text-white/80 hover:text-white transition inline-flex items-center gap-2">
            View More{" "}
            <span className="text-[#979797]">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnquireSection;
