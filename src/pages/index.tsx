import { Dropdown, DropdownItem } from '@/components/Dropdown';
import { getAuthServerSideProps } from '@/server/common/get-auth-server-side-props';
import { AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';
import Link from '@/components/Link';
import { GetServerSideProps } from 'next/types';

export default function Index() {
  return (
    <>
      <div>Home</div>
      <Dropdown
        trigger={
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Button text
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = (context) => getAuthServerSideProps(context);
