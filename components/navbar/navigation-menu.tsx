"use client";

import { ChevronDown } from "lucide-react";
import { NavigationMenuItem } from "./navigation-menu-item";
import { MegaMenuDropdown } from "./mega-menu-dropdown";
import { NavigationSkeleton } from "./navigation-skeleton";

interface NavigationMenuProps {
  items: any[];
  isLoading: boolean;
};

export const NavigationMenu = ({ items, isLoading }: NavigationMenuProps) => {
  if (isLoading) {
    return <NavigationSkeleton />;
  };

  return (
    <nav className="flex items-center md:flex hidden gap-6 ml-4">
      {items.map((item) => {
        if (item.type === "mega" && item.columns) {
          return (
            <div key={item.id} className="relative group">
              <button className="flex items-center gap-1 text-gray-700 rounded-md hover:bg-gray-200 py-2 px-2 hover:text-gray-900 font-medium text-sm">
                {item.label}
                <ChevronDown className="w-4 h-4" />
              </button>
              <MegaMenuDropdown columns={item.columns} />
            </div>
          );
        }

        return (
          <NavigationMenuItem
            key={item.id}
            href={item.href || "#"}
            label={item.label}
          />
        );
      })}
    </nav>
  );
};