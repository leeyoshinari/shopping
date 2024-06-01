import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.query);
    const response = await fetch(decodeURIComponent(req.query.url));
    const data = await response.json();
    console.log(data);
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '无法转发请求' });
  }
}