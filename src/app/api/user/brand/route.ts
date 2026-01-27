import connect from "@/lib/db/connection";
import Brand from "@/lib/db/models/Brand";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connect();
    const brands = await Brand.find().sort({ createdAt: -1 });
    return NextResponse.json(brands);
  } catch (error) {
    console.error("Error in fetching brand:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return new NextResponse("Error in fetching brand: " + error, {
      status: 400,
    });
  }
}