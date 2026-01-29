"use client";

import { ArrowRight, Box, Boxes, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useBrandStore } from "@/stores/user/brandStore";
import { useTypeStore } from "@/stores/user/typeStore";
import { useProductStore } from "@/stores/user/productStore";

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


const ProductSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"product" | "brand">("product");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedBrand, setSelectedBrand] = useState("ALL");

  const { brands, fetchBrands } = useBrandStore();
  const { types, fetchTypes } = useTypeStore();
  const { products, fetchProducts, loading } = useProductStore();

  useEffect(() => {
    fetchBrands();
    fetchTypes();
  }, []);

  useEffect(() => {
    fetchProducts({
      brand: selectedBrand,
      productType: selectedType,
    });
  }, [selectedBrand, selectedType, fetchProducts]);

  const filterItems = viewMode === "product"
    ? ["ALL", ...types.map((t) => t.title)]
    : ["ALL", ...brands.map((b) => b.name)];

  const handleViewModeChange = (mode: "product" | "brand") => {
    setViewMode(mode);
    if (mode === "product") setSelectedBrand("ALL");
    else setSelectedType("ALL");
  };

  const activeCategory = viewMode === "product" ? selectedType : selectedBrand;

  const handleCategoryClick = (cat: string) => {
    if (viewMode === "product") setSelectedType(cat);
    else setSelectedBrand(cat);
  };

  const displayProducts = products.map((p) => {
    const mrp = parseFloat(p.mrp) || 0;
    const offer = parseFloat(p.offer) || 0;
    const discountedPrice = mrp - (mrp * (offer / 100));
    const saveAmount = mrp - discountedPrice;

    return {
      id: p._id,
      name: p.title,
      slug: p.slug,
      category: p.productType,
      brand: p.brand,
      image: p.img[0] || "/placeholder.png",
      price: discountedPrice,
      mrp: mrp,
      save: saveAmount,
      discount: offer > 0 ? `${offer}%` : undefined,
    };
  });

  return (
    <section className="relative w-full  pb-24">
      <div className="relative z-10 max-w-7xl mx-auto px-2">
        {/* Top toggle */}
        <div className="flex justify-center gap-4 mb-8 font-raleway " data-aos="fade-down">
          <div className="bg-[#1F1F1F] p-1.5 flex gap-3 rounded-[20px]">
            <button
              onClick={() => handleViewModeChange("product")}
              className={`px-4 py-2 flex gap-1.5 rounded-[20px] text-base uppercase cursor-pointer font-medium transition-all ${viewMode === "product" ? "bg-red-600 text-white" : "text-[#888]"
                }`}
            >
              <Box />
              By Product
            </button>
            <button
              onClick={() => handleViewModeChange("brand")}
              className={`px-4 py-2 flex gap-1.5 rounded-[20px] uppercase text-base cursor-pointer font-medium transition-all ${viewMode === "brand" ? "bg-red-600 text-white" : "text-[#888]"
                }`}
            >
              <Boxes />
              By Brand
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-5 md:gap-10 border-b border-white/30 pb-6 mb-10 font-raleway font-medium justify-center" data-aos="fade-up" data-aos-delay="100">
          {filterItems.map((cat) => (
            <div
              key={cat}
              className={`${activeCategory === cat && "bg-linear-to-b from-transparent to-[#680C0C] p-px rounded-full "}`}
            >
              <button
                onClick={() => handleCategoryClick(cat)}
                className={`text-[14px] md:text-base tracking-wide py-2 px-6 rounded-full transition-all ${activeCategory === cat
                  ? "text-[#CE1919] bg-[#0d0d0d]"
                  : "text-white hover:text-red-400"
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
        <div className="relative min-h-[400px]">
          {loading && (
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4" data-aos="fade-up" data-aos-delay="200">
            {displayProducts.length > 0 ? (
              displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl relative bg-white/5 backdrop-blur-md border border-white/10 p-1 shadow-[10px]"
                >
                  <Link href={`/products/${product.slug}`}>
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
                            <span className="relative z-10 text-[9px] text-black font-rammetto-one text-center leading-none">
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
                      <h3 className="text-white text-[10px] md:text-base font-raleway font-semibold mt-1 line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-[#979797] font-revalia text-[8px] md:text-[14px]">
                        product id :{product.id.slice(-9).toUpperCase()}
                      </p>
                      <p className="mt-2 text-white font-bold font-raleway text-[10px] md:text-base">
                        ₹ {product.price.toLocaleString()}
                      </p>
                      <p className="mt-2 text-[#979797] font-light font-revalia text-[8px] md:text-[10px]">
                        MRP (including all Taxes){" "}
                        <span className="line-through">₹{product.mrp.toLocaleString()}</span>
                      </p>

                      <p className="text-white text-[10px] md:text-sm mt-2 font-raleway">
                        Save{" "}
                        <span className="font-bold">
                          ₹{product.save.toLocaleString()}
                        </span>
                      </p>

                      <button className="mt-3 text-red-500 gap-2 text-[10px] md:text-xs hover:underline flex font-raleway font-medium tracking-wide cursor-pointer transition-all">
                        View Details{" "}
                        <span>
                          <ArrowRight size={16} />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              !loading && (
                <div className="col-span-full py-20 text-center text-[#555] uppercase text-[12px] font-black tracking-widest">
                  No products found in this category
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
