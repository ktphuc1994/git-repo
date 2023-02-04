import { useRouter } from 'next/router';

// import local context
import { useAuthContext } from '../core/context/authContext';

// import type and interface
import { ReactElement, useEffect } from 'react';
import type { NextPageWithLayout } from './_app';
import { InterfaceAuthContext } from '../core/interfaces/commons';

// import local components
import Layout from '../core/HOC/Layout';
import HomePage from '../core/components/Home/HomePage';

const Home: NextPageWithLayout = () => {
  // const router = useRouter();
  // const { authToken } = useAuthContext() as InterfaceAuthContext;

  // useEffect(() => {
  //   if (!authToken) {
  //     router.push('/login');
  //   }
  // }, []);
  return <HomePage />;
};

Home.getLayout = (page: ReactElement) => (
  <Layout title="My Profile" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default Home;
