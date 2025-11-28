import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f2937',
  },
  body: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 8,
  },
  userId: {
    fontSize: 12,
    color: '#6b7280',
  },
  postId: {
    fontSize: 12,
    color: '#6b7280',
  },
});

export default styles;
