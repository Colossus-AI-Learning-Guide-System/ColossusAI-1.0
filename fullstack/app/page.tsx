"use client";

import Image from "next/image"
import { useState } from "react";
import Link from "next/link";
import { MoreVertical, User, Settings, Palette, CreditCard, LogOut } from "lucide-react";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end items-start h-screen p-6">
      {/* Settings Panel */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-gray-100 rounded-lg shadow-lg z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/account" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </li>
              {/* <li className="px-4 py-2 flex hover:bg-gray-200">
                <Palette className="mr-2 h-4 w-4" />
                <span>Customization</span>
              </li>
              <li className="px-4 py-2 flex hover:bg-gray-200">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Upgrade Plan</span>
              </li> */}
              <li className="px-4 py-2 flex hover:bg-gray-200 text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
