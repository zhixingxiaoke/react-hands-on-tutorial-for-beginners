"use client"
import Navigation from "@/components/home/Navigation"
import Main from "@/components/home/Main"
import { useState } from "react"

export default function Home() {
    const [counter, setCounter] = useState(0)
    const list = [
        { id: 1, value: "content1" },
        { id: 2, value: "content2" },
        { id: 3, value: "content3" },
        { id: 4, value: "content4" }
    ]
    function handleClick() {
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        alert("click: " + counter)
    }
    return (
        <div className='bg-yellow-500 p-10'>
            <button onClick={handleClick}>button</button>
            <Navigation />
            <Main counter={counter} />
            counter: {counter}
            {counter === 0 ? <p>计数器没有启动</p> : <p>计数器: {counter}</p>}
            <ul>
                {list.map((item) => {
                    return <li key={item.id}>{item.value}</li>
                })}
            </ul>
        </div>
    )
}
