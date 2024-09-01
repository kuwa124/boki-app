'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle, XCircle } from 'lucide-react';

type AccountingCategory = '資産' | '負債' | '純資産' | '費用' | '収益';
type Position = '借方' | '貸方';

interface Question {
  category: AccountingCategory;
  position: 'ホーム' | 'アウェイ';
}

const categoryPositions: Record<
  AccountingCategory,
  { home: Position; away: Position }
> = {
  資産: { home: '借方', away: '貸方' },
  負債: { home: '貸方', away: '借方' },
  純資産: { home: '貸方', away: '借方' },
  費用: { home: '借方', away: '貸方' },
  収益: { home: '貸方', away: '借方' },
};

const generateQuestion = (): Question => {
  const categories: AccountingCategory[] = [
    '資産',
    '負債',
    '純資産',
    '費用',
    '収益',
  ];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const position = Math.random() < 0.5 ? 'ホーム' : 'アウェイ';
  return { category, position };
};

export default function Home() {
  const [question, setQuestion] = useState<Question>(generateQuestion());
  const [answer, setAnswer] = useState<Position | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const checkAnswer = (selectedPosition: Position) => {
    const correctAnswer =
      categoryPositions[question.category][
        question.position === 'ホーム' ? 'home' : 'away'
      ];
    const isCorrect = selectedPosition === correctAnswer;
    setAnswer(selectedPosition);
    setResult(isCorrect);
    if (isCorrect) setScore(score + 1);
    setTotalQuestions(totalQuestions + 1);
  };

  const nextQuestion = () => {
    setQuestion(generateQuestion());
    setAnswer(null);
    setResult(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (result !== null) {
        nextQuestion();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [result]);

  return (
    <main className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-xl shadow-2xl max-w-md w-full'>
        <h1 className='text-3xl font-bold text-center mb-6 text-purple-600'>
          楽しい簿記クイズ！
        </h1>
        <div className='text-center mb-6'>
          <p className='text-lg font-semibold'>
            スコア: {score} / {totalQuestions}
          </p>
        </div>
        <div className='bg-yellow-100 p-4 rounded-lg mb-6'>
          <p className='text-lg font-medium text-center'>
            「{question.category}」の
            <span className='text-blue-600 font-bold'>
              {question.position}ポジション
            </span>
            は？
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-6'>
          {['借方', '貸方'].map((pos) => (
            <button
              key={pos}
              onClick={() => checkAnswer(pos as Position)}
              className={`py-3 px-6 rounded-full text-white font-bold text-lg transition-transform transform hover:scale-105 ${
                pos === '借方'
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
              disabled={answer !== null}
            >
              {pos}
            </button>
          ))}
        </div>
        {result !== null && (
          <div
            className={`text-center p-4 rounded-lg ${
              result ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            {result ? (
              <div className='flex items-center justify-center'>
                <CheckCircle className='text-green-500 mr-2' />
                <p className='text-green-700 font-bold'>正解！すごい！</p>
              </div>
            ) : (
              <div className='flex items-center justify-center'>
                <XCircle className='text-red-500 mr-2' />
                <p className='text-red-700 font-bold'>残念！次は頑張ろう！</p>
              </div>
            )}
          </div>
        )}
        <div className='absolute top-20 right-4'>
          <Sparkles className='text-yellow-400 animate-pulse' size={32} />
        </div>
      </div>
    </main>
  );
}
