import Navbar from "./components/Navbar"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "thisismycareerway",
  description: "Bir bilgisayar mühendisinin yazılım yolculuğu",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}