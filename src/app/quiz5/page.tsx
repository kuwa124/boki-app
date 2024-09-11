'use client';

import { AnswerButtons } from '@/app/quiz1/components/AnswerButtons1';
import { Loading } from '@/components/Loading';
import { Navigation } from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { useQuiz5 } from '@/hooks/useQuiz5';
import { LastQuisDisplay } from './components/LastQuisDisplay';

export default function Quiz5() {
  const { question, answer, result, score, totalQuestions, checkAnswer } =
    useQuiz5();

  // 問題がロードされていない場合のローディング表示
  if (question === null) {
    return <Loading />;
  }

  return (
    <main className='text-gray-600 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <Navigation />
      <div className='flex items-center justify-center'>
        <div className='container max-w-md sm:mx-auto bg-white p-2 sm:p-8 m-4 rounded-xl shadow-2xl mt-4 sm:mt-30'>
          <h1 className='sm:text-3xl text-2xl font-bold text-center mb-6 text-purple-600'>
            勘定科目の増減問題！
          </h1>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} />
          <LastQuisDisplay question={question} />
          <AnswerButtons
            onAnswer={checkAnswer}
            isAnswered={answer !== undefined}
          />
          <PositionResultDisplay result={result} question={question.category} />
        </div>
      </div>
    </main>
  );
}
