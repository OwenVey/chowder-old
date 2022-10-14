import { Transition, Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Fragment } from 'react';
import Logo from './Logo';
import { navigation, tags } from '@/utils/mocks';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export default function MobileSidebar({ isOpen, setOpen }: Props) {
  const router = useRouter();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-9 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-1 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <Logo className="h-8 w-auto" />
                <span className="ml-1 text-xl font-bold tracking-tight text-gray-12">chowder.</span>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={clsx(
                            item.href === router.pathname
                              ? 'bg-gray-4 text-gray-12'
                              : 'text-gray-11 hover:bg-gray-2 hover:text-gray-12',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium leading-5',
                          )}
                        >
                          <item.icon
                            className={clsx(
                              item.href === router.pathname
                                ? 'text-gray-11'
                                : 'text-gray-9 group-hover:text-gray-10',
                              'mr-3 h-6 w-6 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h3
                      className="px-3 text-sm font-medium text-gray-11"
                      id="mobile-teams-headline"
                    >
                      Teams
                    </h3>
                    <div
                      className="mt-1 space-y-1"
                      role="group"
                      aria-labelledby="mobile-teams-headline"
                    >
                      {tags.map((tag) => (
                        <a
                          key={tag.name}
                          href={tag.href}
                          className="group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-11 hover:bg-gray-2 hover:text-gray-12"
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
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
