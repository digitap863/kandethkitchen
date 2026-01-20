import Image from "next/image";
import React from "react";

type Brand = {
  id: number;
  name: string;
  logo: string;
  className: string;
};

const brands: Brand[] = [
  {
    id: 1,
    name: "Franke",
    logo: "/home/br1.svg",
    className: "w-[108px] h-[56px]",
  },
  {
    id: 2,
    name: "Faber",
    logo: "/home/br2.svg",
    className: "w-[103px] h-[60px]",
  },
  {
    id: 3,
    name: "Black + Decker",
    logo: "/home/br3.svg",
    className: "w-[84px] h-[55px]",
  },
  {
    id: 4,
    name: "Elica",
    logo: "/home/br4.svg",
    className: "w-[86px] h-[57px]",
  },
  {
    id: 5,
    name: "Hafele",
    logo: "/home/br5.svg",
    className: "w-[98px] h-[57px]",
  },
  {
    id: 6,
    name: "Metta",
    logo: "/home/br6.svg",
    className: "w-[92px] h-[61px]",
  },
  {
    id: 7,
    name: "Pureflames",
    logo: "/home/br7.svg",
    className: "w-[159px] h-[55px]",
  },
];

const TrustedBrands: React.FC = () => {
  return (
    <section className="relative w-full bg-white/4  py-24 overflow-hidden">
      {/* Subtle glow */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-[52px] text-center diamond-text leading-none font-semibold font-raleway">
          Our Trusted Brands
        </h1>
        <p className="text-[28px] mt-5 font-light font-roboto text-center">
          We partner with world-renowned brands to bring you the best
        </p>
        {/* Logos */}
        <div className="mt-12 max-w-4xl mx-auto flex flex-wrap justify-center gap-y-20 gap-x-30 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`px-6 py-4 flex items-center justify-center shadow-md relative  ${brand.className}`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
