import cloudinary from "@/lib/cloudinary";
import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await connect();
        const { searchParams } = new URL(req.url);

        const brand = searchParams.get("brand");
        const productType = searchParams.get("productType");
        const search = searchParams.get("search");
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const skip = (page - 1) * limit;

        const query: any = {};
        
        if (brand && brand !== "ALL") {
            query.brand = brand;
        }
        
        if (productType && productType !== "ALL") {
            query.productType = productType;
        }
        
        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        const total = await Product.countDocuments(query);
        const products = await Product.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return NextResponse.json({
            products,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error("Error in fetching products:", {
            message: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
        });
        return new NextResponse("Error in fetching products: " + error, {
            status: 400,
        });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connect();
        const formData = await req.formData();
        
        const title = formData.get("title") as string;
        const desc = formData.get("description") as string;
        const productType = formData.get("productType") as string;
        const brand = formData.get("brand") as string;
        const keyFeatures = formData.getAll("keyFeatures") as string[];
        const specifications = formData.getAll("specifications") as string[];
        const mrp = formData.get("mrp") as string;
        const offer = formData.get("offer") as string;
        const files = formData.getAll("images") as File[];

        if (!title || !desc || !productType || !brand || !keyFeatures || !specifications || !mrp || !offer) {
            return NextResponse.json(
                { message: "Title, description, productType, brand, keyFeatures, specifications, mrp and offer are required" },
                { status: 400 }
            );
        }

        // --- Robust Slug Generation Start ---
        let baseSlug = title
            .toLowerCase()
            .replace(/[^\w ]+/g, "")
            .replace(/ +/g, "-");

        if (!baseSlug) {
            baseSlug = `product-${Date.now()}`;
        }

        let slug = baseSlug;
        let counter = 1;

        // Check if slug exists and modify if necessary
        while (await Product.findOne({ slug })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        // --- Robust Slug Generation End ---

        const imageUrls: string[] = [];

        // Upload multiple images to Cloudinary
        for (const file of files) {
            if (file && typeof file !== "string") {
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
                imageUrls.push(uploadResult.secure_url);
            }
        }

        const product = await Product.create({
            title,
            slug,
            desc,
            productType,
            brand,
            keyFeatures,
            specifications,
            mrp,
            offer,
            img: imageUrls,
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
       console.error("Error in adding product:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return new NextResponse("Error in adding product: " + error, {
      status: 400,
    });
  }
}