const Banner = () => {
  return (
    <div className=" w-full min-h-screen">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h3 className="uppercase text-[24px] font-sans text-[#CE1919] mb-5">
          Contact us
        </h3>
        <h1 className="text-[68px] text-center diamond-text leading-none font-semibold font-raleway">
          Get In Touch
        </h1>
        <p className="text-[28px] mt-5 font-light font-roboto text-center max-w-225">
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
