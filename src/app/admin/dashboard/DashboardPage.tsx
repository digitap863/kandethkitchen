import { Box, LayoutDashboard, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
    const stats = [
        {
            label: "Total Products",
            value: "0",
            icon: <Box size={24} />,
            trend: "All Products",
            color: "from-[#AA1E1E] to-[#CE1919]"
        },
        {
            label: "Product Categories",
            value: "0",
            icon: <LayoutDashboard size={24} />,
            trend: "All Categories",
            color: "from-[#2a2a2a] to-[#1a1a1a]"
        },
        {
            label: "Products Brands",
            value: "0",
            icon: <Users size={24} />,
            trend: "All Brands",
            color: "from-[#2a2a2a] to-[#1a1a1a]"
        },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-raleway">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <div className="flex items-center">
                    <Image
                        className="h-12 w-8"
                        src="/navbar/logo.jpeg"
                        width={32}
                        height={48}
                        alt="logo"
                    />
                    <div className="ml-4">
                        <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase">Dashboard</h2>
                        <p className="text-[#CACBCD] text-xs uppercase tracking-widest mt-1">Management Overview</p>
                    </div>
                </div>

                <div className="flex flex-col text-right">
                    <h1 className="text-xl font-medium text-[#D9D9D9]">
                        Welcome back, <span className="text-[#CE1919] font-bold">Admin</span>
                    </h1>
                    <p className="text-[#888] text-sm">Everything looks good today.</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10`}>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl border border-white/5 bg-linear-to-br ${stat.color} shadow-lg transition-transform hover:scale-105`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-black/20 rounded-lg text-white">
                                {stat.icon}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-white/70 text-sm font-medium uppercase tracking-wide mb-2">{stat.label}</p>
                        <p className="text-xs text-white/50">{stat.trend}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Area Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 min-h-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-[#D9D9D9]">Recent Activity</h3>
                        <button className="text-xs text-[#CE1919] uppercase font-bold tracking-widest hover:underline cursor-pointer">View All</button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full text-center opacity-40 py-20">
                        <LayoutDashboard size={48} className="mb-4 text-[#CE1919]" />
                        <p className="text-[#CACBCD]">Your recent site activity will appear here.</p>
                    </div>
                </div>

                <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-[#D9D9D9] mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                        <Link href={"/admin/products/add"}>
                            <button className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-[#CE1919]/10 hover:border-[#CE1919]/30 transition-all cursor-pointer group">
                                <span className="text-sm font-medium uppercase tracking-wide">Add New Product</span>
                                <Box size={18} className="text-[#CE1919] group-hover:scale-110 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;