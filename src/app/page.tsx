import Link from 'next/link';

type page_list = {
  id: number;
  pageTitle: string;
};
const PAGE_LIST: page_list[] = [
  { id: 1, pageTitle: '5要素のポジション問題！' },
];

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center'>
      <div className='bg-white p-8 m-4 rounded-xl shadow-2xl max-w-md  mb-40'>
        <h1 className='sm:text-3xl text-xl font-bold text-center mb-6 text-purple-600'>
          5要素のポジション問題！
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
