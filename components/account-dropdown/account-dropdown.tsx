"use client";

import { AccountDropdownButton } from "./account-dropdown-button";
import { AccountDropdownContent } from "./account-dropdown-content";
import { useAccountDropdown } from "./use-account-dropdown";

export const AccountDropdown = () => {
  const {
    isOpen,
    dropdownRef,
    user,
    menuItems,
    toggleDropdown,
    handleMenuItemClick
  } = useAccountDropdown();

  return (
    <div className="relative" ref={dropdownRef}>
      <AccountDropdownButton
        userName={user?.name}
        userImage={user?.image}
        isOpen={isOpen}
        onClick={toggleDropdown}
      />

      {isOpen && (
        <AccountDropdownContent
          userName={user?.name}
          userEmail={user?.email}
          menuItems={menuItems}
          onMenuItemClick={handleMenuItemClick}
        />
      )}
    </div>
  );
};