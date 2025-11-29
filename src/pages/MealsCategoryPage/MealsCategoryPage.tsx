import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui";
import Link from "next/link";

interface MealsCategoryPageProps {
  category: string;
}

export const MealsCategoryPage = ({ category }: MealsCategoryPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">음식 카테고리</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">현재 카테고리 🍽️</h2>
          <p className="text-xl mb-4">
            <span className="font-mono text-blue-600 font-bold">{category}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            이 카테고리의 음식 목록을 표시합니다.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">다른 카테고리 보기</h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/meals/korean">
              <Button variant="secondary">한식</Button>
            </Link>
            <Link href="/meals/japanese">
              <Button variant="secondary">일식</Button>
            </Link>
            <Link href="/meals/chinese">
              <Button variant="secondary">중식</Button>
            </Link>
            <Link href="/meals/western">
              <Button variant="secondary">양식</Button>
            </Link>
          </div>
        </div>

        <div className="text-center flex gap-4 justify-center">
          <Link href="/meals/share">
            <Button>음식 공유하기</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">홈으로</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
