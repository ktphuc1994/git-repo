// import AXIOS
import { AXIOS_INSTANCE_GENERATOR, AXIOS_LOCAL_INSTANCE } from './configURL';

// import local const
import { URL_CONST } from '../constants/url.const';
import { InterfaceRepo } from '../interfaces/git';
import { LocalUserType } from '../../pages/api/user';

const USER_SERV = {
  getAuthUserInfo: async () => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      URL_CONST.GIT_AUTH_USER
    ).get('/');
    return data;
  },
  getAuthUserRepo: async (): Promise<InterfaceRepo[]> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      URL_CONST.GIT_AUTH_USER
    ).get('/repos');
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
  getLocalUserInfo: async (): Promise<LocalUserType> => {
    const { data } = await AXIOS_LOCAL_INSTANCE('/api').get('/user');
    return data;
  },
};

export default USER_SERV;
