"use client"

import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Plus, Paperclip, User2, HelpCircle, LogOut, Menu } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Add Project",
    icon: Plus,
    href: "/add-project",
  },
  {
    title: "Attach File",
    icon: Paperclip,
    href: "/attach-file",
  },
  {
    title: "Profile",
    icon: User2,
    href: "/profile",
  },
  {
    title: "FAQ",
    icon: HelpCircle,
    href: "/faq",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[360px]">
        <SheetHeader>
          <SheetTitle>Modern Chatbot</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

