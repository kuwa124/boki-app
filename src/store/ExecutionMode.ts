import { atom } from 'recoil';

type ExecutionMode = {
  mode: 'unlimited' | 'limited';
  LimitCount: number;
};

export const executionModeAtom = atom<ExecutionMode>({
  key: 'executionMode', // 一意のキー
  default: { mode: 'unlimited', LimitCount: 5 }, // 初期値
});
