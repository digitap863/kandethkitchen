"use client";

import { Edit, Trash2, Plus, Search, Eye, Box, Boxes, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useBrandStore } from "@/stores/admin/brandStore";
import { useTypeStore } from "@/stores/admin/typeStore";
import { useProductStore } from "@/stores/admin/productStore";

const ProductsPage = () => {
    const { brands, fetchBrands } = useBrandStore();
    const { types, fetchTypes } = useTypeStore();
    const { products, loading, fetchProducts, deleteProduct, pagination } = useProductStore();

    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState<"product" | "brand">("product");
    const [selectedType, setSelectedType] = useState("ALL");
    const [selectedBrand, setSelectedBrand] = useState("ALL");

    useEffect(() => {
        fetchBrands();
        fetchTypes();
    }, [fetchBrands, fetchTypes]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchProducts({
                search: searchTerm,
                brand: selectedBrand,
                productType: selectedType,
                page: 1
            });
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm, selectedBrand, selectedType, fetchProducts]);

    // Filter options
    const TYPES = ["ALL", ...types.map(t => t.title)];
    const BRANDS = ["ALL", ...brands.map(b => b.name)];

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Are you sure you want to delete ${title}?`)) {
            try {
                await deleteProduct(id);
                // Re-fetch to update pagination and list properly
                fetchProducts({
                    search: searchTerm,
                    brand: selectedBrand,
                    productType: selectedType,
                    page: 1
                });
            } catch (error) {
                alert("Failed to delete product");
            }
        }
    }

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
                <div className="overflow-x-auto relative min-h-[400px]">
                    {loading && (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                            <Loader2 className="w-10 h-10 text-[#CE1919] animate-spin" />
                        </div>
                    )}
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
                            {products.length > 0 ? products.map((product) => {
                                const mrp = parseFloat(product.mrp) || 0;
                                const offer = parseFloat(product.offer) || 0;
                                const discountedPrice = mrp - (mrp * (offer / 100));

                                return (
                                    <tr key={product._id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-14 w-14 rounded-xl bg-[#2a2a2a] overflow-hidden border border-white/10 shrink-0 flex items-center justify-center text-[#CE1919]/50 text-[10px] font-black uppercase">
                                                    {product.img && product.img[0] ? (
                                                        <img src={product.img[0]} alt={product.title} className="w-full h-full object-cover" />
                                                    ) : (
                                                        "Img"
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-[#D9D9D9] line-clamp-1 group-hover:text-[#CE1919] transition-colors">{product.title}</div>
                                                    <div className="text-[10px] text-[#555] mt-1 font-black tracking-widest uppercase">ID: {product._id.slice(-6).toUpperCase()}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 rounded-full bg-white/5 text-[#CACBCD] text-[10px] uppercase font-black tracking-wider border border-white/5">
                                                {product.productType}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[13px] font-bold text-[#888]">
                                            {product.brand}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-bold text-[#D9D9D9]">₹{mrp.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-black text-[#39964B]">-{offer}%</div>
                                            <div className="text-[10px] text-[#555] font-bold">₹{discountedPrice.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-1">
                                                <Link href={`/admin/products/${product.slug}`} className="p-2.5 hover:bg-white/5 rounded-xl text-[#555] hover:text-[#CE1919] transition-all cursor-pointer" title="View">
                                                    <Eye size={18} />
                                                </Link>
                                                <Link href={`/admin/products/edit/${product._id}`} className="p-2.5 hover:bg-white/5 rounded-xl text-[#555] hover:text-[#39964B] transition-all cursor-pointer" title="Edit">
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(product._id, product.title)}
                                                    className="p-2.5 hover:bg-white/5 rounded-xl text-[#555] hover:text-red-600 transition-all cursor-pointer"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center text-[#555] uppercase text-[10px] font-black tracking-widest">
                                        No products found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Section / Pagination */}
                <div className="p-6 border-t border-white/10 flex items-center justify-between">
                    <div className="text-[10px] text-[#555] uppercase font-black tracking-widest">
                        Inventory Monitoring System
                    </div>
                    {pagination && pagination.totalPages > 1 && (
                        <div className="flex gap-2">
                            {[...Array(pagination.totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => fetchProducts({ search: searchTerm, brand: selectedBrand, productType: selectedType, page: i + 1 })}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black border transition-all cursor-pointer ${pagination.page === i + 1 ? 'bg-[#CE1919] border-[#CE1919] text-white' : 'border-white/10 text-[#888] hover:border-white/20'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;