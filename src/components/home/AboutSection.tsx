import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Feature = {
  id: number;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "KITCHEN RENOVATION",
    description:
      "Complete kitchen redesigns from layout planning to final installation.",
  },
  {
    id: 2,
    title: "APPLIANCE UPGRADE",
    description:
      "Dedicated after-sales support with quick response times and genuine parts.",
  },
  {
    id: 3,
    title: "SUPPORT & SERVICE",
    description:
      "Dedicated after-sales support with quick response times and genuine parts.",
  },
];
const AboutSection = () => {
  return (
    <section className="absolute  bottom-0 w-full bg-[#0D0D0D] py-20 overflow-hidden">
      <Image
        src={"/home/mes.png"}
        alt="Kitchen"
        fill
        className="object-cover z-0"
      />
      <div className="absolute h-full w-full bg-[#0D0D0D]/90 top-0 left-0 z-10"></div>
      <div className="absolute h-25 w-full bg-[#0D0D0D] blur-[10px] -top-10 left-0 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto pt-10  md:py-40 px-6 flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 max-w-158">
          <h1 className="text-[24px] md:text-[49px] diamond-text leading-none font-semibold font-raleway text-center max-w-158">
            About KANDETH<br className="block md:hidden"/> Kitchen Accessories &<br /> Appliances
          </h1>

          <p className="mt-6 text-white font-light text-[16px] md:text-[20px] text-center md:px-0 px-30">
            At KANDETH Kitchen Accessories & Appliances,
            <span className="text-[#A7A7A7]">
              {" "}
              we bring you a curated selection of the
            </span>{" "}
            finest kitchen hardware, interior accessories and appliances from
            <span className="text-[#A7A7A7]">
              {" "}
              trusted and innovative brands worldwide.
            </span>{" "}
            Our mission is to transform your kitchen into a space{" "}
            <span className="text-[#A7A7A7]">
              where culinary dreams come to life with precision and style.
            </span>
          </p>

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

        {/* Right Cards */}
        <div className="flex flex-col gap-4 px-30">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-linear-to-l from-[#CE1919]/30  to-transparent border border-white/10 rounded-lg py-6 px-8"
            >
              <div className="flex items-center  gap-10">
                <span className="text-white text-[30px]">✦</span>
                <div>
                  <h3 className="text-white font-semibold text-[14px] font-roboto">
                    {item.title}
                  </h3>
                  <p className="text-[#D9D9D9] tracking-wide text-xs mt-1.5 font-roboto max-w-75">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
