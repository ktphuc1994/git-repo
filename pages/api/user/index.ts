import type { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../helpers/api/api-handler';

export type LocalUserType = {
  username: string;
  email: string;
  password: string;
};
export const userData = [
  {
    username: 'ktphuc',
    email: 'khucthienphuc@gmail.com',
    password: 'ktphuc1994',
  },
  { username: 'iamuser', email: 'iamuser@gmail.com', password: 'iamuser' },
  { username: 'testing', email: 'test@gmail.com', password: 'test123' },
];

const getUser = (req: NextApiRequest, res: NextApiResponse<LocalUserType>) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(403).end('Unathorized. Please login to continue.');
    return;
  }

  const userInfo: LocalUserType = JSON.parse(authorization);
  const user = userData.find((u) => u.username === userInfo.username);
  if (!user) {
    res
      .status(404)
      .end('Unathorized. User not match. Please login again to continue.');
    return;
  }

  res.status(200).json(user);
};

export default apiHandler({
  get: getUser,
});
