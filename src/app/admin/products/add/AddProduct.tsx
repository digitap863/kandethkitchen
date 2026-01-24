"use client";

import { ArrowLeft, Plus, X, Save, ImageIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const AddProduct = () => {
    // Form state
    const [formData, setFormData] = useState({
        title: "",
        productType: "",
        brand: "",
        desc: "",
        mrp: "",
        offer: "",
        keyFeatures: [""],
        specifications: [""]
    });

    // Image files and previews (1 to 5 images)
    const [imageFiles, setImageFiles] = useState<(File | null)[]>([null]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([""]);

    // Product Types and Brands (should be fetched from API in production)
    const [productTypes, setProductTypes] = useState([
        { _id: "pt1", title: "Hoods" },
        { _id: "pt2", title: "Ovens" },
        { _id: "pt3", title: "Hobs" },
        { _id: "pt4", title: "Dishwashers" },
        { _id: "pt5", title: "Refrigerators" }
    ]);

    const [brands, setBrands] = useState([
        { _id: "b1", title: "Kandeth Premium" },
        { _id: "b2", title: "Elite Series" },
        { _id: "b3", title: "Urban Kitchen" }
    ]);

    // Modal states for adding new product type/brand
    const [showProductTypeModal, setShowProductTypeModal] = useState(false);
    const [showBrandModal, setShowBrandModal] = useState(false);
    const [newProductType, setNewProductType] = useState("");
    const [newBrand, setNewBrand] = useState("");

    // Calculate discounted price
    const calculateDiscountedPrice = () => {
        const mrp = parseFloat(formData.mrp) || 0;
        const offer = parseFloat(formData.offer) || 0;
        return mrp - (mrp * (offer / 100));
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle image file selection
    const handleImageFileChange = (index: number, file: File | null) => {
        const newImageFiles = [...imageFiles];
        const newImagePreviews = [...imagePreviews];

        if (file) {
            // Update file
            newImageFiles[index] = file;

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                newImagePreviews[index] = reader.result as string;
                setImagePreviews(newImagePreviews);
            };
            reader.readAsDataURL(file);
        } else {
            // Clear file and preview
            newImageFiles[index] = null;
            newImagePreviews[index] = "";
            setImagePreviews(newImagePreviews);
        }

        setImageFiles(newImageFiles);
    };

    // Add new image slot
    const addImageSlot = () => {
        if (imageFiles.length < 5) {
            setImageFiles([...imageFiles, null]);
            setImagePreviews([...imagePreviews, ""]);
        }
    };

    // Remove image slot
    const removeImageSlot = (index: number) => {
        if (imageFiles.length > 1) {
            const newImageFiles = imageFiles.filter((_, i) => i !== index);
            const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
            setImageFiles(newImageFiles);
            setImagePreviews(newImagePreviews);
        }
    };

    // Handle adding new Product Type
    const handleAddProductType = () => {
        if (newProductType.trim()) {
            const newId = `pt${productTypes.length + 1}`;
            const newType = { _id: newId, title: newProductType.trim() };
            setProductTypes([...productTypes, newType]);
            setFormData({ ...formData, productType: newId });
            setNewProductType("");
            setShowProductTypeModal(false);
            // TODO: Add API call to save to database
        }
    };

    // Handle adding new Brand
    const handleAddBrand = () => {
        if (newBrand.trim()) {
            const newId = `b${brands.length + 1}`;
            const newBrandObj = { _id: newId, title: newBrand.trim() };
            setBrands([...brands, newBrandObj]);
            setFormData({ ...formData, brand: newId });
            setNewBrand("");
            setShowBrandModal(false);
            // TODO: Add API call to save to database
        }
    };

    // Handle key features
    const addKeyFeature = () => {
        setFormData({ ...formData, keyFeatures: [...formData.keyFeatures, ""] });
    };

    const removeKeyFeature = (index: number) => {
        if (formData.keyFeatures.length > 1) {
            const newFeatures = formData.keyFeatures.filter((_, i) => i !== index);
            setFormData({ ...formData, keyFeatures: newFeatures });
        }
    };

    const handleKeyFeatureChange = (index: number, value: string) => {
        const newFeatures = [...formData.keyFeatures];
        newFeatures[index] = value;
        setFormData({ ...formData, keyFeatures: newFeatures });
    };

    // Handle specifications
    const addSpecification = () => {
        setFormData({ ...formData, specifications: [...formData.specifications, ""] });
    };

    const removeSpecification = (index: number) => {
        if (formData.specifications.length > 1) {
            const newSpecs = formData.specifications.filter((_, i) => i !== index);
            setFormData({ ...formData, specifications: newSpecs });
        }
    };

    const handleSpecificationChange = (index: number, value: string) => {
        const newSpecs = [...formData.specifications];
        newSpecs[index] = value;
        setFormData({ ...formData, specifications: newSpecs });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate that at least 1 image is uploaded
        const hasAtLeastOneImage = imageFiles.some(file => file !== null);
        if (!hasAtLeastOneImage) {
            alert("Please upload at least 1 image");
            return;
        }

        // Validate that all added slots have images
        const allSlotsHaveImages = imageFiles.every(file => file !== null);
        if (!allSlotsHaveImages) {
            alert("Please upload images for all slots or remove empty slots");
            return;
        }

        // TODO: Upload images to server/cloud storage and get URLs
        // For now, just log the data
        console.log("Form submitted:", formData);
        console.log("Image files:", imageFiles);
    };

    const discountedPrice = calculateDiscountedPrice();
    const savings = (parseFloat(formData.mrp) || 0) - discountedPrice;

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
                        <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase">Add New Product</h2>
                        <p className="text-[#CACBCD] text-xs uppercase tracking-widest mt-1">Create a new kitchen product</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Images */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-black font-times text-[#CE1919] uppercase flex items-center gap-2">
                                    <ImageIcon size={20} />
                                    Product Images
                                </h3>
                                <button
                                    type="button"
                                    onClick={addImageSlot}
                                    disabled={imageFiles.length >= 5}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-[#CE1919]/10 hover:bg-[#CE1919]/20 text-[#CE1919] rounded-lg transition-all text-xs font-bold uppercase tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Plus size={14} />
                                    Add Image
                                </button>
                            </div>
                            <p className="text-xs text-[#888] mb-4 uppercase tracking-wide">Upload 1 to 5 images (Max 5)</p>

                            <div className="space-y-4">
                                {imageFiles.map((file, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs text-[#888] uppercase tracking-wide">
                                                Image #{index + 1} *
                                            </label>
                                            {imageFiles.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeImageSlot(index)}
                                                    className="p-1 bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded transition-all cursor-pointer"
                                                    title="Remove this image slot"
                                                >
                                                    <X size={14} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Preview or Upload Area */}
                                        {imagePreviews[index] ? (
                                            <div className="relative group">
                                                <div className="aspect-square rounded-lg overflow-hidden border-2 border-[#CE1919]/30 bg-[#2a2a2a]">
                                                    <img
                                                        src={imagePreviews[index]}
                                                        alt={`Preview ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleImageFileChange(index, null)}
                                                    className="absolute top-2 right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                                                    title="Clear this image"
                                                >
                                                    <X size={16} />
                                                </button>
                                                <div className="mt-2 text-xs text-[#888] truncate">{file?.name}</div>
                                            </div>
                                        ) : (
                                            <label className="block aspect-square rounded-lg border-2 border-dashed border-white/20 hover:border-[#CE1919]/50 bg-black/20 hover:bg-black/30 transition-all cursor-pointer">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) handleImageFileChange(index, file);
                                                    }}
                                                    className="hidden"
                                                    required={!imagePreviews[index]}
                                                />
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                                                    <ImageIcon className="text-[#CE1919] opacity-50" size={40} />
                                                    <div className="text-center">
                                                        <div className="text-sm text-[#CACBCD] font-medium">Click to upload</div>
                                                        <div className="text-xs text-[#888] mt-1">PNG, JPG, WEBP</div>
                                                    </div>
                                                </div>
                                            </label>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-black font-times text-[#CE1919] uppercase mb-4">Basic Information</h3>

                            <div className="space-y-4">
                                {/* Product Title */}
                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">
                                        Product Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g., Modern Premium Kitchen Hood"
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                        required
                                    />
                                </div>

                                {/* Product Type & Brand */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs text-[#888] uppercase tracking-wide">
                                                Product Type *
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setShowProductTypeModal(true)}
                                                className="text-[#CE1919] hover:text-[#AA1E1E] transition-all p-1"
                                                title="Add New Product Type"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <select
                                            name="productType"
                                            value={formData.productType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all cursor-pointer"
                                            required
                                        >
                                            <option value="" className="bg-[#1a1a1a]">Select Product Type</option>
                                            {productTypes.map((type: any) => (
                                                <option key={type._id} value={type._id} className="bg-[#1a1a1a]">
                                                    {type.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs text-[#888] uppercase tracking-wide">
                                                Brand *
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setShowBrandModal(true)}
                                                className="text-[#CE1919] hover:text-[#AA1E1E] transition-all p-1"
                                                title="Add New Brand"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <select
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all cursor-pointer"
                                            required
                                        >
                                            <option value="" className="bg-[#1a1a1a]">Select Brand</option>
                                            {brands.map((brand: any) => (
                                                <option key={brand._id} value={brand._id} className="bg-[#1a1a1a]">
                                                    {brand.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">
                                        Description *
                                    </label>
                                    <textarea
                                        name="desc"
                                        value={formData.desc}
                                        onChange={handleChange}
                                        placeholder="Enter detailed product description..."
                                        rows={4}
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all resize-none"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-black font-times text-[#CE1919] uppercase mb-4">Pricing</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">
                                        MRP (₹) *
                                    </label>
                                    <input
                                        type="number"
                                        name="mrp"
                                        value={formData.mrp}
                                        onChange={handleChange}
                                        placeholder="e.g., 45000"
                                        min="0"
                                        step="1"
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">
                                        Offer (%) *
                                    </label>
                                    <input
                                        type="number"
                                        name="offer"
                                        value={formData.offer}
                                        onChange={handleChange}
                                        placeholder="e.g., 15"
                                        min="0"
                                        max="100"
                                        step="1"
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Price Preview */}
                            {formData.mrp && formData.offer && (
                                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <div className="text-[#888] text-xs uppercase tracking-wide mb-1">Final Price</div>
                                            <div className="flex items-baseline gap-3">
                                                <div className="text-2xl font-black text-[#D9D9D9]">₹{discountedPrice.toLocaleString()}</div>
                                                <div className="text-sm text-[#888] line-through">₹{parseFloat(formData.mrp).toLocaleString()}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-black text-[#39964B]">-{formData.offer}%</div>
                                            <div className="text-xs text-[#888]">Save ₹{savings.toLocaleString()}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Key Features */}
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-black font-times text-[#CE1919] uppercase">Key Features</h3>
                                <button
                                    type="button"
                                    onClick={addKeyFeature}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-[#CE1919]/10 hover:bg-[#CE1919]/20 text-[#CE1919] rounded-lg transition-all text-xs font-bold uppercase tracking-wide cursor-pointer"
                                >
                                    <Plus size={14} />
                                    Add Feature
                                </button>
                            </div>

                            <div className="space-y-3">
                                {formData.keyFeatures.map((feature, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={feature}
                                            onChange={(e) => handleKeyFeatureChange(index, e.target.value)}
                                            placeholder={`e.g., Touch Control Panel with Digital Display`}
                                            className="flex-1 px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                            required
                                        />
                                        {formData.keyFeatures.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeKeyFeature(index)}
                                                className="p-2.5 bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded-lg transition-all cursor-pointer"
                                            >
                                                <X size={18} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-black font-times text-[#CE1919] uppercase">Technical Specifications</h3>
                                <button
                                    type="button"
                                    onClick={addSpecification}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-[#CE1919]/10 hover:bg-[#CE1919]/20 text-[#CE1919] rounded-lg transition-all text-xs font-bold uppercase tracking-wide cursor-pointer"
                                >
                                    <Plus size={14} />
                                    Add Spec
                                </button>
                            </div>

                            <p className="text-xs text-[#888] mb-4 uppercase tracking-wide">Format: Label: Value (e.g., &quot;Suction Capacity: 1200 m³/h")</p>

                            <div className="space-y-3">
                                {formData.specifications.map((spec, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={spec}
                                            onChange={(e) => handleSpecificationChange(index, e.target.value)}
                                            placeholder="e.g., Suction Capacity: 1200 m³/h"
                                            className="flex-1 px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                            required
                                        />
                                        {formData.specifications.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeSpecification(index)}
                                                className="p-2.5 bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded-lg transition-all cursor-pointer"
                                            >
                                                <X size={18} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)] cursor-pointer"
                            >
                                <Save size={18} />
                                <span>Create Product</span>
                            </button>
                            <Link
                                href="/admin/products"
                                className="px-6 py-4 bg-white/5 hover:bg-white/10 text-[#CACBCD] rounded-lg transition-all font-bold uppercase tracking-wide text-sm border border-white/10 cursor-pointer"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </form>

            {/* Product Type Modal */}
            {showProductTypeModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl w-full max-w-md p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-black font-times text-[#CE1919] uppercase">Add New Product Type</h3>
                            <button onClick={() => setShowProductTypeModal(false)} className="text-[#888] hover:text-white transition-all">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">Type Title</label>
                                <input
                                    type="text"
                                    value={newProductType}
                                    onChange={(e) => setNewProductType(e.target.value)}
                                    placeholder="e.g., Dishwashers"
                                    className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={handleAddProductType}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)]"
                                >
                                    <Save size={18} />
                                    <span>Save Type</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowProductTypeModal(false)}
                                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-[#CACBCD] rounded-lg transition-all font-bold uppercase tracking-wide text-sm border border-white/10"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Brand Modal */}
            {showBrandModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl w-full max-w-md p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-black font-times text-[#CE1919] uppercase">Add New Brand</h3>
                            <button onClick={() => setShowBrandModal(false)} className="text-[#888] hover:text-white transition-all">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">Brand Title</label>
                                <input
                                    type="text"
                                    value={newBrand}
                                    onChange={(e) => setNewBrand(e.target.value)}
                                    placeholder="e.g., Urban Kitchen"
                                    className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] placeholder:text-[#555] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={handleAddBrand}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)]"
                                >
                                    <Save size={18} />
                                    <span>Save Brand</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowBrandModal(false)}
                                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-[#CACBCD] rounded-lg transition-all font-bold uppercase tracking-wide text-sm border border-white/10"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddProduct;