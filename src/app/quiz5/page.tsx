'use client';

import { AnswerButtons4 } from '@/app/quiz4/components/AnswerButtons4';
import { AccountItemQuestionDisplay } from '@/components/AccountItemQuestionDisplay';
import { Loading } from '@/components/Loading';
import Navigation from '@/components/Navigation';
import { PositionResultDisplay } from '@/components/PositionResultDisplay';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { Elements } from '@/constants/type';
import { useQuiz4 } from '@/hooks/useQuiz4';

export default function Quiz5() {
  const { question, answer, result, score, totalQuestions, checkAnswer } =
    useQuiz4();

  // 回答ボタンがクリックされたときの処理
  const handleAnswer = (position: string) => {
    // questionが存在する場合のみ処理を実行
    if (question) {
      // 選択された位置に基づいて、Elements型のオブジェクトを作成
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
        <div className='container sm:mx-auto bg-white p-2 sm:p-8 m-4 rounded-xl shadow-2xl mt-4 sm:mt-30'>
          <h1 className='sm:text-3xl text-2xl font-bold text-center mb-6 text-purple-600'>
            勘定科目問題！
          </h1>
          <ScoreDisplay score={score} totalQuestions={totalQuestions} />
          <AccountItemQuestionDisplay question={question} />
          <AnswerButtons4
            onAnswer={handleAnswer}
            isAnswered={answer !== undefined}
          />
          <PositionResultDisplay result={result} />
        </div>
      </div>
    </main>
  );
}