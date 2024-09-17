import { InfinityIcon } from 'lucide-react';
import React, { useState } from 'react';

type MODE = 'unlimited' | 'limited' | undefined;

export const ModeSelectionPage: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<MODE>(undefined);
  const [rounds, setRounds] = useState<number>(5);

  const handleModeSelect = (mode: MODE) => {
    setSelectedMode(mode);
  };

  const handleRoundschange = (increment: number) => {
    setRounds((prev) => Math.max(5, prev + increment));
  };

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center '>
      <div className='bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full'>
        <h1 className='text-3xl font-bold text-center mb-8'>
          ゲームモードを選択
        </h1>

        {/* 無制限モードボタン */}
        <div className='flex flex-col md:flex-row gap-6 justify-center mb-8'>
          <button
            onClick={() => handleModeSelect('unlimited')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${
              selectedMode === 'unlimited'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className='flex flex-col items-center'>
              <InfinityIcon size={48} className='text-blue-500 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>無制限モード</h2>
              <p className='text-gray-600 text-center'>
                時間や回数の制限なく、好きなだけプレイできます。
              </p>
            </div>
          </button>
        </div>

        {/* 回数指定モード */}
        <div className='flex flex-col md:flex-row gap-6 justify-center mb-8'>
          <button
            onClick={() => handleModeSelect('unlimited')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${
              selectedMode === 'unlimited'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className='flex flex-col items-center'>
              <InfinityIcon size={48} className='text-blue-500 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>無制限モード</h2>
              <p className='text-gray-600 text-center'>
                時間や回数の制限なく、好きなだけプレイできます。
              </p>
            </div>
          </button>
        </div>

        {/* スタートボタン */}
      </div>
    </div>
  );
};
