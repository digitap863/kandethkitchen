import Image from "next/image";
import Kitchen from "./sub/Kitchen";
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
    className: "md:w-[174px] md:h-[90px] w-[104px] h-[54px]",
  },
  {
    id: 2,
    name: "Faber",
    logo: "/home/br2.svg",
    className: "md:w-[154px] md:h-[90px] h-[54px] w-[92px]",
  },
  {
    id: 3,
    name: "Black + Decker",
    logo: "/home/br3.svg",
    className: "md:w-[135px] md:h-[90px] w-[80px] h-[52px]",
  },
  {
    id: 4,
    name: "Elica",
    logo: "/home/br4.svg",
    className: "md:w-[138px] md:h-[90px] w-[83px] h-[55px]",
  },
  {
    id: 5,
    name: "Hafele",
    logo: "/home/br5.svg",
    className: "md:w-[147px] md:h-[90px] w-[88px] h-[53px]",
  },
  {
    id: 6,
    name: "Metta",
    logo: "/home/br6.svg",
    className: "md:w-[138px] md:h-[90px] w-[83px] h-[55px]",
  },
  {
    id: 7,
    name: "Pureflames",
    logo: "/home/br7.svg",
    className: "md:w-[256px] md:h-[90px] w-[153px] h-[53px]",
  },
];

const BrandSection = () => {
  return (
    <>
      <Kitchen />
      <section className="relative z-30 w-full py-16 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-center text-[#979797] tracking-wider mb-8 text-[20px] md:text-[28px] font-raleway">
            Trusted by <span className="text-white">leading global</span> kitchen brands
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
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
    </>
  );
};

export default BrandSection;
