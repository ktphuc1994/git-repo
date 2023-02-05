import type { NextApiRequest, NextApiResponse } from 'next';
import { apiHandler } from '../../../helpers/api/api-handler';

// import local interface
import { InterfaceLocalUser } from '../../../core/interfaces/user';

// import mock data
import { userData } from '../../../data';

const getUser = (
  req: NextApiRequest,
  res: NextApiResponse<InterfaceLocalUser>
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(403).end('Unathorized. Please login to continue.');
    return;
  }

  const userInfo: InterfaceLocalUser = JSON.parse(authorization);
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
