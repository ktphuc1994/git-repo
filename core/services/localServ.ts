import { localStoreConst } from '../constants/localStore.const';

export const localServ = {
  getToken: () => {
    const token = localStorage.getItem(localStoreConst.AUTH_TOKEN);
    return token;
  },
  setToken: (token: string) => {
    localStorage.setItem(localStoreConst.AUTH_TOKEN, token);
  },
  removeToken: () => {
    localStorage.removeItem(localStoreConst.AUTH_TOKEN);
  },
};
