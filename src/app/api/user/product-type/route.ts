import connect from "@/lib/db/connection";
import ProductType from "@/lib/db/models/ProductType";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await connect();
    const types = await ProductType.find().sort({ createdAt: -1 });
    return NextResponse.json(types);
  } catch (error) {
    console.error("Error in fetching type:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return new NextResponse("Error in fetching type: " + error, {
      status: 400,
    });
  }
}