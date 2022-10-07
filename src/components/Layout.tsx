import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Chowder</title>
      </Head>

      <Navbar />
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;
