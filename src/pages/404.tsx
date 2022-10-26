import { Logo } from '@/components';
import Link from 'next/link';

export default function Error404() {
  return (
    <>
      <div className="flex min-h-full flex-col pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link href="/" className="inline-flex">
              <Logo className="h-12 w-auto text-primary-9" />
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-primary-9">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-12 sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-11">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <a href="#" className="text-base font-medium text-primary-9 hover:text-primary-11">
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a href="#" className="text-sm font-medium text-gray-11 hover:text-gray-12">
              Contact Support
            </a>
            <span className="inline-block border-l border-gray-6" aria-hidden="true" />
            <a href="#" className="text-sm font-medium text-gray-11 hover:text-gray-12">
              Status
            </a>
            <span className="inline-block border-l border-gray-6" aria-hidden="true" />
            <a href="#" className="text-sm font-medium text-gray-11 hover:text-gray-12">
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
