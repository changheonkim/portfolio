import type { Metadata } from 'next';

import '../styles/globals.css';

import { Montserrat } from 'next/font/google';

import Navbar from '@/widgets/navbar';

const montserrat = Montserrat({
  variable: '--montserrat', // CSS 변수 이름 수정
  subsets: ['latin'], // 필요한 문자 집합 (한글 지원 필요 시 'latin-ext', 'korean' 추가)
  weight: ['500', '600', '700'], // 사용할 폰트 가중치
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} font-sans antialiased bg-[#0F111A]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
