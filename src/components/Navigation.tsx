'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const currentPage = parseInt(pathname.split('quiz')[1]) || 0;

  const pages = [
    { href: '/', label: 'ホーム' },
    // { href: '/quiz1', label: 'クイズ1' },
    // { href: '/quiz2', label: 'クイズ2' },
    // { href: '/quiz3', label: 'クイズ3' },
    // { href: '/quiz4', label: 'クイズ4' },
    // { href: '/quiz5', label: 'クイズ5' },
  ];

  return (
    <nav className='flex justify-center items-center w-full p-2 bg-gray-100'>
      {/* <Link
        href={currentPage > 1 ? `/quiz${currentPage - 1}` : '/'}
        className='px-4 py-2 bg-blue-500 text-white rounded-lg'
      >
        前のページへ
      </Link> */}

      <div className='flex space-x-4 '>
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className={`text-xl font-bold px-2 py-1 rounded ${
              pathname === page.href
                ? 'bg-blue-500 text-white'
                : 'text-blue-500'
            }`}
          >
            {page.label}
          </Link>
        ))}
      </div>

      {/* <Link
        href={currentPage < 5 ? `/quiz${currentPage + 1}` : '/'}
        className='px-4 py-2 bg-blue-500 text-white rounded-lg'
      >
        次のページへ
      </Link> */}
    </nav>
  );
};

export default Navigation;
