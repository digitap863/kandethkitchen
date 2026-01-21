"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const thumbnails = [
  "/products/p1.png",
  "/products/p1.png",
  "/products/p1.png",
  "/products/p1.png",
  "/products/p1.png",
];

const ProductDetails: React.FC = () => {
  const [activeImage, setActiveImage] = useState(thumbnails[0]);

  return (
    <section className="relative w-full pt-44 pb-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-30">
        {/* Left: Image Gallery */}
        <div className="">
          <div className="block md:hidden font-raleway mb-10">
            <p className="text-[#CE1919]  uppercase tracking-wide text-base font-medium">
              Pure Flames
            </p>

            <h1 className="mt-2 text-[20px] md:text-[28px] text-white font-semibold">
              HOB PRIME HT703 CRS BR CI AI
            </h1>

            {/* <div className="mt-2 flex items-center gap-2 text-yellow-400 text-sm">
            ★★★★☆ <span className="text-white/60">3.8 Rating</span>
          </div> */}

            <p className="mt-6 text-[#979797] text-base font-light leading-relaxed max-w-xl">
              Experience culinary perfection with precision, sinshine. Hob
              offers sleek design, robust construction, and advanced features
              for effortless cooking.
            </p>
          </div>
          <div className="relative rounded-[10px]">
            <div className="absolute top-5 w-full px-5 z-10 flex justify-between items-center mb-3 font-raleway font-semibold">
              <span className="px-5 py-1.5 text-xs rounded-full bg-[#3D3C3C] text-white">
                HOB
              </span>
              <span className="px-5 py-1.5 text-xs rounded-full bg-[#CE1919] text-white">
                PURE FLAMES
              </span>
            </div>

            <div className="relative w-full h-84 md:h-130 rounded-[10px]">
              <Image
                src={activeImage}
                alt="Product"
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex justify-between gap-4 px-8 md:px-4">
            {thumbnails.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`relative h-13.75 w-13.75 md:w-22 md:h-22 overflow-hidden border cursor-pointer ${
                  activeImage === img ? "opacity-50" : "opacity-100"
                }`}
              >
                <Image src={img} alt="Thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="font-raleway">
          <div className="md:block hidden">
            <p className="text-[#CE1919]  uppercase tracking-wide text-base font-medium">
              Pure Flames
            </p>

            <h1 className="mt-2 text-[28px] text-white font-semibold">
              HOB PRIME HT703 CRS BR CI AI
            </h1>

            {/* <div className="mt-2 flex items-center gap-2 text-yellow-400 text-sm">
            ★★★★☆ <span className="text-white/60">3.8 Rating</span>
          </div> */}

            <p className="mt-6 text-[#979797] text-base font-light leading-relaxed max-w-xl">
              Experience culinary perfection with precision, sinshine. Hob
              offers sleek design, robust construction, and advanced features
              for effortless cooking.
            </p>
          </div>

          {/* Features & Specs */}
          <div className="md:mt-10 grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-white text-base font-semibold mb-4">
                Key Features
              </h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>
                  Auto-ignition system
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>
                  Flame failure safety
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>
                  Cast iron pan supports
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>
                  Easy-clean surface
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>
                  Multiple burner sizes
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-base font-semibold mb-4">
                Specifications
              </h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>{" "}
                  Burners: 5
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>{" "}
                  Surface: Tempered Glass
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>{" "}
                  Power: 3.5kW max
                </li>
                <li className="flex gap-2">
                  <span className="text-[#CE1919]">
                    <Check size={14} />{" "}
                  </span>{" "}
                  Warranty: 2 Years
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-10 space-y-4">
            <p className="text-white text-xl font-bold">₹ 10,000</p>
            <p className="text-white/40 text-sm font-revalia font-light">
              MRP (Including all taxes){" "}
              <span className="line-through ">₹12,345</span>
            </p>
            <p className="text-white text-sm mt-1">
              Save <span className="font-bold">₹2,345</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-14 md:mt-30 md:pl-10 flex gap-20 flex-wrap">
            <div className=" flex justify-center">
              <div className="relative">
                <div className="text-base uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-4">
                  Enquire Now
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </div>
                <div className="h-full w-full absolute border border-white top-1 left-1 bg-black z-0"></div>
              </div>
            </div>

            <button className=" text-white/70 hover:text-white transition flex items-center uppercase gap-2">
              View More{" "}
              <span>
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
