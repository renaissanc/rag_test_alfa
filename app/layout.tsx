import "./global.css"

export const metadata = {
    title: "THWS University",
    description: "THWS University Data"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

export default RootLayout
