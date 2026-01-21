import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type RelatedProduct = {
  id: number;
  name: string;
  brand: string;
  category: string;
  rating: number;
  image: string;
};

const relatedProducts: RelatedProduct[] = [
  {
    id: 1,
    name: "Hob MagicLift HT904 BR CI AI",
    brand: "FABER",
    category: "HOB",
    rating: 4.5,
    image: "/products/p1.png",
  },
  {
    id: 2,
    name: "Hob Prime HT703 CRS BR CI",
    brand: "PURE FLAMES",
    category: "HOB",
    rating: 4.3,
    image: "/products/p1.png",
  },
  {
    id: 3,
    name: "Hob Supreme X500",
    brand: "FABER",
    category: "HOB",
    rating: 4.6,
    image: "/products/p1.png",
  },
  {
    id: 3,
    name: "Hob Supreme X500",
    brand: "FABER",
    category: "HOB",
    rating: 4.6,
    image: "/products/p1.png",
  },
];

const RelatedProducts: React.FC = () => {
  return (
    <>
      <section className="relative w-full bg-white/4 pt-20 overflow-hidden font-raleway">
        {/* Glow */}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-white text-lg tracking-widest uppercase">
              Related Products
            </h2>
            <button className="text-white/60 text-sm font-medium hover:text-white transition flex gap-1">
              View All <ArrowRight size={16} />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-6 overflow-x-auto pb-4">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-60 rounded-xl bg-[#2B2B2B] p-1"
              >
                {/* Image */}
                <div className="relative bg-white rounded-t-xl p-4">
                  <span className="absolute px-5 py-1.5 text-xs rounded-full z-20 bg-[#3D3C3C] text-white">
                    {product.category}
                  </span>

                  <div className="relative z-10 w-full h-61">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-3">
                  <p className="text-yellow-400 font-roboto gap-1 text-sm flex">
                    {product.rating} <Star size={16} className="mt-0.5" />
                  </p>

                  <h3 className="mt-1 text-white text-sm leading-snug">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-red-500 text-xs uppercase tracking-wide">
                    {product.brand}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center font-raleway uppercase py-20">
        <Link href={"/products"} className="flex gap-3">
          <ArrowLeft />
          Back To Products
        </Link>
      </div>
    </>
  );
};

export default RelatedProducts;
