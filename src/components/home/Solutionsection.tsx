import Image from "next/image";

const Solutionsection = () => {
  return (
    <section className="relative w-full  pt-10 md:py-20 overflow-hidden md:px-10">
      <div className="h-30 w-30 bg-red-500 left-[50%] top-[40%] blur-[150px] absolute z-10"></div>
      <div className="w-full mx-auto h-full absolute">
        <Image src={"/home/bggrid.png"} alt="bg" fill className="z-20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center">

        <div className="md:hidden block w-full px-4">
          <div className="flex flex-col items-start">
            <h2 className="md:text-[52px] diamond-text leading-none font-semibold font-raleway text-[20px]">
              <span className="block text-center">Solutions for</span>
              <span className="block text-center">every kitchen size</span>
              <span className="block text-center">& lifestyle</span>
            </h2>
          </div>

          <div className="flex justify-end mt-2 mb-10">
            <p className="mt-6 max-w-[288px] text-white text-[16px] md:text-[28px] font-roboto font-light text-center">
              Whether you&apos;re{" "}
              <span className="text-[#666666]">building a new kitchen</span> or
              upgrading <span className="text-[#666666]">an existing one,</span>{" "}
              our product range adapts effortlessly to{" "}
              <span className="text-[#666666]">your space.</span>
            </p>
          </div>
        </div>
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-90 h-133.75 rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/home/svideo.mp4"
              loop
              muted
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
            >
              <div className="w-full h-full bg-gray-900" />
            </video>
          </div>
        </div>

        {/* Right Content */}
        <div className=" flex flex-col justify-between">
          <div className="hidden flex-col items-start -translate-x-30 md:flex">
            <h2 className="text-[52px] diamond-text leading-none font-semibold font-raleway">
              <span className="block text-center">Solutions for</span>
              <span className="block text-center">every kitchen size</span>
              <span className="block text-center">& lifestyle</span>
            </h2>
          </div>

          <div className="md:flex hidden justify-end mt-5 ">
            <p className="mt-6 text-white text-[28px] font-roboto font-light text-center max-w-140">
              Whether you&apos;re{" "}
              <span className="text-[#666666]">building a new kitchen</span> or
              upgrading <span className="text-[#666666]">an existing one,</span>{" "}
              our product range adapts effortlessly to{" "}
              <span className="text-[#666666]">your space.</span>
            </p>
          </div>

          {/* Pills */}
          <div className="mt-10 px-5 flex justify-center flex-wrap gap-6 max-w-155 md:-translate-x-30">
            <div className="rounded-full bg-linear-to-r from-[#CE1919] to-[#999999] p-px">
              <span className="block px-4 py-1 rounded-full bg-black/90 text-white/70 text-sm">
                Apartments & villas
              </span>
            </div>
            <div className="rounded-full bg-linear-to-r from-[#CE1919] to-[#999999] p-px">
              <span className="block px-4 py-1 rounded-full bg-black/90 text-white/70 text-sm">
                Modular kitchens
              </span>
            </div>
            <div className="rounded-full bg-linear-to-r from-[#CE1919] to-[#999999] p-px">
              <span className="block px-4 py-1 rounded-full bg-black/90 text-white/70 text-sm">
                Compact & luxury kitchens
              </span>
            </div>
            <div className="rounded-full bg-linear-to-r from-[#CE1919] to-[#999999] p-px">
              <span className="block px-4 py-1 rounded-full bg-black/90 text-white/70 text-sm">
                Renovations & upgrades
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutionsection;
