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
    className: "w-[174px] h-[90px]",
  },
  {
    id: 2,
    name: "Faber",
    logo: "/home/br2.svg",
    className: "w-[154px] h-[90px]",
  },
  {
    id: 3,
    name: "Black + Decker",
    logo: "/home/br3.svg",
    className: "w-[135px] h-[90px]",
  },
  {
    id: 4,
    name: "Elica",
    logo: "/home/br4.svg",
    className: "w-[138px] h-[90px]",
  },
  {
    id: 5,
    name: "Hafele",
    logo: "/home/br5.svg",
    className: "w-[147px] h-[90px]",
  },
  {
    id: 6,
    name: "Metta",
    logo: "/home/br6.svg",
    className: "w-[138px] h-[90px]",
  },
  {
    id: 7,
    name: "Pureflames",
    logo: "/home/br7.svg",
    className: "w-[256px] h-[90px]",
  },
];

const BrandSection = () => {
  return (
    <>
      <Kitchen />
      <section className="relative w-full py-16 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-center text-[#979797] mb-8 text-[28px] font-raleway">
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
