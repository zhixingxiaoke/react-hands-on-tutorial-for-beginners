import { sleep } from "@/common/util";
import { NextRequest, } from "next/server";

export async function POST(request: NextRequest) {
    const { messageText } = await request.json()
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
        async start(controller) {
            for (let i = 0; i < messageText.length; i++) {
                await sleep(100)
                controller.enqueue(encoder.encode(messageText[i]))
            }
            controller.close()
        }
    })
    return new Response(stream)
}