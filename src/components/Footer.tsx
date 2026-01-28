import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full  bg-white/5 rounded-t-[20px] border border-white/4 mx-1 text-white overflow-hidden font-sans mt-20">
      {/* Glow background */}
      <div className="z-10 hidden md:flex h-[200vh] w-[150vw]  rounded-t-full absolute -bottom-[150%]  left-[50%] translate-x-[-50%] shadow-[0px_-5px_60px_-1px_rgba(248,2,2,0.4),inset_0px_-5px_100px_-1px_rgba(248,2,2,0.4)]"></div>

      <div className="relative z-30 max-w-6xl mx-auto pb-10  pt-20 flex flex-col md:flex-row justify-between gap-16 px-5 md:px-0">
        {/* Left Form */}
        <div>
          <div className="text-[#CE1919] flex items-center gap-2 text-base uppercase tracking-widest">
            <div className="h-1 w-21.75 bg-linear-to-r from-[#CE1919] to-transparent" />
            <span>Get in touch</span>
          </div>

          <h2 className="mt-3 text-[28px] font-raleway leading-tight uppercase text-[#CACBCD]">
            Let’s create <br />
            <span className="text-red-500">something</span> <br />
            beautiful
          </h2>

          <p className="mt-4 text-[#CACBCD] text-sm max-w-md uppercase">
            Share your ideas and let us provide the perfect solution for your
            kitchen transformation.
          </p>

          <div className="mt-8 space-y-5 max-w-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full placeholder:uppercase bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full placeholder:uppercase bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full placeholder:uppercase bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40"
            />
            <textarea
              placeholder="Message"
              className="w-full placeholder:uppercase bg-transparent border-b border-white/20 py-2 outline-none placeholder:text-white/40 resize-none"
            />

            <div className="mt-2 flex">
              <div className="relative">
                <div className="text-base text-[#CE1919] uppercase flex items-center gap-4 relative z-10 bg-black border border-[#CE1919] py-2 px-4">
                  Send Message
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </div>
                <div className="h-full w-full absolute border border-[#CE1919] top-1 left-1 bg-black z-0"></div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-10">
            <p className="text-base font-semibold uppercase tracking-widest text-[#D9D9D9]">
              Follow us
            </p>

            <div className=" flex items-center gap-4">
              <Link href={"https://www.facebook.com/p/Kandeth-Kitchen-Accessories-Vyttila-Cochin-100057456248849/"} target="_blank">
                <div className="w-12 h-12 border border-white  flex items-center justify-center">
                  <Facebook />
                </div>
              </Link>
              <div className="w-12 h-12 border border-white  flex items-center justify-center">
                <Youtube />
              </div>
              <Link href={"https://www.instagram.com/kandeth.kitchenandaccessories/"} target="_blank">
                <div className="w-12 h-12 border border-white  flex items-center justify-center">
                  <Instagram />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div>
          <Link href={"/"}>
            <div className="flex ">
              <Image
                className="h-18.5 w-13.25"
                src="/navbar/logo.jpeg"
                width={53}
                height={74}
                alt="logo"
              />
              <div className="flex flex-col leading-tight ml-2">
                <h1 className="font-times text-[40px] font-black uppercase text-[#CE1919]">
                  Kandeth
                </h1>
                <h1 className="font-times text-[15px] font-bold uppercase tracking-wide">
                  Kitchen & Accessories
                </h1>
              </div>
            </div>
          </Link>

          {/* Address */}
          <div className="mt-8">
            <p className="text-[#D9D9D9] font-sans uppercase font-semibold mb-2">
              Address
            </p>
            <div className="flex gap-8 text-base text-[#D9D9D9] font-sans">
              <MapPin size={30} className="text-[#CE1919]" />
              <p>
                Kandeth Kitchen Accessories <br />
                Pvt Road End, 8/405/B&C <br />
                Near Cochin Granite <br />
                Opposite FORUM Mall <br />
                Ernakulam, Kerala 682304
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6">
            <p className="text-[#D9D9D9] font-sans uppercase font-semibold mb-2">
              Contact
            </p>

            <div className="space-y-2 text-white/60 text-sm">
              <div className="flex gap-5 items-center text-base text-[#D9D9D9] font-sans">
                <Phone size={30} className="text-[#CE1919]" />
                <span>94003 46504, 94469 86504</span>
              </div>

              <div className="flex gap-5 items-center text-base text-[#D9D9D9] font-sans">
                <Mail size={30} className="text-[#CE1919]" />
                <span>kandethkitchen@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <p className="text-[#D9D9D9] font-sans uppercase font-semibold mb-5">
              Quick Links
            </p>

            <div className="flex justify-evenly text-base text-[#D9D9D9] font-sans">
              <div className="flex flex-col gap-2">
                <Link href={"/"}><span>Home</span></Link>
                <Link href={"/services"}><span>Services</span></Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href={"/aboutus"}><span>About us</span></Link>
                <Link href={"/products"}><span>Products</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto relative z-10 border-t border-[#D9D9D9] py-4 text-center text-white text-xs">
          Privacy Policy &nbsp; | &nbsp; Terms of Use &nbsp; | &nbsp; Copyright
          © Tapclone
        </div>
      </div>
    </footer>
  );
};

export default Footer;
