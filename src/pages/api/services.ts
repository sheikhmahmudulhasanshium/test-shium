import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../../data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // DDoS Protection: Only allow GET requests. Block everything else.
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  res.status(200).json({ services });
};

export default handler;