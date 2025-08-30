import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '페이지를 찾을 수 없습니다' }} />
      <View style={styles.container}>
        <Text style={styles.title}>
          페이지를 찾을 수 없습니다.
        </Text>
        <Text style={styles.subtitle}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>홈 화면으로 돌아가기</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  link: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
