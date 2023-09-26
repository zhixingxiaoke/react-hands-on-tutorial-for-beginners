"use client"

import {
    Dispatch,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useReducer,
    useState
} from "react"

export type EventListener = (data?: any) => void

type EventBusContextProps = {
    subscribe: (event: string, callback: EventListener) => void
    unsubscribe: (event: string, callback: EventListener) => void
    publish: (event: string, data?: any) => void
}

const EventBusContext = createContext<EventBusContextProps>(null!)

export function useEventBusContext() {
    return useContext(EventBusContext)
}

export default function EventBusContextProvider({
    children
}: {
    children: ReactNode
}) {
    const [listeners, setListeners] = useState<Record<string, EventListener[]>>(
        {}
    )

    const subscribe = useCallback(
        (event: string, callback: EventListener) => {
            if (!listeners[event]) {
                listeners[event] = []
            }
            listeners[event].push(callback)
            setListeners({ ...listeners })
        },
        [listeners]
    )

    const unsubscribe = useCallback(
        (event: string, callback: EventListener) => {
            if (listeners[event]) {
                listeners[event] = listeners[event].filter(
                    (cb) => cb !== callback
                )
                setListeners({ ...listeners })
            }
        },
        [listeners]
    )

    const publish = useCallback(
        (event: string, data?: any) => {
            if (listeners[event]) {
                listeners[event].forEach((callback) => callback(data))
            }
        },
        [listeners]
    )

    const contextValue = useMemo(() => {
        return { subscribe, unsubscribe, publish }
    }, [subscribe, unsubscribe, publish])

    return (
        <EventBusContext.Provider value={contextValue}>
            {children}
        </EventBusContext.Provider>
    )
}
