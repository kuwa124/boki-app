'use client';
import { FinalScore } from '@/app/test/FinalScore';
import { useState } from 'react';

const score: number = 1;

const page = () => {
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const handleGameEnd = () => {
    setGameEnded(true);
  };

  const handleRestart = () => {
    setGameEnded(false);
  };
  return (
    <div>
      <FinalScore score={30} totalQuestions={100} onRestart={handleRestart} />
    </div>
  );
};

export default page;
