// get paginated users from the full list
export const getPaginatedUsers = (users: any[], startIndex: number, endIndex: number): any[] => {
  return users.slice(startIndex, endIndex);
};

// log paginated users for debugging
export const logPaginatedUsers = (users: any[]): void => {
  console.log('paginated users', users);
};

// check if loading state should be shown
export const shouldShowLoading = (isAuthLoading: boolean, isLoadingUsers: boolean): boolean => {
  return isAuthLoading || isLoadingUsers;
};

// check if no users state should be shown
export const shouldShowNoUsers = (users: any[], isLoadingUsers: boolean): boolean => {
  return !isLoadingUsers && users.length === 0;
};

// get display text for pagination info
export const getPaginationText = (startIndex: number, endIndex: number, totalLength: number): string => {
  return `showing ${startIndex + 1} to ${Math.min(endIndex, totalLength)} of ${totalLength}`;
};