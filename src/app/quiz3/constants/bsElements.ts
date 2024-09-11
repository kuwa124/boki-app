import { Elements } from '@/constants/type';

// ベースとなる要素の配列を定義する
export const bsElements: Elements[] = [
  // 資産
  { id: 1, text: '現金', answer: '資産' },
  { id: 2, text: '小口現金', answer: '資産' },
  { id: 3, text: '当座預金', answer: '資産' },
  { id: 4, text: '普通預金', answer: '資産' },
  { id: 5, text: '定期預金', answer: '資産' },
  { id: 6, text: '受取手形', answer: '資産' },
  { id: 7, text: '電子記録債権', answer: '資産' },
  { id: 8, text: '売掛金', answer: '資産' },
  { id: 9, text: 'クレジット売掛金', answer: '資産' },
  { id: 10, text: '繰越商品', answer: '資産' },
  { id: 11, text: '貯蔵品', answer: '資産' },
  { id: 12, text: '貸付金', answer: '資産' },
  { id: 13, text: '手形貸付金', answer: '資産' },
  { id: 14, text: '従業員貸付金', answer: '資産' },
  { id: 15, text: '役員貸付金', answer: '資産' },
  { id: 16, text: '立替金', answer: '資産' },
  { id: 17, text: '従業員立替金', answer: '資産' },
  { id: 18, text: '前払金', answer: '資産' },
  { id: 19, text: '未収入金', answer: '資産' },
  { id: 20, text: '仮払金', answer: '資産' },
  { id: 21, text: '仮払消費税', answer: '資産' },
  { id: 22, text: '仮払法人税等', answer: '資産' },
  { id: 23, text: '受取商品券', answer: '資産' },
  { id: 24, text: '前払利息', answer: '資産' },
  { id: 25, text: '未収利息', answer: '資産' },
  { id: 26, text: '建物', answer: '資産' },
  { id: 27, text: '備品', answer: '資産' },
  { id: 28, text: '車両運搬具', answer: '資産' },
  { id: 29, text: '土地', answer: '資産' },
  { id: 30, text: '差入保証金', answer: '資産' },

  // 負債
  { id: 31, text: '支払手形', answer: '負債' },
  { id: 32, text: '電子記録債務', answer: '負債' },
  { id: 33, text: '買掛金', answer: '負債' },
  { id: 34, text: '前受金', answer: '負債' },
  { id: 35, text: '借入金', answer: '負債' },
  { id: 36, text: '手形借入金', answer: '負債' },
  { id: 37, text: '役員借入金', answer: '負債' },
  { id: 38, text: '未払金', answer: '負債' },
  { id: 39, text: '仮受金', answer: '負債' },
  { id: 40, text: '仮受消費税', answer: '負債' },
  { id: 41, text: '未払消費税', answer: '負債' },
  { id: 42, text: '未払法人税等', answer: '負債' },
  { id: 43, text: '未払利息', answer: '負債' },
  { id: 44, text: '前受利息', answer: '負債' },
  { id: 45, text: '当座借越', answer: '負債' },
  { id: 46, text: '預り金', answer: '負債' },
  { id: 47, text: '社会保険料預り金', answer: '負債' },
  { id: 48, text: '所得税預り金', answer: '負債' },
  { id: 49, text: '従業員預り金', answer: '負債' },

  // 純資産
  { id: 50, text: '資本金', answer: '純資産' },
  { id: 51, text: '繰越利益剰余金', answer: '純資産' },
  { id: 52, text: '利益準備金', answer: '純資産' },
];

export const generateQuestion3 = (bsElements: Elements[]): Elements => {
  const randomIndex = Math.floor(Math.random() * bsElements.length);
  const category = bsElements[randomIndex];
  return category;
};
