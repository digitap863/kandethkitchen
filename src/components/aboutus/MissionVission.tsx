const MissionVission = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Mission Card */}
        <div>
          <div className="rounded-4xl bg-linear-to-b from-[#CE1919]/30 to-[#680C0C]/30 p-px">
            <div className="rounded-4xl  p-6 md:p-10 bg-[#0D0D0D] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] relative overflow-hidden">
              <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
              <h3 className="text-[20px] md:text-[28px] text-center diamond-text leading-none font-semibold font-raleway mb-6">
                Our Mission
              </h3>

              <p className="font-roboto font-light text-[14px] md:text-base text-white text-center max-w-109.25">
                To enhance everyday living by delivering premium kitchen
                accessories, hardware, and appliances that combine design
                excellence, durability, and smart functionality.
                <br /> We are committed to offering carefully curated global
                brands, expert guidance, and reliable service—helping customers
                create kitchens that are efficient, elegant, and built to last.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="mt-10">
          <div className="rounded-4xl bg-linear-to-b from-[#CE1919]/30 to-[#680C0C]/30 p-px ">
            <div className="rounded-4xl p-6 md:p-10 bg-[#0D0D0D] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] p-10 relative overflow-hidden">
              <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -right-[60%]"></div>
              <h3 className="text-[20px] md:text-[28px] text-center diamond-text leading-none font-semibold font-raleway mb-6">
                Our Vision
              </h3>

              <p className="font-roboto font-light text-[14px] md:text-base text-white text-center max-w-109.25">
                To become a trusted leader in modern kitchen solutions, setting
                benchmarks in quality, innovation, and customer experience.
                <br />
                We envision kitchens that inspire creativity, simplify daily
                life, and reflect contemporary lifestyles—powered by
                thoughtfully engineered products and professional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
