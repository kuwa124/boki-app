'use client';

import { AnswerButtons } from '@/app/quiz1/components/AnswerButtons1';
import { PositionQuestionDisplay } from '@/app/quiz1/components/PositionQuestionDisplay';
import Navigation from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { useQuiz } from '@/hooks/useQuiz1';

export default function Quiz1() {
  const { question, answer, result, score, totalQuestions, checkAnswer } =
    useQuiz();

  // 問題がロードされていない場合のローディング表示
  if (question === null) {
    return <div className='flex justify-center items-center'>Loading...</div>;
  }

  return (
    <main className='text-gray-600 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <Navigation />
      <div className='flex items-center justify-center'>
        <div className='bg-white p-8 m-4 rounded-xl shadow-2xl max-w-md w-full mt-20 sm:mt-30'>
          <h1 className='sm:text-3xl text-xl font-bold text-center mb-6 text-purple-600'>
            5要素のポジション問題！
          </h1>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} />
          <PositionQuestionDisplay question={question} />
          <AnswerButtons
            onAnswer={checkAnswer}
            isAnswered={answer !== undefined}
          />
          <PositionResultDisplay result={result} />
        </div>
      </div>
    </main>
  );
}
