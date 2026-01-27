"use client";

import { ArrowRight, Box, Boxes } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  image: string;
  price: number;
  save: number;
  discount?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Hob PRIME HT703 CRS BR CLAI",
    category: "HOBS",
    brand: "FABER",
    image: "/products/p1.png",
    price: 10000,
    save: 2345,
    discount: "30%",
  },
  {
    id: 2,
    name: "Hob PRIME HT703 CRS BR CLAI",
    category: "HOBS",
    brand: "PURE FLAMES",
    image: "/products/p1.png",
    price: 10000,
    save: 2345,
  },
  {
    id: 3,
    name: "Chimney Elite",
    category: "CHIMNEYS",
    brand: "FABER",
    image: "/products/p1.png",
    price: 12000,
    save: 2000,
  },
  {
    id: 4,
    name: "Chimney Elite",
    category: "CHIMNEYS",
    brand: "FABER",
    image: "/products/p1.png",
    price: 12000,
    save: 2000,
  },
];

const categories = [
  "ALL",
  "CHIMNEYS",
  "HARDWARES",
  "HOBS",
  "SINK",
  "ACCESSORIES",
];

const ProductSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"product" | "brand">("product");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full  pb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-2">
        {/* Top toggle */}
        <div className="flex justify-center gap-4 mb-8 font-raleway ">
          <div className="bg-[#1F1F1F] p-1.5 flex gap-3 rounded-[20px]">
            <button
              onClick={() => setViewMode("product")}
              className={`px-4 py-2 flex gap-1.5 rounded-[20px] text-base uppercase cursor-pointer font-medium ${
                viewMode === "product" ? "bg-red-600 text-white" : ""
              }`}
            >
              <Box />
              By Product
            </button>
            <button
              onClick={() => setViewMode("brand")}
              className={`px-4 py-2 flex gap-1.5 rounded-[20px] uppercase text-base cursor-pointer font-medium ${
                viewMode === "brand" ? "bg-red-600 text-white" : ""
              }`}
            >
              <Boxes />
              By Brand
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-5 md:gap-10 border-b border-white/30 pb-6 mb-10 font-raleway font-medium justify-center">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`${activeCategory === cat && "bg-linear-to-b from-transparent to-[#680C0C] p-px rounded-full "}`}
            >
              <button
                onClick={() => setActiveCategory(cat)}
                className={`text-[14px] md:text-base tracking-wide py-2 px-6 rounded-full ${
                  activeCategory === cat
                    ? "text-[#CE1919] pb-2 bg-[#0d0d0d]"
                    : "text-white"
                }`}
              >
                {cat}
              </button>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8 font-raleway">
          <h2 className="text-white text-xl font-semibold">{activeCategory}</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-2 md:gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl relative bg-white/5 backdrop-blur-md border border-white/10 p-1 shadow-[10px]"
            >
              {/* Tags */}
              <div className="absolute top-5 w-full px-2.5 md:px-5 z-10 flex justify-between items-center mb-3 font-raleway font-semibold">
                <span className="md:px-5 px-2 py-1.5 text-[8px] md:text-xs rounded-full bg-[#3D3C3C] text-white">
                  {product.category}
                </span>
                <span className="md:px-5 px-2 py-1.5 text-[8px] md:text-xs rounded-full bg-[#CE1919] text-white">
                  {product.brand}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-40 md:h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-[10px]"
                />

                {product.discount && (
                  <div className="absolute md:bottom-6 bottom-3 right-1 md:right-2">
                    <div className="relative flex justify-center items-center h-13.5 md:h-20 md:w-24.5 w-16">
                      <Image src={"/products/star.svg"} alt="offer star" fill />
                      <span className="relative z-10 text-[9px] text-black font-rammetto-one">
                        {product.discount}
                        <br />
                        OFF
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="px-1.5 py-2 md:p-4">

                <h3 className="text-white text-[10px] md:text-base font-raleway font-semibold mt-1">
                  {product.name}
                </h3>

                <p className="mt-2 text-[#979797] font-revalia text-[8px] md:text-[14px]">
                  product id :123 456 789
                </p>
                <p className="mt-2 text-white font-bold font-raleway text-[10px] md:text-base">
                  ₹ {product.price.toLocaleString()}
                </p>
                <p className="mt-2 text-[#979797] font-light font-revalia text-[8px] md:text-[10px]">
                  MRP (including all Taxes){" "}
                  <span className="line-through">₹12,345</span>
                </p>

                <p className="text-white text-[10px] md:text-sm mt-2 font-raleway">
                  Save{" "}
                  <span className="font-bold">
                    ₹{product.save.toLocaleString()}
                  </span>
                </p>

                <button className="mt-3 text-red-500 gap-2 text-[10px] md:text-xs hover:underline flex font-raleway font-medium tracking-wide cursor-pointer">
                  Enquire now{" "}
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
