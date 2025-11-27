import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UsersList } from "./components/UsersList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <div className="text-center mb-8">
          <h1>User Directory</h1>
          <p>Browse through our user list with smooth pagination</p>
        </div>

        <div className="card">
          <UsersList />
        </div>

        <div className="footer">
          <p>Built with React, TypeScript, and React Query</p>
        </div>
      </div>

      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      )}
    </QueryClientProvider>
  );
}

export default App;
