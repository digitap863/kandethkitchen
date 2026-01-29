"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useProductStore } from "@/stores/user/productStore";

const RelatedProducts: React.FC = () => {
  const { currentProduct, relatedProducts, fetchRelatedProducts } = useProductStore();

  useEffect(() => {
    if (currentProduct) {
      fetchRelatedProducts({
        productType: currentProduct.productType,
        brand: currentProduct.brand,
        excludeId: currentProduct._id
      });
    }
  }, [currentProduct, fetchRelatedProducts]);

  if (!relatedProducts || relatedProducts.length === 0) {
    return null;
  }

  return (
    <>
      <section className="hidden md:block relative w-full bg-white/4 pt-20 overflow-hidden font-raleway">
        {/* Glow */}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-white text-lg tracking-widest uppercase">
              Related Products
            </h2>
            <Link href="/products" className="text-white/60 text-sm font-medium hover:text-white transition flex gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-4">
            {relatedProducts.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product._id}
                className="rounded-xl bg-[#2B2B2B] p-1 group transition-transform hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative bg-white rounded-t-xl p-4">
                  <span className="absolute px-5 py-1.5 text-[10px] rounded-full z-20 bg-[#3D3C3C] text-white uppercase font-bold top-4 left-4">
                    {product.productType}
                  </span>

                  <div className="relative z-10 w-full h-48 md:h-60">
                    <Image
                      src={product.img[0]}
                      alt={product.title}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <h3 className="mt-1 text-white text-sm leading-snug font-medium line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h3>

                  <p className="mt-1 text-red-500 text-xs uppercase tracking-widest font-bold">
                    {product.brand}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center font-raleway uppercase py-20">
        <Link href={"/products"} className="flex gap-3 text-white hover:text-red-500 transition-colors">
          <ArrowLeft />
          Back To Products
        </Link>
      </div>
    </>
  );
};

export default RelatedProducts;
