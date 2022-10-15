import Head from 'next/head';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import MobileHeader from '@/components/MobileHeader';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
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
};

export default Layout;
