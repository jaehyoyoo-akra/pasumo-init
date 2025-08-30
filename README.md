# UX Init - 모던한 UX 디자인 시스템

## 📱 프로젝트 소개

UX Init는 사용자 경험을 위한 혁신적인 시작을 제공하는 모던한 UX 디자인 시스템입니다. React Native와 Expo를 기반으로 한 크로스 플랫폼 모바일 앱 개발을 지원합니다.

## 🏗️ 프로젝트 구조

```
src/
├── components/      # 재사용 가능한 UI 컴포넌트
│   ├── ShadowWrapper.tsx
│   ├── ExternalLink.tsx
│   ├── PressButton.tsx
│   ├── PremiumCard.tsx
│   └── ThemedText.tsx
├── screens/         # 화면 단위 컴포넌트
│   └── WelcomeScreen.tsx
├── contexts/        # React Context API
│   └── OnboardingContext.tsx
├── constants/       # 상수 및 테마
│   ├── Colors.ts
│   ├── Theme.ts
│   └── TailwindClasses.ts
├── types/           # TypeScript 타입 정의
│   └── onboarding.ts
├── App.tsx          # 메인 앱 컴포넌트
└── index.ts         # 주요 export 관리
```

## 🚀 주요 기능

### 시작 화면
- **WelcomeScreen**: 앱 시작 화면
- **모던한 애니메이션**: 부드러운 페이드인과 스케일 애니메이션
- **반응형 디자인**: 다양한 화면 크기 지원
- **다크 모드**: 자동 테마 전환 지원

### 핵심 특징
- **깔끔한 UI**: 미니멀하고 직관적인 인터페이스
- **접근성**: VoiceOver, TalkBack 지원
- **성능 최적화**: React Native 최적화 기법 적용

## 🛠️ 기술 스택

- **React Native** + **Expo**
- **TypeScript**
- **Tailwind CSS**
- **React Context API**
- **Expo Router**

## 📱 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# iOS 시뮬레이터 실행
npm run ios

# Android 에뮬레이터 실행
npm run android
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #2563EB (블루)
- **Secondary**: #0891B2 (틸)
- **Background**: #09090B (다크)
- **Surface**: #18181B (라이트 다크)

### 테마 시스템
- **라이트 모드**: 밝고 깔끔한 인터페이스
- **다크 모드**: 눈에 편안한 어두운 인터페이스
- **자동 전환**: 시스템 설정에 따른 자동 테마 변경

## 🔄 개발 가이드라인

### 컴포넌트 설계 원칙
1. **단일 책임**: 하나의 컴포넌트는 하나의 역할만
2. **재사용성**: UI 컴포넌트는 재사용 가능하게 설계
3. **접근성**: VoiceOver, TalkBack 지원
4. **반응형**: 다양한 화면 크기와 방향 지원

### 상태 관리
- **Context API**: React Context를 활용한 전역 상태 관리
- **로컬 스토리지**: AsyncStorage 활용
- **서버 의존성 최소화**: 로컬 우선 처리

## 📚 문서 참조

- **React Native Docs**: 공식 문서 및 가이드
- **Expo Documentation**: Expo 기능 및 API 참조
- **NativeWind**: Tailwind CSS for React Native

## 🤝 기여 방법

1. 이슈 생성 또는 기존 이슈 확인
2. 기능 브랜치 생성 (`feature/기능명`)
3. 코드 작성 및 테스트
4. Pull Request 생성
5. 코드 리뷰 및 머지

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
