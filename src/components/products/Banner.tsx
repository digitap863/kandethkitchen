const Banner = () => {
  return (
    <div className=" w-full min-h-[80vh]">
      <div className="h-[80vh] w-full flex flex-col justify-center items-center">
        <h3 className="uppercase text-[24px] font-sans text-[#CE1919] mb-5">
          Our Products
        </h3>
        <h1 className="text-[68px] text-center diamond-text leading-none font-semibold font-raleway">
          Premium Products
        </h1>
        <p className="text-[28px] mt-5 font-light font-roboto text-center max-w-225">
          Every product category designed with
          <span className="text-[#979797]">
            {" "}
            precision and built for modern lifestyles.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
