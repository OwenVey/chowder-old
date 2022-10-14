import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import ThemeToggler from '@/components/ThemeToggler';
import Logo from '@/components/Logo';
import Search from '@/components/Search';

type Props = {
  setSidebarOpen: (open: boolean) => void;
};

export default function MobileHeader({ setSidebarOpen }: Props) {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-wrap items-center justify-between border-b border-gray-6 bg-gray-1 px-4 sm:px-6 lg:hidden">
      <div className="mr-6 flex lg:hidden">
        <button
          type="button"
          className="text-gray-11 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-grow basis-0 items-center">
        <Logo className="h-8 w-auto" />
      </div>

      <div className="mr-6 sm:mr-0">
        <Search />
      </div>

      <div className="relative flex basis-0 justify-end gap-6 sm:flex-grow sm:gap-6">
        <ThemeToggler />
        <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-3">
          <svg className="h-full w-full text-gray-9" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      </div>
    </header>
  );
}
