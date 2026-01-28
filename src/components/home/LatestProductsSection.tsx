"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useProductStore } from "@/stores/user/productStore";

interface CardProps {
  product: any;
}

const SmallProductCard: React.FC<CardProps> = ({ product }) => (
  <Link href={`/products/${product.slug}`} className="group h-full">
    <div className="rounded-[15px] md:rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 p-2 md:p-6 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden pt-5 md:pt-16 relative h-full flex flex-col">
      <div className="absolute h-80 w-80 bg-[#ACACAC]/40 blur-[100px] -bottom-[60%] -left-[60%] pointer-events-none"></div>
      <h3 className="text-white text-[16px] md:text-[28px] font-semibold group-hover:text-red-500 transition-colors line-clamp-1">{product.title}</h3>

      <div className="mt-2 h-10 md:h-12 overflow-hidden">
        <p className="text-white/60 text-[12px] md:text-sm leading-relaxed font-light line-clamp-2">
          {product.desc}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-white/70 text-[14px] md:text-[20px] font-medium uppercase font-raleway tracking-wider">
          {product.brand}
        </span>
      </div>

      <div className="flex justify-center mt-auto">
        <div className="relative mt-6 md:w-51.5 md:h-40 w-23.25 h-18.25 rounded-[15px] md:rounded-4xl overflow-hidden">
          <Image
            src={product.img[0] || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </Link>
);

const LargeProductCard: React.FC<CardProps> = ({ product }) => (
  <Link href={`/products/${product.slug}`} className="group col-span-2">
    <div className="rounded-[15px] md:rounded-4xl bg-white/2 backdrop-blur-md border border-white/5 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] font-roboto overflow-hidden px-3 py-7 md:p-16 col-span-2 flex flex-col md:flex-row gap-5 relative group">
      <div className="absolute h-100 w-100 bg-[#ACACAC]/40 blur-[150px] -bottom-[50%] -left-[60%] pointer-events-none"></div>
      <div className="flex-1">
        <h3 className="text-white text-base md:text-[28px] font-semibold group-hover:text-red-500 transition-colors line-clamp-2">{product.title}</h3>

        <div className="mt-4 h-15 md:h-20 overflow-hidden">
          <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light line-clamp-3">
            {product.desc}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-white/70 text-xs md:text-[20px] font-medium uppercase font-raleway tracking-wider">{product.brand}</span>
        </div>
      </div>

      <div className="flex gap-5 md:gap-10 md:pr-10 shrink-0">
        <div className="relative md:w-46.25 w-20.75 h-18.25 md:h-41.25 rounded-[15px] md:rounded-4xl overflow-hidden border border-white/5">
          <Image
            src={product.img[0] || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="relative md:w-46.25 w-20.75 h-18.25 md:h-41.25 rounded-[15px] md:rounded-4xl overflow-hidden translate-y-6 border border-white/5 md:block hidden">
          <Image
            src={product.img[1] || product.img[0] || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 delay-100"
          />
        </div>
      </div>
    </div>
  </Link>
);

const LatestProductsSection = () => {
  const { latestProducts, fetchLatestProducts, loading } = useProductStore();

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  return (
    <div className="min-h-screen w-full relative py-20 px-4 md:px-0 overflow-hidden">
      <div className="w-full md:flex justify-center mb-20 px-4">
        <div className="md:flex gap-30 items-end ">
          <div className="flex justify-start mb-5 md:mb-25">
            <h1 className="text-[24px] md:text-[52px] diamond-text leading-none font-semibold font-raleway text-center">
              Explore our latest
              <br />
              Products
            </h1>
          </div>
          <p className="text-[16px] md:text-[28px] float-end font-light leading-snug text-white font-roboto">
            Every product category designed with
            <br /> precision and built for modern lifestyles.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3">
        {loading && latestProducts.length === 0 ? (
          <div className="flex justify-center items-center py-40">
            <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:gap-y-10 gap-y-8 gap-x-4 md:gap-x-20">
            {latestProducts.slice(0, 5).map((product, index) => {
              if (index === 2) {
                return <LargeProductCard key={product._id} product={product} />;
              }
              return <SmallProductCard key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto flex justify-end px-4 md:px-10">
        <Link href="/products" className="mt-10 flex justify-center group">
          <div className="relative">
            <div className="text-base uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-6 group-hover:bg-white group-hover:text-black transition-all">
              View All Products
              <span>
                <ArrowRight size={16} />
              </span>
            </div>
            <div className="h-full w-full absolute border border-white top-1 left-1 bg-black z-0 group-hover:top-0 group-hover:left-0 transition-all"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestProductsSection;
