import { Elements } from '@/constants/type';

// ベースとなる要素の配列を定義する
export const plElements: Elements[] = [
  { id: 1, text: '仕入', answer: '費用' },
  { id: 2, text: '給料', answer: '費用' },
  { id: 3, text: '法定福利費', answer: '費用' },
  { id: 4, text: '売上', answer: '収益' },
  { id: 5, text: '発送費', answer: '費用' },
  { id: 6, text: '支払手数料', answer: '費用' },
  { id: 7, text: '旅費交通費', answer: '費用' },
  { id: 8, text: '減価償却費', answer: '費用' },
  { id: 9, text: '雑益', answer: '収益' },
  { id: 10, text: '受取利息', answer: '収益' },
  { id: 11, text: '固定資産売却益', answer: '収益' },
  { id: 12, text: '支払家賃', answer: '費用' },
  { id: 13, text: '支払地代', answer: '費用' },
  { id: 14, text: '保険料', answer: '費用' },
  { id: 15, text: '租税公課', answer: '費用' },
  { id: 16, text: '受取手数料', answer: '収益' },
  { id: 17, text: '受取家賃', answer: '収益' },
  { id: 18, text: '支払利息', answer: '費用' },
  { id: 19, text: '雑損', answer: '費用' },
  { id: 20, text: '固定資産売却損', answer: '費用' },
];

export const generateQuestion2 = (plElements: Elements[]): Elements => {
  const randomIndex = Math.floor(Math.random() * plElements.length);
  const category = plElements[randomIndex];
  return category;
};
