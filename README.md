# React Query Pagination Demo

This project demonstrates pagination implementation using React Query for both web and React Native applications.

## Features

### Web Version

- Paginated user list with Previous/Next buttons
- Loading and error states
- Data caching between page navigation
- Skeleton loaders
- Prefetching next page data
- TypeScript support

### React Native Version

- Infinite scroll with FlatList
- Pull-to-refresh
- Loading indicators
- Error handling

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd TanStackQueryUI
   ```

2. Install dependencies:

   ```bash
   cd react-pagination
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API Used

This project uses the [Reqres API](https://reqres.in/) for demonstration purposes.

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

# TanStack Query Pagination Examples

This repository contains two implementations of pagination using TanStack Query (React Query):

1. **React Web** - A web application with numbered pagination
2. **React Native** - A mobile app with infinite scroll

## API Endpoints

### JSONPlaceholder API

- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Posts Endpoint**: `/posts`
  - **Query Params**:
    - `_page`: Page number (starts at 1)
    - `_limit`: Number of items per page (default: 10)

## Pagination Logic

### React Web (react-pagination)

- **Type**: Client-side pagination with page numbers
- **Features**:
  - Shows page numbers with first/last navigation
  - Pre-fetches next page for better UX
  - Maintains scroll position
  - Loading states and error handling

```typescript
// Example API call
const fetchUsers = async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  return response.json();
};
```

## React Native (ReactNativePagination)

- **Type**: Infinite scroll with "Load More"
- **Features**:
  - Automatically loads more items when scrolling
  - Virtualized list for performance
  - Optimized for mobile touch

## Project Structure

```
react-pagination/
  ├── src/
  │   ├── components/     # Reusable components
  │   ├── hooks/          # Custom hooks
  │   ├── services/       # API services
  │   ├── types/          # TypeScript types
  │   ├── App.tsx         # Main App component
  │   └── index.tsx       # Application entry point
  └── ...

  ReactNativePagination/
  ├── src/
  │ ├── components/           # Reusable components
  │ │ ├── PostCard/           # Post card component
  │ │ │ ├── index.tsx
  │ │ │ └── styles.ts
  │ │ └── PostList/           # Post list component
  │ │ ├── index.tsx
  │ │ └── styles.ts
  │ ├── hooks/                # Custom hooks
  │ │ └── usePosts.ts         # Posts data fetching logic
  │ ├── services/             # API services
  │ │ └── api.ts              # API configuration
  │ ├── types/                # TypeScript types
  │ │ └── post.ts             # Post type definitions
  │ ├── App.tsx               # Main App component
  │ └── index.js              # Application entry point
  └── android/                # Android native code
  └── ios/                    # iOS native code
  └── ...
```

## License

This project is open source and available under the [MIT License](LICENSE).
