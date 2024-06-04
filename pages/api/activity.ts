import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const activity = {
      tb: [
        {
          title: "",
          imgUrl: "",
          jumpUrl: "",
          weAppUrl: ""
        }
      ],
      jd: [
        {
          title: "",
          imgUrl: "",
          jumpUrl: "",
          weAppUrl: ""
        }
      ],
      pdd: [
        {
          title: "",
          imgUrl: "",
          jumpUrl: "",
          weAppUrl: ""
        }
      ],
      mt: [
        {
          title: "",
          imgUrl: "",
          jumpUrl: "",
          weAppUrl: ""
        }
      ]
    }
    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '失败，请重试 ~' });
  }
}