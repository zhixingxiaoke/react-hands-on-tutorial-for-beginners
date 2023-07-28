import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1>Hello React</h1>
            {React.createElement("h1", null, "Hello React!!!")}
        </main>
    )
}
