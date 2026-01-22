import AboutSection from "../AboutSection";

const BottomGlow = () => {
  return (
    <div className="w-full h-screen relative font-sans z-20 mb-50">
      <div className="z-10 flex h-[200vh] w-[150vw] overflow-hidden  rounded-b-full absolute -top-170 md:-top-142  left-[50%] translate-x-[-50%] shadow-[0px_2px_30.5px_-1px_rgba(248,2,2,0.7)]">
        <div className="h-full w-full hidden md:block rounded-b-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_20%,rgba(0,0,0,0)_50%,rgba(0,0,0,0.3)_80%,rgba(0,0,0,1)_100%)] absolute z-10"></div>
        <AboutSection />
      </div>
    </div>
  );
};

export default BottomGlow;
