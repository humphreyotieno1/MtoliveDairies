import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mt. Olive Dairies - Farm Fresh Milk & Artisanal Cheese',
  description: 'Discover our premium dairy products including farm-fresh milk and artisanal cheeses, crafted with care since 1975.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-700">
                Mt. Olive Dairies
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">Home</Link>
                <Link href="/products" className="text-gray-800 hover:text-blue-600 transition-colors">Products</Link>
                <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors">About</Link>
                <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</Link>
              </div>
              </div>
              <div className="md:hidden">
                <button className="text-gray-800">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}