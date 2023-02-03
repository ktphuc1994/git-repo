// import AXIOS
import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local const
import { URL_CONST } from '../constants/url.const';
import { InterfaceRepo } from '../interfaces/git';

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
};

export default USER_SERV;
