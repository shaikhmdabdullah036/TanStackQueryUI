import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface PostCardProps {
  post: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
}

export const PostCard = ({ post }: PostCardProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.body}>{post.body}</Text>
    <View style={styles.footer}>
      <Text style={styles.userId}>User ID: {post.userId}</Text>
      <Text style={styles.postId}>Post ID: {post.id}</Text>
    </View>
  </View>
);
