const LocationSection = () => {
  return (
    <div className=" w-full md:min-h-screen">
      <div className="md:h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-[36px] md:text-[68px] text-center diamond-text leading-none font-semibold font-raleway">
          Find us
        </h1>
        <p className="md:text-[28px] text-[16px] mt-5 font-light font-roboto text-center max-w-225">
          Visit our
          <span className="text-[#979797]"> showroom</span>
        </p>
        <section className="w-full md:pt-20 pt-5">
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            <div className="relative w-full h-55.5 md:h-96 rounded-[40px] overflow-hidden shadow-2xl">
              <iframe
                title="Kandeth Kitchen Location"
                src="https://www.google.com/maps?q=Kandeth%20Kitchen%20Accessories%20Ernakulam&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocationSection;
