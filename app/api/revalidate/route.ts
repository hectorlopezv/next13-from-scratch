// import { revalidatePath } from "next/cache";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const path = request.nextUrl.searchParams.get("path") as string;
//   await revalidatePath("/"); // on demans relavalidation, PATH OR CACHE
//   return NextResponse.json({ revalidated: true, now: Date.now() });
// }
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret')

    if (secret !== process.env.MY_SECRET_TOKEN) {
        return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const path = request.nextUrl.searchParams.get('path') || '/'

    revalidatePath(path)

    return NextResponse.json({ revalidated: true })
}