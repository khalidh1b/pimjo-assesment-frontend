"use client"

import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface MenuItemProps {
  label: string
  icon: LucideIcon
  href?: string
  onClick?: () => void
}

export const MenuItem = ({ label, icon: Icon, href = "#", onClick }: MenuItemProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="w-full px-6 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition text-sm"
    >
      <Icon className="w-4 h-4 text-gray-600" />
      <span>{label}</span>
    </Link>
  );
};