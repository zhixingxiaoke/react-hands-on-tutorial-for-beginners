import { memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

function Markdown({ children, className = "", ...props }: Options) {
    return (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline ? (
                        <SyntaxHighlighter
                            {...props}
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
