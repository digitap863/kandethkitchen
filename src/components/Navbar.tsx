import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav/NavLink";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
  ];
  return (
    <div className="w-full  z-150 fixed  px-4 md:px-10 hidden md:block">
      <div className="text-white flex items-center justify-between  max-w-7xl mx-auto py-5">
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
        <nav className=" py-1 px-1.5 gap-12 hidden md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              href={link.path}
              className="text-[16px] py-2  px-4 font-sans uppercase"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <Link href={"/contactus"}>
          <div className="py-3 px-6 bg-[#AA1E1E] border border-white uppercase font-sans">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
