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

### React Native Version (Coming Soon)

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
```

## License

This project is open source and available under the [MIT License](LICENSE).
