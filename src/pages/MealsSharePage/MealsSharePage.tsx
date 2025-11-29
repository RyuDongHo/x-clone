import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui";
import Link from "next/link";

export const MealsSharePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">소개 페이지</h1>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">FSD란?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Feature-Sliced Design은 프론트엔드 프로젝트를 위한 아키텍처
            방법론입니다. 코드를 계층(layers)과 슬라이스(slices)로 구조화하여
            유지보수성과 확장성을 높입니다.
          </p>

          <h2 className="text-2xl font-bold mb-4">계층 구조</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-3">📱</span>
                <div>
                  <strong>app</strong> - 애플리케이션 초기화 (providers, styles,
                  router)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📄</span>
                <div>
                  <strong>pages</strong> - 애플리케이션 페이지
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🧩</span>
                <div>
                  <strong>widgets</strong> - 독립적인 UI 블록들 (Header, Sidebar
                  등)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">⚡</span>
                <div>
                  <strong>features</strong> - 사용자 시나리오와 기능들
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🗂️</span>
                <div>
                  <strong>entities</strong> - 비즈니스 엔티티 (User, Product 등)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🔧</span>
                <div>
                  <strong>shared</strong> - 재사용 가능한 코드 (UI kit, utils,
                  API)
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">의존성 규칙</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            상위 계층은 하위 계층에만 의존할 수 있습니다:
          </p>
          <p className="text-center text-lg font-mono bg-gray-100 dark:bg-gray-700 p-4 rounded">
            app → pages → widgets → features → entities → shared
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button>홈으로 돌아가기</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
