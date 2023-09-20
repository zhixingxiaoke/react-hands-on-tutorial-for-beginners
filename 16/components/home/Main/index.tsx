import ChatInput from "./ChatInput"
import Menu from "./Menu"
import MessageList from "./MessageList"
import Welcome from "./Welcome"

export default function Main() {
    return (
        <div className='flex-1 relative'>
            <main className='overflow-y-auto w-full h-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100'>
                <Menu />
                {/* <Welcome /> */}
                <MessageList />
                <ChatInput />
            </main>
        </div>
    )
}
