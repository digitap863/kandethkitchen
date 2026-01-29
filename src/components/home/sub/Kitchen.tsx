import Image from "next/image";

type Product = {
  id: number;
  src: string;
  alt: string;
  className: string;
};

const products: Product[] = [
  {
    id: 1,
    src: "/home/kitchen/1.svg",
    alt: "Sink",
    className: "left-[4%] top-[50%]  md:h-[230px] md:w-[250px] h-[68px] w-[75px]",
  },
  {
    id: 2,
    src: "/home/kitchen/2.svg",
    alt: "Stove",
    className: "left-[20%] top-[30%]  md:h-[118px] md:w-[289px] w-[87px] h-[36px]",
  },
  {
    id: 3,
    src: "/home/kitchen/3.svg",
    alt: "Chimney",
    className: "md:left-[40%] left-[45%] top-[10%] md:h-[186px] md:w-[255px] w-[77px] h-[56px]",
  },
  {
    id: 4,
    src: "/home/kitchen/4.svg",
    alt: "Shelf",
    className: "md:left-[65%] left-[68%] top-[20%]  md:h-[188px] md:w-[188px] h-[57px] w-[57px] ",
  },
  {
    id: 5,
    src: "/home/kitchen/5.svg",
    alt: "Drawer",
    className: "left-[78%] top-[55%] md:h-[250px] md:w-[250px] h-[92px] w-[92px] ",
  },
];
const Kitchen = () => {
  return (
    <section className="relative w-full h-57.5 md:h-125 overflow-hidden">
      {/* Products */}
      <div className="relative w-full h-full">
        {products.map((item) => (
          <div
            data-aos="fade-down"
            key={item.id}
            className={`absolute  ${item.className} drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kitchen;
