"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface ProductTag {
  name: string;
}

interface KitchenProduct {
  id: number;
  title: string;
  image: string;
  tags: ProductTag[];
}

const products: KitchenProduct[] = [
  {
    id: 1,
    title: "Wardrobe",
    image: "/home/de1.png",
    tags: [
      { name: "EBCO" },
      { name: "SLEEK" },
      { name: "OLIVE" },
      { name: "EVERSHINE" },
    ],
  },
  {
    id: 2,
    title: "Hobs",
    image: "/home/de2.png",
    tags: [{ name: "FABER" }, { name: "PURE FLAMES" }],
  },
  {
    id: 3,
    title: "Chimney",
    image: "/home/de3.png",
    tags: [{ name: "FABER" }, { name: "SUNSHINE" }, { name: "PURE FLAMES" }],
  },
  {
    id: 4,
    title: "Kitchen",
    image: "/home/de4.png",
    tags: [
      { name: "EBCO" },
      { name: "SLEEK" },
      { name: "HETTICH" },
      { name: "METTA" },
    ],
  },
  {
    id: 5,
    title: "cabin lights",
    image: "/home/de5.png",
    tags: [{ name: "EBCO" }],
  },
  {
    id: 6,
    title: "sinks",
    image: "/home/de6.jpg",
    tags: [{ name: "FRANKE" }, { name: "SYLUX" }],
  },
  {
    id: 7,
    title: "edge bands",
    image: "/home/de7.jpg",
    tags: [{ name: "E3" }],
  },
  {
    id: 8,
    title: "wall cladding",
    image: "/home/de8.jpg",
    tags: [{ name: "E3" }, { name: "AVITUS" }, { name: "POLUWOOD" }],
  },
  {
    id: 9,
    title: "profiles",
    image: "/home/de9.jpg",
    tags: [{ name: "EBCO" }, { name: "SLEEK" }, { name: "METTA" }],
  },
  {
    id: 10,
    title: "interior cabinet lights",
    image: "/home/de10.jpg",
    tags: [{ name: "EBCO" }],
  },
  {
    id: 11,
    title: "door locks",
    image: "/home/de11.jpg",
    tags: [{ name: "DOOR SET" }, { name: "JOLLY" }, { name: "DEKLER" }],
  },
  {
    id: 12,
    title: "office furniture fittings",
    image: "/home/de12.jpg",
    tags: [{ name: "EBCO" }],
  },
  {
    id: 13,
    title: "architectural hardware",
    image: "/home/de13.jpg",
    tags: [{ name: "EBCO" }, { name: "METTA" }],
  },
];

export default function KitchenDesign() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative z-30 overflow-hidden bg-[#0D0D0D] pt-10 md:pt-20 lg:pt-32">
      <div className="w-full px-5 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-7xl mx-auto flex flex-col md:items-end md:mb-16 md:flex-row" data-aos="fade-down">
          <div className="flex-1 md:flex md:gap-30 items-end">
            <div className="flex justify-start md:mb-25">
              <h1 className="text-[24px] md:text-[52px] diamond-text leading-none font-semibold font-raleway text-center">
                Explore the art of
                <br />
                Kitchen
                <br className="hidden md:block" /> design
              </h1>
            </div>
            <p className="text-[16px] float-end md:float-none md:text-[28px]  font-light leading-snug text-white mt-5">
              A collection <span className="text-[#ACACAC]">that inspires</span>{" "}
              Culinary
              <br /> excellence with premium{" "}
              <span className="text-[#ACACAC]">quality</span>
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-end justify-end shrink-0 gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded border border-white/20 bg-transparent text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/10 active:translate-y-0 md:h-12 md:w-12"
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded border border-white/20 bg-transparent text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/10 active:translate-y-0 md:h-12 md:w-12"
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative" data-aos="fade-up">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.2}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
            }}
            className="kitchen-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="h-full cursor-pointer group">
                  <div className="relative  overflow-hidden rounded-lg bg-black h-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 23vw, 18vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#080A0C] via-[#080A0C]/70 to-transparent p-6">
                      <h3 className="mb-3 text-xl capitalize text-white md:text-2xl font-raleway">
                        {product.title}
                      </h3>
                      <div className="flex flex-col gap-1 min-h-25">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-[14px] font-medium uppercase tracking-wider text-[#A7A7A7]"
                          >
                            <span className="text-[#CE1919]">•</span> {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
