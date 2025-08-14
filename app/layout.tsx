import type { Metadata } from 'next';
import './globals.css';
import { Geist_Mono } from 'next/font/google';

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ace Holdings',
  description: 'Ace Holdings - Professional Investment Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${geistMono.className}`}>{children}</body>
    </html>
  );
}
