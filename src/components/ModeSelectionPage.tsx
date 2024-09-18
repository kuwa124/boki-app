'use client';
import { Hash, InfinityIcon } from 'lucide-react';
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
      <div className='bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-4 w-full'>
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
              <p className='text-gray-600 text-center text-sm sm:text-base'>
                時間や回数の制限なく、好きなだけプレイできます。
              </p>
            </div>
          </button>
        </div>

        {/* 回数指定モード */}
        <div className='flex flex-col md:flex-row gap-6 justify-center mb-8'>
          <button
            onClick={() => handleModeSelect('limited')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${
              selectedMode === 'limited'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <div className='flex flex-col items-center'>
              <Hash size={48} className='text-green-500 mb-4' />
              <h2 className='text-xl font-semibold mb-2'>回数指定モード</h2>
              <p className='text-gray-600 text-center text-sm sm:text-base'>
                プレイ回数を指定して、集中的にプレイできます。
              </p>
            </div>
          </button>
        </div>

        {/* 回数変更ボタン */}
        {selectedMode === 'limited' && (
          <div className='flex justify-center items-center gap-4 mb-8'>
            <button
              onClick={() => handleRoundschange(-5)}
              className='px-3 py-1 bg-gray-200 rounded-full text-xl font-bold'
            >
              －
            </button>

            <span className='text-2xl font-semibold'>{rounds}回</span>

            <button
              onClick={() => handleRoundschange(5)}
              className='px-3 py-1 bg-gray-200 rounded-full text-xl font-bold'
            >
              ＋
            </button>
          </div>
        )}

        {/* スタートボタン */}
        <div className='text-center'>
          <button
            disabled={!selectedMode}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
              selectedMode
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            ゲームスタート
          </button>
        </div>
      </div>
    </div>
  );
};
