import { NextResponse } from "next/server";
import connect from "@/lib/db/connection";
import Brand from "@/lib/db/models/Brand";

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

export async function POST(req: Request) {
  try {
    await connect();
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ message: "Name required" }, { status: 400 });
    }

    const brand = await Brand.create({ name });
    return NextResponse.json(brand, { status: 201 });
  } catch (error) {
    console.error("Error in adding name:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return new NextResponse("Error in adding name: " + error, {
      status: 400,
    });
  }
}
