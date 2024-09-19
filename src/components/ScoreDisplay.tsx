import {
  executionLimitCountAtom,
  executionModeTypeAtom,
} from '@/store/ExecutionMode';
import { useRecoilValue } from 'recoil';

type ScoreDisplayProps = {
  score: number;
  totalQuestions: number;
};

export const ScoreDisplay = ({ score, totalQuestions }: ScoreDisplayProps) => {
  const modeType = useRecoilValue(executionModeTypeAtom);
  const limitCount = useRecoilValue(executionLimitCountAtom);

  const modeText = modeType === 'unlimited' ? '無制限' : '回数指定';

  return (
    <div className='text-center mb-6'>
      <p className='text-xl font-bold tracking-wide'>
        －　{modeText}モード　－
      </p>
      {modeType === 'limited' && (
        <p className='tracking-widest'>
          総問題数：
          <span className='text-lg font-bold'>{limitCount}</span>問
        </p>
      )}
      <p className='text-lg font-semibold'>
        スコア: {score} / {totalQuestions}
      </p>
    </div>
  );
};
