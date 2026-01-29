import Image from "next/image";

const StorySection = () => {
  return (
    <div className=" w-full min-h-screen relative">
      <div className="absolute h-full w-full">
        <Image src={"/aboutus/b1.png"} alt="bg" fill className="opacity-15 object-cover" />
      </div>
      <div className="absolute h-full w-full bg-[linear-gradient(90deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.2)_20%,rgba(13,13,13,0)_50%,rgba(13,13,13,0.2)_80%,rgba(13,13,13,1)_100%)]"></div>
      <div className="absolute h-full w-full bg-[linear-gradient(180deg,rgba(13,13,13,1)_0%,rgba(13,13,13,0.2)_20%,rgba(13,13,13,0)_50%,rgba(13,13,13,0.2)_80%,rgba(13,13,13,1)_100%)]"></div>
      <div className="h-screen w-full flex flex-col justify-center items-center px-4 md:px-0 relative z-30">
        <h1 className="text-[24px] md:text-[52px] text-center diamond-text leading-none font-semibold font-raleway" data-aos="fade-down">
          Our Story
        </h1>
        <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center">
          A journey of passion and excellence
        </p>
        <div className="font-roboto font-light text-[16px] md:text-lg text-white max-w-234.25 text-center space-y-5 mt-10" data-aos="fade-up" data-aos-delay="200">
          <p>
            At Kandeth Kitchen Accessories & Appliances,{" "}
            <span className="text-[#979797]">
              {" "}
              we offer a carefully curated range of premium kitchen accessories,
              hardware, and modern appliances from trusted global brands
            </span>
            —designed to elevate both functionality and aesthetics.
          </p>
          <p>
            Our journey began in 2006–07 with our first showroom at thykoodam,{" "}
            <span className="text-[#979797]">
              Ernakulam. As our reputation for quality and reliability grew, we
              expanded and later relocated to a larger, more accessible space
              near
            </span>{" "}
            FORUM Mall, Maradu, allowing us to better serve our growing customer
            base across Kerala.
          </p>
          <p>
            Over the years, we have evolved into a comprehensive destination for{" "}
            <span className="text-[#979797]">
              kitchen accessories and hardware, interior products, architectural
              hardware, office furniture fittings, wardrobe fittings, and
              premium interior lighting solutions.
            </span>{" "}
            We proudly represent leading brands known for innovation,
            durability, and refined design.
          </p>
          <p>
            Guided by our mission to transform kitchens and interiors into
            spaces of{" "}
            <span className="text-[#979797]">
              efficiency, comfort, and timeless style, we believe that a
              well-designed kitchen is the heart of every home. With expert
              consultation, personalized solutions, and dependable after-sales
              support,
            </span>{" "}
            we partner with homeowners, architects, and interior designers to
            bring inspired spaces to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
