"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import usericon from "@/app/assets/user.svg"

interface AccountDropdownButtonProps {
  userName?: string
  userImage?: string
  isOpen: boolean
  onClick: () => void
}

export const AccountDropdownButton = ({
  userName,
  userImage,
  isOpen,
  onClick
}: AccountDropdownButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-800"
    >
      <Image 
        src={userImage || usericon} 
        className="rounded-full" 
        width={25} 
        height={25} 
        alt="User"
      />
      <span>Account</span>
      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};