import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
    if (!url) {
      return res.status(400).json({ error: 'URL 参数是必须的' });
    }
    const response = await fetch(decodeURIComponent(url));
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '无法转发请求' });
  }
}