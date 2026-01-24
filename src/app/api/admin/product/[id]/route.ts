import cloudinary, { deleteFromCloudinary } from "@/lib/cloudinary";
import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connect();
        const { id } = await params;
        const formData = await req.formData();

        const updateData: any = {};
        
        // Helper to get array from formData (handles both multiple fields and comma-separated strings)
        const getArray = (key: string) => {
            const raw = formData.getAll(key);
            if (raw.length === 0) return null;
            if (raw.length === 1 && typeof raw[0] === "string" && raw[0].includes(",")) {
                return raw[0].split(",").map(s => s.trim()).filter(s => s !== "");
            }
            return raw.map(s => (typeof s === "string" ? s.trim() : s)).filter(s => s !== "");
        };

        // Standard fields
        const fields = ["title", "productType", "brand", "mrp", "offer"];
        fields.forEach(field => {
            const value = formData.get(field);
            if (value !== null) {
                updateData[field] = value;
                if (field === "title") {
                    let newSlug = (value as string)
                        .toLowerCase()
                        .replace(/[^\w ]+/g, "")
                        .replace(/ +/g, "-");
                    if (!newSlug) newSlug = `product-${Date.now()}`;
                    updateData.slug = newSlug;
                }
            }
        });

        // Handle description specifically (compat with POST route)
        const desc = formData.get("desc") || formData.get("description");
        if (desc !== null) updateData.desc = desc;

        // Handle array fields
        const keyFeatures = getArray("keyFeatures");
        if (keyFeatures) updateData.keyFeatures = keyFeatures;

        const specifications = getArray("specifications");
        if (specifications) updateData.specifications = specifications;

        // Simplified Image Logic
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        const newFiles = formData.getAll("images") as File[];
        const hasNewImages = newFiles.length > 0 && newFiles[0].size > 0;

        if (hasNewImages) {
            // 1. Delete ALL old images from Cloudinary
            const oldImages = product.img || [];
            for (const url of oldImages) {
                await deleteFromCloudinary(url);
            }

            // 2. Upload ALL new images to Cloudinary
            const uploadedUrls: string[] = [];
            for (const file of newFiles) {
                if (file && typeof file !== "string" && file.size > 0) {
                    const bytes = await file.arrayBuffer();
                    const buffer = Buffer.from(bytes);
                    
                    const uploadResult = await new Promise<any>((resolve, reject) => {
                        const uploadStream = cloudinary.uploader.upload_stream(
                            { folder: "KandethKitchen/Products", resource_type: "auto" },
                            (error, result) => {
                                if (error) reject(error);
                                else if (result) resolve(result);
                                else reject(new Error("Upload failed"));
                            }
                        );
                        uploadStream.end(buffer);
                    });
                    uploadedUrls.push(uploadResult.secure_url);
                }
            }
            // 3. Set the new image list
            updateData.img = uploadedUrls;
        }

        // Perform the update
        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            { $set: updateData }, 
            { new: true, runValidators: true }
        );

        return NextResponse.json(updatedProduct);
    } catch (error) {
        console.error("Error in updating product:", {
              message: error instanceof Error ? error.message : String(error),
              stack: error instanceof Error ? error.stack : undefined,
            });
            return new NextResponse("Error in updating product: " + error, {
              status: 400,
            });
          }
}



export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connect();
        const { id } = await params;

        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        // Delete all images from Cloudinary
        if (product.img && product.img.length > 0) {
            for (const url of product.img) {
                await deleteFromCloudinary(url);
            }
        }

        await Product.findByIdAndDelete(id);

        return NextResponse.json({ message: "Product deleted successfully" });
    } catch (error) {
         console.error("Error in deleting product:", {
              message: error instanceof Error ? error.message : String(error),
              stack: error instanceof Error ? error.stack : undefined,
            });
            return new NextResponse("Error in deleting product: " + error, {
              status: 400,
            });
          }
}