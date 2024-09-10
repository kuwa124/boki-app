import { Elements } from '@/constants/type';

// 勘定科目問題の型を定義
export type QuizQuestion5 = {
  category: Elements; // Elements 型のオブジェクトを category として持つ
  position: 'home' | 'away';
};

export const generateQuestion5 = (
  availableCategories: Elements[]
): QuizQuestion5 => {
  const randomIndex = Math.floor(Math.random() * availableCategories.length);
  const category = availableCategories[randomIndex];
  const position = Math.random() < 0.5 ? 'home' : 'away';
  return { category, position };
};
