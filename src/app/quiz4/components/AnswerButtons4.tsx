import { combinedPositions } from '@/constants/type';
import React from 'react';


type AnswerButtonsProps = {
  onAnswer: (position: string) => void;
  isAnswered: boolean;
};

export const AnswerButtons4: React.FC<AnswerButtonsProps> = ({
  onAnswer,
  isAnswered,
}) => {
  return (
    <div className='grid sm:grid-cols-3 gap-4 mb-2 sm:mb-4'>
      {combinedPositions.map((pos) => (
        <button
          key={pos.name}
          onClick={() => onAnswer(pos.name)}
          disabled={isAnswered}
          className={
            'py-3 px-6 rounded-full text-white font-bold text-lg tracking-widest transition-transform transform hover:scale-105 bg-gray-500 hover:bg-blue-600'
          }
        >
          {pos.name}
        </button>
      ))}
    </div>
  );
};
