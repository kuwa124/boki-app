import React from 'react';

type ScoreDisplayProps = {
  score: number;
  totalQuestions: number;
};

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  totalQuestions,
}) => {
  return (
    <div className='text-center mb-6'>
      <p className='text-lg font-semibold'>
        スコア: {score} / {totalQuestions}
      </p>
    </div>
  );
};
