import axios from 'axios';
import { localServ } from './localServ';

const AXIOS_INSTANCE_GENERATOR = (URL: string) => {
  const config = {
    baseURL: URL,
    headers: {
      Authorization: 'BEARER ' + process.env.NEXT_PUBLIC_FINE_GRAIN_TOKEN,
    },
  };
  return axios.create(config);
};

const AXIOS_LOCAL_INSTANCE = (URL: string) => {
  const token = localServ.getToken();
  const config = {
    baseURL: URL,
    headers: {
      Authorization: token,
    },
  };
  return axios.create(config);
};

export { AXIOS_INSTANCE_GENERATOR, AXIOS_LOCAL_INSTANCE };
