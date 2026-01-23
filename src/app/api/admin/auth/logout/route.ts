import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const cookieStore = await cookies();
    
    // Delete the accessToken cookie with explicit options
    cookieStore.set("accessToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0, // Expire immediately
    });
    
    return Response.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Error in Logout:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    return new NextResponse("Error in Logout: " + error, {
      status: 400,
    });
  }
};