```
bg-gradient-to-b from-[rgba(255,255,255,0)] from-[13.94%] to-[#fff] to-[54.73%] pt-10 dark:from-[rgba(53,55,64,0)] dark:to-[#353740] dark:to-[58.85%]
```

```
import { MdRefresh } from "react-icons/md"
import { PiLightningFill } from "react-icons/pi"
import { FiSend } from 'react-icons/fi'
```

```
bg-primary-500 text-white hover:bg-primary-600 hover:text-white shadow-sm
```

```
colors: {
    primary: {
        500: "#00B981",
        600: "#059669"
    }
}
```

```
.animated-underline {
    cursor: url("/images/new-tab.png") 10 10, pointer;
    background-image: linear-gradient(#33333300, #33333300),
        linear-gradient(to right, #34d399, #00b981);
    background-size: 100% 2px, 0 2px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: 0.3s ease;
    transition-property: background-size, color, background-color, border-color;
}
.animated-underline:hover {
    background-size: 0 2px, 100% 2px;
}
```
