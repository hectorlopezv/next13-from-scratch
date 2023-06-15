import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //evaluated dynmically when passing request parama
  // of any onther methods besides GET
  // or using cookies or headers
  const { searchParams } = new URL(request.url);
  //   const name = searchParams.get("name") || "world";
  //   const instrument = searchParams.get("instrument") || "guitar";

  //  return NextResponse.json({ name, instrument }, { status: 200 });

  const obj = Object.fromEntries(searchParams.entries());
  return NextResponse.json(obj, { status: 200 });
}
