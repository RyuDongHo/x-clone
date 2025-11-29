# App Layer (FSD)

이 폴더는 **Feature-Sliced Design의 app 레이어**입니다.

## 역할
애플리케이션의 초기화와 전역 설정을 담당합니다.

## 구조

```
src/app/
├── providers/         # 전역 Provider 관리
│   ├── AppProviders.tsx
│   └── index.ts
└── styles/           # 전역 스타일
    └── globals.css
```

## 주의사항

⚠️ 이 폴더는 **Next.js의 라우팅 폴더가 아닙니다!**

- ✅ **라우팅**: `/app` 폴더 (루트)
- ✅ **FSD app 레이어**: `/src/app` 폴더 (여기)

## 추가할 수 있는 것들

- `providers/` - Redux, React Query, Theme Provider 등
- `styles/` - 전역 CSS, Tailwind 설정
- `config/` - 앱 설정값
- `lib/` - 외부 라이브러리 초기화 코드
