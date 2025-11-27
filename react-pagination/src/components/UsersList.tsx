import React, { useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { UserCard } from "./UserCard";
import { SkeletonLoader } from "./SkeletonLoader";
import { Pagination } from "./Pagination";
import { User } from "../types/user";

const ITEMS_PER_PAGE = 5;
const TOTAL_ITEMS = 100;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

export const UsersList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, isFetching } = useUsers(page);

  useEffect(() => {
    if (page < TOTAL_PAGES) {
      const nextPage = page + 1;
      import("../services/userService").then(({ prefetchUsers }) => {
        prefetchUsers(nextPage);
      });
    }
  }, [page]);

  if (isLoading) {
    return <SkeletonLoader count={ITEMS_PER_PAGE} />;
  }

  if (isError) {
    return (
      <div className="error-message">
        <h2>Error loading posts</h2>
        <p>{error?.message || "An unknown error occurred"}</p>
        <button
          onClick={() => window.location.reload()}
          className="button button-primary"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="no-users">
        <h2>No posts found</h2>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="users-container">
      {!isFetching && (
        <div className="grid">
          {data.map((post: User) => (
            <UserCard key={post.id} user={post} />
          ))}
        </div>
      )}

      {isFetching && <SkeletonLoader count={ITEMS_PER_PAGE} />}

      <Pagination
        currentPage={page}
        totalPages={TOTAL_PAGES}
        onPageChange={setPage}
      />
    </div>
  );
};
