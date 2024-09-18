import { atom } from 'recoil';

export const executionModeTypeAtom = atom<'unlimited' | 'limited'>({
  key: 'executionModeTYpe', // 一意のキー
  default: 'unlimited', // 初期値
});

export const executionLimitCountAtom = atom<number>({
  key: 'executionLimitCount', // 一意のキー
  default: 5, // 初期値
});
