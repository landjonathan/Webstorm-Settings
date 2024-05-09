import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return res.status(201).json({})
    case 'GET':
      return res.status(200).json({})
    default:
      return res.status(405).send('Error: Method not allowed')
  }
}