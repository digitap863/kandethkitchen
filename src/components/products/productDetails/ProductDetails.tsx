"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useProductStore } from "@/stores/user/productStore";


const ProductDetails: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const { currentProduct, fetchProductBySlug, loading } = useProductStore();
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug);
    }
  }, [slug, fetchProductBySlug]);

  useEffect(() => {
    if (currentProduct?.img && currentProduct.img.length > 0) {
      setActiveImage(currentProduct.img[0]);
    }
  }, [currentProduct]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white font-raleway">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <button
            onClick={() => window.history.back()}
            className="mt-4 text-red-500 hover:underline cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const mrp = parseFloat(currentProduct.mrp) || 0;
  const offer = parseFloat(currentProduct.offer) || 0;
  const discountedPrice = mrp - (mrp * (offer / 100));
  const saveAmount = mrp - discountedPrice;

  return (
    <section className="relative w-full pt-44 pb-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-30">
        {/* Left: Image Gallery */}
        <div className="">
          <div className="block md:hidden font-raleway mb-10">
            <p className="text-[#CE1919]  uppercase tracking-wide text-base font-medium">
              {currentProduct.brand}
            </p>

            <h1 className="mt-2 text-[20px] md:text-[28px] text-white font-semibold">
              {currentProduct.title}
            </h1>

            <p className="mt-6 text-[#979797] text-base font-light leading-relaxed max-w-xl">
              {currentProduct.desc}
            </p>
          </div>
          <div className="relative rounded-[10px]">
            <div className="absolute top-5 w-full px-5 z-10 flex justify-between items-center mb-3 font-raleway font-semibold">
              <span className="px-5 py-1.5 text-xs rounded-full bg-[#3D3C3C] text-white uppercase">
                {currentProduct.productType}
              </span>
              <span className="px-5 py-1.5 text-xs rounded-full bg-[#CE1919] text-white uppercase">
                {currentProduct.brand}
              </span>
            </div>

            <div className="relative w-full h-84 md:h-130 rounded-[10px]">
              {activeImage && (
                <Image
                  src={activeImage}
                  alt={currentProduct.title}
                  fill
                  className="object-cover rounded-[10px]"
                />
              )}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex flex-wrap gap-4 px-8 md:px-0">
            {currentProduct.img.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`relative h-13.75 w-13.75 md:w-22 md:h-22 overflow-hidden border transition-all cursor-pointer ${activeImage === img ? "border-red-600 scale-105" : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
              >
                <Image src={img} alt={`${currentProduct.title} thumb ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="font-raleway">
          <div className="md:block hidden">
            <p className="text-[#CE1919]  uppercase tracking-wide text-base font-medium">
              {currentProduct.brand}
            </p>

            <h1 className="mt-2 text-[28px] text-white font-semibold">
              {currentProduct.title}
            </h1>

            <p className="mt-6 text-[#979797] text-base font-light leading-relaxed max-w-xl">
              {currentProduct.desc}
            </p>
          </div>

          {/* Features & Specs */}
          <div className="md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentProduct.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-white text-base font-semibold mb-4 border-l-2 border-red-600 pl-3">
                  Key Features
                </h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {currentProduct.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#CE1919]">
                        <Check size={14} />{" "}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentProduct.specifications.length > 0 && (
              <div>
                <h3 className="text-white text-base font-semibold mb-4 border-l-2 border-red-600 pl-3">
                  Specifications
                </h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  {currentProduct.specifications.map((spec, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#CE1919]">
                        <Check size={14} />{" "}
                      </span>{" "}
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="mt-10 space-y-4">
            <div className="flex items-baseline gap-4">
              <p className="text-white text-3xl font-bold">₹ {discountedPrice.toLocaleString()}</p>
              {offer > 0 && (
                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded">
                  {offer}% OFF
                </span>
              )}
            </div>
            <p className="text-white/40 text-sm font-revalia font-light">
              MRP (Including all taxes){" "}
              <span className="line-through ">₹{mrp.toLocaleString()}</span>
            </p>
            {offer > 0 && (
              <p className="text-white text-sm mt-1">
                Save <span className="font-bold">₹{saveAmount.toLocaleString()}</span>
              </p>
            )}
          </div>

          {/* CTAs */}
          <div className="mt-14 md:mt-30 md:pl-10 flex gap-10 md:gap-20 flex-wrap">
            <div className=" flex justify-center">
              <div className="relative group">
                <div className="text-base uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-6 hover:bg-white hover:text-black transition-all cursor-pointer">
                  Enquire Now
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </div>
                <div className="h-full w-full absolute border border-white top-1 left-1 bg-black z-0 group-hover:top-0 group-hover:left-0 transition-all"></div>
              </div>
            </div>

            <button
              onClick={() => window.history.back()}
              className=" text-white/70 hover:text-white transition flex items-center uppercase gap-2 cursor-pointer group"
            >
              Go Back{" "}
              <span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
