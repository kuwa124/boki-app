import { combinedElements } from '@/app/quiz4/constants/combinedElements';
import { Elements } from '@/constants/type';

// 勘定科目問題の型を定義
export type QuizQuestion5 = {
  category: Elements; // Elements 型のオブジェクトを category として持つ
  position: string; // position は string 型
};

export const generateQuestion5 = (): QuizQuestion5 => {
  const categories = combinedElements;
  const category = categories[Math.floor(Math.random() * categories.length)];
  const position = Math.random() < 0.5 ? 'home' : 'away';
  return { category, position };
};
