import { User } from '../types/post';

export const fetchPosts = async (
  page: number,
  limit: number = 10,
): Promise<User[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};
