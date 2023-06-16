import { NextResponse } from "next/server";
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["http://localhost:3000"]
    : ["http://localhost:3000", "https://www.google.com"];
export async function middleware(request: Request) {
  const regex = new RegExp("/api/*");
  if (regex.test(request.url)) {
    console.log("regex test");
  }
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 403,
      statusText: "Forbidden",
      headers: {
        "content-type": "text/plain",
      },
    });
  }
  console.log("middleware");
  console.log(request.method);
  console.log(request.url);
  console.log("origin: " + origin);
  NextResponse.next();
}
export const config = {
  matcher: "/api/:path*",
};
