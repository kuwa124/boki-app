// 必要なReactフックと型をインポート
import { Position } from '@/constants/type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// クイズフックの戻り値の型定義
export type UseQuizBase<QuestionType, CategoryType> = () => {
  question: QuestionType | undefined; // 現在の問題
  answer: Position | undefined; // ユーザーの回答
  result: boolean | undefined; // 回答の結果
  score: number; // 現在のスコア
  totalQuestions: number; // 総問題数
  checkAnswer: (selectedPosition: Position) => void; // 回答をチェックする関数
  nextQuestion: () => void; // 次の問題に進む関数
  setTotalQuestions: Dispatch<SetStateAction<number>>; // 総問題数を設定する関数
  setScore: Dispatch<SetStateAction<number>>; // スコアを設定する関数
};

// クイズフックを作成する関数
export function createUseQuizBase<QuestionType, CategoryType>(
  generateQuestion: (categories: CategoryType[]) => QuestionType, // 問題生成関数
  initialCategories: CategoryType[], // 初期カテゴリーリスト
  getCorrectAnswer: (question: QuestionType) => Position, // 正解を取得する関数
  checkCorrectAnswer: (
    // 回答をチェックする関数
    question: QuestionType,
    selectedPosition: Position
  ) => boolean
): UseQuizBase<QuestionType, CategoryType> {
  return () => {
    // 状態変数の定義
    const [question, setQuestion] = useState<QuestionType | undefined>(
      undefined
    );
    const [answer, setAnswer] = useState<Position | undefined>(undefined);
    const [result, setResult] = useState<boolean | undefined>(undefined);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [availableCategories, setAvailableCategories] = useState<
      CategoryType[]
    >([...initialCategories]);

    // 初期問題の設定
    useEffect(() => {
      setQuestion(generateQuestion(availableCategories));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 次の問題に進む関数
    const nextQuestion = () => {
      if (availableCategories.length === 1) {
        setAvailableCategories([...initialCategories]); // カテゴリーをリセット
      }
      setQuestion(generateQuestion(availableCategories));
      setAnswer(undefined);
      setResult(undefined);
    };

    // 回答をチェックする関数
    const checkAnswer = (selectedPosition: Position) => {
      if (!question) return;

      const isCorrect = checkCorrectAnswer(question, selectedPosition);

      setAnswer(selectedPosition);
      setResult(isCorrect);
      if (isCorrect) setScore(score + 1);
      setTotalQuestions(totalQuestions + 1);

      // 使用済みカテゴリーを除外
      setAvailableCategories((prev) =>
        prev.filter((cat) => cat !== (question as any).category)
      );
    };

    // フックの戻り値
    return {
      question,
      answer,
      result,
      score,
      totalQuestions,
      checkAnswer,
      nextQuestion,
      setTotalQuestions,
      setScore,
    };
  };
}
