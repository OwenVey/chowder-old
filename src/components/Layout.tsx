import Head from 'next/head';
import React from 'react';
import { Sidebar, MobileHeader } from '@/components';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  const isSigninPage = router.pathname === '/signin';

  return (
    <>
      <Head>
        <title>Chowder</title>
      </Head>

      {isSigninPage ? (
        children
      ) : (
        <>
          <Sidebar />
          <MobileHeader />
          <div className="flex min-w-0 flex-1 flex-col overflow-auto">{children}</div>
        </>
      )}
    </>
  );
}
