// import type
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// import local context
import { useRepoContext } from '../core/context/repoContext';

// import local components
import Layout from '../core/HOC/Layout';
import RepoEmpty from '../core/components/RepoDetail/RepoEmpty';

// import local interface
import { InterfaceRepoContext } from '../core/interfaces/git';
import Details from '../core/components/RepoDetail';

const RepoDetail: NextPageWithLayout = () => {
  const { repo } = useRepoContext() as InterfaceRepoContext;

  return (
    <>
      <h2 className="mb-5 text-center text-3xl font-bold">
        REPOSITORY DETAILS
      </h2>
      {!repo ? <RepoEmpty /> : <Details repo={repo} />}
    </>
  );
};

RepoDetail.getLayout = (page: ReactElement) => (
  <Layout title="My Profile" description="A simple profile coded with NextJS">
    {page}
  </Layout>
);

export default RepoDetail;
