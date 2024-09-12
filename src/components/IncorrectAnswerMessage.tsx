import {
  AccountingCategory,
  categoryPositions,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { Elements } from '@/constants/type';
import { usePage } from '@/hooks/usePage';
import React from 'react';

type IncorrectAnswerMessageProps = {
  result: boolean | undefined;
  question: Elements;
  position: 'home' | 'away' | undefined;
};

export const IncorrectAnswerMessage: React.FC<IncorrectAnswerMessageProps> = ({
  result,
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

  if (result === true) {
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
          <p className='font-semibold'>解説：{question.message}</p>
        </div>
      )}
    </div>
  );
};
