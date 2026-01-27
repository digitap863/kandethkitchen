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