import React from 'react';

type BsPositions = {
  name: string;
  style: string;
};

const bsPositions: BsPositions[] = [
  { name: '資産', style: 'bg-orange-500 hover:bg-orange-600' },
  { name: '負債', style: 'bg-blue-500 hover:bg-blue-600' },
  { name: '純資産', style: 'bg-green-500 hover:bg-green-600' },
];

type AnswerButtonsProps = {
  onAnswer: (position: string) => void;
  isAnswered: boolean;
};

export const AnswerButtons3: React.FC<AnswerButtonsProps> = ({
  onAnswer,
  isAnswered,
}) => {
  return (
    <div className='grid sm:grid-cols-3 gap-4 mb-2 sm:mb-4'>
      {bsPositions.map((pos) => (
        <button
          key={pos.name}
          onClick={() => onAnswer(pos.name)}
          disabled={isAnswered}
          className={`py-3 px-6 rounded-full text-white font-bold text-lg tracking-widest transition-transform transform hover:scale-105 ${pos.style}`}
        >
          {pos.name}
        </button>
      ))}
    </div>
  );
};
