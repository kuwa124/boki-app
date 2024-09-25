// 必要なモジュールとタイプをインポート
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
import { createUseQuizBase } from './useQuizBase';

// 問題の正解の位置を取得する関数
const getCorrectAnswer = (question: QuizQuestion5): Position => {
  // 問題のカテゴリを取得
  const categoryType = question.category.answer as AccountingCategory;
  // カテゴリと位置（ホームまたはアウェイ）に基づいて正解の位置を返す
  return categoryPositions[categoryType][question.position as 'home' | 'away'];
};

// ユーザーの回答が正解かどうかをチェックする関数
const checkCorrectAnswer = (
  question: QuizQuestion5,
  selectedPosition: Position
): boolean => {
  // 選択された位置と正解の位置を比較
  return selectedPosition === getCorrectAnswer(question);
};

// Quiz5用のカスタムフックを作成
export const useQuiz5 = createUseQuizBase<QuizQuestion5, Elements>(
  generateQuestion5, // 問題を生成する関数
  combinedElements, // クイズで使用する要素のリスト
  getCorrectAnswer, // 正解を取得する関数
  checkCorrectAnswer // 回答をチェックする関数
);
