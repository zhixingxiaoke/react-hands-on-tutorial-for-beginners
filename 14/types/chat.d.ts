export interface Chat {
    id: string
    title: string
    updateTime: number
}

export interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

export interface MessageRequestBody {
    messages: Message[]
    model: string
}