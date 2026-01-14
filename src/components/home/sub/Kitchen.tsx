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
    className: "left-[4%] top-[50%] h-[230px] w-[250px]",
  },
  {
    id: 2,
    src: "/home/kitchen/2.svg",
    alt: "Stove",
    className: "left-[20%] top-[30%] h-[118px] w-[289px]",
  },
  {
    id: 3,
    src: "/home/kitchen/3.svg",
    alt: "Chimney",
    className: "left-[40%] top-[10%] h-[186px] w-[255px]",
  },
  {
    id: 4,
    src: "/home/kitchen/4.svg",
    alt: "Shelf",
    className: "left-[65%] top-[20%] h-[188px] w-[188px]",
  },
  {
    id: 5,
    src: "/home/kitchen/5.svg",
    alt: "Drawer",
    className: "left-[78%] top-[55%] h-[250px] w-[250px]",
  },
];
const Kitchen = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Products */}
      <div className="relative w-full h-full">
        {products.map((item) => (
          <div
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
