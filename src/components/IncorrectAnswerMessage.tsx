import {
  AccountingCategory,
  categoryPositions,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { Elements } from '@/constants/type';
import { usePage } from '@/hooks/usePage';
import React from 'react';

type IncorrectAnswerMessageProps = {
  question: Elements;
  position: 'home' | 'away' | undefined;
};

export const IncorrectAnswerMessage: React.FC<IncorrectAnswerMessageProps> = ({
  question,
  position,
}) => {
  const { currentPage } = usePage();

  const isPosition: boolean = position === 'home';
  const getPositionText = () => {
    if (position !== undefined) {
      const category = question.answer as AccountingCategory;
      return categoryPositions[category][position];
    }
  };

  if (question?.message === undefined) {
    return undefined; //何もしない（早期リターン）
  }

  return (
    <div>
      {currentPage === 5 ? (
        <div className='mt-2'>
          <div className='font-semibold inline-flex flex-col items-start'>
            <p>
              {question.text}は{question.answer}
            </p>
            <p>
              {question.answer}の{isPosition ? '増加' : '減少'}は
              {getPositionText()}
            </p>
          </div>
        </div>
      ) : (
        <div className='mt-2'>
          <p className='text-xs sm:text-base font-semibold text-left lg:text-center whitespace-pre-line'>
            解説：{question.message}
          </p>
        </div>
      )}
    </div>
  );
};
