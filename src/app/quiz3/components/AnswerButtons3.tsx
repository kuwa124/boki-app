import React from 'react';

type AnswerButtonsProps = {
  onAnswer: (position: string) => void;
  isAnswered: boolean;
};

const positions: string[] = ['資産', '負債', '純資産'];

export const AnswerButtons3: React.FC<AnswerButtonsProps> = ({
  onAnswer,
  isAnswered,
}) => {
  return (
    <div className='grid grid-cols-2 gap-4 mb-6'>
      {positions.map((pos) => (
        <button
          key={pos}
          onClick={() => onAnswer(pos)}
          disabled={isAnswered}
          className={`py-3 px-6 rounded-full text-white font-bold text-lg transition-transform transform hover:scale-105 ${
            pos === '資産'
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
