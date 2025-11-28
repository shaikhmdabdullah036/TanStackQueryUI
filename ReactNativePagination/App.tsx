import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostList } from './src/components/PostList/PostList';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <PostList />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#f3f4f6',
  },
});

export default App;
