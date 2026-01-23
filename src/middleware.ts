import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the token from cookies
  const token = request.cookies.get("accessToken")?.value;

  // Define admin paths
  const isAdminPath = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login";

  if (isAdminPath) {
    // Handle the root /admin path
    if (pathname === "/admin") {
      if (token) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // If the user is on the login page
    if (isLoginPage) {
      // If already authenticated, redirect to dashboard
      if (token) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      // If not authenticated, allow access to login page
      return NextResponse.next();
    }

    // For all other admin sub-paths, check for authentication
    if (!token) {
      // Not authenticated, redirect to login
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

// Config to match only /admin and its sub-paths
export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
