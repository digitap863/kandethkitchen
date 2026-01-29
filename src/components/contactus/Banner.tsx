const Banner = () => {
  return (
    <div className=" w-full min-h-[50vh] md:min-h-screen">
      <div className="h-[50vh] md:h-screen w-full px-4 md:px-0 flex flex-col justify-center items-center" data-aos="zoom-in">
        <h3 className="uppercase text-[18px] md:text-[24px] font-sans text-[#CE1919] mb-5">
          Contact us
        </h3>
        <h1 className="text-[36px] md:text-[68px] text-center diamond-text leading-none font-semibold font-raleway">
          Get In Touch
        </h1>
        <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center max-w-225">
          Have questions? We&apos;d love to hear from you.
          <span className="text-[#979797]">{" "}
            Send us a message and we&apos;ll respond as soon as possible.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
