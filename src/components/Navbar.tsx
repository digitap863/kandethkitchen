"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav/NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
  ];
  return (
    <div className="w-full z-150 fixed px-4 md:px-10">
      {/* Mobile Navbar */}
      <div className="flex w-full md:hidden px-2 py-6">
        <div className="bg-white/4 rounded-lg flex w-full px-2 py-4 justify-between items-center">
          <Link href={"/"}>
            <div className="flex">
              <Image
                className="h-10.75 w-7.5"
                src="/navbar/logo.jpeg"
                width={30}
                height={43}
                alt="logo"
              />
              <div className="flex flex-col leading-tight ml-2">
                <h1 className="font-times text-[23px] font-black uppercase text-[#CE1919]">
                  Kandeth
                </h1>
                <h1 className="font-times text-[9px] font-bold uppercase tracking-wide">
                  Kitchen & Accessories
                </h1>
              </div>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-linear-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#0a0a0a] transform transition-transform duration-500 ease-in-out z-200 overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 mt-8">
          <div className="flex flex-col">
            <span className="text-white font-times text-2xl font-bold tracking-tight">
              Menu
            </span>
            <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1 font-sans">
              Navigation
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95 shadow-lg"
            aria-label="Close menu"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <nav className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((link) => (
            <div key={link.path} onClick={() => setMobileMenuOpen(false)}>
              <NavLink
                href={link.path}
                className="font-sans uppercase py-5 px-2 border-b border-white/5 block text-white/90 text-[15px] tracking-widest hover:text-white transition-all"
              >
                {link.name}
              </NavLink>
            </div>
          ))}

          {/* Contact Us Button in Mobile Menu */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              href="/contactus"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between bg-linear-to-r from-[#AA1E1E] to-[#CE1919] p-5 rounded-2xl shadow-xl active:scale-95 transition-all text-white"
            >
              <span className="font-sans uppercase font-bold tracking-[0.2em]">
                Contact Us
              </span>
              <div className="bg-white/20 p-2 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Footer Logo */}
        <div className="p-10 text-center">
          <div className="h-16 w-16 relative mx-auto opacity-30 grayscale">
            <Image
              src="/navbar/logo.jpeg"
              fill
              alt="logo footer"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-150"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Navbar - UNCHANGED */}
      <div className="text-white items-center justify-between  max-w-7xl mx-auto py-5 hidden md:flex">
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
