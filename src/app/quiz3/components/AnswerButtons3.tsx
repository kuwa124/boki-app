import { bsPositions } from '@/constants/type';
import React from 'react';

type AnswerButtonsProps = {
  onAnswer: (position: string) => void;
  isAnswered: boolean;
};

export const AnswerButtons3: React.FC<AnswerButtonsProps> = ({
  onAnswer,
  isAnswered,
}) => {
  return (
    <div className='grid sm:grid-cols-3 gap-4 p-4 mb-2 sm:mb-4'>
      {bsPositions.map((pos) => (
        <button
          key={pos.name}
          onClick={() => onAnswer(pos.name)}
          disabled={isAnswered}
          className={`py-2 px-6 rounded-full text-white font-bold text-lg tracking-widest transition-transform transform hover:scale-105 ${pos.style}`}
        >
          {pos.name}
        </button>
      ))}
    </div>
  );
};
