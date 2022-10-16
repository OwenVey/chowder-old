// src/pages/_app.tsx
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppProps, AppType } from 'next/app';
import { trpc } from '@/utils/trpc';
import { Layout } from '@/components';
import { ThemeProvider } from 'next-themes';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  session: Session | null;
};

// const App: AppType<{ session: Session | null }> = ({Component, pageProps: { session, ...pageProps },}) => {
function App({ Component, pageProps, session }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default trpc.withTRPC(App);
