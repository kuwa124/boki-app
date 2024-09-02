import React from 'react';
import { AccountingCategoryQuestion } from '../constants/AccountingCategoryTypes';

type PositionQuestionDisplayProps = {
  question: AccountingCategoryQuestion;
};

export const PositionQuestionDisplay: React.FC<
  PositionQuestionDisplayProps
> = ({ question }) => {
  return (
    <div>
      {/* 問題部分 */}
      <div className='bg-yellow-100 p-4 rounded-lg mb-6'>
        <p className='text-lg font-medium text-center'>
          {question.category}の
          <span className='text-blue-600 font-bold'>
            {question.position}ポジションは？
          </span>
        </p>
      </div>
    </div>
  );
};
