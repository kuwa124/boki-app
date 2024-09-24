import {
  AccountingCategory,
  categoryPositions,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { combinedElements } from '@/app/quiz4/constants/combinedElements';
import {
  generateQuestion5,
  QuizQuestion5,
} from '@/app/quiz5/constants/AccountItemTypes';
import { Elements, Position } from '@/constants/type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// UseQuiz型を関数型として定義
type UseQuiz = () => {
  question: QuizQuestion5 | undefined; // 現在の問題
  answer: Position | undefined; // ユーザーの回答
  result: boolean | undefined; // 回答結果
  score: number; // 現在のスコア
  totalQuestions: number; // 総問題数
  checkAnswer: (selectedPosition: Position) => void; // 回答をチェックする関数
  nextQuestion: () => void; // 次の問題を生成する関数
  setTotalQuestions: Dispatch<SetStateAction<number>>;
  setScore: Dispatch<SetStateAction<number>>;
};

// useQuizをUseQuiz型の関数として実装
export const useQuiz5: UseQuiz = () => {
  // 問題の状態を管理
  const [question, setQuestion] = useState<QuizQuestion5 | undefined>(
    undefined
  );
  // 回答の状態を管理
  const [answer, setAnswer] = useState<Position | undefined>(undefined);
  // 結果の状態を管理
  const [result, setResult] = useState<boolean | undefined>(undefined);
  // スコアの状態を管理
  const [score, setScore] = useState(0);
  // 総問題数の状態を管理
  const [totalQuestions, setTotalQuestions] = useState(0);
  // 解答した問題を表示しない為のstate
  const [availableCategories, setAvailableCategories] = useState<Elements[]>([
    ...combinedElements,
  ]);

  // コンポーネントがマウントされたときに問題を生成
  useEffect(() => {
    setQuestion(generateQuestion5(availableCategories));
  }, []);

  // 次の問題を生成する関数
  const nextQuestion = () => {
    // すべてのカテゴリーを使い切った場合、リセット
    if (availableCategories.length === 1) {
      setAvailableCategories([...combinedElements]);
    }

    console.log('現在の利用可能カテゴリー:', availableCategories);

    // 新しい問題を生成
    setQuestion(generateQuestion5(availableCategories));

    // 回答と結果をリセット
    setAnswer(undefined);
    setResult(undefined);
  };

  // 回答をチェックする関数
  const checkAnswer = (selectedPosition: Position) => {
    if (!question) return; // 問題がない場合は処理を行わない(早期リターン)

    // question.category.answerから勘定科目の種類を取得
    const categoryType = question.category.answer as AccountingCategory;

    // categoryPositionsから正解の位置を取得（型アサーションを使用）
    const correctPosition =
      categoryPositions[categoryType][question.position as 'home' | 'away'];

    // 選択された回答が正解かどうかを判定    // 選択された回答が正解かどうかを判定
    const isCorrect = selectedPosition === correctPosition;

    // console.log(question.category);

    // 回答を設定
    setAnswer(selectedPosition);

    // 結果を設定
    setResult(isCorrect);

    // 正解の場合、スコアを増加
    if (isCorrect) setScore(score + 1);

    // 総問題数を増加
    setTotalQuestions(totalQuestions + 1);

    // 使用したカテゴリーを削除
    setAvailableCategories((prev) =>
      prev.filter((cat) => cat.id !== question.category.id)
    );
  };

  // 結果表示後、自動的に次の問題に進むためのeffect
  useEffect(() => {
    if (result !== undefined) {
      // const delay = result ? 2000 : 4000; // resultがtrueなら2000ms、falseなら4000ms
      const timer = setTimeout(() => {
        nextQuestion();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return {
    question,
    answer,
    result,
    score,
    totalQuestions,
    checkAnswer,
    nextQuestion,
    setScore,
    setTotalQuestions,
  };
};
