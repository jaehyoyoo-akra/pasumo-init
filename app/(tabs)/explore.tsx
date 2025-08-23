import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PausemoColors } from '../../src/constants/Colors';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>탐색</Text>
        <Text style={styles.description}>
          Pausemo 앱의 탐색 기능을 개발 중입니다.
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
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: PausemoColors.textSecondary,
    textAlign: 'center',
  },
});
