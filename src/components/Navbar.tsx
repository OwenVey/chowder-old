import { Fragment } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Image from 'next/future/image';
import Link from 'next/link';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import ActiveLink from './ActiveLink';
import logo from '@/public/logo.svg';

export default function Navbar() {
  const links = [
    {
      name: 'Dashboard',
      to: '/',
    },
    {
      name: 'Team',
      to: '/team',
    },
    {
      name: 'Projects',
      to: '/projects',
    },
    {
      name: 'Calendar',
      to: '/calendar',
    },
  ];

  const { data: sessionData } = useSession();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image className="block h-8 w-auto" src={logo} alt="Logo" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {links.map((link) => (
                    <ActiveLink
                      key={link.name}
                      href={link.to}
                      activeClassName="border-indigo-500 text-gray-900"
                      inactiveClassName="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      <a className="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                        {link.name}
                      </a>
                    </ActiveLink>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {sessionData ? (
                  <Menu as="div" className="relative">
                    <div>
                      {sessionData?.user && (
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          {sessionData?.user.image && (
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={sessionData.user.image}
                              width={32}
                              height={32}
                              alt="User profile picture"
                            />
                          )}
                        </Menu.Button>
                      )}
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item as="div">
                          {({ active }) => (
                            <Link href="/settings">
                              <a
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
                                )}
                              >
                                Settings
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-gray-700',
                              )}
                              onClick={() => signOut()}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => signIn()}
                  >
                    <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {links.map((link) => (
                <ActiveLink
                  key={link.name}
                  href={link.to}
                  activeClassName="bg-indigo-50 border-indigo-500 text-indigo-700"
                  inactiveClassName="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                >
                  <Disclosure.Button
                    as="a"
                    className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                  >
                    {link.name}
                  </Disclosure.Button>
                </ActiveLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
