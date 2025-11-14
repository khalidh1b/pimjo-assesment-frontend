"use client";

import { JSX } from "react";
import { Trash2 } from "lucide-react";
import { getStatusColor } from "@/utils/overviewUtils";

// user row component
export const UserRow = ({ 
  user, 
  onDeleteClick, 
  isDeletingUser 
}: { 
  user: any; 
  onDeleteClick: (id: string, name: string) => void;
  isDeletingUser: boolean;
}): JSX.Element => (
  <tr key={user.dealId} className="border-b border-gray-200 hover:bg-gray-50 transition">
    <td className="px-6 py-4">
      <input type="checkbox" className="rounded" />
    </td>
    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{user.dealId}</td>
    <td className="px-6 py-4">
      <div>
        <p className="text-sm font-medium text-gray-900">{user.customer}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
    </td>
    <td className="px-6 py-4 text-sm text-gray-600">{user.product}</td>
    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{user.dealValue}</td>
    <td className="px-6 py-4 text-sm text-gray-600">{user.closeDate}</td>
    <td className="px-6 py-4">
      <span className={`text-sm font-medium ${getStatusColor(user.status)}`}>{user.status}</span>
    </td>
    <td className="px-6 py-4">
      <button
        onClick={() => onDeleteClick(user.id, user.customer)}
        disabled={isDeletingUser}
        className="p-2 hover:bg-gray-100 rounded text-gray-600 hover:text-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </td>
  </tr>
);