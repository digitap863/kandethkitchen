"use client";

import {
    Box,
    LayoutDashboard,
    LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/admin/authStore";

interface SidebarMenuItem {
    label: string;
    icon: React.ReactNode;
    link: string;
}

const sidebarData: SidebarMenuItem[] = [
    {
        label: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        link: "/admin/dashboard",
    },
    {
        label: "Products",
        icon: <Box size={20} />,
        link: "/admin/products",
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    const { logout } = useAuthStore();

    const handleLogout = async () => {
        await logout();
        window.location.href = "/admin/login";
    };

    return (
        <aside
            className="fixed top-0 left-0 z-40 w-64 h-screen bg-linear-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#0a0a0a] border-r border-white/10 font-raleway"
            aria-label="Sidebar"
        >
            <div className="h-full flex flex-col">
                {/* Logo Section */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-center mb-10">
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
                    </div>

                    <div className="mt-4 text-center">
                        <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Admin Panel
                        </h2>
                        <p className="text-xs text-[#CACBCD] mt-0.5 uppercase tracking-widest">
                            Management Dashboard
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4">
                    <ul className="space-y-1">
                        {sidebarData.map((item) => {
                            const isActive = pathname === item.link;

                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.link}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all uppercase tracking-wide
                      ${isActive
                                                ? "bg-linear-to-r from-[#AA1E1E] to-[#CE1919] text-white shadow-[0_0_15px_rgba(206,25,25,0.3)]"
                                                : "text-[#D9D9D9] hover:bg-white/5 hover:text-white"
                                            }
                    `}
                                    >
                                        <span className={isActive ? "text-white" : "text-[#CE1919]"}>
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Logout */}
                <div className="p-3 border-t border-white/10">
                    <button
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-[#D9D9D9] hover:bg-red-500/10 hover:text-[#CE1919] transition-all uppercase tracking-wide border border-transparent hover:border-[#CE1919]/30 cursor-pointer"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} className="text-[#CE1919]" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
