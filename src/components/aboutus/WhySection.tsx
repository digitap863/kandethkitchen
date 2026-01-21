interface Feature  {
  id: number;
  title: string;
  description: string;
  highlighted?: boolean;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Premium Brands",
    description:
      "Access to top international and national brands like Ebco, Faber, Hettich, Franke, and more.",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description:
      "Our team helps you choose the right products for your space, budget, and lifestyle.",
  },
  {
    id: 3,
    title: "After-Sales Support",
    description:
      "Dedicated service team with quick response times and genuine replacement parts.",
  },
  {
    id: 4,
    title: "Professional Installation",
    description:
      "Trained technicians ensure your appliances are installed correctly and safely.",
  },
  {
    id: 5,
    title: "Competitive Pricing",
    description:
      "Best value for premium products with flexible payment options available.",
  },
  {
    id: 6,
    title: "Wide Selection",
    description:
      "From hinges to chimneys, find everything your kitchen needs under one roof.",
  },
];

const WhySection = () => {
  return (
    <div className=" w-full min-h-screen relative pt-20">
      <div className=" w-full flex flex-col justify-center items-center relative z-30 ">
        <h1 className="text-[24px] md:text-[52px] text-center diamond-text leading-none font-semibold font-raleway">
          Why Choose Kandeth?
        </h1>
        <p className="text-[14px] md:text-[28px] mt-5 font-light font-roboto text-center">
          Experience the difference of working with
          <br /> Kerala&apos;s trusted kitchen experts
        </p>
        <section className="relative w-full pt-24 overflow-hidden font-roboto">
          {/* Background glow */}

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`rounded-[20px] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)] bg-white/2 backdrop-blur-md py-6 md:py-10 px-6 transition border border-white/4 relative overflow-hidden`}
              >
                <div className="absolute h-80 w-80 bg-[#ACACAC]/90 blur-[600px] -bottom-[60%] -left-[60%]"></div>
                <h3 className="text-white text-[16px] md:text-[20px] font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-white/60 text-sm font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhySection;
