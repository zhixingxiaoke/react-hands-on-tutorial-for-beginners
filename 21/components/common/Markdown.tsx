import { memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

function Markdown({ children, className = "", ...props }: Options) {
    return (
        <ReactMarkdown
            components={{
                code({ node, className, children, ...props }) {
                    //这里有改动
                    //因为录教程的时候直接react-markdown是8.0.7版本，目前直接安装已经是9.0的版本了，接口有改动
                    //所以这里改成了符合react-markdown9.0版本的写法。如果需要参考之前的版本，可以查看git历史。
                    const match = /language-(\w+)/.exec(className || "")
                    return match ? (
                        <SyntaxHighlighter
                            style={a11yDark}
                            language={match?.[1] ?? ""}
                            PreTag='div'
                        >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code
                            {...props}
                            className={className}
                        >
                            {children}
                        </code>
                    )
                }
            }}
            remarkPlugins={[remarkGfm]}
            className={`markdown prose dark:prose-invert ${className}`}
            {...props}
        >
            {children}
        </ReactMarkdown>
    )
}

export default memo(Markdown)
