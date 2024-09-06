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
  const message: string = result ? `正解！すごい！` : '残念！次は頑張ろう！';
  const colorDivClass = result ? 'bg-green-100' : 'bg-red-100';
  const colorIconClass = result ? 'text-green-500' : 'text-red-500';
  const colorPClass = result ? 'text-green-700' : 'text-red-700';

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-center p-4 rounded-lg ${colorDivClass}`}
    >
      <div className=' bg-white container mx-auto p-20'>
        <div className='text-sm sm:text-lg md:text-xl lg:text-5xl flex justify-center items-center'>
          <Icon className={`${colorIconClass} mr-2 lg:size-20`} />
          <p className={`${colorPClass} lg:ml-4 font-bold`}>{message}</p>
        </div>
      </div>
    </div>
  );
};
