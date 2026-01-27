"use client";

import { ArrowLeft, Plus, X, Save, ImageIcon, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useBrandStore } from "@/stores/admin/brandStore";
import { useTypeStore } from "@/stores/admin/typeStore";
import { useProductStore } from "@/stores/admin/productStore";

const EditProduct = () => {
    const router = useRouter();
    const { id } = useParams();

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

    // Image files and previews
    const [imageFiles, setImageFiles] = useState<(File | null)[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [changeImages, setChangeImages] = useState(false);

    // Brand and Type Stores
    const { brands, fetchBrands, addBrand, loading: brandLoading } = useBrandStore();
    const { types, fetchTypes, addType, loading: typeLoading } = useTypeStore();
    const { updateProduct, fetchProductById, currentProduct, loading: productLoading } = useProductStore();

    // Modal states
    const [showProductTypeModal, setShowProductTypeModal] = useState(false);
    const [showBrandModal, setShowBrandModal] = useState(false);
    const [newProductType, setNewProductType] = useState("");
    const [newBrand, setNewBrand] = useState("");

    useEffect(() => {
        fetchBrands();
        fetchTypes();
        if (id) {
            fetchProductById(id as string);
        }
    }, [fetchBrands, fetchTypes, fetchProductById, id]);

    useEffect(() => {
        if (currentProduct) {
            setFormData({
                title: currentProduct.title || "",
                productType: currentProduct.productType || "",
                brand: currentProduct.brand || "",
                desc: currentProduct.desc || "",
                mrp: currentProduct.mrp?.toString() || "",
                offer: currentProduct.offer?.toString() || "",
                keyFeatures: (currentProduct.keyFeatures && currentProduct.keyFeatures.length > 0) ? currentProduct.keyFeatures : [""],
                specifications: (currentProduct.specifications && currentProduct.specifications.length > 0) ? currentProduct.specifications : [""]
            });
            setImagePreviews(currentProduct.img || []);
            setImageFiles(new Array(currentProduct.img?.length || 0).fill(null));
        }
    }, [currentProduct]);

    const calculateDiscountedPrice = () => {
        const mrp = parseFloat(formData.mrp) || 0;
        const offer = parseFloat(formData.offer) || 0;
        return mrp - (mrp * (offer / 100));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageFileChange = (index: number, file: File | null) => {
        setChangeImages(true);
        const newImageFiles = [...imageFiles];
        const newImagePreviews = [...imagePreviews];

        if (file) {
            newImageFiles[index] = file;
            const reader = new FileReader();
            reader.onloadend = () => {
                newImagePreviews[index] = reader.result as string;
                setImagePreviews(newImagePreviews);
            };
            reader.readAsDataURL(file);
        } else {
            newImageFiles[index] = null;
            newImagePreviews[index] = "";
            setImagePreviews(newImagePreviews);
        }
        setImageFiles(newImageFiles);
    };

    const addImageSlot = () => {
        if (imageFiles.length < 5) {
            setChangeImages(true);
            setImageFiles([...imageFiles, null]);
            setImagePreviews([...imagePreviews, ""]);
        }
    };

    const removeImageSlot = (index: number) => {
        if (imageFiles.length > 1) {
            setChangeImages(true);
            setImageFiles(imageFiles.filter((_, i) => i !== index));
            setImagePreviews(imagePreviews.filter((_, i) => i !== index));
        }
    };

    const handleAddProductType = async () => {
        if (newProductType.trim()) {
            await addType(newProductType.trim());
            setNewProductType("");
            setShowProductTypeModal(false);
        }
    };

    const handleAddBrand = async () => {
        if (newBrand.trim()) {
            await addBrand(newBrand.trim());
            setNewBrand("");
            setShowBrandModal(false);
        }
    };

    const addKeyFeature = () => {
        setFormData({ ...formData, keyFeatures: [...formData.keyFeatures, ""] });
    };

    const removeKeyFeature = (index: number) => {
        if (formData.keyFeatures.length > 1) {
            setFormData({ ...formData, keyFeatures: formData.keyFeatures.filter((_, i) => i !== index) });
        }
    };

    const handleKeyFeatureChange = (index: number, value: string) => {
        const newFeatures = [...formData.keyFeatures];
        newFeatures[index] = value;
        setFormData({ ...formData, keyFeatures: newFeatures });
    };

    const addSpecification = () => {
        setFormData({ ...formData, specifications: [...formData.specifications, ""] });
    };

    const removeSpecification = (index: number) => {
        if (formData.specifications.length > 1) {
            setFormData({ ...formData, specifications: formData.specifications.filter((_, i) => i !== index) });
        }
    };

    const handleSpecificationChange = (index: number, value: string) => {
        const newSpecs = [...formData.specifications];
        newSpecs[index] = value;
        setFormData({ ...formData, specifications: newSpecs });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("title", formData.title);
            data.append("description", formData.desc);
            data.append("productType", formData.productType);
            data.append("brand", formData.brand);
            data.append("mrp", formData.mrp);
            data.append("offer", formData.offer);

            formData.keyFeatures.forEach(feature => {
                if (feature.trim()) data.append("keyFeatures", feature.trim());
            });

            formData.specifications.forEach(spec => {
                if (spec.trim()) data.append("specifications", spec.trim());
            });

            // Image configuration for backend
            const imageConfig: string[] = [];
            const newFilesToUpload: File[] = [];

            imagePreviews.forEach((preview, index) => {
                if (!preview) return; // Skip empty slots

                const file = imageFiles[index];
                if (file) {
                    // This is a new file upload
                    imageConfig.push("NEW_FILE");
                    newFilesToUpload.push(file);
                } else if (preview.startsWith("http")) {
                    // This is an existing Cloudinary URL
                    imageConfig.push(preview);
                }
            });

            data.append("imageConfig", JSON.stringify(imageConfig));
            newFilesToUpload.forEach(file => {
                data.append("images", file);
            });

            await updateProduct(id as string, data);
            alert("Product updated successfully!");
            router.push("/admin/products");
        } catch (error) {
            console.error("Update failed:", error);
            alert("Failed to update product.");
        }
    };

    if (productLoading && !currentProduct) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-[#CE1919] animate-spin" />
            </div>
        );
    }

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
                        <h2 className="text-2xl font-black font-times text-[#CE1919] uppercase">Edit Product</h2>
                        <p className="text-[#CACBCD] text-xs uppercase tracking-widest mt-1">Modify existing kitchen product</p>
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
                            <p className="text-xs text-[#888] mb-4 uppercase tracking-wide">
                                {changeImages ? "Update images (Replacing all)" : "Viewing existing images. Upload to change."}
                            </p>

                            <div className="space-y-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs text-[#888] uppercase tracking-wide">
                                                Image #{index + 1}
                                            </label>
                                            {imagePreviews.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeImageSlot(index)}
                                                    className="p-1 bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded transition-all cursor-pointer"
                                                >
                                                    <X size={14} />
                                                </button>
                                            )}
                                        </div>

                                        <div className="relative group">
                                            <div className="aspect-square rounded-lg overflow-hidden border-2 border-[#CE1919]/30 bg-[#2a2a2a]">
                                                {preview ? (
                                                    <img
                                                        src={preview}
                                                        alt={`Preview ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <ImageIcon className="text-white/10" size={40} />
                                                    </div>
                                                )}
                                            </div>
                                            <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all cursor-pointer rounded-lg">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) handleImageFileChange(index, file);
                                                    }}
                                                    className="hidden"
                                                />
                                                <div className="text-xs font-bold uppercase tracking-widest text-white">Change Image</div>
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-black font-times text-[#CE1919] uppercase mb-4">Basic Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">Product Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs text-[#888] uppercase tracking-wide">Product Type *</label>
                                            <button type="button" onClick={() => setShowProductTypeModal(true)} className="text-[#CE1919] hover:text-[#AA1E1E] p-1"><Plus size={16} /></button>
                                        </div>
                                        <select
                                            name="productType"
                                            value={formData.productType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all cursor-pointer"
                                            required
                                        >
                                            <option value="">Select Product Type</option>
                                            {types.map((type) => (
                                                <option key={type._id} value={type.title} className="bg-[#1a1a1a]">{type.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs text-[#888] uppercase tracking-wide">Brand *</label>
                                            <button type="button" onClick={() => setShowBrandModal(true)} className="text-[#CE1919] hover:text-[#AA1E1E] p-1"><Plus size={16} /></button>
                                        </div>
                                        <select
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all cursor-pointer"
                                            required
                                        >
                                            <option value="">Select Brand</option>
                                            {brands.map((brand) => (
                                                <option key={brand._id} value={brand.name} className="bg-[#1a1a1a]">{brand.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">Description *</label>
                                    <textarea
                                        name="desc"
                                        value={formData.desc}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all resize-none"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <h3 className="text-lg font-black font-times text-[#CE1919] uppercase mb-4">Pricing</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">MRP (₹) *</label>
                                    <input
                                        type="number"
                                        name="mrp"
                                        value={formData.mrp}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-[#888] uppercase tracking-wide mb-2">Offer (%) *</label>
                                    <input
                                        type="number"
                                        name="offer"
                                        value={formData.offer}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>
                            {formData.mrp && formData.offer && (
                                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <div className="text-[#888] text-xs font-bold uppercase tracking-wide">Final Price</div>
                                            <div className="flex items-baseline gap-3">
                                                <div className="text-2xl font-black text-[#D9D9D9]">₹{discountedPrice.toLocaleString()}</div>
                                                <div className="text-sm text-[#888] line-through">₹{parseFloat(formData.mrp).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-black font-times text-[#CE1919] uppercase">Key Features</h3>
                                <button type="button" onClick={addKeyFeature} className="flex items-center gap-2 px-3 py-1.5 bg-[#CE1919]/10 text-[#CE1919] rounded-lg text-xs font-bold uppercase cursor-pointer"><Plus size={14} /> Add Feature</button>
                            </div>
                            <div className="space-y-3">
                                {formData.keyFeatures.map((feature, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input type="text" value={feature} onChange={(e) => handleKeyFeatureChange(index, e.target.value)} className="flex-1 px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all" required />
                                        {formData.keyFeatures.length > 1 && <button type="button" onClick={() => removeKeyFeature(index)} className="p-2.5 bg-red-600/10 text-red-500 rounded-lg cursor-pointer"><X size={18} /></button>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-black font-times text-[#CE1919] uppercase">Specifications</h3>
                                <button type="button" onClick={addSpecification} className="flex items-center gap-2 px-3 py-1.5 bg-[#CE1919]/10 text-[#CE1919] rounded-lg text-xs font-bold uppercase cursor-pointer"><Plus size={14} /> Add Spec</button>
                            </div>
                            <div className="space-y-3">
                                {formData.specifications.map((spec, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input type="text" value={spec} onChange={(e) => handleSpecificationChange(index, e.target.value)} className="flex-1 px-4 py-2.5 bg-black/20 border border-white/10 rounded-lg text-sm text-[#D9D9D9] focus:outline-none focus:border-[#CE1919]/50 transition-all" required />
                                        {formData.specifications.length > 1 && <button type="button" onClick={() => removeSpecification(index)} className="p-2.5 bg-red-600/10 text-red-500 rounded-lg cursor-pointer"><X size={18} /></button>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button type="submit" disabled={productLoading} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)] cursor-pointer disabled:opacity-50">
                                {productLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                <span>{productLoading ? "Updating..." : "Update Product"}</span>
                            </button>
                            <Link href="/admin/products" className="px-6 py-4 bg-white/5 text-[#CACBCD] rounded-lg border border-white/10 font-bold uppercase text-sm">Cancel</Link>
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
                                    disabled={typeLoading}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)] disabled:opacity-50"
                                >
                                    {typeLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                    <span>{typeLoading ? "Saving..." : "Save Type"}</span>
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
                                    disabled={brandLoading}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#CE1919] hover:bg-[#AA1E1E] text-white rounded-lg transition-all font-bold uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(206,25,25,0.3)] disabled:opacity-50"
                                >
                                    {brandLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                    <span>{brandLoading ? "Saving..." : "Save Brand"}</span>
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
};

export default EditProduct;
