interface Feature {
  id: number;
  text: string;
}

const features: Feature[] = [
  { id: 1, text: "Product selection & comparisons" },
  { id: 2, text: "Layout and functionality advice" },
  { id: 3, text: "Budget-friendly premium solutions" },
  { id: 4, text: "Brand recommendations" },
  { id: 5, text: "Space optimization planning" },
];

const ExpertSection = () => {
  return (
    <div className=" w-full pt-20 relative">
      <div className=" w-full flex px-4 md:px-0 flex-col justify-center items-center relative z-30">
        <h1 className="text-[24px] md:text-[52px] text-center diamond-text leading-none font-semibold font-raleway">
          Expert Consultation
        </h1>
        <p className="text-[16px] md:text-[28px] mt-5 font-light font-roboto text-center max-w-231.5">
          Not sure what suits your kitchen or wardrobe? Our experts help you
          choose the{" "}
          <span className="text-[#979797]">
            {" "}
            right products based on your space, usage, design preference, and
            budget.
          </span>
        </p>
        <section className="relative w-full  pt-20 overflow-hidden font-raleway px-4">
          {/* Background glow */}

          <div className="relative z-10 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-x-16 gap-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className=" py-4 flex justify-center rounded-lg bg-white/2 backdrop-blur-md  text-[#979797]/70 text-sm  border border-[#FF8989]/33 shadow-[inset_0_0_6.1px_0_rgba(219,201,255,0.4)]"
              >
                {feature.text}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpertSection;
