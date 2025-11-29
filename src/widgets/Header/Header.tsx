import Link from 'next/link';
import homeIcon from '@/shared/assets/icons/logo.png'
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <Image src={homeIcon} alt="Home" width={48} height={48} priority />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/meals" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              meals
            </Link>
          </li>
          <li>
            <Link 
              href="/community" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
