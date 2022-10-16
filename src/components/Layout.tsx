import Head from 'next/head';
import React from 'react';
import { Sidebar, MobileHeader, LoadingPage } from '@/components';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  const isSigninPage = router.pathname === '/signin';
  const { status } = useSession({ required: !isSigninPage });

  if (status === 'loading') return <LoadingPage />;

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
