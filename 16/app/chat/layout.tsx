export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <div className='bg-orange-500 p-10'>{children}</div>
}
