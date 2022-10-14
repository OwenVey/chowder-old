import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import MobileSidebar from '@/components/MobileSidebar';
import Sidebar from '@/components/Sidebar';
import MobileHeader from '@/components/MobileHeader';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isSigninPage = router.pathname === '/signin';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Chowder</title>
      </Head>

      {isSigninPage ? (
        children
      ) : (
        <div className="min-h-full">
          <MobileSidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} />
          <Sidebar />
          <div className="flex flex-col lg:pl-64">
            <MobileHeader setSidebarOpen={setSidebarOpen} />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
