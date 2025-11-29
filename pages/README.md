# Pages Router

이 폴더는 **Next.js Pages Router**를 위한 폴더입니다.

## 역할

- API Routes (`/api/*`)
- 레거시 페이지 (App Router에 없는 경우)

## 주의사항

⚠️ **FSD의 pages 레이어(`/src/pages`)와 다릅니다!**

- ✅ `/pages` - Next.js Pages Router (라우팅)
- ✅ `/src/pages` - FSD pages 레이어 (UI 컴포넌트)

## 우선순위

1. `/app` (App Router) - 우선
2. `/pages` (Pages Router) - App Router에 없으면 동작

## 사용 예시

```
pages/
├── api/              # API Routes
│   ├── hello.ts     # GET /api/hello
│   └── users.ts     # GET /api/users
└── legacy.tsx       # /legacy (레거시 페이지)
```
