export type Position = '借方' | '貸方';

export type ProfitLoss = '費用' | '収益';

export type Elements = {
  id: number;
  text: string;
  answer: string;
};

export const positions: string[] = ['費用', '収益'];

type BsPositions = {
  name: string;
  style: string;
};

export const bsPositions: BsPositions[] = [
  { name: '資産', style: 'bg-orange-500 hover:bg-orange-600' },
  { name: '負債', style: 'bg-blue-500 hover:bg-blue-600' },
  { name: '純資産', style: '' },
];

export const combinedPositions: BsPositions[] = [
  ...bsPositions.map((pos) => ({ ...pos })),
  ...positions.map((pos) => ({ name: pos, style: '' })),
];
