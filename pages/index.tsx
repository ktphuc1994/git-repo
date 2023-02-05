// import type and interface
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// import local components
import Layout from '../core/HOC/Layout';
import HomePage from '../core/components/Home/HomePage';

const Home: NextPageWithLayout = () => <HomePage />;

Home.getLayout = (page: ReactElement) => (
  <Layout title="My repositories" description="Testing Github API with NextJS">
    {page}
  </Layout>
);

export default Home;
