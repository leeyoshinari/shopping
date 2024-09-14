import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const activity = {
      tb: [{
          title: "99百亿盛典-主会场",
          imgUrl: "https://img.alicdn.com/imgextra/i3/O1CN01FDVStm1ViEoq2NuJy_!!6000000002686-0-tps-800-450.jpg",
          jumpUrl: "https://s.click.taobao.com/NZPyoVt",
          weAppUrl: "",
          expire: 1726070389000
        },{
          title: "淘工厂 3元3件",
          imgUrl: "/img/tb_tgc.png",
          jumpUrl: "https://s.click.taobao.com/ZSCO0kt",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "天猫优选 大牌试用",
          imgUrl: "/img/tb_sy.png",
          jumpUrl: "https://s.click.taobao.com/b5ssekt",
          weAppUrl: "",
          expire: 1743695437000
        },{
          title: "天猫服饰-奥莱清仓1折起",
          imgUrl: "/img/tm_al.png",
          jumpUrl: "https://s.click.taobao.com/m91C0kt",
          weAppUrl: "",
          expire: 1743695437000
        },{
          title: "天猫超市优惠",
          imgUrl: "/img/tm_market.jpg",
          jumpUrl: "https://s.click.taobao.com/20BP0kt",
          weAppUrl: "",
          expire: 1743695437000
        },{
          title: "飞猪旅行-天天特惠",
          imgUrl: "/img/fz_all.jpg",
          jumpUrl: "https://s.click.taobao.com/e410fkt",
          weAppUrl: "",
          expire: 1743695437000
        },{
          title: "飞猪特价门票",
          imgUrl: "/img/fz_mp.jpg",
          jumpUrl: "https://s.click.taobao.com/4vA0ekt",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "飞猪酒店特惠",
          imgUrl: "/img/fz_hotal.png",
          jumpUrl: "https://s.click.taobao.com/vEpLzjt",
          weAppUrl: "",
          expire: 1735642837000
        }
      ],
      jd: [{
          title: "2024年618京享红包活动",
          imgUrl: "https://gw.alicdn.com/imgextra/i1/O1CN01U5E4pn1rMBGD1Now3_!!6000000005616-0-tps-800-450.jpg",
          jumpUrl: "https://u.jd.com/xbRQCrn",
          weAppUrl: "",
          expire: 1718725837000
        },{
          title: "京东秒杀",
          imgUrl: "/img/jd_flash_sale.webp",
          jumpUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BANYJK1olXDYDZBoCUBVIMzZNXhpXVhgcDwYCXhxDXHBTTkRHA1ocDBsJVEVTbT9aXjVUUUJdDAACFBtFRjdPQx5dSkJdDAACZgpHVTtmQw4ZXgcCV1ptTyh1SgZtbDt3JU5iUxdUfy9iUDZMa1cZbQMCVV9fC0MXC2o4G1oUXgACV1xVCnsnA2w4UDUUbQQDVVxYC00SAGc4G10VWwAGUVxfDE8XB18PG1IlAF1QVFpdCkgQbTM4K2sWbQECXUpbegpFF2l6K2sWXTYBZG5fCUoTCl84K2sl",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "京东百亿农产品补贴",
          imgUrl: "/img/jd_subsidy_nong.jpg",
          jumpUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAOkJK1olXDYDZBoCUBVIMzZNXhpXVhgcFR0DFxcIWDoXSQVJQ1pSCQNDWBlSWyhcBVkSO05_DhsYSg9oCxhhewl1OX9-E14YDjFWZTsWQwRACU8dDRsBVUVEUzxcRilMDVldAANRTQ5SB19eQgZuAnlFBz1ZajhpeTp0Ul1yD1lUWFJtDUsWAm0LE1sdWDYCVV9eDksUAWcKK2sVXjZJOl9tCkoWAWoLHV4WVTYCUl1ZDkwXAG0NGVoSbQECXW4AUxkXB28KGFx7ATYyZF1tD0seF2l6WgkBW3QyZFxtC3snAW4JH1IlbTYyZA",
          weAppUrl: "",
          expire: 1735649837000
        }
      ],
      pdd: [{
          title: "百亿补贴",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6d8e20ccc033104197541a05c1e0bd94&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "",
          expire: 2735642837000
        },{
          title: "千万补贴",
          imgUrl: "/img/pdd_qwbt.png",
          jumpUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_053a6b42227ced719f7098feab2468b9&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "",
          expire: 2735642837000
        },{
          title: "限时秒杀",
          imgUrl: "/img/pdd_xsms.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=4&pid=15084399_190061927&cpsSign=CE_240908_15084399_190061927_dd76076561ab1f9db0267ac2cee55ab7&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "",
          expire: 2735642837000
        },{
          title: "领券中心",
          imgUrl: "/img/pdd_voucher.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "",
          expire: 2735642837000
        }
      ],
      wph: [{
          title: "每日超值低价",
          imgUrl: "/img/wph_low_price.webp",
          jumpUrl: "https://t.vip.com/LHNY7PsXkR6",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "3折疯抢",
          imgUrl: "/img/wph_qiang.jpg",
          jumpUrl: "https://t.vip.com/6q1Yt593LqA?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "唯品快抢",
          imgUrl: "/img/wph_kq.png",
          jumpUrl: "https://t.vip.com/N7CVJWu9sl9?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "",
          expire: 1735642837000
        }
      ],
      mt: [{
          title: "天天领美团外卖红包",
          imgUrl: "/img/mt_wm.jpg",
          jumpUrl: "http://dpurl.cn/3846xJqz",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "美团外卖超值券包",
          imgUrl: "/img/mt_voucher.jpg",
          jumpUrl: "http://dpurl.cn/isKuO66z",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "美团爆款鲜花3折起",
          imgUrl: "/img/mt_xh.png",
          jumpUrl: "http://dpurl.cn/qGPlYwqz",
          weAppUrl: "",
          expire: 1735649837000
        },{
          title: "商超果蔬红包天天领",
          imgUrl: "/img/mt_cs.jpeg",
          jumpUrl: "hhttp://dpurl.cn/W7OqL6yz",
          weAppUrl: "",
          expire: 1735649837000
        },{
          title: "美团买药健康爆品",
          imgUrl: "/img/mt_yao.jpg",
          jumpUrl: "http://dpurl.cn/rQ430jvz",
          weAppUrl: "",
          expire: 1735649837000
        },{
          title: "美团电商购物红包",
          imgUrl: "/img/mt_ds.jpg",
          jumpUrl: "http://dpurl.cn/y584BXWz",
          weAppUrl: "",
          expire: 1735642837000
        }
      ],
      ele: [{
          title: "饿了么天天领红包",
          imgUrl: "/img/ele_redpackage.png",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021004134685665%2Fpages%2Ftaoke-guide%2Findex%3Fscene%3D05c5bcaad8a4419e849c8b7cfd6d692e",
          weAppUrl: "",
          expire: 1735659837000
      },{
          title: "饿了么 24城消费日专享",
          imgUrl: "/img/ele_city.jpg",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021003183669766%2Fpages%2Fwh-coupon-guide%2Findex%3Fscene%3D0ccac9ad4f2442d9956fe8760baf1641",
          weAppUrl: "",
          expire: 1735659837000
      }],
      dd: [{
          title: "滴滴出行优惠券",
          imgUrl: "/img/dd_redpackage.jpg",
          jumpUrl: "https://v.didi.cn/eoQRvjW?source_id=100001000946181",
          weAppUrl: "/pages/index/index?scene=mxZ1qYD&source_id=100001000946181",
          expire: 1738338237000
      },{
          title: "滴滴网约车",
          imgUrl: "/img/dd_100.png",
          jumpUrl: "https://vv.didi.cn/v6n80MW?source_id=100001000946181",
          weAppUrl: "/webx/entry/block-prevention?scene=bEr671z&source_id=100001000946181",
          expire: 1735659837000
      },{
          title: "【滴滴】代驾100元券包",
          imgUrl: "/img/dd_dj100.jpg",
          jumpUrl: "https://v.didi.cn/nxZLj0D?source_id=100001000946181",
          weAppUrl: "/pages/index/index?scene=vKbjd9r&source_id=100001000946181",
          expire: 1735659837000
      }],
      cy: [{
          title: "瑞幸咖啡",
          imgUrl: "/img/hjk_ruixing.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=rx",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=rx",
          expire: 1735659837000
      },{
          title: "奈雪的茶",
          imgUrl: "/img/hjk_naixue.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=nx",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=nx",
          expire: 1735659837000
      },{
          title: "喜茶",
          imgUrl: "/img/hjk_xicha.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=10",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=10",
          expire: 1735659837000
      },{
          title: "星巴克",
          imgUrl: "/img/hjk_xingbake.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=xbk",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=xbk",
          expire: 1735659837000
      },{
          title: "麦当劳",
          imgUrl: "/img/hjk_maidanglao.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=mdl",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=mdl",
          expire: 1735659837000
      },{
          title: "肯德基",
          imgUrl: "/img/hjk_kfc.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=kfc",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=kfc",
          expire: 1735659837000
      },{
          title: "必胜客",
          imgUrl: "/img/hjk_bishengke.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=bsk",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=bsk",
          expire: 1735659837000
      },{
          title: "华莱士",
          imgUrl: "/img/hjk_hualaishi.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=1",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=1",
          expire: 1735659837000
      },{
          title: "汉堡王",
          imgUrl: "/img/hjk_hanbaowang.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=7",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=7",
          expire: 1735659837000
      },{
          title: "百果园",
          imgUrl: "/img/hjk_baiguoyuan.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=8",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=8",
          expire: 1735659837000
      }],
      qt: [{
          title: "折扣电影票",
          imgUrl: "/img/hjk_movie.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=1",
          weAppUrl: "plugin-private://wx459759608c80cf98/pages/index?movieapikey=25ee321ae0f7f9be&movieuid=myxq_28931&moviekefu=/pages/service/service",
          expire: 1735659837000
      },{
          title: "折扣充值",
          imgUrl: "/img/hjk_huafei.jpg",
          jumpUrl: "https://myxq8.kuaizhan.com/0/59/p880289478292b1?mid=28931&uid=myxq_28931",
          weAppUrl: "plugin-private://wx92eb6fb9f1218f37/pages/index/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&index=/pages/index/index",
          expire: 1735659837000
      },{
          title: "特惠寄快递",
          imgUrl: "/img/hjk_kuaidi.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=15",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=15",
          expire: 1735659837000
      },{
          title: "鲜花配送",
          imgUrl: "/img/hjk_xianhua.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=2",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=2",
          expire: 1735659837000
      }]
    }
    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '失败，请重试 ~' });
  }
}