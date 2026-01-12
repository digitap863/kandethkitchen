"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-white font-semibold gap-1.5" : "text-white/60"} ${className}`}
    >
      {children}
      {isActive && <div className="h-1 w-full bg-linear-to-r from-[#CE1919] to-transparent" />}
    </Link>
  );
};

export default NavLink;
