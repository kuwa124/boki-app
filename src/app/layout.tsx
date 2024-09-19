import { ClientWrapper } from '@/components/ClientWrapper';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] });
export const metadata: Metadata = {
  title: '簿記ドリル',
  description: '簿記の勘定科目を学習しよう！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={notoSansJP.className}>
        {/* <Navigation /> */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
