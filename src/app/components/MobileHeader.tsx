import { Logo, MobileSidebar, Search, ThemeToggler } from '@/app/components';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function MobileHeader() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-10 flex h-16 flex-wrap items-center justify-between border-b border-gray-6 bg-gray-1 px-4 sm:px-6 lg:hidden">
      <div className="mr-6 flex lg:hidden">
        <MobileSidebar />
      </div>

      <div className="relative flex flex-grow basis-0 items-center">
        <Logo className="h-8 w-auto text-primary-9" />
      </div>

      <div className="mr-6 sm:mr-0">
        <Search />
      </div>

      <div className="relative flex basis-0 justify-end gap-6 sm:flex-grow sm:gap-6">
        <ThemeToggler />
        {session?.user?.image ? (
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image height={32} width={32} src={session.user.image} alt="User profile image" />
          </div>
        ) : (
          <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-3">
            <svg className="h-full w-full text-gray-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        )}
      </div>
    </header>
  );
}
