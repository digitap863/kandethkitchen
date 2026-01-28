import { NextResponse } from "next/server";
import connect from "@/lib/db/connection";
import Product from "@/lib/db/models/Product";

export async function GET() {
  try {
    await connect();
    
    // Fetch latest 5 products sorted by createdAt in descending order
    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .limit(5);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch latest products";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
