import { getAuthServerSideProps } from '@/server/common/get-auth-server-side-props';
import { GetServerSideProps } from 'next/types';

export default function Groceries() {
  return <div>Groceries</div>;
}

export const getServerSideProps: GetServerSideProps = (context) => getAuthServerSideProps(context);
