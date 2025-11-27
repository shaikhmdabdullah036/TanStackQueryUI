import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchUsers } from "../services/userService";
import { UsersResponse } from "../types/user";

export const useUsers = (page: number) => {
  return useQuery<UsersResponse, Error>({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });
};
