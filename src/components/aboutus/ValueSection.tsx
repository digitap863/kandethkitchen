import { Award, Clock, Gift, Users } from "lucide-react";
import Image from "next/image";

const ValueSection = () => {
  return (
    <div className=" w-full min-h-screen relative py-20">
      <div className=" w-full flex flex-col justify-center items-center relative z-30">
        <div className="absolute h-full w-full">
          <Image src={"/aboutus/b3.png"} alt="bg" fill className="opacity-30" />
        </div>
        <div className="absolute h-full w-full bg-[linear-gradient(90deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.2)_20%,rgba(13,13,13,0)_50%,rgba(13,13,13,0.2)_80%,rgba(13,13,13,1)_100%)]"></div>
        <div className="absolute h-full w-full bg-[linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.2)_20%,rgba(13,13,13,0)_50%,rgba(13,13,13,0.2)_80%,rgba(13,13,13,1)_100%)]"></div>
        <div className="relative z-30 w-full px-4">
          <h1 className="text-[24px] md:text-[52px] text-center diamond-text leading-none font-semibold font-raleway">
            Our Values
          </h1>
          <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center">
            The principles that guide everything we do
          </p>
          <section className="relative w-full  py-24 overflow-hidden font-roboto">
            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Top values */}
              <div className="flex md:gap-20 text-center">
                <div className="flex flex-col md:flex-row md:w-1/2 justify-between gap-10 md:gap-0">
                  <div className="flex flex-col justify-between">
                    <div className="mx-auto md:w-12 h-9 w-9 md:h-12 rounded-full bg-linear-to-b from-[#CE1919]/50 to-[#680C0C]/50 flex items-center justify-center text-white">
                      <Award size={20} />
                    </div>
                    <h3 className="mt-4 text-white font-light text-[20px] md:text-[28px]">
                      Quality First
                    </h3>
                    <p className="mt-2 text-white text-[12px] md:text-base font-light max-w-64.5">
                      We partner only with premium brands known for durability
                      and excellence.
                    </p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="mx-auto md:w-12 h-9 w-9 md:h-12 rounded-full bg-linear-to-b from-[#CE1919]/50 to-[#680C0C]/50 flex items-center justify-center text-white">
                      <Users size={20} />
                    </div>
                    <h3 className="mt-4 text-white font-light text-[20px] md:text-[28px]">
                      Customer Focus
                    </h3>
                    <p className="mt-2 text-white text-[12px] md:text-base font-light max-w-64.5">
                      Your satisfaction drives every decision we make.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:w-1/2 justify-between gap-10 md:gap-0">
                  <div className="flex   flex-col justify-between">
                    <div className="mx-auto md:w-12 h-9 w-9 md:h-12 rounded-full bg-linear-to-b from-[#CE1919]/50 to-[#680C0C]/50 flex items-center justify-center text-white">
                      <Gift size={20} />
                    </div>
                    <h3 className="mt-4 text-white font-light text-[20px] md:text-[28px]">
                      Passion for Design
                    </h3>
                    <p className="mt-2 text-white text-[12px] md:text-base font-light max-w-64.5">
                      We believe kitchens should be beautiful and functional.
                    </p>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="mx-auto md:w-12 h-9 w-9 md:h-12 rounded-full bg-linear-to-b from-[#CE1919]/50 to-[#680C0C]/50 flex items-center justify-center text-white">
                      <Clock size={20} />
                    </div>
                    <h3 className="mt-4 text-white font-light text-[20px] md:text-[28px]">
                      Timely Service
                    </h3>
                    <p className="mt-2 text-white text-[12px] md:text-base font-light max-w-64.5">
                      Quick turnaround times without compromising quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full bg-white/4 py-5 font-sans">
        <div className="max-w-6xl mx-auto flex justify-between md:gap-44 text-center px-10 md:px-0">
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:w-1/2 justify-between">
            <div>
              <p className="text-[40px] font-bold text-white">
                20 <span className="text-[#CE1919]">+</span>
              </p>
              <p className="mt-2 text-[#DAFFF1] text-[20px]">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-[40px] font-bold text-white">
                1000 <span className="text-[#CE1919]">+</span>
              </p>
              <p className="mt-2 text-[#DAFFF1] text-[20px]">Happy Customers</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:w-1/2 justify-between">
            <div>
              <p className="text-[40px] font-bold text-white">
                25 <span className="text-[#CE1919]">+</span>
              </p>
              <p className="mt-2 text-[#DAFFF1] text-[20px]">Brand Partners</p>
            </div>

            <div>
              <p className="text-[40px] font-bold text-white">
                100 <span className="text-[#CE1919]">%</span>
              </p>
              <p className="mt-2 text-[#DAFFF1] text-[20px]">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
