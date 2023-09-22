```
[
    {
        id: "1",
        title: "React入门实战教程",
        updateTime: Date.now()
    },
    {
        id: "2",
        title: "如何使用Next.js创建React项目",
        updateTime: Date.now() + 1
    },
    {
        id: "3",
        title: "知行小课",
        updateTime: Date.now() + 2
    }
]
```

```
import { AiOutlineEdit } from "react-icons/ai"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrashBold } from "react-icons/pi"
```

```
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
```

```
::-webkit-scrollbar {
    height: 1rem;
    width: 0.5rem;
}

::-webkit-scrollbar:horizontal {
    height: 0.5rem;
    width: 1rem;
}

::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 9999px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(217, 217, 227, 0.8);
    border-color: rgb(255, 255, 255);
    border-radius: 9999px;
    border-width: 1px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgb(236, 236, 241);
}

.dark ::-webkit-scrollbar-thumb {
    background-color: rgb(86, 88, 105);
}

.dark ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(172, 172, 190);
}
```
