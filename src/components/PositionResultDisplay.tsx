'use client';

import React from 'react';

import { IncorrectAnswerMessage } from '@/components/IncorrectAnswerMessage';
import { Elements } from '@/constants/type';
import { CheckCircle, XCircle } from 'lucide-react';

type PositionResultDisplayProps = {
  result: boolean | undefined;
  question: Elements | undefined;
  position: 'home' | 'away' | undefined;
  onClick: () => void;
};

export const PositionResultDisplay: React.FC<PositionResultDisplayProps> = ({
  result,
  question,
  position,
  onClick,
}) => {
  if (result === undefined) {
    return undefined; //何もしない（早期リターン）
  }

  const Icon = result ? CheckCircle : XCircle;
  const message: string = result ? `正解！すごい！` : '残念！次は頑張ろう！';
  const colorDivClass = result ? 'bg-green-100' : 'bg-red-100';
  const colorIconClass = result ? 'text-green-500' : 'text-red-500';
  const colorPClass = result ? 'text-green-700' : 'text-red-700';
  const colorBtnClass = result ? 'bg-green-500' : 'bg-red-500';
  const colorHoverBtnClass = result ? 'bg-green-700' : 'bg-red-700';

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 `}
    >
      <div className='mx-2'>
        <div
          className={`text-center rounded-lg ${colorDivClass} container mx-auto p-10 sm:p-20`}
        >
          <div className='text-sm sm:text-lg md:text-xl lg:text-5xl flex justify-center items-center'>
            <Icon className={`${colorIconClass} mr-2 lg:size-20`} />
            <p className={`${colorPClass} lg:ml-4 font-bold`}>{message}</p>
          </div>
          {question && (
            <IncorrectAnswerMessage
              result={result}
              question={question}
              position={position}
            />
          )}
          <button
            className={`mt-2 px-4 py-2 ${colorBtnClass} font-semibold tracking-wider text-white rounded hover:${colorHoverBtnClass} shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
            onClick={onClick}
          >
            次の問題へ
          </button>
        </div>
      </div>
    </div>
  );
};
