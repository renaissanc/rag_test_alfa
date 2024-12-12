import "./global.css"

export const metadata = {
    title: "F1GPT",
    description: "formula 1 data"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

export default RootLayout