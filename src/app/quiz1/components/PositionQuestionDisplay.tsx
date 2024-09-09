import React from 'react';
import { AccountingCategoryQuestion } from '../constants/AccountingCategoryTypes';

type PositionQuestionDisplayProps = {
  question: AccountingCategoryQuestion;
};

export const PositionQuestionDisplay: React.FC<
  PositionQuestionDisplayProps
> = ({ question }) => {
  const isPosition: boolean = question.position === 'home';
  const positionColor: string = isPosition ? 'text-blue-600' : 'text-red-600';
  return (
    <div>
      {/* 問題部分 */}
      <div className='bg-yellow-100 p-4 rounded-lg mb-6'>
        <p className='text-lg font-medium text-center'>
          <span className='font-bold text-gray-600 text-2xl'>
            {question.category}
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
