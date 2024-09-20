'use client';

import { AnswerButtons } from '@/app/quiz1/components/AnswerButtons1';
import { PositionQuestionDisplay } from '@/app/quiz1/components/PositionQuestionDisplay';
import { FinalScore } from '@/components/FinalScore';
import { Loading } from '@/components/Loading';
import { Navigation } from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { useQuiz } from '@/hooks/useQuiz1';
import { executionLimitCountAtom } from '@/store/ExecutionMode';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Quiz1() {
  const {
    question,
    answer,
    result,
    score,
    totalQuestions,
    checkAnswer,
    setTotalQuestions,
    setScore,
  } = useQuiz();

  // 実行制限回数の状態を管理
  const [executionLimitCount, setExecutionLimitCount] = useRecoilState(
    executionLimitCountAtom
  );

  // ゲーム終了状態を管理
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  // 総問題数が変更されたときの処理
  useEffect(() => {
    if (totalQuestions === executionLimitCount && result === undefined) {
      handleGameEnd();
    }
  }, [totalQuestions, result]);

  // ゲーム終了時の処理
  const handleGameEnd = () => {
    setGameEnded(true);
  };

  // ゲームを再スタートする処理
  const handleRestart = () => {
    setGameEnded(false);
    setTotalQuestions(0);
    setScore(0);
  };

  // 問題がロードされていない場合のローディング表示
  if (question === null) {
    return <Loading />;
  }

  //  ゲーム終了時の処理
  if (gameEnded) {
    return (
      <FinalScore
        score={score}
        totalQuestions={totalQuestions}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <main className='text-gray-600 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <Navigation />
      <div className='flex items-center justify-center'>
        <div className='bg-white p-8 m-4 rounded-xl shadow-2xl max-w-md w-full mt-10'>
          <h1 className='sm:text-3xl text-xl font-bold text-center mb-6 text-purple-600'>
            5要素のポジション問題！
          </h1>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} />
          <PositionQuestionDisplay question={question} />
          <AnswerButtons
            onAnswer={checkAnswer}
            isAnswered={answer !== undefined}
          />
          <PositionResultDisplay
            result={result}
            question={undefined}
            position={undefined}
          />
        </div>
      </div>
    </main>
  );
}
