import { Inter } from '@next/font/google';
import clsx from 'clsx';
import { MobileHeader, Sidebar } from './components';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={clsx('h-full bg-gray-1 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col lg:flex-row">
        <Providers>
          <Sidebar />
          <MobileHeader />
          <div className="flex min-w-0 flex-1 flex-col overflow-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
