import { Chat } from "@/types/chat"

export function groupByDate(chatList: Chat[]) {
    const groupMap = new Map<string, Chat[]>()
    chatList.forEach((item) => {
        const now = new Date()
        const updateTime = new Date(item.updateTime)
        let key = "未知时间"
        const dayDiff = Math.floor(
            (now.getTime() - updateTime.getTime()) / (1000 * 60 * 60 * 24)
        )
        if (dayDiff === 0 && now.getDate() === updateTime.getDate()) {
            key = "今天"
        } else if (dayDiff <= 7) {
            key = "最近7天"
        } else if (dayDiff <= 31) {
            key = "最近一个月"
        } else if (now.getFullYear() === updateTime.getFullYear()) {
            key = `${updateTime.getMonth() + 1}月`
        } else {
            key = `${updateTime.getFullYear()}`
        }
        if (groupMap.has(key)) {
            groupMap.get(key)?.push(item)
        } else {
            groupMap.set(key, [item])
        }
    })
    groupMap.forEach((item) => {
        item.sort((a, b) => b.updateTime - a.updateTime)
    })
    const groupList = Array.from(groupMap).sort(([, list1], [, list2]) => {
        return (
            list2[list2.length - 1].updateTime -
            list1[list1.length - 1].updateTime
        )
    })
    return groupList
}