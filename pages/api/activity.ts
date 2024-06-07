import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const activity = {
      tb: [
        {
          title: "618超级红包会场",
          imgUrl: "https://gw.alicdn.com/imgextra/i1/O1CN01U5E4pn1rMBGD1Now3_!!6000000005616-0-tps-800-450.jpg",
          jumpUrl: "taobao://s.click.taobao.com/UmWVElt",
          weAppUrl: ""
        },
        {
          title: "淘工厂 3元3件",
          imgUrl: "/img/tb_tgc.png",
          jumpUrl: "taobao://s.click.taobao.com/nNZOakt",
          weAppUrl: ""
        },
        {
          title: "天猫超市优惠",
          imgUrl: "/img/tm_market.jpg",
          jumpUrl: "taobao://s.click.taobao.com/usATElt",
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
          title: "百亿补贴",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "pinduoduo://mobile.yangkeduo.com/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6aed697eb09f85b071b543299b7c128c&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: ""
        },
        {
          title: "领券中心",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "pinduoduo://mobile.yangkeduo.com/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: ""
        },
        {
          title: "千万补贴",
          imgUrl: "/img/pdd_qwbt.png",
          jumpUrl: "pinduoduo://mobile.yangkeduo.com/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_a2a5e953414d1cab9000fb5151544e57&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
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