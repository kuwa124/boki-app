import { BaseElements } from '@/app/quiz2/constants/baseElements';
import React from 'react';

type ProfitLossQuestionDisplayProps = {
  question: BaseElements;
};

export const ProfitLossQuestionDisplay: React.FC<
  ProfitLossQuestionDisplayProps
> = ({ question }) => {
  return (
    <div>
      {/* 問題部分 */}
      <div className='bg-yellow-100 p-4 rounded-lg mb-6'>
        <p className='text-lg font-medium text-center'>
          <span className='font-bold text-gray-600 text-2xl'>
            {question.text}
          </span>
          の分類は？
        </p>
      </div>
    </div>
  );
};
