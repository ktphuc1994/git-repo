import { useEffect } from 'react';
import Router from 'next/router';

// import SWR
import useSWR from 'swr';

// import local service
import { localServ } from '../services/localServ';
import USER_SERV from '../services/userServ';

// import type and interface
import { AxiosError } from 'axios';
import { InterfaceLocalUser } from '../interfaces/user';

export default function useUser({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  const {
    data: user,
    mutate: mutateUser,
    error,
  } = useSWR<InterfaceLocalUser>('local-user', USER_SERV.getLocalUserInfo, {
    onErrorRetry: (err: AxiosError) => {
      // console.log(err);
      const errStatus = err.response?.status;
      if (errStatus === 404 || errStatus === 403) return;
    },
    refreshInterval: 1000 * 60 * 60,
  });

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    if (!redirectTo) return;

    if (
      // If redirectTo is set, redirect if error is 403 or 404.
      redirectTo &&
      error instanceof AxiosError
    ) {
      const errorStatus = error.response?.status;
      if (errorStatus === 404 || errorStatus === 403) {
        localServ.removeToken();
        Router.push(redirectTo);
      }
      return;
    }

    if (
      // If redirectIfFound is also set, redirect if the user was found
      redirectIfFound &&
      user
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo, error]);

  return { user, mutateUser };
}
