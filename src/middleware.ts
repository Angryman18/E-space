import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Intercepted...");
  const token = request.cookies.get("token");
  const currURL = new URL(request.url);

  if (request.url.includes("callback")) return NextResponse.next();

  if (!token) {
    if (!request.nextUrl.pathname.includes("login")) {
      // insert next when user is not request /login && user is not requesting to only /
      // thus we get to know user is requesting to the something /something/something
      const pathname = request.nextUrl.pathname;
      const redirectURL = new URL("/login", request.url);
      if (!pathname.includes("login") && pathname !== "/") {
        redirectURL.searchParams.append("next", encodeURI(request.nextUrl.href));
      }
      return NextResponse.redirect(redirectURL);
    }
  }

  if (token && currURL.pathname.includes("login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (currURL.pathname !== request.nextUrl.pathname) {
    return NextResponse.redirect(new URL(request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
