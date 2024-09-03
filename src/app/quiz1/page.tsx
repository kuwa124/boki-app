'use client';

import { PositionQuestionDisplay } from '@/app/quiz1/components/PositionQuestionDisplay';
import { PositionResultDisplay } from '@/app/quiz1/components/PositionResultDisplay';
import {
  AccountingCategory,
  AccountingCategoryQuestion,
  categoryPositions,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { AnswerButtons } from '@/components/AnswerButtons';
import Navigation from '@/components/Navigation';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { Position } from '@/constants/type';
import { useEffect, useState } from 'react';

const generateQuestion = (): AccountingCategoryQuestion => {
  const categories: AccountingCategory[] = [
    '資産',
    '負債',
    '純資産',
    '費用',
    '収益',
  ];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const position = Math.random() < 0.5 ? 'home' : 'away';
  return { category, position };
};

export default function Quiz1() {
  // 問題の状態を管理
  const [question, setQuestion] = useState<AccountingCategoryQuestion | null>(
    null
  );
  // 回答の状態を管理
  const [answer, setAnswer] = useState<Position | undefined>(undefined);
  // 結果の状態を管理
  const [result, setResult] = useState<boolean | undefined>(undefined);
  // スコアの状態を管理
  const [score, setScore] = useState(0);
  // 総問題数の状態を管理
  const [totalQuestions, setTotalQuestions] = useState(0);

  // コンポーネントがマウントされたときに問題を生成
  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  // 回答をチェックする関数
  const checkAnswer = (selectedPosition: Position) => {
    if (!question) return; // 問題がない場合は処理を行わない(早期リターン)
    // position を 'home' | 'away' に変換
    const positionKey = question.position === 'home' ? 'home' : 'away';

    // 正解を取得
    const correctAnswer = categoryPositions[question.category][positionKey];
    // 選択された回答が正解かどうかを判定
    const isCorrect = selectedPosition === correctAnswer;
    // 回答を設定
    setAnswer(selectedPosition);
    // 結果を設定
    setResult(isCorrect);
    // 正解の場合、スコアを増加
    if (isCorrect) setScore(score + 1);
    // 総問題数を増加
    setTotalQuestions(totalQuestions + 1);
  };

  // 次の問題を生成する関数
  const nextQuestion = () => {
    // 新しい問題を生成
    setQuestion(generateQuestion());
    // 回答をリセット
    setAnswer(undefined);
    // 結果をリセット
    setResult(undefined);
  };

  // 結果表示後、自動的に次の問題に進むためのeffect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (result !== undefined) {
        nextQuestion();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [result]);

  // 問題がロードされていない場合のローディング表示
  if (question === null) {
    return <div>Loading...</div>;
  }

  return (
    <main className='text-gray-600 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <Navigation />
      <div className=' flex items-center justify-center'>
        {' '}
        <div className='bg-white p-8 m-4 rounded-xl shadow-2xl max-w-md w-full mt-40'>
          <h1 className='sm:text-3xl text-2xl font-bold text-center mb-6 text-purple-600'>
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
      </div>{' '}
    </main>
  );
}
