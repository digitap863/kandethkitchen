const Banner = () => {
  return (
    <div className=" w-full min-h-[60vh] md:min-h-screen">
      <div className="h-[60vh] md:h-screen w-full flex flex-col justify-center items-center px-4" data-aos="zoom-in">
        <h3 className="uppercase text-[18px] md:text-[24px] font-sans text-[#CE1919] mb-5">
          Our Services
        </h3>
        <h1 className="md:text-[68px] text-[36px] text-center diamond-text leading-none font-semibold font-raleway">
          Comprehensive
          <br />
          Kitchen Solutions
        </h1>
        <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center max-w-228">
          From expert consultation to installation and after-sales support, we
          deliver complete solutions{" "}
          <span className="text-[#979797]">
            for modern kitchens and interiors using premium global brands
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
