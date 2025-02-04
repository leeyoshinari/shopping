import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const activity = {
      tb: [{
          title: "双11超级红包主会场",
          imgUrl: "https://gw.alicdn.com/imgextra/i2/O1CN015vNMih1blnbTZP07Y_!!6000000003506-0-tps-800-450.jpg",
          jumpUrl: "https://s.click.taobao.com/gE07ONt",
          weAppUrl: "",
          expire: 1731340792000
        },{
          title: "领券中心",
          imgUrl: "https://gw.alicdn.com/imgextra/i4/O1CN01qpP0oq1quFAy6UhA0_!!6000000005555-0-tps-800-450.jpg",
          jumpUrl: "https://s.click.taobao.com/7wvICrs",
          weAppUrl: "",
          expire: 1764299383000
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
          jumpUrl: "https://s.click.taobao.com/4JSvPss",
          weAppUrl: "",
          expire: 1764299383000
        },{
          title: "飞猪旅行-天天特惠",
          imgUrl: "/img/fz_all.jpg",
          jumpUrl: "https://s.click.taobao.com/Bj1yBrs",
          weAppUrl: "",
          expire: 1764299383000
        },{
          title: "飞猪特价门票",
          imgUrl: "/img/fz_mp.jpg",
          jumpUrl: "https://s.click.taobao.com/4vA0ekt",
          weAppUrl: "",
          expire: 1735642837000
        },{
          title: "飞猪酒店特惠",
          imgUrl: "/img/fz_hotal.png",
          jumpUrl: "https://s.click.taobao.com/rGrwBrs",
          weAppUrl: "",
          expire: 1764299383000
        }
      ],
      jd: [{
          title: "2024年11.11京享红包活动",
          imgUrl: "https://gw.alicdn.com/imgextra/i1/O1CN01U5E4pn1rMBGD1Now3_!!6000000005616-0-tps-800-450.jpg",
          jumpUrl: "https://u.jd.com/CDFyRyk",
          weAppUrl: "https://u.jd.com/CDFyRyk",
          expire: 1731340792000
        },{
          title: "京东秒杀",
          imgUrl: "/img/jd_flash_sale.webp",
          jumpUrl: "https://u.jd.com/zrPRXtW",
          weAppUrl: "https://u.jd.com/zrPRXtW",
          expire: 1743563383000
        },{
          title: "京东百亿农产品补贴",
          imgUrl: "/img/jd_subsidy_nong.jpg",
          jumpUrl: "https://u.jd.com/z6PDE2h",
          weAppUrl: "https://u.jd.com/z6PDE2h",
          expire: 1743563383000
        }
      ],
      pdd: [{
          title: "11·11大促",
          imgUrl: "https://t16img.yangkeduo.com/pdd_oms/2024-10-12/8f707294e3b6cba554183e8df972e7d5.png",
          jumpUrl: "/attendance.html?type=1&id=199954&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&pid=15084399_190061839&_x_ddjb_dmn=%7B%22cpsSign%22%3A%22CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7%22%2C%22id%22%3A%22199954%22%2C%22type%22%3A%221%22%7D&cpsSign=CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7&_x_ddjb_act=%7B%22st%22%3A%223%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_",
          weAppUrl: "/attendance.html?type=1&id=199954&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&pid=15084399_190061839&_x_ddjb_dmn=%7B%22cpsSign%22%3A%22CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7%22%2C%22id%22%3A%22199954%22%2C%22type%22%3A%221%22%7D&cpsSign=CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7&_x_ddjb_act=%7B%22st%22%3A%223%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_",
          expire: 1731340792000
        },{
          title: "百亿补贴",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6d8e20ccc033104197541a05c1e0bd94&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6d8e20ccc033104197541a05c1e0bd94&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          title: "千万补贴",
          imgUrl: "/img/pdd_qwbt.png",
          jumpUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_053a6b42227ced719f7098feab2468b9&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_053a6b42227ced719f7098feab2468b9&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          title: "限时秒杀",
          imgUrl: "/img/pdd_xsms.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=4&pid=15084399_190061927&cpsSign=CE_240908_15084399_190061927_dd76076561ab1f9db0267ac2cee55ab7&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=4&pid=15084399_190061927&cpsSign=CE_240908_15084399_190061927_dd76076561ab1f9db0267ac2cee55ab7&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          title: "领券中心",
          imgUrl: "/img/pdd_voucher.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        }
      ],
      wph: [{
          title: "11.11特卖狂欢节超级红包",
          imgUrl: "http://ms.vpimg1.com/upload/actpics/cps/0/2024/10/11/140/60x4831axr2begl.jpg",
          jumpUrl: "https://t.vip.com/rl1m2t",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252FUYRxhGHdshVvag0436SNMQ.php%253Fwapid%253Dmst_100136497%2526_src%253Dmst%2526extra_banner%253D0%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu0600005dknnru9kzgwlz7f5c&chl_type=wxk",
          expire: 1731340792000
        },{
          title: "每日超值低价",
          imgUrl: "/img/wph_low_price.webp",
          jumpUrl: "https://t.vip.com/2FpMvccdl59?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252FO-wSpmRJ3xdDUtB39vLuTg.php%253Fwapid%253Dmst_100126749%2526_src%253Dmst%2526extra_banner%253D115126749%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000wtlmziwzoe5ssiyuyd&chl_type=wxk",
          expire: 1751987383000
        },{
          title: "3折疯抢",
          imgUrl: "/img/wph_qiang.jpg",
          jumpUrl: "https://t.vip.com/U3bc5Ef2MP9?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252FDAFYkbX9rT9ZrU-uW_ylnw.php%253Fwapid%253Dmst_100114375%2526_src%253Dmst%2526extra_banner%253D115114375%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000drv8r27o5z27ixbath&chl_type=wxk",
          expire: 1764529783000
        },{
          title: "唯品快抢",
          imgUrl: "/img/wph_kq.png",
          jumpUrl: "https://t.vip.com/N7CVJWu9sl9?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252F27Pzw99-SzJDKCFI8NooXQ.php%253Fwapid%253Dmst_100048881%2526_src%253Dmst%2526extra_banner%253D115048881%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide%2526nmsns%253Dshop_iphone-7.60.1-link%2526nst%253Dsubject%2526nsbc%253D%2526nct%253Dlink%2526ncid%253Df931935d51a7563e78f29f518b607deb16c0ce17%2526nabtid%253D5bbc01d7a130404a6260dd533954b23d%2526nuid%253DNDkzOTIwODE3%2526nchl_param%253Dshare%253Af931935d51a7563e78f29f518b607deb16c0ce17%253A1640764250&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu0600009z6k9axv5rpdhxw5qb&chl_type=wxk",
          expire: 1764529783000
        }
      ],
      mt: [{
          title: "天天领美团外卖红包",
          imgUrl: "/img/mt_wm.jpg",
          jumpUrl: "http://dpurl.cn/RDp9Xkuz",
          weAppUrl: "https://market.waimai.meituan.com/gd/single.html?el_biz=waimai&el_page=gundam.loader&gundam_id=2KAWnD&activity_id=380797&utm_source=60413&utm_medium=weixin_mp&utm_campaign=other&utm_content=1624050432672469040_7&utm_term=&channel=union&mt_id=ho15Le-Rd&mt_key=1681ca2fae8a7d4161b6d731aa6f876b&click_cps_url=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3Dm90i875zfw1e",
          expire: 1767193783000
        },{
          title: "美团外卖超值券包",
          imgUrl: "/img/mt_voucher.jpg",
          jumpUrl: "http://dpurl.cn/l1GjaKcz",
          weAppUrl: "https://market.waimai.meituan.com/gd2/wm/IBA0CO?el_biz=waimai&el_page=gundam.loader&gundam_id=IBA0CO&tenant=gundam&isMultiTab=true&utm_source=60413&utm_medium=weixin_mp&utm_campaign=other&utm_content=1624050432672469040_26&utm_term=&channel=union&mt_id=ho15Le-Rd&mt_key=1681ca2fae8a7d4161b6d731aa6f876b&click_cps_url=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DHFgt875z-KHF",
          expire: 1767193783000
        },{
          title: "美团爆款鲜花3折起",
          imgUrl: "/img/mt_xh.png",
          jumpUrl: "http://dpurl.cn/gyBrqMgz",
          weAppUrl: "https://market.waimai.meituan.com/gd2/wm/43XqV7?el_biz=waimai&el_page=gundam.loader&gundam_id=43XqV7&tenant=gundam&onHideRemain=true&isMultiTab=true&g_source=sg_BGuVBdpA&utm_source=60413&utm_medium=weixin_mp&utm_campaign=other&utm_content=1624050432672469040_272&utm_term=&channel=union&mt_id=ho15Le-Rd&mt_key=1681ca2fae8a7d4161b6d731aa6f876b&click_cps_url=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3Dcm3U875z_FyU",
          expire: 1767193783000
        },{
          title: "商超果蔬红包天天领",
          imgUrl: "/img/mt_cs.jpeg",
          jumpUrl: "http://dpurl.cn/N31mzzcz",
          weAppUrl: "https://market.waimai.meituan.com/gd2/wm/rCFbdO?el_biz=waimai&el_page=gundam.loader&gundam_id=rCFbdO&tenant=gundam&onHideRemain=true&isMultiTab=true&g_source=sg_VQaDcIKU&utm_source=60413&utm_medium=weixin_mp&utm_campaign=other&utm_content=1624050432672469040_273&utm_term=&channel=union&mt_id=ho15Le-Rd&mt_key=1681ca2fae8a7d4161b6d731aa6f876b&click_cps_url=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DCSnUhb5zlVF3",
          expire: 1767193783000
        },{
          title: "美团买药健康爆品",
          imgUrl: "/img/mt_yao.jpg",
          jumpUrl: "http://dpurl.cn/rQ430jvz",
          weAppUrl: "https://market.waimai.meituan.com/gd2/wm/4mFyYu?el_biz=waimai&el_page=gundam.loader&gundam_id=4mFyYu&tenant=gundam&isMultiTab=true&utm_source=60413&utm_medium=weixin_mp&utm_campaign=other&utm_content=1624050432672469040_302&utm_term=&channel=union&mt_id=ho15Le-Rd&mt_key=1681ca2fae8a7d4161b6d731aa6f876b&click_cps_url=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DMxLXhb5zWGI0",
          expire: 1735649837000
        },{
          title: "美团电商购物红包",
          imgUrl: "/img/mt_ds.jpg",
          jumpUrl: "http://dpurl.cn/y584BXWz",
          weAppUrl: "https://market.waimai.meituan.com/gd/single.html?el_biz=waimai&el_page=gundam.loader&tenant=gundam&gundam_id=2nC5Vb&boot_id=g_source_2922&utm_source=60413&utm_medium=weixin_mp&utm_campaign=other&utm_content=1624050432672469040_19&utm_term=&channel=&click_cps_url=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D4%26c%3D2%26p%3De20h875zN9pm",
          expire: 1735642837000
        }
      ],
      ele: [{
          title: "饿了么天天领红包",
          imgUrl: "/img/ele_redpackage.png",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021004134685665%2Fpages%2Ftaoke-guide%2Findex%3Fscene%3D8b81253451dc4e4484d46ebc039a8306",
          weAppUrl: "commercialize/pages/taoke-guide/index?scene=8b81253451dc4e4484d46ebc039a8306",
          expire: 1767193783000
      },{
          title: "饿了么 24城消费日专享",
          imgUrl: "/img/ele_city.jpg",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021003183669766%2Fpages%2Fwh-coupon-guide%2Findex%3Fscene%3D41933a79adf54a6b80267819e1560faf",
          weAppUrl: "ad-bdlm-sub/pages/wh-coupon-guide/index?scene=41933a79adf54a6b80267819e1560faf",
          expire: 1767193783000
      }],
      dd: [{
          title: "滴滴出行优惠券",
          imgUrl: "/img/dd_redpackage.jpg",
          jumpUrl: "https://v.didi.cn/eoQRvjW?source_id=100001000946181&ref_from=dunion",
          weAppUrl: "/pages/index/index?scene=mxZ1qYD&source_id=100001000946181&ref_from=dunion",
          expire: 1767193783000
      },{
          title: "滴滴网约车",
          imgUrl: "/img/dd_100.png",
          jumpUrl: "https://vv.didi.cn/OajYPJe?source_id=100001000946181&ref_from=dunion",
          weAppUrl: "/webx/entry/block-prevention?scene=Lbl9BvJ&source_id=100001000946181&ref_from=dunion",
          expire: 1767193783000
      },{
          title: "【滴滴】代驾100元券包",
          imgUrl: "/img/dd_dj100.jpg",
          jumpUrl: "https://v.didi.cn/nxZLj0D?source_id=100001000946181&ref_from=dunion",
          weAppUrl: "/pages/index/index?scene=vKbjd9r&source_id=100001000946181&ref_from=dunion",
          expire: 1767193783000
      }],
      cy: [{
          title: "瑞幸咖啡",
          imgUrl: "/img/hjk_ruixing.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=rx",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=rx",
          expire: 1767193783000
      },{
          title: "奈雪的茶",
          imgUrl: "/img/hjk_naixue.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=nx",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=nx",
          expire: 1767193783000
      },{
          title: "喜茶",
          imgUrl: "/img/hjk_xicha.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=10",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=10",
          expire: 1767193783000
      },{
          title: "星巴克",
          imgUrl: "/img/hjk_xingbake.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=xbk",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=xbk",
          expire: 1767193783000
      },{
          title: "麦当劳",
          imgUrl: "/img/hjk_maidanglao.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=mdl",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=mdl",
          expire: 1767193783000
      },{
          title: "肯德基",
          imgUrl: "/img/hjk_kfc.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=kfc",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=kfc",
          expire: 1767193783000
      },{
          title: "必胜客",
          imgUrl: "/img/hjk_bishengke.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=bsk",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=bsk",
          expire: 1767193783000
      },{
          title: "华莱士",
          imgUrl: "/img/hjk_hualaishi.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=1",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=1",
          expire: 1767193783000
      },{
          title: "汉堡王",
          imgUrl: "/img/hjk_hanbaowang.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=7",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=7",
          expire: 1767193783000
      },{
          title: "百果园",
          imgUrl: "/img/hjk_baiguoyuan.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=8",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=8",
          expire: 1767193783000
      }],
      qt: [{
          title: "折扣电影票",
          imgUrl: "/img/hjk_movie.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=1",
          weAppUrl: "plugin-private://wx459759608c80cf98/pages/index?movieapikey=25ee321ae0f7f9be&movieuid=myxq_28931&moviekefu=/pages/service/service",
          expire: 1767193783000
      },{
          title: "折扣充值",
          imgUrl: "/img/hjk_huafei.jpg",
          jumpUrl: "https://myxq8.kuaizhan.com/0/59/p880289478292b1?mid=28931&uid=myxq_28931",
          weAppUrl: "plugin-private://wx92eb6fb9f1218f37/pages/index/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&index=/pages/index/index",
          expire: 1767193783000
      },{
          title: "特惠寄快递",
          imgUrl: "/img/hjk_kuaidi.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=15",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=15",
          expire: 1767193783000
      },{
          title: "鲜花配送",
          imgUrl: "/img/hjk_xianhua.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=2",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=2",
          expire: 1767193783000
      }]
    }
    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '失败，请重试 ~' });
  }
}