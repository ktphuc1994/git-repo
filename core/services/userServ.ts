// import AXIOS
import { AXIOS_INSTANCE_GENERATOR, AXIOS_LOCAL_INSTANCE } from './configURL';

// import local interface
import { InterfaceRepo } from '../interfaces/git';
import { InterfaceLocalUser } from '../interfaces/user';

// import local const
import { URL_CONST } from '../constants/url.const';
import { Dispatch, SetStateAction } from 'react';

const USER_SERV = {
  getAuthUserInfo: async () => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      URL_CONST.GIT_AUTH_USER
    ).get('/');
    return data;
  },
  getAuthUserRepo: async (
    gitEtag: string,
    setGitEtag: Dispatch<SetStateAction<string>>
  ): Promise<InterfaceRepo[]> => {
    const { data, headers } = await AXIOS_INSTANCE_GENERATOR(
      URL_CONST.GIT_AUTH_USER,
      gitEtag
    ).get('/repos');
    const etag: string | undefined = headers.etag;
    setGitEtag(etag ? etag : '');
    return data;
  },
  login: async (loginInfo: {
    email: string;
    password: string;
  }): Promise<{ token: string }> => {
    const { data } = await AXIOS_LOCAL_INSTANCE('/api/auth').post(
      '/login',
      loginInfo
    );
    return data;
  },
  getLocalUserInfo: async (): Promise<InterfaceLocalUser> => {
    const { data } = await AXIOS_LOCAL_INSTANCE('/api').get('/user');
    return data;
  },
};

export default USER_SERV;
