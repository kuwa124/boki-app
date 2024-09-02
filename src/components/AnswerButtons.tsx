import { Position } from '@/constants/type';
import React from 'react';

type AnswerButtonsProps = {
  onAnswer: (position: Position) => void;
};

const positions: Position[] = ['借方', '貸方'];

export const AnswerButtons: React.FC<AnswerButtonsProps> = ({ onAnswer }) => {
  return (
    <div className='grid grid-cols-2 gap-4 mb-6'>
      {positions.map((pos) => (
        <button
          key={pos}
          onClick={() => onAnswer(pos)}
          className={`py-3 px-6 rounded-full text-white font-bold text-lg transition-transform transform hover:scale-105 ${
            pos === '借方'
              ? 'bg-orange-500 hover:bg-orange-600'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {pos}
        </button>
      ))}
    </div>
  );
};
