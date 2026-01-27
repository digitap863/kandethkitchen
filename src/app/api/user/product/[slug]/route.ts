import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await connect();
        const { slug } = await params;

        const product = await Product.findOne({ slug });

        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }
        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product by slug:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
