import { usePathname } from 'next/navigation';

type UsePage = () => {
  currentPage: number;
};

export const usePage: UsePage = () => {
  // 現在のURLパスを取得
  const pathname:string = usePathname();

  // 'quiz'の後の数字を抽出し、ページ番号として保存（例: '/quiz/3' → 3）。数字がない場合は0。
  const currentPage = parseInt(pathname.split('quiz')[1]) || 0;

  return { currentPage };
};
