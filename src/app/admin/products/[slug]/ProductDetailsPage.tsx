"use client";

import { ArrowLeft, Edit, Trash2, Tag, Package, Calendar, ImageIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Dummy data for a single product (matching IProduct interface from Product.ts)
const DUMMY_PRODUCT = {
    _id: "1",
    title: "Modern Premium Kitchen Hood",
    productType: { _id: "pt1", title: "Hoods" },
    brand: { _id: "b1", title: "Kandeth Premium" },
    img: [
        "/products/hood1.jpg",
        "/products/hood1-2.jpg",
        "/products/hood1-3.jpg",
        "/products/hood1-4.jpg",
        "/products/hood1-5.jpg"
    ],
    mrp: 45000,
    offer: 15,
    desc: "High-performance kitchen hood with touch controls and silent motor. This premium hood is designed to seamlessly integrate into modern kitchens while providing exceptional ventilation. Equipped with energy-efficient LED lighting and three-speed settings, it offers both functionality and elegance.",
    keyFeatures: [
        "Touch Control Panel with Digital Display",
        "Silent Motor Technology (Operating at 45 dB)",
        "Energy-Efficient LED Lighting (2x3W)",
        "Three-Speed Settings for Optimal Ventilation",
        "Auto-Clean Function with Oil Collector",
        "Premium Stainless Steel Construction",
        "Heat Sensor Auto-Activation",
        "Baffle Filters (Dishwasher Safe)"
    ],
    specifications: [
        "Suction Capacity: 1200 m³/h",
        "Noise Level: 45-55 dB",
        "Power Consumption: 220-240V, 50Hz",
        "Material: Stainless Steel 304",
        "Dimensions: 900mm (W) x 500mm (D) x 450mm (H)",
        "Motor Warranty: 5 Years",
        "Filter Type: Baffle Filters",
        "Installation Type: Wall Mounted / Island",
        "Color Options: Black, Silver, White",
        "Weight: 18 kg"
    ],
    createdAt: new Date("2023-11-20"),
    updatedAt: new Date("2024-01-15")
};

const ProductDetailsPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const discountedPrice = DUMMY_PRODUCT.mrp - (DUMMY_PRODUCT.mrp * (DUMMY_PRODUCT.offer / 100));
    const savings = DUMMY_PRODUCT.mrp - discountedPrice;

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
                            Ref: {DUMMY_PRODUCT._id.padStart(5, '0')}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#39964B] hover:bg-[#2d7a3c] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(57,150,75,0.3)] cursor-pointer">
                        <Edit size={18} />
                        <span>Edit Product</span>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(220,38,38,0.3)] cursor-pointer">
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
                            <ImageIcon className="absolute text-[#CE1919] opacity-20" size={100} />
                            <div className="text-center z-10">
                                <div className="text-[#CE1919] font-black text-4xl font-times">KANDETH</div>
                                <div className="text-[#888] text-sm mt-2">Image #{selectedImage + 1}</div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-5 gap-2">
                        {DUMMY_PRODUCT.img.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${selectedImage === idx
                                    ? "border-[#CE1919] shadow-[0_0_10px_rgba(206,25,25,0.5)]"
                                    : "border-white/10 hover:border-white/30"
                                    }`}
                            >
                                <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
                                    <div className="text-[#CE1919] font-bold text-xs">{idx + 1}</div>
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
                                    {DUMMY_PRODUCT.title}
                                </h1>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="px-3 py-1.5 rounded-md bg-[#CE1919]/10 text-[#CE1919] text-xs uppercase font-bold tracking-wider border border-[#CE1919]/20">
                                        <Package size={12} className="inline mr-1.5" />
                                        {DUMMY_PRODUCT.productType.title}
                                    </span>
                                    <span className="px-3 py-1.5 rounded-md bg-white/5 text-[#CACBCD] text-xs uppercase font-bold tracking-wider border border-white/10">
                                        {DUMMY_PRODUCT.brand.title}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[#CACBCD] leading-relaxed text-sm mb-6">
                            {DUMMY_PRODUCT.desc}
                        </p>

                        {/* Pricing Section */}
                        <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-[#888] text-xs uppercase tracking-wide mb-1">MRP (Incl. of all taxes)</div>
                                    <div className="flex items-baseline gap-3">
                                        <div className="text-3xl font-black text-[#D9D9D9]">₹{discountedPrice.toLocaleString()}</div>
                                        <div className="text-lg text-[#888] line-through">₹{DUMMY_PRODUCT.mrp.toLocaleString()}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-[#39964B]">-{DUMMY_PRODUCT.offer}%</div>
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
                                    <div className="text-[#CACBCD] font-medium">{DUMMY_PRODUCT.createdAt.toLocaleDateString('en-IN')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar size={16} className="text-[#888]" />
                                <div>
                                    <div className="text-[#888] text-xs">Last Updated</div>
                                    <div className="text-[#CACBCD] font-medium">{DUMMY_PRODUCT.updatedAt.toLocaleDateString('en-IN')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features Card */}
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-black font-times text-[#CE1919] uppercase mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {DUMMY_PRODUCT.keyFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#CE1919] mt-2 shrink-0" />
                                    <span className="text-sm text-[#CACBCD] leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications Card */}
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-black font-times text-[#CE1919] uppercase mb-4">Technical Specifications</h3>
                        <div className="space-y-3">
                            {DUMMY_PRODUCT.specifications.map((spec, idx) => {
                                // Parse specification string format: "Label: Value"
                                const [label, ...valueParts] = spec.split(':');
                                const value = valueParts.join(':').trim(); // Handle colons in value

                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                                    >
                                        <div className="text-sm text-[#888] uppercase tracking-wide font-medium">{label}</div>
                                        <div className="text-sm text-[#D9D9D9] font-bold">{value}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;