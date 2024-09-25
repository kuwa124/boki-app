// 必要なモジュールとタイプをインポート
import {
  AccountingCategory,
  AccountingCategoryQuestion,
  categories,
  categoryPositions,
  generateQuestion,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { Position } from '@/constants/type';
import { createUseQuizBase } from './useQuizBase';

// 問題の正解の位置を取得する関数
const getCorrectAnswer = (question: AccountingCategoryQuestion): Position => {
  // 問題の位置（homeまたはaway）を決定
  const positionKey = question.position === 'home' ? 'home' : 'away';
  // カテゴリと位置に基づいて正解の位置を返す
  return categoryPositions[question.category][positionKey];
};

// ユーザーの回答が正解かどうかをチェックする関数
const checkCorrectAnswer = (
  question: AccountingCategoryQuestion,
  selectedPosition: Position
): boolean => {
  // 選択された位置と正解の位置を比較
  return selectedPosition === getCorrectAnswer(question);
};

export const useQuiz = createUseQuizBase<
AccountingCategoryQuestion,
  AccountingCategory >
    (generateQuestion, // 問題を生成する関数
    categories, // クイズで使用するカテゴリのリスト
    getCorrectAnswer, // 正解を取得する関数
    checkCorrectAnswer); // 回答をチェックする関数
