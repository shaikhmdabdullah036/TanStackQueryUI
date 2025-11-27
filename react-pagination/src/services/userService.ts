import { QueryClient } from "@tanstack/react-query";
import { UsersResponse } from "../types/user";

export const fetchUsers = async (page: number): Promise<UsersResponse> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch posts");
    }

    const data: UsersResponse = await response.json();
    console.log(`Fetched page ${page}:`, data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const prefetchUsers = async (page: number) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
  });
};
