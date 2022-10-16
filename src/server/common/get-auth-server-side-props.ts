import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerAuthSession } from './get-server-auth-session';

export const checkValidSession = async (context: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
};

export const getAuthServerSideProps: GetServerSideProps = async (context) => {
  const session = checkValidSession(context);

  return {
    props: {
      session,
      query: context.query,
    },
  };
};
