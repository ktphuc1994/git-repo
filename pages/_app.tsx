import '../styles/globals.css';
import { Fragment, ReactElement, ReactNode } from 'react';

// import types
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

// import local context
import { RepoProvider } from '../core/context/repoContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RepoProvider>
      <Fragment>{getLayout(<Component {...pageProps} />)}</Fragment>
    </RepoProvider>
  );
}

export default MyApp;
