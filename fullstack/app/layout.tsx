import { Inter } from 'next/font/google'
import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Chatbot",
  description: "A modern chatbot interface with file attachments",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <AppSidebar />
          <main className="p-4 sm:p-6 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

