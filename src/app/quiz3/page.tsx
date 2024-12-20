'use client';

import { AnswerButtons3 } from '@/app/quiz3/components/AnswerButtons3';
import { AccountItemQuestionDisplay } from '@/components/AccountItemQuestionDisplay';
import { GameEndHandler } from '@/components/GameEndHandler';
import { Loading } from '@/components/Loading';
import { Navigation } from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { useQuiz3 } from '@/hooks/useQuiz3';

export default function Quiz3() {
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
  } = useQuiz3();

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
          <div className='bg-white p-2 sm:p-8 m-4 rounded-xl shadow-2xl max-w-lg w-full mt-4'>
            <h1 className='sm:text-3xl text-2xl font-bold text-center mb-6 text-purple-600'>
              貸借対照表の分類問題！
            </h1>
            <ScoreDisplay score={score} totalQuestions={totalQuestions} />
            <AccountItemQuestionDisplay question={question} />
            <AnswerButtons3
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
        <div className='flex justify-center items-center max-w-full mx-10 sm:mx-auto text-white text-xs sm:text-lg pb-4 '>
          <div className='flex flex-col space-y-2'>
            <h1 className='font-bold text-xl tracking-widest'>◆ヒント◆</h1>
            <div className='container mx-auto'>
              <p className='mb-1 sm:mb-0 '>
                資産：増えたら嬉しいもの、お金そのもの、後にお金になるもの、売ればお金になるもの、貰える権利
              </p>

              <p className='mx-auto sm:ml-10'>
                「前払○○」「仮払○○」（「払」という漢字があれば、資産　例外：「未払」）
              </p>
            </div>

            <div className='container mx-auto'>
              <p className='mb-1 sm:mb-0'>
                負債：増えたら嫌なもの、返さないといけないお金、払う義務
              </p>

              <p className='mx-auto sm:ml-10'>
                「前受○○」「仮受○○」（「受」という漢字があれば、負債）
              </p>
            </div>
          </div>
        </div>
      </main>
    </GameEndHandler>
  );
}
