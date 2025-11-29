import { Footer } from "@/widgets/Footer";
import { Button } from "@/shared/ui";
import Link from "next/link";

const categories = [
  { id: "korean", name: "한식", emoji: "🍚", description: "한국의 전통 음식" },
  { id: "japanese", name: "일식", emoji: "🍣", description: "일본 요리" },
  { id: "chinese", name: "중식", emoji: "🥟", description: "중국 음식" },
  { id: "western", name: "양식", emoji: "🍝", description: "서양 요리" },
  { id: "asian", name: "아시안", emoji: "🍜", description: "아시아 각국의 음식" },
  { id: "dessert", name: "디저트", emoji: "🍰", description: "달콤한 후식" },
];

export const MealsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">음식 카테고리 🍽️</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            원하는 카테고리를 선택해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/meals/${category.id}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="text-6xl mb-4 text-center">{category.emoji}</div>
                <h2 className="text-2xl font-bold mb-2 text-center group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">나만의 음식 공유하기 ✨</h2>
          <p className="mb-6 text-lg">
            당신만의 특별한 레시피를 공유해보세요!
          </p>
          <Link href="/meals/share">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              음식 공유하기 →
            </Button>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/">
            <Button variant="secondary">홈으로 돌아가기</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
