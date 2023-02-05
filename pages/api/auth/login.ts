import type { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../helpers/api/api-handler';

// import mock data
import { userData } from '../../../data';

type ReqData = {
  email: string;
  password: string;
};
type ResData = {
  token: string;
};

const login = (req: NextApiRequest, res: NextApiResponse<ResData>) => {
  const loginInfo: ReqData = req.body;
  const authUser = userData.find(
    (user) =>
      user.email === loginInfo.email && user.password === loginInfo.password
  );
  if (!authUser) {
    res.status(404).end('Email or password is incorrect');
    return;
  }
  res.status(200).json({ token: JSON.stringify(authUser) });
};

export default apiHandler({
  post: login,
});
