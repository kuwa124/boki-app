import { Position } from '@/constants/type';

export type AccountingCategory = '資産' | '負債' | '純資産' | '費用' | '収益';

// AccountingCategory の各値をキーとして持ち、その値は home と away プロパティを持つオブジェクト
export const categoryPositions: Record<
  AccountingCategory,
  { home: Position; away: Position }
> = {
  資産: { home: '借方', away: '貸方' },
  負債: { home: '貸方', away: '借方' },
  純資産: { home: '貸方', away: '借方' },
  費用: { home: '借方', away: '貸方' },
  収益: { home: '貸方', away: '借方' },
};

export type AccountingCategoryQuestion = {
  category: AccountingCategory;
  position: 'home' | 'away';
};

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
