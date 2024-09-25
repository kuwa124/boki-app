import {
  AccountingCategory,
  AccountingCategoryQuestion,
  categories,
  categoryPositions,
  generateQuestion,
} from '@/app/quiz1/constants/AccountingCategoryTypes';
import { Position } from '@/constants/type';
import { createUseQuizBase } from './useQuizBase';

const getCorrectAnswer = (question: AccountingCategoryQuestion): Position => {
  const positionKey = question.position === 'home' ? 'home' : 'away';
  return categoryPositions[question.category][positionKey];
};

const checkCorrectAnswer = (
  question: AccountingCategoryQuestion,
  selectedPosition: Position
): boolean => {
  return selectedPosition === getCorrectAnswer(question);
};

export const useQuiz = createUseQuizBase<
  AccountingCategoryQuestion,
  AccountingCategory
>(generateQuestion, categories, getCorrectAnswer, checkCorrectAnswer);
