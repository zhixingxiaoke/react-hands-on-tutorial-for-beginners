import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id")
    if (!id) {
        return NextResponse.json({ code: -1 })
    }
    const deleteMessages = prisma.message.deleteMany({
        where: {
            chatId: id
        }
    })
    const deleteChat = prisma.chat.delete({
        where: {
            id
        }
    })
    await prisma.$transaction([deleteMessages, deleteChat])
    return NextResponse.json({ code: 0 })
}