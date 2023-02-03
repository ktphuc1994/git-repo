import axios from 'axios';

const AXIOS_INSTANCE_GENERATOR = (URL: string) => {
  const config = {
    baseURL: URL,
    headers: {
      Authorization: 'BEARER ' + process.env.NEXT_PUBLIC_FINE_GRAIN_TOKEN,
    },
  };
  console.log(config);
  return axios.create(config);
};

export { AXIOS_INSTANCE_GENERATOR };
