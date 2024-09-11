import Link from 'next/link';

type page_list = {
  id: number;
  pageTitle: string;
};
const PAGE_LIST: page_list[] = [
  { id: 1, pageTitle: '5要素のポジション問題！' },
  { id: 2, pageTitle: '損益計算書の分類問題！' },
  { id: 3, pageTitle: '貸借対照表の分類問題！' },
  { id: 4, pageTitle: '総 合 問 題！' },
  { id: 5, pageTitle: '勘定科目の増減問題！' },
];

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center'>
      <div className='bg-white p-8 m-4 rounded-xl shadow-2xl max-w-md'>
        <h1 className='sm:text-3xl text-xl font-bold text-center mb-6 text-purple-600 tracking-wider'>
          勘定科目練習問題！
        </h1>
        <div className='grid grid-cols-1 gap-4'>
          {PAGE_LIST.map((page) => (
            <Link
              key={page.pageTitle}
              href={`/quiz${page.id}`}
              className='p-3 bg-blue-500 text-white rounded-full text-center font-bold text-lg hover:bg-blue-600 transition-colors'
            >
              {page.pageTitle}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
