import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { PausemoColors } from '../src/constants/Colors';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: '페이지를 찾을 수 없습니다' }} />
      <View style={styles.container}>
        <Text style={styles.title}>
          페이지를 찾을 수 없습니다.
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: PausemoColors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: PausemoColors.text,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: PausemoColors.primary,
    fontSize: 16,
  },
});
