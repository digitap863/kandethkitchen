import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Product";

export async function GET(req: NextRequest) {
  try {
    await connect();
    const { searchParams } = new URL(req.url);

    const productType = searchParams.get("productType");
    const brand = searchParams.get("brand");
    const excludeId = searchParams.get("excludeId");

    const excludeIds: any[] = [];
    if (excludeId && excludeId !== "undefined" && excludeId !== "null" && require("mongoose").Types.ObjectId.isValid(excludeId)) {
      excludeIds.push(excludeId);
    }

    let relatedProducts: any[] = [];

    // 1. Try to fetch products of the same type
    if (productType && productType !== "undefined" && productType !== "null") {
      const sameType = await Product.find({
        productType,
        _id: { $nin: excludeIds }
      }).sort({ createdAt: -1 }).limit(4);
      
      relatedProducts = [...sameType];
      excludeIds.push(...sameType.map(p => p._id));
    }

    // 2. If we need more, fetch products of the same brand
    if (relatedProducts.length < 4 && brand && brand !== "undefined" && brand !== "null") {
      const sameBrand = await Product.find({
        brand,
        _id: { $nin: excludeIds }
      }).sort({ createdAt: -1 }).limit(4 - relatedProducts.length);
      
      relatedProducts = [...relatedProducts, ...sameBrand];
      excludeIds.push(...sameBrand.map(p => p._id));
    }

    // 3. If we still need more, fetch latest products
    if (relatedProducts.length < 4) {
      const latest = await Product.find({
        _id: { $nin: excludeIds }
      }).sort({ createdAt: -1 }).limit(4 - relatedProducts.length);
      
      relatedProducts = [...relatedProducts, ...latest];
    }

    return NextResponse.json(relatedProducts, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch related products";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
