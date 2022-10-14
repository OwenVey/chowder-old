import { GetServerSideProps } from 'next';
import { getServerAuthSession } from './get-server-auth-session';

export const getAuthServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      query: context.query,
    },
  };
};
