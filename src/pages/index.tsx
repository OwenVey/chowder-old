import { getAuthServerSideProps } from '@/server/common/get-auth-server-side-props';
import { GetServerSideProps } from 'next/types';

export default function Index() {
  return (
    <>
      <div>Home</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = (context) => getAuthServerSideProps(context);
