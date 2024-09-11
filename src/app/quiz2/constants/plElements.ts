import { Elements } from '@/constants/type';

// ベースとなる要素の配列を定義する
export const plElements: Elements[] = [
  // 費用
  { id: 1, text: '仕入', answer: '費用', message: '費用の代表格' },
  { id: 2, text: '給料', answer: '費用', message: '「料」がつくので費用' },
  {
    id: 3,
    text: '法定福利費',
    answer: '費用',
    message: '「費」がつくので費用',
  },
  { id: 4, text: '発送費', answer: '費用', message: '「費」がつくので費用' },
  {
    id: 5,
    text: '支払手数料',
    answer: '費用',
    message: '「料」がつくので費用',
  },
  {
    id: 6,
    text: '旅費交通費',
    answer: '費用',
    message: '「費」がつくので費用',
  },
  {
    id: 7,
    text: '減価償却費',
    answer: '費用',
    message: '「費」がつくので費用',
  },
  {
    id: 8,
    text: '支払家賃',
    answer: '費用',
    message: '「支払」がつくので費用',
  },
  {
    id: 9,
    text: '支払地代',
    answer: '費用',
    message: '「支払」がつくので費用',
  },
  { id: 10, text: '保険料', answer: '費用', message: '「料」がつくので費用' },
  {
    id: 11,
    text: '租税公課',
    answer: '費用',
    message: '会社の「収益」を得るために必要な税金の支払いだから費用',
  },
  {
    id: 12,
    text: '支払利息',
    answer: '費用',
    message: '「支払」がつくので費用',
  },
  { id: 13, text: '雑損', answer: '費用', message: '「損」がつくので費用' },
  {
    id: 14,
    text: '固定資産売却損',
    answer: '費用',
    message: '「損」がつくので費用',
  },
  {
    id: 15,
    text: '売上原価',
    answer: '費用',
    message: `
    「売った商品（売上）を仕入れるのにかかったお金（原価）」なので費用
    ※仕入れた金額のうち、売れた金額
    `,
  },
  {
    id: 16,
    text: '広告宣伝費',
    answer: '費用',
    message: '「費」がつくので費用',
  },
  {
    id: 17,
    text: '貸倒引当金繰入',
    answer: '費用',
    message: '「繰入」は費用',
  },
  { id: 18, text: '貸倒損失', answer: '費用', message: '「損」がつくので費用' },
  { id: 19, text: '通信費', answer: '費用', message: '「費」がつくので費用' },
  { id: 20, text: '消耗品費', answer: '費用', message: '「費」がつくので費用' },
  {
    id: 21,
    text: '水道光熱費',
    answer: '費用',
    message: '「費」がつくので費用',
  },
  { id: 22, text: '修繕費', answer: '費用', message: '「費」がつくので費用' },
  {
    id: 23,
    text: '法人税等',
    answer: '費用',
    message: '「利益」から支払う税金だから費用',
  },

  // 収益
  { id: 24, text: '売上', answer: '収益', message: '収益の代表格' },
  {
    id: 25,
    text: '受取利息',
    answer: '収益',
    message: '「受取」がつくので収益',
  },
  {
    id: 26,
    text: '受取手数料',
    answer: '収益',
    message: '「受取」がつくので収益',
  },
  {
    id: 27,
    text: '受取家賃',
    answer: '収益',
    message: '「受取」がつくので収益',
  },
  {
    id: 28,
    text: '受取地代',
    answer: '収益',
    message: '「受取」がつくので収益',
  },
  {
    id: 29,
    text: '固定資産売却益',
    answer: '収益',
    message: '「益」がつくので収益',
  },
  {
    id: 30,
    text: '償却債権取立益',
    answer: '収益',
    message: '「益」がつくので収益',
  },
  { id: 31, text: '雑益', answer: '収益', message: '「益」がつくので収益' },
  {
    id: 32,
    text: '貸倒引当金戻入',
    answer: '収益',
    message: '「戻入」は収益',
  },
];

export const generateQuestion2 = (plElements: Elements[]): Elements => {
  const randomIndex = Math.floor(Math.random() * plElements.length);
  const category = plElements[randomIndex];
  return category;
};
