import type { NextApiRequest, NextApiResponse } from 'next';

type handlerType = {
  [method: string]: (req: NextApiRequest, res: NextApiResponse) => void;
};

const apiHandler =
  (handler: handlerType) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method?.toLowerCase();

    // check handler supports HTTP method
    if (!method || !handler[method])
      return res.status(405).end(`Method ${req.method} Not Allowed`);

    handler[method](req, res);
  };

export { apiHandler };
