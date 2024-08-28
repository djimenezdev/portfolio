import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { geolocation, ipAddress } from "@vercel/functions";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Clone the request headers so that we don't modify the original headers object
  const requestHeaders = new Headers(request.headers);
  let ip = ipAddress(request) || "unknown";
  let geoData = geolocation(request);
  // Check if the hosting platform provides the client's IP address and store it in a variable
  // if it's localhost, set it to unknown
  // Add the client's IP address to the request headers using the 'x-forwarded-for' field
  requestHeaders.set("x-forwarded-for", ip);
  requestHeaders.set("x-geo-data", JSON.stringify(geoData));
  // Return a new request object with the updated headers using NextResponse.next()
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|resume.pdf|monitoring|icon|ingest).*)",
};
