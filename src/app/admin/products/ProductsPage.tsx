"use client";

import { Edit, Trash2, Plus, Search, Eye, Box, Boxes } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Dummy data based on IProduct interface
const DUMMY_PRODUCTS = [
    {
        _id: "1",
        title: "Modern Premium Kitchen Hood",
        productType: { _id: "pt1", title: "Hoods" },
        brand: { _id: "b1", title: "Kandeth Premium" },
        img: ["/products/hood1.jpg", "/products/hood1-2.jpg", "/products/hood1-3.jpg", "/products/hood1-4.jpg", "/products/hood1-5.jpg"],
        mrp: 45000,
        offer: 15,
        desc: "High-performance kitchen hood with touch controls and silent motor.",
        createdAt: new Date("2023-11-20"),
    },
    {
        _id: "2",
        title: "Built-in Luxury Microwave Oven",
        productType: { _id: "pt2", title: "Ovens" },
        brand: { _id: "b1", title: "Kandeth Premium" },
        img: ["/products/oven1.jpg", "/products/oven1-2.jpg", "/products/oven1-3.jpg", "/products/oven1-4.jpg", "/products/oven1-5.jpg"],
        mrp: 32000,
        offer: 10,
        desc: "Sleek built-in microwave oven with convection and grill features.",
        createdAt: new Date("2023-11-22"),
    },
    {
        _id: "3",
        title: "3-Burner Glass Top Gas Hob",
        productType: { _id: "pt3", title: "Hobs" },
        brand: { _id: "b2", title: "Elite Series" },
        img: ["/products/hob1.jpg", "/products/hob1-2.jpg", "/products/hob1-3.jpg", "/products/hob1-4.jpg", "/products/hob1-5.jpg"],
        mrp: 18500,
        offer: 20,
        desc: "Italian design glass top hob with brass burners.",
        createdAt: new Date("2023-12-01"),
    },
];

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState<"product" | "brand">("product");
    const [selectedType, setSelectedType] = useState("ALL");
    const [selectedBrand, setSelectedBrand] = useState("ALL");

    // Filter options from dummy data
    const TYPES = ["ALL", "Hoods", "Ovens", "Hobs", "Dishwashers", "Refrigerators"];
    const BRANDS = ["ALL", "Kandeth Premium", "Elite Series", "Urban Kitchen"];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-raleway">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase">Product Management</h2>
                    <p className="text-[#CACBCD] text-xs uppercase tracking-widest mt-1">Manage your kitchen inventory</p>
                </div>
                <Link
                    href="/admin/products/add"
                    className="flex items-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)] cursor-pointer"
                >
                    <Plus size={18} />
                    <span>Add New Product</span>
                </Link>
            </div>

            {/* Content Card */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden">
                {/* Search and Toggle Bar */}
                <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex justify-center gap-4 font-raleway ">
                        <div className="bg-[#1F1F1F] p-1.5 flex gap-3 rounded-[20px]">
                            <button
                                onClick={() => { setViewMode("product"); setSelectedBrand("ALL"); }}
                                className={`px-4 py-1.5 flex items-center gap-2 rounded-[20px] text-[12px] uppercase cursor-pointer font-bold transition-all ${viewMode === "product" ? "bg-[#CE1919] text-white" : "text-[#888] hover:text-[#CACBCD]"
                                    }`}
                            >
                                <Box size={14} />
                                By Product
                            </button>
                            <button
                                onClick={() => { setViewMode("brand"); setSelectedType("ALL"); }}
                                className={`px-4 py-1.5 flex items-center gap-2 rounded-[20px] text-[12px] uppercase cursor-pointer font-bold transition-all ${viewMode === "brand" ? "bg-[#CE1919] text-white" : "text-[#888] hover:text-[#CACBCD]"
                                    }`}
                            >
                                <Boxes size={14} />
                                By Brand
                            </button>
                        </div>
                    </div>
                </div>

                {/* Filter Selector Section (Dynamic based on Toggle) */}
                <div className="px-6 pt-4 bg-white/[0.02]">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#CE1919] font-black">
                                {viewMode === "product" ? "Select Category" : "Select Brand"}
                            </h3>
                            <button
                                onClick={() => {
                                    if (viewMode === "product") setSelectedType("ALL");
                                    else setSelectedBrand("ALL");
                                }}
                                className="text-[10px] uppercase font-bold text-[#888] hover:text-[#CE1919] transition-all cursor-pointer"
                            >
                                Reset {viewMode === "product" ? "Type" : "Brand"}
                            </button>
                        </div>

                        {/* Flex Pill List */}
                        <div className="flex flex-wrap gap-4 mb-2">
                            {(viewMode === "product" ? TYPES : BRANDS).map((item) => {
                                const isActive = viewMode === "product" ? selectedType === item : selectedBrand === item;
                                return (
                                    <div
                                        key={item}
                                        className={`${isActive ? "bg-gradient-to-b from-transparent to-[#680C0C] p-px rounded-full" : ""}`}
                                    >
                                        <button
                                            onClick={() => { viewMode === "product" ? setSelectedType(item) : setSelectedBrand(item); }}
                                            className={`text-[12px] md:text-[13px] tracking-wide py-2 px-6 rounded-full font-bold uppercase transition-all cursor-pointer ${isActive
                                                ? "text-[#CE1919] bg-[#0d0d0d] shadow-[0_0_10px_rgba(206,25,25,0.1)]"
                                                : "text-[#CACBCD] hover:text-white"
                                                }`}
                                        >
                                        {item}
                                    </button>
                                    </div>
                        );
                            })}
                    </div>

                    {/* Active Filter Indicators */}
                    <div className="flex gap-4">
                        {selectedType !== "ALL" && (
                            <div className="text-[10px] text-[#555] uppercase font-bold">Category: <span className="text-[#CACBCD]">{selectedType}</span></div>
                        )}
                        {selectedBrand !== "ALL" && (
                            <div className="text-[10px] text-[#555] uppercase font-bold">Brand: <span className="text-[#CACBCD]">{selectedBrand}</span></div>
                        )}
                    </div>
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 text-[#888] text-xs uppercase tracking-widest font-bold">
                            <th className="px-6 py-4 border-b border-white/5">Product Info</th>
                            <th className="px-6 py-4 border-b border-white/5">Category</th>
                            <th className="px-6 py-4 border-b border-white/5">Brand</th>
                            <th className="px-6 py-4 border-b border-white/5">Pricing</th>
                            <th className="px-6 py-4 border-b border-white/5">Offer</th>
                            <th className="px-6 py-4 border-b border-white/5 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {DUMMY_PRODUCTS
                            .filter(product => {
                                const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
                                const matchesType = selectedType === "ALL" || product.productType.title === selectedType;
                                const matchesBrand = selectedBrand === "ALL" || product.brand.title === selectedBrand;
                                return matchesSearch && matchesType && matchesBrand;
                            })
                            .map((product) => {
                                const discountedPrice = product.mrp - (product.mrp * (product.offer / 100));

                                return (
                                    <tr key={product._id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-14 w-14 rounded-xl bg-[#2a2a2a] overflow-hidden border border-white/10 shrink-0 flex items-center justify-center text-[#CE1919]/50 text-[10px] font-black uppercase">
                                                    Img
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-[#D9D9D9] line-clamp-1 group-hover:text-[#CE1919] transition-colors">{product.title}</div>
                                                    <div className="text-[10px] text-[#555] mt-1 font-black tracking-widest uppercase">ID: {product._id.padStart(5, '0')}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 rounded-full bg-white/5 text-[#CACBCD] text-[10px] uppercase font-black tracking-wider border border-white/5">
                                                {product.productType.title}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[13px] font-bold text-[#888]">
                                            {product.brand.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-[#D9D9D9]">₹{product.mrp.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-black text-[#39964B]">-{product.offer}%</div>
                                            <div className="text-[10px] text-[#555] font-bold">₹{discountedPrice.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-1">
                                                <button className="p-2.5 hover:bg-white/5 rounded-xl text-[#555] hover:text-[#CE1919] transition-all cursor-pointer" title="View">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="p-2.5 hover:bg-white/5 rounded-xl text-[#555] hover:text-[#39964B] transition-all cursor-pointer" title="Edit">
                                                    <Edit size={18} />
                                                </button>
                                                <button className="p-2.5 hover:bg-white/5 rounded-xl text-[#555] hover:text-red-600 transition-all cursor-pointer" title="Delete">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>

            {/* Footer Section */}
            <div className="p-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-[10px] text-[#555] uppercase font-black tracking-widest">
                    Inventory Monitoring System
                </div>
            </div>
        </div>
        </div >
    );
};

export default ProductsPage;