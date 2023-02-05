import axios from 'axios';
import { localServ } from './localServ';

const fineGrainToken =
  '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';

const AXIOS_INSTANCE_GENERATOR = (URL: string, etag?: string) => {
  const config = {
    baseURL: URL,
    headers: {
      Authorization: 'BEARER ' + fineGrainToken,
      'If-None-Match': etag ? etag : '',
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
