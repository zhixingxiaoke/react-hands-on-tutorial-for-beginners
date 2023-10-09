import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { id, ...data } = body
    await prisma.chat.update({
        data,
        where: {
            id
        }
    })
    return NextResponse.json({ code: 0 })
}