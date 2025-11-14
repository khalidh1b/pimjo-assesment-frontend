import { useState, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  dealId: string;
  customer: string;
  email: string;
  product: string;
  dealValue: string;
  closeDate: string;
  status: string;
  avatar?: string;
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);

  const fetchUsers = async (): Promise<void> => {
    try {
      setIsLoadingUsers(true);
      const response = await fetch("https://69102d7545e65ab24ac5d435.mockapi.io/users");
      
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users. Please try again.");
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const deleteUser = async (userId: string): Promise<void> => {
    const response = await fetch(
      `https://69102d7545e65ab24ac5d435.mockapi.io/users/${userId}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Delete failed with status:', response.status);
      console.error('Error response:', errorText);
      throw new Error(`Failed to delete user: ${response.status} ${errorText}`);
    }

    setUsers(prevUsers => prevUsers.filter((u) => u.id !== userId));
    toast.success("User deleted successfully");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isLoadingUsers,
    fetchUsers,
    deleteUser
  };
};
