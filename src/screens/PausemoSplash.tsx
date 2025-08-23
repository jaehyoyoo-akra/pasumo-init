import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ShadowWrapper, PressButton } from '../components';
import { Theme } from '../constants/Theme';
import { colors, darkColors, typography, spacing, borderRadius, animations } from '../constants/Colors';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function PausemoSplash() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const logoScaleAnim = useRef(new Animated.Value(0)).current;
  const textFadeAnim = useRef(new Animated.Value(0)).current;
  const buttonFadeAnim = useRef(new Animated.Value(0)).current;
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const cosmicRippleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 애니메이션 시퀀스 시작
    const startAnimation = () => {
      // 1. 배경 페이드인
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animations.timing.dramatic,
        useNativeDriver: true,
      }).start();

      // 2. 로고 스케일 애니메이션
      Animated.sequence([
        Animated.delay(500),
        Animated.spring(logoScaleAnim, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();

      // 3. 텍스트 페이드인
      Animated.sequence([
        Animated.delay(1200),
        Animated.timing(textFadeAnim, {
          toValue: 1,
          duration: animations.timing.slow,
          useNativeDriver: true,
        }),
      ]).start();

      // 4. 전체 스케일 애니메이션
      Animated.sequence([
        Animated.delay(800),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 80,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();

      // 5. 버튼 페이드인
      Animated.sequence([
        Animated.delay(2000),
        Animated.timing(buttonFadeAnim, {
          toValue: 1,
          duration: animations.timing.fast,
          useNativeDriver: true,
        }),
      ]).start();

      // 6. 파동 애니메이션 시작
      Animated.loop(
        Animated.sequence([
          Animated.timing(rippleAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(rippleAnim, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      // 7. 우주 파동 애니메이션 시작
      Animated.loop(
        Animated.sequence([
          Animated.timing(cosmicRippleAnim, {
            toValue: 1,
            duration: 6000,
            useNativeDriver: true,
          }),
          Animated.timing(cosmicRippleAnim, {
            toValue: 0,
            duration: 6000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [fadeAnim, scaleAnim, logoScaleAnim, textFadeAnim, buttonFadeAnim]);

  const handleStartPress = () => {
    // 시작하기 버튼을 누르면 메인으로 바로 이동
    console.log('시작하기 버튼 클릭됨 - 메인으로 이동');
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.background,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <LinearGradient
          colors={[
            darkColors.surface[0], 
            darkColors.surface[1], 
            darkColors.surface[0], 
            darkColors.surface[0]
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        />
        
        {/* 우주공간 별들 */}
        <View style={styles.starsContainer}>
          {[...Array(15)].map((_, index) => (
            <ShadowWrapper key={index} variant="subtle" style={{ borderRadius: 1 }}>
              <View
                style={[
                  styles.star,
                  {
                    left: Math.random() * width,
                    top: Math.random() * height,
                    opacity: Math.random() * 0.6 + 0.2,
                    width: Math.random() * 2 + 1,
                    height: Math.random() * 2 + 1,
                  },
                ]}
              />
            </ShadowWrapper>
          ))}
        </View>

        {/* 나선형 동심원 효과 */}
        <View style={styles.rippleContainer}>
          {[...Array(3)].map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.ripple,
                {
                  borderColor: colors.semantic.neutral,
                  opacity: 0.08 - index * 0.02,
                  transform: [{ rotate: `${index * 15}deg` }],
                },
              ]}
            />
          ))}
        </View>
        
        {/* 애니메이션 파동 효과 */}
        <Animated.View
          style={[
            styles.rippleContainer,
            {
              opacity: rippleAnim,
              transform: [{ scale: rippleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1.2],
              }) }],
            },
          ]}
        >
          <View style={[styles.ripple, { borderColor: colors.text.muted, opacity: 0.06 }]} />
        </Animated.View>
        
        {/* 추가 우주 파동 효과 */}
        <Animated.View
          style={[
            styles.cosmicRippleContainer,
            {
              opacity: cosmicRippleAnim,
              transform: [{ scale: cosmicRippleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1.1],
              }) }],
            },
          ]}
        >
          {[...Array(2)].map((_, index) => (
            <View
              key={`cosmic-${index}`}
              style={[
                styles.cosmicRipple,
                {
                  borderColor: colors.text.muted,
                  opacity: 0.04 - index * 0.015,
                },
              ]}
            />
          ))}
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          styles.content,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        {/* 로고 영역 */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [{ scale: logoScaleAnim }],
            },
          ]}
        >
          <ShadowWrapper variant="medium" style={{ borderRadius: borderRadius['2xl'] }}>
            <View style={styles.logoSquare}>
              <LinearGradient
                colors={[colors.primary[400], colors.primary[500], colors.primary[600]]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.logoGradient}
              >
                <View style={styles.spiralContainer}>
                  <View style={styles.spiralOuter} />
                  <View style={styles.spiralMiddle} />
                  <View style={styles.spiralInner} />
                  <View style={styles.spiralCenter} />
                </View>
              </LinearGradient>
            </View>
          </ShadowWrapper>
        </Animated.View>

        {/* 앱 이름 */}
        <Animated.Text
          style={[
            styles.appName,
            {
              opacity: textFadeAnim,
            },
          ]}
        >
          Pausemo
        </Animated.Text>

        {/* 태그라인 */}
        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity: textFadeAnim,
            },
          ]}
        >
          3초의 멈춤이 만드는{'\n'}평생의 변화
        </Animated.Text>

        {/* 부제목 */}
        <Animated.Text
          style={[
            styles.subtitle,
            {
              opacity: textFadeAnim,
            },
          ]}
        >
          나선형 성장 트레이너
        </Animated.Text>
      </Animated.View>

      {/* 시작하기 버튼 */}
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: buttonFadeAnim,
          },
        ]}
      >
        <PressButton
          title="시작하기"
          onPress={handleStartPress}
          variant="start"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gradient: {
    flex: 1,
  },
  starsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  star: {
    position: 'absolute',
    width: 1,
    height: 1,
    backgroundColor: colors.surface[0],
    borderRadius: 0.5,
    opacity: 0.6,
  },
  rippleContainer: {
    position: 'absolute',
    top: height / 2 - 100,
    left: width / 2 - 100,
    right: width / 2 - 100,
    bottom: height / 2 - 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ripple: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
  },
  cosmicRippleContainer: {
    position: 'absolute',
    top: height / 2 - 150,
    left: width / 2 - 150,
    right: width / 2 - 150,
    bottom: height / 2 - 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cosmicRipple: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    flex: 1,
  },
  logoContainer: {
    marginBottom: spacing.xl,
  },
  logoSquare: {
    width: 120,
    height: 120,
    borderRadius: borderRadius['2xl'],
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spiralContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  spiralOuter: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: colors.surface[0],
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 24,
    transform: [{ rotate: '-45deg' }],
  },
  spiralMiddle: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderWidth: 2,
    borderColor: colors.surface[0],
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRadius: 16,
    transform: [{ rotate: '45deg' }],
  },
  spiralInner: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: colors.surface[0],
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 8,
    transform: [{ rotate: '45deg' }],
  },
  spiralCenter: {
    position: 'absolute',
    width: 4,
    height: 4,
    backgroundColor: colors.surface[0],
    borderRadius: 2,
  },
  appName: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.bold,
    color: darkColors.text.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
    fontFamily: Theme.fonts.primary,
    // 텍스트 글로우 효과
    ...(Platform.OS === 'ios' ? {
      textShadowColor: 'rgba(37, 99, 235, 0.2)',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 20,
    } : {}),
  },
  tagline: {
    fontSize: typography.sizes.xl,
    color: darkColors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.sizes.xl * typography.lineHeights.relaxed,
    marginBottom: spacing.md,
    fontFamily: Theme.fonts.krPrimary,
    fontWeight: typography.weights.medium,
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    color: darkColors.text.secondary,
    textAlign: 'center',
    opacity: 0.8,
    fontFamily: Theme.fonts.krPrimary,
    fontWeight: typography.weights.normal,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: spacing['2xl'],
    left: spacing.xl,
    right: spacing.xl,
  },
  startButton: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.surface[0],
    marginRight: spacing.sm,
    fontFamily: Theme.fonts.primary,
  },
  startButtonArrow: {
    fontSize: typography.sizes.lg,
    color: colors.surface[0],
    fontWeight: typography.weights.semibold,
  },
});
