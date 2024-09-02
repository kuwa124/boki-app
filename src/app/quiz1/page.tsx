'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import {
  AccountingCategoryQuestion,
  categoryPositions,
  generateQuestion,
} from './constants/AccountingCategoryTypes';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { PositionQuestionDisplay } from './components/PositionQuestionDisplay';
import { AnswerButtons } from '@/components/AnswerButtons';
import { PositionResultDisplay } from './components/PositionResultDisplay';
import { Position } from '@/constants/type';

export default function Quiz1() {
  // 問題の状態を管理
  const [question, setQuestion] = useState<AccountingCategoryQuestion>(
    generateQuestion()
  );

  // 解答の状態を管理
  const [answer, setAnswer] = useState<Position | undefined>(undefined);

  // 結果の状態を管理
  const [result, setResult] = useState<boolean | undefined>(undefined);

  // スコアの状態を管理
  const [score, setScore] = useState(0);

  // 総問題数の状態を管理
  const [totalQuestions, setTotalQuestions] = useState(0);

  // 解答をチェックする関数
  const checkAnswer = (selectedPosition: Position) => {
    // 正解を取得
    const correctAnswer =
      categoryPositions[question.category][
        question.position === 'ホーム' ? 'home' : 'away'
      ];
    // 選択された回答が正解かどうかを判定
    const isCorrect = selectedPosition === correctAnswer;
    // 解答を設定
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
    // 解答をリセット
    setAnswer(undefined);
    // 結果をリセット
    setResult(undefined);
  };

  // 結果表示後、自動的に次の問題に進むためのEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (result !== undefined) {
        nextQuestion();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [result]);

  return (
    <main className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-xl shadow-2xl max-w-md w-full'>
        <h1 className='text-3xl font-bold text-center mb-6 text-purple-600'>
          5要素のポジション問題！
        </h1>
        <ScoreDisplay score={score} totalQuestions={totalQuestions} />
        <PositionQuestionDisplay question={question} />
        <AnswerButtons onAnswer={checkAnswer} />
        <PositionResultDisplay result={result} />
        <div className='absolute top-20 right-4'>
          <Sparkles className='text-yellow-400 animate-pulse' size={32} />
        </div>
      </div>
    </main>
  );
}
