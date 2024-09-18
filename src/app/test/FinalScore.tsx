import { Search, Star, ThumbsUp, Trophy, Zap } from 'lucide-react';
import React, { useMemo } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

type FinalScoreProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

export const FinalScore: React.FC<FinalScoreProps> = ({
  score,
  onRestart,
  totalQuestions,
}) => {
  const percentage: number = (score / totalQuestions) * 100;

  const getGrade = useMemo(
    () => (percent: number) => {
      if (percent === 100)
        return {
          grade: 'S',
          icon: Trophy,
          color: '#FFD700',
          message: '素晴らしい！完璧です！',
        };
      if (percent >= 85)
        return {
          grade: 'A',
          icon: Star,
          color: '#4CAF50',
          message: '素晴らしい成績です！',
        };
      if (percent >= 70)
        return {
          grade: 'B',
          icon: Zap,
          color: '#2196F3',
          message: '良い成績です！',
        };
      if (percent >= 55)
        return {
          grade: 'C',
          icon: ThumbsUp,
          color: '#FFC107',
          message: 'よくがんばりました！',
        };
      return {
        grade: 'D',
        icon: Search,
        color: '#FF5722',
        message: 'それぞれの位置関係を確認して！',
      };
    },
    [percentage]
  );

  const { grade, icon: Icon, color, message } = getGrade(percentage);
  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-center '>
      <div className='bg-white p-8 rounded-xl shadow-lg max-w-md mx-4 text-center'>
        <h2 className='text-3xl font-bold mb-3 text-gray-700'>最終スコア</h2>

        {/* プログレスバー */}
        <div className='w-24 h-24 mx-auto mb-3 relative'>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: color,
            })}
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <p className='text-2xl font-bold' style={{ color }}>
              {Math.round(percentage)}
              <span className='text-lg font-normal'>%</span>
            </p>
          </div>
        </div>

        {/* アイコン */}
        <div className='mb-3'>
          <Icon size={48} className='mx-auto mb-2' color={color} />
          <p className='text-4xl font-bold' style={{ color }}>
            {grade}
          </p>
        </div>

        {/* スコア＆メッセージ */}
        <p className='text-xl mb-4 text-gray-600'>
          スコア: {score} / {totalQuestions}
        </p>
        <p className='text-lg mb-3 text-gray-700'>{message}</p>

        <button
          onClick={onRestart}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105'
        >
          もう一度プレイ
        </button>
      </div>
    </div>
  );
};
