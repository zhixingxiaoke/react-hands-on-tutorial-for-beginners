"use client"

import { useAppContext } from "@/components/AppContext"
import Menubar from "./Menubar"
import Toolbar from "./Toolbar"
import ChatList from "./ChatList"

export default function Navigation() {
    const {
        state: { displayNavigation }
    } = useAppContext()
    return (
        <nav
            className={`${
                displayNavigation ? "" : "hidden"
            } flex flex-col dark relative h-full w-[260px] bg-gray-900 text-gray-300 p-2`}
        >
            <Menubar />
            <ChatList />
            <Toolbar />
        </nav>
    )
}
