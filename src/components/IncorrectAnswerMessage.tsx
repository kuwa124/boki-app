import { Elements } from '@/constants/type';
import { usePage } from '@/hooks/usePage';
import React from 'react';

type IncorrectAnswerMessageProps = {
  result: boolean | undefined;
  question: Elements;
};

export const IncorrectAnswerMessage: React.FC<IncorrectAnswerMessageProps> = ({
  result,
  question,
}) => {

  const {  currentPage } = usePage();


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
          <p className='font-semibold'>{question.text}は{question.answer}</p>
        </div>
      ) : (
        <div className='mt-2'>
          <p className='font-semibold'>解説：{question.message}</p>
        </div>
      )}
    </div>
  );
};
