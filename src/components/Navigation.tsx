'use client';

import { usePage } from '@/hooks/usePage';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Navigation: React.FC = () => {
  const { currentPage } = usePage();

  return (
    <nav className='flex justify-between items-center w-full px-6 py-2 bg-gray-100'>
      {currentPage > 1 ? (
        <Link
          href={`/quiz${currentPage - 1}`}
          className='flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300 hover:scale-105'
          ria-label='前の問題へ'
        >
          <ChevronLeft className='mr-1' size={30} />
          <span className='hidden font-semibold sm:inline '> 前の問題へ</span>
        </Link>
      ) : (
        <div className='W-[116PX] sm:w-[140px]'></div>
      )}

      <div>
        <Link
          href='/'
          className={`flex justify-center items-center text-xl font-bold px-2 py-1 rounded text-blue-500 hover:text-blue-600 hover:scale-105`}
          aria-label='ホームへ戻る'
        >
          <Home className='mr-2' size={25} />
          <span>ホーム</span>
        </Link>
      </div>

      {currentPage < 5 ? (
        <Link
          href={`/quiz${currentPage + 1}`}
          className='flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300 hover:scale-105'
          aria-label='次の問題へ'
        >
          <span className='hidden font-semibold sm:inline '>次の問題へ</span>
          <ChevronRight className='ml-1' size={30} />
        </Link>
      ) : (
        <div className='W-[116PX] sm:w-[140px]'></div>
      )}
    </nav>
  );
};
