import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { PostCard } from '../PostCard';
import { usePosts } from '../../hooks/usePosts';
import styles from './styles';

export const PostList = () => {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = usePosts();

  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingText(prev => {
          if (prev.endsWith('...')) return 'Loading';
          return prev + '.';
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isLoading]);
  const posts = data?.pages.flatMap(page => page.posts) ?? [];

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>{loadingText}</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error loading posts: {error?.message}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.container}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
