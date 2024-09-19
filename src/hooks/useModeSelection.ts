import {
  executionLimitCountAtom,
  executionModeTypeAtom,
} from '@/store/ExecutionMode';
import { useRecoilState } from 'recoil';

type MODE = 'unlimited' | 'limited';

export const useModeSelection = () => {
  const [selectedMode, setSelectedMode] = useRecoilState<MODE>(
    executionModeTypeAtom
  );
  const [rounds, setRounds] = useRecoilState<number>(executionLimitCountAtom);

  // モードの変更
  const handleModeSelect = (mode: MODE) => {
    setSelectedMode(mode);
  };

  // 回数指定モードの回数変更
  const handleRoundschange = (increment: number) => {
    setRounds((prev) => Math.max(5, prev + increment));
  };
  return { handleModeSelect, selectedMode, handleRoundschange, rounds };
};
