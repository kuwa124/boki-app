import { Elements } from '@/constants/type';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseElement = () => {
  // 現在の質問を表すオブジェクト（未定義の可能性あり）
  question: Elements | undefined;

  // ユーザーが選択した回答（未定義の可能性あり）
  answer: Elements | undefined;

  // 回答の正誤結果（未定義の可能性あり）
  result: boolean | undefined;

  // 現在のスコア（正解数）
  score: number;

  // 総質問数
  totalQuestions: number;

  // ユーザーの回答を処理する関数
  handleAnswer: (position: string) => void;

  // 次の質問に進む関数
  nextQuestion: () => void;

  // 総質問数を設定する関数
  setTotalQuestions: Dispatch<SetStateAction<number>>;

  // スコアを設定する関数
  setScore: Dispatch<SetStateAction<number>>;
};

export const useElement = (
  elements: Elements[],
  generateQuestion: (availableCategories: Elements[]) => Elements | undefined
): UseElement => {
  return () => {
    const [question, setQuestion] = useState<Elements | undefined>(undefined);
    const [answer, setAnswer] = useState<Elements | undefined>(undefined);
    const [result, setResult] = useState<boolean | undefined>(undefined);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [availableCategories, setAvailableCategories] = useState<Elements[]>([
      ...elements,
    ]);

    // 初回レンダリング時に質問を生成
    useEffect(() => {
      setQuestion(generateQuestion(availableCategories));
    }, []);

    // 次の質問を設定する関数
    const nextQuestion = () => {
      if (availableCategories.length === 1) {
        setAvailableCategories([...elements]);
      }
      setQuestion(generateQuestion(availableCategories));
      setAnswer(undefined);
      setResult(undefined);
    };

    // 回答をチェックする関数
    const checkAnswer = (selectedPosition: Elements) => {
      // 質問が存在しない場合は処理を終了
      if (!question) return;

      // 正解の回答を取得
      const correctAnswer = question.answer;

      // 選択された回答が正解かどうかを判定
      const isCorrect = selectedPosition.answer === correctAnswer;

      // 選択された回答をセット
      setAnswer(selectedPosition);

      // 正解・不正解の結果をセット
      setResult(isCorrect);

      // 正解の場合、スコアを1増やす
      if (isCorrect) setScore(score + 1);

      // 総質問数を1増やす
      setTotalQuestions(totalQuestions + 1);

      // 回答済みの質問を利用可能なカテゴリーから除外
      setAvailableCategories((prev) => prev.filter((cat) => cat !== question));
    };

    // ユーザーの回答を処理する関数
    const handleAnswer = (position: string) => {
      if (question) {
        const selectedPosition: Elements = {
          id: question.id,
          text: question.text,
          answer: position,
          message: question.message,
        };
        checkAnswer(selectedPosition);
      }
    };

    return {
      question,
      answer,
      result,
      score,
      totalQuestions,
      handleAnswer,
      nextQuestion,
      setScore,
      setTotalQuestions,
    };
  };
};
