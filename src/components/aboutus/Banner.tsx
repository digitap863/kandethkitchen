const Banner = () => {
  return (
    <div className=" w-full min-h-[60vh]  md:min-h-screen">
      <div className="h-[60vh] md:h-screen w-full flex flex-col justify-center items-center px-4">
        <h3 className="uppercase text-lg md:text-[24px] font-sans text-[#CE1919] mb-5">
          About us
        </h3>
        <h1 className="text-[38px] md:text-[68px] text-center diamond-text leading-none font-semibold font-raleway">
          About KANDETH
          <br />
          Kitchen Accessories &<br /> Appliances
        </h1>
        <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center max-w-225">
          Your trusted partner for{" "}
          <span className="text-[#979797]">
            {" "}
            premium kitchens, hardware&apos;s
          </span>{" "}
          and appliances since 2006
        </p>
      </div>
    </div>
  );
};

export default Banner;
