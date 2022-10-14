import { getAuthServerSideProps } from '@/server/common/get-auth-server-side-props';
import { GetServerSideProps } from 'next/types';

export default function Recipes() {
  return <div>Recipes</div>;
}

export const getServerSideProps: GetServerSideProps = (context) => getAuthServerSideProps(context);
