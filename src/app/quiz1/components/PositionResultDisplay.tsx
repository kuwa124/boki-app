import React from 'react';

import { CheckCircle, XCircle } from 'lucide-react';

type PositionResultDisplayProps = {
  result: boolean | undefined;
};

export const PositionResultDisplay: React.FC<PositionResultDisplayProps> = ({
  result,
}) => {
  if (result === undefined) {
    return undefined; //何もしない（早期リターン）
  }

  const Icon = result ? CheckCircle : XCircle;
  const message = result ? '正解！すごい！' : '残念！次は頑張ろう！';
  const colorClass = result ? 'green' : 'red';

  return (
    <div className={`text-center p-4 rounded-lg bg-${colorClass}-100`}>
      <div className='flex justify-center items-center'>
        <Icon className={`text-${colorClass}-500 mr-2`} />
        <p className={`text-${colorClass}-700 font-bold`}>{message}</p>
      </div>
    </div>
  );
};
