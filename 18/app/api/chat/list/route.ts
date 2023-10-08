import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const param = request.nextUrl.searchParams.get("page")
    const page = param ? parseInt(param) : 1
    const list = await prisma.chat.findMany({
        skip: (page - 1) * 20,
        take: 20,
        orderBy: {
            updateTime: "desc"
        }
    })
    const count = await prisma.chat.count()
    const hasMore = count > page * 20
    return NextResponse.json({ code: 0, data: { list, hasMore } })
}