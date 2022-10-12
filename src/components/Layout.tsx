import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const showNavbar = router.pathname === '/signin' ? false : true;

  return (
    <>
      <Head>
        <title>Chowder</title>
      </Head>

      {showNavbar && <Navbar />}
      <main className="h-full">{children}</main>
    </>
  );
};

export default Layout;
