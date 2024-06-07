import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const activity = {
      tb: [
        {
          title: "618超级红包会场",
          imgUrl: "https://gw.alicdn.com/imgextra/i1/O1CN01U5E4pn1rMBGD1Now3_!!6000000005616-0-tps-800-450.jpg",
          jumpUrl: "https://s.click.taobao.com/UmWVElt",
          weAppUrl: ""
        },
        {
          title: "淘工厂 3元3件",
          imgUrl: "/img/tb_tgc.png",
          jumpUrl: "https://s.click.taobao.com/nNZOakt",
          weAppUrl: ""
        },
        {
          title: "天猫超市优惠",
          imgUrl: "/img/tm_market.jpg",
          jumpUrl: "https://s.click.taobao.com/usATElt",
          weAppUrl: ""
        }
      ],
      jd: [
        {
          title: "2024年618京享红包活动",
          imgUrl: "https://gw.alicdn.com/imgextra/i1/O1CN01U5E4pn1rMBGD1Now3_!!6000000005616-0-tps-800-450.jpg",
          jumpUrl: "https://u.jd.com/xbRQCrn",
          weAppUrl: ""
        },
        {
          title: "京东秒杀",
          imgUrl: "/img/jd_flash_sale.webp",
          jumpUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BANYJK1olXDYDZBoCUBVIMzZNXhpXVhgcDwYCXhxDXHBTTkRHA1ocDBsJVEVTbT9aXjVUUUJdDAACFBtFRjdPQx5dSkJdDAACZgpHVTtmQw4ZXgcCV1ptTyh1SgZtbDt3JU5iUxdUfy9iUDZMa1cZbQMCVV9fC0MXC2o4G1oUXgACV1xVCnsnA2w4UDUUbQQDVVxYC00SAGc4G10VWwAGUVxfDE8XB18PG1IlAF1QVFpdCkgQbTM4K2sWbQECXUpbegpFF2l6K2sWXTYBZG5fCUoTCl84K2sl",
          weAppUrl: ""
        },
        {
          title: "京喜秒杀",
          imgUrl: "/img/jd_flash_sale.webp",
          jumpUrl: "https://u.jd.com/xzRaVUU",
          weAppUrl: ""
        },
      ],
      pdd: [
        {
          title: "百亿补贴",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6d8e20ccc033104197541a05c1e0bd94&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: ""
        },
        {
          title: "领券中心",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: ""
        },
        {
          title: "千万补贴",
          imgUrl: "/img/pdd_qwbt.png",
          jumpUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_053a6b42227ced719f7098feab2468b9&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: ""
        }
      ],
      wph: [],
      mt: [
        {
          title: "天天领美团外卖红包",
          imgUrl: "/img/mt_wm.jpg",
          jumpUrl: "http://dpurl.cn/YS7cr6Jz",
          weAppUrl: ""
        },
        {
          title: "美团外卖品质优惠",
          imgUrl: "/img/mt_ms.jpg",
          jumpUrl: "http://dpurl.cn/Mp3xuPvz",
          weAppUrl: ""
        },
        {
          title: "美团超市便利店红包",
          imgUrl: "/img/mt_cs.jpg",
          jumpUrl: "http://dpurl.cn/epGbq6pz",
          weAppUrl: ""
        },
        {
          title: "美团电商购物红包",
          imgUrl: "/img/mt_ds.jpg",
          jumpUrl: "http://dpurl.cn/qTjNvR2z",
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