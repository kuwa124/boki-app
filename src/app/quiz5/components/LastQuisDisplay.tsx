import React from 'react';
// QuizQuestion5 型をインポート
import { QuizQuestion5 } from '../constants/AccountItemTypes';

// コンポーネントのプロップスの型を定義
type LastQuisDisplayProps = {
  question: QuizQuestion5; // QuizQuestion5 型を使用
};

export const LastQuisDisplay: React.FC<LastQuisDisplayProps> = ({
  question,
}) => {
  const isPosition: boolean = question.position === 'home';
  const positionColor: string = isPosition ? 'text-blue-600' : 'text-red-600';
  return (
    <div>
      {/* 問題部分 */}
      <div className='bg-yellow-100 p-4 rounded-lg mb-6'>
        <p className='text-lg font-medium text-center'>
          <span className='font-bold text-gray-600 text-2xl'>
            {question.category.text}
          </span>
          の
          <span className={`font-bold text-2xl ${positionColor}`}>
            {isPosition ? '増加' : '減少'}
          </span>
          は？
        </p>
      </div>
    </div>
  );
};
