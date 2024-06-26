import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EffectorNext } from '@effector/next';
import './globals.css';
import '../models/user';
import '../models/chat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple Chat',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EffectorNext>{children}</EffectorNext>
      </body>
    </html>
  );
}
