'use client';

import { AnswerButtons3 } from '@/app/quiz3/components/AnswerButtons3';
import { AccountItemQuestionDisplay } from '@/components/AccountItemQuestionDisplay';
import { Loading } from '@/components/Loading';
import Navigation from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { Elements } from '@/constants/type';
import { useQuiz3 } from '@/hooks/useQuiz3';

export default function Quiz3() {
  const { question, answer, result, score, totalQuestions, checkAnswer } =
    useQuiz3();

  // 回答ボタンがクリックされたときの処理
  const handleAnswer = (position: string) => {
    // questionが存在する場合のみ処理を実行
    if (question) {
      // 選択された位置（費用または収益）に基づいて、BaseElements型のオブジェクトを作成
      const selectedPosition: Elements = {
        id: question.id,
        text: question.text,
        answer: position,
      };
      // checkAnswer関数を呼び出して回答をチェック
      checkAnswer(selectedPosition);
    }
  };

  // 問題がロードされていない場合のローディング表示
  if (question === null) {
    return <Loading />;
  }

  return (
    <main className='text-gray-600 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <Navigation />
      <div className='flex items-center justify-center'>
        <div className='bg-white p-2 sm:p-8 m-4 rounded-xl shadow-2xl max-w-md w-full mt-4 sm:mt-30'>
          <h1 className='sm:text-3xl text-2xl font-bold text-center mb-6 text-purple-600'>
            貸借対照表の分類問題！
          </h1>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} />
          <AccountItemQuestionDisplay question={question} />
          <AnswerButtons3
            onAnswer={handleAnswer}
            isAnswered={answer !== undefined}
          />
          <PositionResultDisplay result={result} />
        </div>
      </div>
      <div className='flex justify-center items-center max-w-full mx-10 sm:mx-auto text-white text-xs sm:text-lg'>
        <div className='flex flex-col space-y-2'>
          <div className='container mx-auto'>
            <p className='mb-1 sm:mb-0 '>
              資産：増えたら嬉しいもの、お金そのもの、後にお金になるもの、売ればお金になるもの
            </p>

            <p className='mx-auto sm:ml-10'>
              「前払○○」「仮払○○」（「払」という漢字は、資産　例外：「未払」）
            </p>
          </div>

          <div className='container mx-auto'>
            <p className='mb-1 sm:mb-0'>
              負債：増えたら嫌なもの、返さないといけないお金
            </p>

            <p className='mx-auto sm:ml-10'>
              「前受○○」「仮受○○」（「受」という漢字は、負債）
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
