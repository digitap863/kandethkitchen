import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-15 md:py-30">
      {/* Background */}
      <div className="absolute top-0 h-full w-full bg-[linear-gradient(135deg,rgba(13,13,13,0.9)_0%,rgba(13,13,13,0.7)_40%,rgba(13,13,13,0.7)_80%,rgba(13,13,13,0.9)_100%)] z-20"></div>
      <div className="absolute top-0 h-full w-full z-10">
        <Image src={"/aboutus/b3.png"} alt="bg" fill />
      </div>
      {/* Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-white text-[28px] md:text-[36px] font-semibold font-raleway">
          Can&apos;t Find What You&apos;re Looking For?
        </h2>

        <p className="mt-3 text-white/80 text-[16px] md:text-[24px] font-roboto font-light">
          Contact us and our team will help you find the perfect products for
          your kitchen.
        </p>

        <div className="mt-14 flex justify-center gap-6 flex-wrap">
          <div className=" flex justify-center">
            <Link href={"/contactus"}>
            <div className="relative">
              <div className="text-base font-sans uppercase flex items-center gap-4 relative z-10 bg-black border border-white py-2 px-4">
               Contact us
                <span>
                  <ArrowRight size={16} />
                </span>
              </div>
              <div className="h-full w-full absolute border border-white top-1 left-1 z-0"></div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
