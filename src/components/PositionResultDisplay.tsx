'use client';

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
  const message: string = result ? '正解！すごい！' : '残念！次は頑張ろう！';
  const colorDivClass = result ? 'bg-green-100' : 'bg-red-100';
  const colorIconClass = result ? 'text-green-500' : 'text-red-500';
  const colorPClass = result ? 'text-green-700' : 'text-red-700';

  return (
    <div className={`text-center p-4 rounded-lg ${colorDivClass}`}>
      <div className='flex justify-center items-center'>
        <Icon className={`${colorIconClass} mr-2`} />
        <p className={`${colorPClass} font-bold`}>{message}</p>
      </div>
    </div>
  );
};
