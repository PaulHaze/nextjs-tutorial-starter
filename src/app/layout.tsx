import '@/styles/main.scss';

import type { Metadata } from 'next';
import { MainTemplate } from '@/components';

export const metadata: Metadata = {
  title: 'NextJs Tutorial Template',
  description: 'A starter project for working through multi-chapter tutorials',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
