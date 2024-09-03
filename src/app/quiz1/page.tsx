// Reactをインポートします（Next.jsではデフォルトで利用可能ですが、明示的にインポートすることをおすすめします）
import React from 'react';

// Propsの型定義を行います（必要に応じて）
type Quiz1PageProps = {
  // ここにプロップスの型定義を追加します（現時点では空）
};

// Quiz1コンポーネントを定義します
const Quiz1: React.FC<Quiz1PageProps> = () => {
  // コンポーネントの状態や副作用をここに記述します

  // コンポーネントのJSXを返します
  return (
    <div>
      <h1>Quiz 1</h1>
      {/* ここにクイズのコンテンツを追加します */}
    </div>
  );
};

// コンポーネントをデフォルトエクスポートします（Next.jsのページコンポーネントとして必要）
export default Quiz1;
