import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PausemoColors } from '../../src/constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          메인 화면
        </Text>
        <Text style={styles.description}>
          메인 화면
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PausemoColors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PausemoColors.text,
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: PausemoColors.textSecondary,
    marginTop: 10,
    textAlign: 'center',
  },
});
