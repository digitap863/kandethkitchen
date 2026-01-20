import Image from "next/image";
import React from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  image: string;
  rating: number;
  price: string;
  save: string;
  discount?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Hob PRIME HT703 CRS BR CLAI",
    brand: "FABER",
    image: "/placeholder.png",
    rating: 4.5,
    price: "₹10,000",
    save: "₹2,345",
    discount: "30% OFF",
  },
  {
    id: 2,
    name: "Hob PRIME HT703 CRS BR CLAI",
    brand: "FABER",
    image: "/placeholder.png",
    rating: 4.5,
    price: "₹10,000",
    save: "₹2,345",
  },
  {
    id: 3,
    name: "Hob PRIME HT703 CRS BR CLAI",
    brand: "PURE FLAMES",
    image: "/placeholder.png",
    rating: 4.5,
    price: "₹10,000",
    save: "₹2,345",
  },
  {
    id: 4,
    name: "Hob PRIME HT703 CRS BR CLAI",
    brand: "FABER",
    image: "/placeholder.png",
    rating: 4.5,
    price: "₹10,000",
    save: "₹2,345",
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0000]/40 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-xl font-semibold">HOBS</h2>
          <button className="text-white/60 text-sm hover:text-white">
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 shadow-xl"
            >
              {/* Tags */}
              <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70">
                  HOB
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-red-600 text-white">
                  {product.brand}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full h-[160px] mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />

                {product.discount && (
                  <span className="absolute bottom-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Info */}
              <div>
                <p className="text-yellow-400 text-sm">
                  {product.rating} ★
                </p>
                <h3 className="text-white text-sm mt-1">
                  {product.name}
                </h3>

                <p className="mt-2 text-white font-semibold">
                  {product.price}
                </p>

                <p className="text-white/40 text-xs">
                  Save {product.save}
                </p>

                <button className="mt-3 text-red-500 text-xs hover:underline">
                  Enquire now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
