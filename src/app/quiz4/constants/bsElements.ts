import { plElements } from '@/app/quiz2/constants/plElements';
import { bsElements } from '@/app/quiz3/constants/bsElements';
import { Elements } from '@/constants/type';

// ベースとなる要素の配列を定義する
export const combinedElements: Elements[] = [
  ...bsElements.map((element, index) => ({ ...element, id: index + 1 })),
  ...plElements.map((element, index) => ({ ...element, id: index + 1 +bsElements.length})),
];

export const generateQuestion4 = (combinedElements: Elements[]): Elements => {
  const category =
    combinedElements[Math.floor(Math.random() * combinedElements.length)];
  return category;
};
