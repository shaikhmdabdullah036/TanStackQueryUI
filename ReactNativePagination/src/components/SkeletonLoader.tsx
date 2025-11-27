import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const SkeletonLoader = () => (
  <SkeletonPlaceholder>
    <View style={styles.container}>
      <View style={styles.title} />
      <View style={styles.bodyLine} />
      <View style={[styles.bodyLine, { width: '90%' }]} />
      <View style={styles.footer}>
        <View style={styles.footerText} />
        <View style={styles.footerText} />
      </View>
    </View>
  </SkeletonPlaceholder>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    height: 24,
    width: '80%',
    marginBottom: 12,
    borderRadius: 4,
  },
  bodyLine: {
    height: 16,
    width: '100%',
    marginBottom: 8,
    borderRadius: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerText: {
    height: 14,
    width: 80,
    borderRadius: 4,
  },
});
