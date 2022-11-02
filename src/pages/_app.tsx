// src/pages/_app.tsx
import { Layout } from '@/components';
import '@/styles/globals.css';
import { trpc } from '@/utils/trpc';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session: Session | null;
};

function App({ Component, pageProps, session }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <TooltipProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </TooltipProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
