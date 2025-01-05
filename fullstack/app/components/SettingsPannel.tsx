"use client"

import Link from "next/link"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  MoreVertical,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Palette,
} from 'lucide-react'
import { useState } from 'react'

export function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        aria-label="Settings menu"
      >
        <MoreVertical className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="py-1">
            <Link
              href="/account"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <User className="mr-2 h-4 w-4" />
              Account
            </Link>
            <Link
              href="/settings"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
            {/* <Link
              href="/customization"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Palette className="mr-2 h-4 w-4" />
              Customization
            </Link> */}
            {/* <Link
              href="/upgradeplan"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Upgrade Plan
            </Link> */}
          </div>
          <div className="border-t border-gray-200"></div>
          <Link
            href="/logout"
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Link>
        </div>
      )}
    </div>
  )
}
