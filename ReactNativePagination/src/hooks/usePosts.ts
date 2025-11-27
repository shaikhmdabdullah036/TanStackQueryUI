import { useInfiniteQuery } from '@tanstack/react-query';

export const ITEMS_PER_PAGE = 10;

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${ITEMS_PER_PAGE}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      return {
        posts: data,
        page: pageParam,
      };
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.posts.length === ITEMS_PER_PAGE
        ? lastPage.page + 1
        : undefined;
    },
  });
};
