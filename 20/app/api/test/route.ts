import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { url } = request
    return NextResponse.json({ url })
}