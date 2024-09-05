import { Elements } from "@/constants/type";

// ベースとなる要素の配列を定義する
export const bsElements: Elements[] = [
  { id: 1, text: '現金', answer: '資産' },
  { id: 2, text: '当座預金', answer: '資産' },
  { id: 3, text: '普通預金', answer: '資産' },
  { id: 4, text: '定期預金', answer: '資産' },
  { id: 5, text: '受取手形', answer: '資産' },
  { id: 6, text: '電子記録債権', answer: '資産' },
  { id: 7, text: '売掛金', answer: '資産' },
  { id: 8, text: '繰越商品', answer: '資産' },
  { id: 9, text: '貯蔵品', answer: '資産' },
  { id: 10, text: '貸付金', answer: '資産' },
  { id: 11, text: '備品', answer: '資産' },
  { id: 12, text: '土地', answer: '資産' },
  { id: 13, text: '支払手形', answer: '負債' },
  { id: 14, text: '電子記録債務', answer: '負債' },
  { id: 15, text: '買掛金', answer: '負債' },
  { id: 16, text: '前受金', answer: '負債' },
  { id: 17, text: '借入金', answer: '負債' },
  { id: 18, text: '未払金', answer: '負債' },
  { id: 19, text: '仮受金', answer: '負債' },
  { id: 20, text: '当座借越', answer: '負債' },
  { id: 21, text: '立替金', answer: '資産' },
  { id: 22, text: '前払金', answer: '資産' },
  { id: 23, text: '未収入金', answer: '資産' },
  { id: 24, text: '仮払金', answer: '資産' },
  { id: 25, text: '受取商品券', answer: '資産' },
  { id: 26, text: '建物', answer: '資産' },
  { id: 27, text: '預り金', answer: '負債' },
  { id: 28, text: '資本金', answer: '純資産' },
  { id: 29, text: '繰越利益剰余金', answer: '純資産' },
  { id: 30, text: '利益準備金', answer: '純資産' },
];

export const generateQuestion3 = (bsElements: Elements[]):Elements => {
  const category =
    bsElements[Math.floor(Math.random() * bsElements.length)];
  return category;
};
