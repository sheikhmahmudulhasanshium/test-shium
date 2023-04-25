/*// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
*/

import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../../data";
export default (req:NextApiRequest, res:NextApiResponse)=>{
  //by default get requets
  console.log(services)
  res.status(200).json({services})
}