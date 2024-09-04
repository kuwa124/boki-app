import { AccountingCategory, AccountingCategoryQuestion } from "@/app/quiz1/constants/AccountingCategoryTypes";

export type Position = '借方' | '貸方';

export const generateQuestion = (): AccountingCategoryQuestion => {
  const categories: AccountingCategory[] = [
    '資産',
    '負債',
    '純資産',
    '費用',
    '収益',
  ];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const position = Math.random() < 0.5 ? 'home' : 'away';
  return { category, position };
};

