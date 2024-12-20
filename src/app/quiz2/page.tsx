'use client';

import { AnswerButtons2 } from '@/app/quiz2/components/AnswerButtons2';
import { AccountItemQuestionDisplay } from '@/components/AccountItemQuestionDisplay';
import { GameEndHandler } from '@/components/GameEndHandler';
import { Loading } from '@/components/Loading';
import { Navigation } from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { useQuiz2 } from '@/hooks/useQuiz2';

export default function Quiz2() {
  const {
    question,
    answer,
    result,
    score,
    totalQuestions,
    handleAnswer,
    setScore,
    setTotalQuestions,
    nextQuestion,
  } = useQuiz2();

  // 問題がロードされていない場合のローディング表示
  if (question === undefined) {
    return <Loading />;
  }

  return (
    //  GameEndHandlerでゲーム終了処理をラップ
    <GameEndHandler
      result={result}
      score={score}
      setScore={setScore}
      setTotalQuestions={setTotalQuestions}
      totalQuestions={totalQuestions}
    >
      <main className='text-gray-600 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <Navigation />
        <div className='flex items-center justify-center'>
          <div className='bg-white p-8 m-4 rounded-xl shadow-2xl max-w-md w-full mt-10'>
            <h1 className='sm:text-3xl text-2xl font-bold text-center mb-6 text-purple-600'>
              損益計算書の分類問題！
            </h1>
            <ScoreDisplay score={score} totalQuestions={totalQuestions} />
            <AccountItemQuestionDisplay question={question} />
            <AnswerButtons2
              onAnswer={handleAnswer}
              isAnswered={answer !== undefined}
            />
            <PositionResultDisplay
              result={result}
              question={question}
              position={undefined}
              onClick={nextQuestion}
            />
          </div>
        </div>

        <div className='items-center space-y-2 max-w-2xl ml-10 sm:mx-auto text-white text-xs sm:text-lg pb-4'>
          <h1 className='font-bold text-xl tracking-widest'>◆ヒント◆</h1>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full'>
            <p className='w-full sm:w-1/2'>収益：「受取○○」「○○益」</p>
            <p className='w-full sm:w-1/2 sm:text-right'>
              例外）受取手形(資産)、受取商品券(資産)
            </p>
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
            <p className='w-full '>費用：「支払○○」「○○費」「○○料」「○○損」</p>
            <p className='w-full sm:w-1/2 sm:text-right'>例外)損益(その他)</p>
          </div>
        </div>
      </main>
    </GameEndHandler>
  );
}
