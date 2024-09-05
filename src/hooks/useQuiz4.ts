import { combinedElements, generateQuestion4 } from '@/app/quiz4/constants/bsElements';
import { Elements } from '@/constants/type';
import { useEffect, useState } from 'react';

// UseQuiz型を関数型として定義
type UseQuiz = () => {
  question: Elements | null; // 現在の問題
  answer: Elements | undefined; // ユーザーの回答
  result: boolean | undefined; // 回答結果
  score: number; // 現在のスコア
  totalQuestions: number; // 総問題数
  checkAnswer: (selectedPosition: Elements) => void; // 回答をチェックする関数
  nextQuestion: () => void; // 次の問題を生成する関数
};

// useQuizをUseQuiz型の関数として実装
export const useQuiz4: UseQuiz = () => {
  // 問題の状態を管理
  const [question, setQuestion] = useState<Elements | null>(null);
  // 回答の状態を管理
  const [answer, setAnswer] = useState<Elements | undefined>(undefined);
  // 結果の状態を管理
  const [result, setResult] = useState<boolean | undefined>(undefined);
  // スコアの状態を管理
  const [score, setScore] = useState(0);
  // 総問題数の状態を管理
  const [totalQuestions, setTotalQuestions] = useState(0);

  // コンポーネントがマウントされたときに問題を生成
  useEffect(() => {
    setQuestion(generateQuestion4(combinedElements));
  }, []);

  // 回答をチェックする関数
  const checkAnswer = (selectedPosition: Elements) => {
    if (!question) return; // 問題がない場合は処理を行わない(早期リターン)

    // 正解を取得
    const correctAnswer = question.answer;
    // 選択された回答が正解かどうかを判定
    const isCorrect = selectedPosition.answer === correctAnswer;
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
    setQuestion(generateQuestion4(combinedElements));
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

  return {
    question,
    answer,
    result,
    score,
    totalQuestions,
    checkAnswer,
    nextQuestion,
  };
};
