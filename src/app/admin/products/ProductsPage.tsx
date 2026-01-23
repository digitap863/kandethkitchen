"use client";

import { Edit, Trash2, Plus, Search, Filter, Eye } from "lucide-react";
import { useState } from "react";

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

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-raleway">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase">Product Management</h2>
                    <p className="text-[#CACBCD] text-xs uppercase tracking-widest mt-1">Manage your kitchen inventory</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)] cursor-pointer">
                    <Plus size={18} />
                    <span>Add New Product</span>
                </button>
            </div>

            {/* Content Card */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden">
                {/* Search and Filter Bar */}
                <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]" size={18} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-all cursor-pointer">
                            <Filter size={16} />
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-[#888] text-xs uppercase tracking-widest font-bold">
                                <th className="px-6 py-4">Product</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Brand</th>
                                <th className="px-6 py-4">Price (MRP)</th>
                                <th className="px-6 py-4">Offer</th>
                                <th className="px-6 py-4">Created</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {DUMMY_PRODUCTS.map((product) => {
                                const discountedPrice = product.mrp - (product.mrp * (product.offer / 100));

                                return (
                                    <tr key={product._id} className="hover:bg-white/2 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-12 w-12 rounded-lg bg-[#2a2a2a] overflow-hidden border border-white/5 shrink-0">
                                                    {/* Placeholder for product image */}
                                                    <div className="w-full h-full flex items-center justify-center text-[#CE1919] font-bold text-xs uppercase">
                                                        Kandeth
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-[#D9D9D9] line-clamp-1">{product.title}</div>
                                                    <div className="text-xs text-[#888] mt-0.5 line-clamp-1">Ref: {product._id.padStart(5, '0')}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 rounded-md bg-[#CE1919]/10 text-[#CE1919] text-[10px] uppercase font-bold tracking-wider">
                                                {product.productType.title}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#CACBCD]">
                                            {product.brand.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-[#D9D9D9]">₹{product.mrp.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-[#39964B]">-{product.offer}%</div>
                                            <div className="text-[10px] text-[#888]">₹{discountedPrice.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-[#888]">
                                            {product.createdAt.toLocaleDateString('en-IN')}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 hover:bg-white/5 rounded-lg text-[#CACBCD] hover:text-[#CE1919] transition-all cursor-pointer" title="View Details">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="p-2 hover:bg-white/5 rounded-lg text-[#CACBCD] hover:text-[#39964B] transition-all cursor-pointer" title="Edit Product">
                                                    <Edit size={18} />
                                                </button>
                                                <button className="p-2 hover:bg-white/5 rounded-lg text-[#CACBCD] hover:text-red-500 transition-all cursor-pointer" title="Delete Product">
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

                {/* Pagination Placeholder */}
                <div className="p-4 border-t border-white/10 flex items-center justify-between text-[#888] text-xs uppercase tracking-widest">
                    <div>Showing 1 - 3 of 124 products</div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-all cursor-not-allowed" disabled>Previous</button>
                        <button className="px-3 py-1.5 rounded bg-[#CE1919]/20 text-[#CE1919] border border-[#CE1919]/30">1</button>
                        <button className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-all cursor-pointer">2</button>
                        <button className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-all cursor-pointer">3</button>
                        <button className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 transition-all cursor-pointer">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;