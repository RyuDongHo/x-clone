# FSD 아키텍처 + Next.js 프로젝트 🚀

Feature-Sliced Design 아키텍처를 Next.js App Router와 함께 사용하는 예제 프로젝트입니다.

## 📁 프로젝트 구조

```
nextjs/
├── app/                    # ✅ Next.js App Router (라우팅)
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # "/" 라우트
│   ├── about/
│   │   └── page.tsx       # "/about" 라우트
│   └── test/
│       └── page.tsx       # "/test" 라우트
│
├── src/
│   ├── app/               # 🔧 FSD: 앱 초기화 레이어
│   │   ├── globals.css    # 전역 스타일
│   │   └── layout.tsx     # (기존 레이아웃, 이동 예정)
│   │
│   ├── pages/             # 📄 FSD: 페이지 컴포넌트 레이어
│   │   ├── HomePage/
│   │   ├── AboutPage/
│   │   └── TestPage/
│   │
│   ├── widgets/           # 🧩 FSD: 위젯 레이어
│   │   ├── Header/
│   │   └── Footer/
│   │
│   ├── features/          # ⚡ FSD: 기능 레이어
│   │   └── Counter/
│   │
│   └── shared/            # 🔧 FSD: 공유 레이어
│       └── ui/
│           └── Button.tsx
│
├── public/
└── package.json
```

## 🎯 FSD 계층 설명

### 1. `app/` - Next.js 라우팅
- Next.js의 파일 시스템 기반 라우팅
- 실제 페이지 컴포넌트를 `src/pages/`에서 import하여 re-export

### 2. `src/pages/` - 페이지 컴포넌트
- 각 페이지의 실제 UI 구현
- widgets, features 등을 조합하여 페이지 구성

### 3. `src/widgets/` - 위젯
- Header, Footer, Sidebar 등 큰 UI 블록
- 여러 features를 조합할 수 있음

### 4. `src/features/` - 기능
- Counter, LoginForm 등 특정 비즈니스 기능
- 사용자 시나리오 단위

### 5. `src/shared/` - 공유
- Button, Input 등 재사용 가능한 UI 컴포넌트
- 유틸리티 함수, API 클라이언트 등

## 🔗 의존성 규칙

```
app → pages → widgets → features → entities → shared
```

상위 레이어는 하위 레이어만 import 할 수 있습니다.

## 🚀 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## 📝 페이지 추가 방법

1. **src/pages/에 페이지 컴포넌트 생성**
   ```tsx
   // src/pages/ProductsPage/ProductsPage.tsx
   export function ProductsPage() {
     return <div>상품 목록</div>;
   }
   ```

2. **app/에 라우트 파일 생성**
   ```tsx
   // app/products/page.tsx
   import { ProductsPage } from '@/pages/ProductsPage';
   
   export default function Products() {
     return <ProductsPage />;
   }
   ```

## 💡 장점

- ✅ 명확한 코드 구조
- ✅ 계층 간 의존성 규칙
- ✅ 높은 재사용성
- ✅ 쉬운 테스트
- ✅ 팀 협업 용이
