// src/pages/_app.tsx
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';
import { trpc } from '@/utils/trpc';
import { Layout } from '@/components';
import { ThemeProvider } from 'next-themes';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

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
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </TooltipProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
