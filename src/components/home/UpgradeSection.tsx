import Image from "next/image";

const UpgradeSection = () => {
  return (
    <div className="w-full relative min-h-screen flex justify-center items-center">
      <div className="h-60 w-55 absolute top-60 left-40 z-10">
        <Image src={"/home/up1.svg"} fill alt="upgrade1" />
      </div>
      <div className="h-52 w-52 absolute top-120 right-[50%] z-10 ">
        <div className="h-full w-full bg-linear-to-l from-[#0D0D0D] via-transparent to-transparent relative z-10">
          <div className="h-full w-full bg-linear-to-b from-[#0D0D0D] via-transparent to-transparent relative z-10"></div>
        </div>
        <Image src={"/home/up2.svg"} fill alt="upgrade2" className="" />
      </div>
      <div className="h-58 w-65 absolute top-60 right-10 z-10">
        <Image src={"/home/up3.svg"} fill alt="upgrade3" />
      </div>
      <div className="flex-1 max-w-211.5 mx-auto relative z-20">
        <h1 className="text-[52px] diamond-text leading-none font-semibold font-raleway text-center">
          Upgrade your kitchen
          <br />
          Upgrade your everyday <br /> living.
        </h1>

        <p className="mt-6 text-white font-light text-[28px] text-center font-roboto">
          Silent chimneys, dependable hobs, premium-grade fittings, and
          professional installation—everything your kitchen needs to perform
          flawlessly. No compromises. No frustrations. Just a kitchen that works
          beautifully, every day.
        </p>
      </div>
    </div>
  );
};

export default UpgradeSection;
