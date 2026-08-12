import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Yassin ElHawash · OGT Education Lab",description:"Application for OGT Educational Manager — Egypt Directors Team 26.2"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
