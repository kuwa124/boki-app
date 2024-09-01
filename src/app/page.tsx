import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center'>
      <div className='bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mt-8'>
        <h1 className='text-3xl font-bold text-center mb-6 text-purple-600'>
          楽しい簿記クイズ！
        </h1>
        <div className='grid grid-cols-1 gap-4'>
          {[1, 2, 3, 4, 5].map((quizNum) => (
            <Link
              key={quizNum}
              href={`/quiz${quizNum}`}
              className='py-3 px-6 bg-blue-500 text-white rounded-full text-center font-bold text-lg hover:bg-blue-600 transition-colors'
            >
              クイズ {quizNum}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
