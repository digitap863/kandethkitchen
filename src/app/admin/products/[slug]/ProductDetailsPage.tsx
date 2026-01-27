"use client";

import { ArrowLeft, Edit, Trash2, Package, Calendar, ImageIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useProductStore } from "@/stores/admin/productStore";

const ProductDetailsPage = () => {
    const { slug } = useParams();
    const router = useRouter();
    const { currentProduct, fetchProductBySlug, deleteProduct, loading } = useProductStore();
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        if (slug) {
            fetchProductBySlug(slug as string);
        }
    }, [slug, fetchProductBySlug]);

    if (loading && !currentProduct) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-[#CE1919] animate-spin" />
            </div>
        );
    }

    if (!currentProduct) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase mb-4">Product Not Found</h2>
                <Link
                    href="/admin/products"
                    className="flex items-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Products</span>
                </Link>
            </div>
        );
    }

    const mrp = parseFloat(currentProduct.mrp) || 0;
    const offer = parseFloat(currentProduct.offer) || 0;
    const discountedPrice = mrp - (mrp * (offer / 100));
    const savings = mrp - discountedPrice;

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete ${currentProduct.title}?`)) {
            try {
                await deleteProduct(currentProduct._id);
                alert("Product deleted successfully");
                router.push("/admin/products");
            } catch (error) {
                alert("Failed to delete product");
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-raleway">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/products"
                        className="p-2 hover:bg-white/5 rounded-lg text-[#CACBCD] hover:text-[#CE1919] transition-all cursor-pointer"
                    >
                        <ArrowLeft size={24} />
                    </Link>
                    <div>
                        <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase">Product Details</h2>
                        <p className="text-[#CACBCD] text-xs uppercase tracking-widest mt-1">
                            Ref: {currentProduct._id.slice(-6).toUpperCase()}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href={`/admin/products/edit/${currentProduct._id}`}
                        className="flex items-center gap-2 px-6 py-3 bg-[#39964B] hover:bg-[#2d7a3c] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(57,150,75,0.3)] cursor-pointer"
                    >
                        <Edit size={18} />
                        <span>Edit Product</span>
                    </Link>
                    <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(220,38,38,0.3)] cursor-pointer"
                    >
                        <Trash2 size={18} />
                        <span>Delete</span>
                    </button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Images */}
                <div className="lg:col-span-1 space-y-4">
                    {/* Main Image */}
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden aspect-square">
                        <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a] relative">
                            {currentProduct.img && currentProduct.img[selectedImage] ? (
                                <img
                                    src={currentProduct.img[selectedImage]}
                                    alt={currentProduct.title}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <>
                                    <ImageIcon className="absolute text-[#CE1919] opacity-20" size={100} />
                                    <div className="text-center z-10">
                                        <div className="text-[#CE1919] font-black text-4xl font-times">KANDETH</div>
                                        <div className="text-[#888] text-sm mt-2">No Image</div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-5 gap-2">
                        {currentProduct.img && currentProduct.img.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${selectedImage === idx
                                    ? "border-[#CE1919] shadow-[0_0_10px_rgba(206,25,25,0.5)]"
                                    : "border-white/10 hover:border-white/30"
                                    }`}
                            >
                                <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
                                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column - Product Information */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Information Card */}
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h1 className="text-3xl font-black font-times text-[#D9D9D9] mb-3">
                                    {currentProduct.title}
                                </h1>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="px-3 py-1.5 rounded-md bg-[#CE1919]/10 text-[#CE1919] text-xs uppercase font-bold tracking-wider border border-[#CE1919]/20">
                                        <Package size={12} className="inline mr-1.5" />
                                        {currentProduct.productType}
                                    </span>
                                    <span className="px-3 py-1.5 rounded-md bg-white/5 text-[#CACBCD] text-xs uppercase font-bold tracking-wider border border-white/10">
                                        {currentProduct.brand}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[#CACBCD] leading-relaxed text-sm mb-6">
                            {currentProduct.desc}
                        </p>

                        {/* Pricing Section */}
                        <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-[#888] text-xs uppercase tracking-wide mb-1">MRP (Incl. of all taxes)</div>
                                    <div className="flex items-baseline gap-3">
                                        <div className="text-3xl font-black text-[#D9D9D9]">₹{discountedPrice.toLocaleString()}</div>
                                        <div className="text-lg text-[#888] line-through">₹{mrp.toLocaleString()}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-[#39964B]">-{offer}%</div>
                                    <div className="text-xs text-[#888]">Save ₹{savings.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar size={16} className="text-[#888]" />
                                <div>
                                    <div className="text-[#888] text-xs">Created</div>
                                    <div className="text-[#CACBCD] font-medium">{new Date(currentProduct.createdAt).toLocaleDateString('en-IN')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar size={16} className="text-[#888]" />
                                <div>
                                    <div className="text-[#888] text-xs">Last Updated</div>
                                    <div className="text-[#CACBCD] font-medium">{new Date(currentProduct.updatedAt).toLocaleDateString('en-IN')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features Card */}
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-black font-times text-[#CE1919] uppercase mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {currentProduct.keyFeatures && currentProduct.keyFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#CE1919] mt-2 shrink-0" />
                                    <span className="text-sm text-[#CACBCD] leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications Card */}
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-black font-times text-[#CE1919] uppercase mb-4">Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {currentProduct.specifications && currentProduct.specifications.map((spec, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#CE1919] mt-2 shrink-0" />
                                    <span className="text-sm text-[#CACBCD] leading-relaxed">{spec}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;