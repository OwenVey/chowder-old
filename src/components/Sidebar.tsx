import Search from '@/components/Search';
import Logo from '@/components/Logo';
import clsx from 'clsx';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid';
import Image from 'next/future/image';
import ThemeToggler from '@/components/ThemeToggler';
import { navigation, tags } from '@/utils/mocks';
import { useRouter } from 'next/router';
import Link from '@/components/Link';
import { signOut, useSession } from 'next-auth/react';
import { Dropdown, DropdownItem } from '@/components/Dropdown';

export default function Sidebar() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-6 lg:bg-gray-3 lg:pt-5">
        <div className="flex flex-shrink-0 items-center px-3">
          <Logo className="h-8 w-auto" />
          <span className="ml-1 text-xl font-bold tracking-tight text-gray-12">chowder.</span>
        </div>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
          {/* Sidebar Search */}
          <div className="px-3">
            <Search />
          </div>
          {/* Navigation */}
          <nav className="mt-6 px-3">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.href === router.pathname
                      ? 'bg-primary-9 text-white'
                      : 'text-gray-11 hover:bg-gray-1 hover:text-gray-12',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                  )}
                >
                  <item.icon
                    className={clsx(
                      item.href === router.pathname
                        ? 'text-white'
                        : 'text-gray-9 group-hover:text-gray-10',
                      'mr-3 h-6 w-6 flex-shrink-0',
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              {/* Secondary navigation */}
              <h3 className="px-3 text-sm font-medium text-gray-10" id="desktop-teams-headline">
                Tags
              </h3>
              <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                {tags.map((tag) => (
                  <a
                    key={tag.name}
                    href={tag.href}
                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-11 hover:bg-gray-1 hover:text-gray-12"
                  >
                    <span
                      className={clsx(tag.bgColorClass, 'mr-4 h-2.5 w-2.5 rounded-full')}
                      aria-hidden="true"
                    />
                    <span className="truncate">{tag.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
        {/* User account dropdown */}
        <div className="flex flex-shrink-0 border-t border-gray-6 p-4">
          <div className="block w-full flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {sessionData?.user?.image ? (
                  <Image
                    className="inline-block h-9 w-9 rounded-full"
                    height={36}
                    width={36}
                    src={sessionData.user.image}
                    alt="User profile image"
                  />
                ) : (
                  <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-3">
                    <svg
                      className="h-full w-full text-gray-9"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}

                {sessionData?.user?.name ? (
                  <p className="ml-3 text-sm font-medium text-gray-12">{sessionData.user.name}</p>
                ) : (
                  'Loading...'
                )}
              </div>

              <div className="flex items-center space-x-1">
                <ThemeToggler />
                <Dropdown
                  trigger={
                    <button className="rounded-full p-1">
                      <Cog6ToothIcon className="h-6 w-6 rounded-full text-gray-9 hover:text-gray-10" />
                    </button>
                  }
                >
                  <DropdownItem as={Link} href="/settings" icon={<AdjustmentsHorizontalIcon />}>
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => signOut({ callbackUrl: '/signin' })}
                    icon={<ArrowLeftOnRectangleIcon />}
                  >
                    Sign Out
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
