import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const activity = {
      tb: [{
          desc: "双11超级红包主会场",
          imgUrl: "https://gw.alicdn.com/imgextra/i2/O1CN015vNMih1blnbTZP07Y_!!6000000003506-0-tps-800-450.jpg",
          jumpUrl: "https://s.click.taobao.com/gE07ONt",
          weAppUrl: "",
          expire: 1731340792000
        },{
          desc: "百亿补贴",
          imgUrl: "/img/tb_subsidy.jpg",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401744373379%40212c11a3_1960_19624c170b3_cc8b%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020019160&e=m%3D2%26s%3DysyC5wwztZ1w4vFB6t2Z2iperVdZeJviPI5Rhak06vZnX1vWUft3Zdy4hfOeyy9lwjol5Dp5%2BI%2BBrJd63B9ISmujhsDqs8Gatj0ClDDIzeG%2BFl1qFMvLp8qMTtpS54JVAGIx0oe2X2hZfJ7ZQxC1%2FSqxE3loWlBVEBnEBk3xaGzdzP6Rx%2BOOxBVe%2Fk1xV3ExkeMqUwSQcLSwn1IXvusdyqAIS648q2b4naYpFBIfC%2F0TMkUtS6f4UaeyhO6D8Wd58t4CiTWBjerEwLq1s%2FgQcisPDCuoF3d8e27rmRJheyG9K9DSawWZ0YN%2BJ3gohNHEymOYBu%2BvNBwR2cbDLktPLiIOenYkFIXahBovuwr3Fu822HF2acmvmV1QmLfQ%2BQYHkmZKN2VYGme5Vy3aZz7PrORpkPGs%2B%2BFMv%2FK1lrgvsZ%2BkBCFkCYSg5rsoSXpvjOTqfWLdDrlfJ9IyEo4wMA3PwWqB%2BjfvpoHMCfKPVs4oyZUBWPrhRo77480eRY2FDDN9RGNsxCB%2BmQ7rcxJkzondtEgIPsEFBJAt7YnTG6SG9AJRpOl1FVaiEz%2FIzZSeT%2FbcxTp%2FAfppkkYQfXaRzInJmZV5CnDyLu0BMA8e%2Bd2Ing4PO%2BJAsfzDIPuMzqENOr0A92s%2FfHZtrb3SQlyS3JSEwcFMA08aFT%2Fz0GIWZp1fKMUM%2B7XZOBKdtm1%2BMNutVMsdgHknHuK7wLAB6iISQa5yBrsXnn95il1iR4GyVFPfdHRNU2eDCrqxzsj2Abi28u0Sr7wmhjAvUiCD0QbJopPEh8V80rMhQJBm",
          weAppUrl: "",
          expire: 1774819221000
        },{
          desc: "领券中心",
          imgUrl: "/img/tb_voucher.jpg",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401744372468%40213122a3_0cde_19624b3899f_b7ad%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020020616&e=m%3D2%26s%3DW3mUCKvj37hw4vFB6t2Z2iperVdZeJviU%2F9%2F0taeK29yINtkUhsv0NbKjAlYsnE49ZF17SOzIzl1m500iPbesYqK2tP3TUsc5GjXpSha0leqlBrfkjevCRCaEDc3nKI0ogfc9UhHI0lKaJluSZBCVstf3VMtO%2BcunxayKUIwUM7CbAGjvJeFYhvzeiceWLrTM7kxpdONUAK2ZesAkYM2UrHfv3%2BBYcPW%2FknKiHyNnnywB5MhWbQYoeTR%2Fh3p6vFjiSLq71w5u%2BUJ3widuiY%2FFWufMlmUzB6KyFJYSOcUuyV7kLD8NfoX9ymYlubupY1tteCRbObpaJQif%2FebRB1EwBHZxsMuS08uIg56diQUhdoIFTZ%2Fcv6e3HJ6fLpIwQUehqL%2B3wRhw4ERkqhSxrVp7Rlrk9AJIHp%2FYGIfpu4zpQMB10hBCipIlTOjjI7DhxzjTMMM6ptcQaWNXvOBr8Xb%2FMTGOe5vHwFIY8vYISLl0g96dioIQU0NpeqS9q%2BLDepzHQ6eN8NVQy7GDmntuH4VtA%3D%3D",
          weAppUrl: "",
          expire: 4745596821000
        },{
          desc: "淘工厂 3元3件",
          imgUrl: "/img/tb_tgc.png",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401746929922%400b5213bc_1b7c_196bd233100_45f4%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020022642&e=m%3D2%26s%3DwuKVhb1s2KVw4vFB6t2Z2iperVdZeJviU%2F9%2F0taeK29yINtkUhsv0MFlqewggtWOO1B4L1lbp%2BN1m500iPbesYqK2tP3TUsc5GjXpSha0leqlBrfkjevCRCaEDc3nKI0ogfc9UhHI0lKaJluSZBCVpfdzDItOUCGnxayKUIwUM7CbAGjvJeFYhvzeiceWLrTM7kxpdONUALVqPfn1sl%2FsHI%2BXdujuSU5wVexnxm3wUe%2FcUIBpLsy141vGHHbaMYHO2%2BJZqAjagMCKgq4IJB5kcsjBSahvMAdZ5v9KLBpgwp3XATEAAQjY3BgoKEdsJmbn46yEDC4JHPPVbCwph%2B1jQdU%2F4Cs5%2Bc1NOHh6qzsl9%2FwrRDlxoGoiY05WONQHZHorQ1QOYkN%2BzkuaH6IcJWtxUgvuHF00VXx%2FJP0sIMWGOGQ9fOWvHBMNfwIxkTod0fu0KiUOUGWLz7zPylR2qx8LmAOOp4yGQqh8abjdDgk5HU4QsCxnETJsDNban1al%2BKdkqEbZTw6vdjwHgfj0j%2B3oag60bV4C3V5WueX7nMsltF51sJ2zRMkD3JBUzXPDJUMT38nL%2Bp2i%2BTUICb6LCRtt0DIgcs9Kbiv2ZU6AIXgO6xrHZyYDIqtAtYUCdUXFdJnA9uZ98RGaB%2FOUrQnEM7%2FVsYMXU3NNCg%2F",
          weAppUrl: "",
          expire: 1776439279000
        },{
          desc: "天猫优选 大牌试用",
          imgUrl: "/img/tb_sy.png",
          jumpUrl: "https://s.click.taobao.com/b5ssekt",
          weAppUrl: "",
          expire: 1743695437000
        },{
          desc: "天猫服饰-奥莱清仓1折起",
          imgUrl: "/img/tm_al.png",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401744372935%4021508606_19a5_19624baac37_8efc%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020016643&e=m%3D2%26s%3DlO6sOEhfdTZw4vFB6t2Z2iperVdZeJviU%2F9%2F0taeK29yINtkUhsv0NbKjAlYsnE4Bj2BsLX67aV1m500iPbesYqK2tP3TUsc5GjXpSha0leqlBrfkjevCRCaEDc3nKI0ogfc9UhHI0lKaJluSZBCVstf3VMtO%2BcunxayKUIwUM7CbAGjvJeFYhvzeiceWLrTM7kxpdONUAK2ZesAkYM2UrHfv3%2BBYcPW%2FknKiHyNnnywB5MhWbQYoeTR%2Fh3p6vFjiSLq71w5u%2BWD6Yz%2BPX49mCQCfPBmiXeDOGS9sfYIgTdsDvbh8Qt7h%2FzMWUx6tZLVqdOPo3UretcgGjLdgzebaYgPh2VpbvcT8PwOkD4ulZfxvNaaibhIncDlE6H93yEw17wnkme1OdGDcT9IgYeWF%2FeiVvaEiF03Z3NEK3xpqJZuoOXcH62N6sVgGfeY75Ta3ovS%2BpgeI5W4BxfT2hpDYsuhQCt5PqqEVsJ2EVsYXPxm1DJtqns%2Fzu5IG8zi8yHmpiztUpV2ZRQhhQs2DjqgEA%3D%3D",
          weAppUrl: "",
          expire: 2528918421000
        },{
          desc: "天猫超市优惠",
          imgUrl: "/img/tm_market.jpg",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401744373567%402133ee71_19af_19624c44f4d_9853%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020014693&e=m%3D2%26s%3D3Nrnrdsf%2FoFw4vFB6t2Z2iperVdZeJviU%2F9%2F0taeK29yINtkUhsv0OKGqs1lWVRleJJaO%2BLnkAp1m500iPbesYqK2tP3TUsc5GjXpSha0leqlBrfkjevCRCaEDc3nKI0ogfc9UhHI0lKaJluSZBCVtFlQX%2BXouKrnxayKUIwUM7CbAGjvJeFYhvzeiceWLrTM7kxpdONUAK2ZesAkYM2UrHfv3%2BBYcPW%2FknKiHyNnnwFvmlJ8Nzy3cYwWTJXo69nu8PTjiqTUD9PSf3D69fGjYxPQaFn%2B7xgOQG%2FAxkP0b5BKXWDGQAfc3iugMmjfXDRTnv1QcPEO2GW2ZhEEEGvs%2FtP9PGs1lJH7qeUylWc6TSX3cwyLTlAhlNJloV3dgWSYQh3gIuGIf7spoGaDFCgBHClk7%2FUax7TlepJE5brmn8KtbNCiZLMozUdXbdFF4R4uiAJ0c4rovyZmnxct1l6n8Yl7w3%2FA2kb",
          weAppUrl: "",
          expire: 1774646421000
        },{
          desc: "飞猪旅行-天天特惠",
          imgUrl: "/img/fz_all.jpg",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401744373886%40212b0e69_1936_19624c92e97_4e50%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020017276&e=m%3D2%26s%3DrPg1v1gmamtw4vFB6t2Z2iperVdZeJviv2laukthwYhnX1vWUft3Zdy4hfOeyy9lHpesfhATMtGBrJd63B9ISmujhsDqs8Gatj0ClDDIzeG%2BFl1qFMvLp8qMTtpS54JVAGIx0oe2X2grKUsTDuTWlW3CCSTosozI3ViV%2F%2FO0BW2R4ypTBJBwtPIcvT56TvpnKVffChNb96kj5Wjhls5eJPl6Tw6xvXhok5RrP6FI0hlzXbM%2B3F60%2FGIFd12P6iMXUo2hfnjQmPtvIIB3VmGNwjDGdTPVfMRUEoC3ssWELDrd45aVgxEaeaGtt5FsVGPI7qeUylWc6TSX3cwyLTlAhpk5lTXLmLSRYQh3gIuGIf5yntihGpsqhT9FIRLGGXGV04UAxntdnIPfU2VLahqFw5S4mORrk8FPX5uS3k9Zrc8Af63sBuAK8MYl7w3%2FA2kb",
          weAppUrl: "",
          expire: 1764624021000
        },{
          desc: "飞猪酒店特惠",
          imgUrl: "/img/fz_hotal.png",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401744373993%400bbb024c_1906_19624cace9a_1902%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020013212&e=m%3D2%26s%3DlwhNXtS2Cw1w4vFB6t2Z2iperVdZeJviv2laukthwYhnX1vWUft3Zdy4hfOeyy9lXCvrM07dXqOBrJd63B9ISmujhsDqs8Gatj0ClDDIzeG%2BFl1qFMvLp8qMTtpS54JVAGIx0oe2X2grKUsTDuTWlW3CCSTosozI3ViV%2F%2FO0BW2R4ypTBJBwtORyXELQrGCOtY4Qt2cZ1lX%2BScqIfI2efON18HxXG25s0QcPJ1jSzM93L2r56trmm8MdOb2aRlIYKZiW5u6ljW3wfyu9sE9Kl2FZkVnEtSdZJsmVixlGXb1WWTMtnQ4pvtxr%2BBCLHpW%2FU9pakkCDFfl51sJ2zRMkD2F5K70ZdpAZd%2Bx%2FHpP9xw7E7W1AuSdxKNHHj3%2FhSuQ2ib7miaO0cFwoZziYUu0spUmUTyEwg%2FHlu4T3PlvK%2F5s0MIYWYimuwHEqY%2Bakgpmw",
          weAppUrl: "",
          expire: 1798579221000
        }
      ],
      jd: [{
          desc: "618大促主会场",
          imgUrl: "https://gw.alicdn.com/imgextra/i1/O1CN01U5E4pn1rMBGD1Now3_!!6000000005616-0-tps-800-450.jpg",
          jumpUrl: "https://u.jd.com/r1sVR9U",
          weAppUrl: "https://u.jd.com/r1sVR9U",
          expire: 1750262359000
        },{
          desc: "京东秒杀",
          imgUrl: "/img/jd_flash_sale.webp",
          jumpUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAPUJK1olXDYDZBoCUBVIMzZNXhpXVhgcDwYCXhxDXHBTTkRHA1ocDBsJVEVTbT9aXjVUUUJdDAACFBtFRjdPQx5dSkJdDAACZgpHVTtmQw4ZXgcCV1ptT0oNaGdpWQx3CnwDSi1ZSi1eQhd1e1cZbQMCVV9fC0MXC2o4G1oUXgACV1xVCnsnA2w4UDUUbQQDVVxYC00SAGc4G10QWAQEVVZbC04fBl8PG1IlAF1QVFpdCkgQbTM4K2sWbQECXUpbegpFF2l6K2sWXTYBZG5fCUoTCl84xdalIgEFBlkvDxBfejJ7fBtvA9iP5E8veEsTBGsZK2slbQ",
          weAppUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAPUJK1olXDYDZBoCUBVIMzZNXhpXVhgcDwYCXhxDXHBTTkRHA1ocDBsJVEVTbT9aXjVUUUJdDAACFBtFRjdPQx5dSkJdDAACZgpHVTtmQw4ZXgcCV1ptT0oNaGdpWQx3CnwDSi1ZSi1eQhd1e1cZbQMCVV9fC0MXC2o4G1oUXgACV1xVCnsnA2w4UDUUbQQDVVxYC00SAGc4G10QWAQEVVZbC04fBl8PG1IlAF1QVFpdCkgQbTM4K2sWbQECXUpbegpFF2l6K2sWXTYBZG5fCUoTCl84xdalIgEFBlkvDxBfejJ7fBtvA9iP5E8veEsTBGsZK2slbQ",
          expire: 4745596821000
        }
      ],
      pdd: [{
          desc: "11·11大促",
          imgUrl: "https://t16img.yangkeduo.com/pdd_oms/2024-10-12/8f707294e3b6cba554183e8df972e7d5.png",
          jumpUrl: "/attendance.html?type=1&id=199954&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&pid=15084399_190061839&_x_ddjb_dmn=%7B%22cpsSign%22%3A%22CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7%22%2C%22id%22%3A%22199954%22%2C%22type%22%3A%221%22%7D&cpsSign=CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7&_x_ddjb_act=%7B%22st%22%3A%223%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_",
          weAppUrl: "/attendance.html?type=1&id=199954&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&pid=15084399_190061839&_x_ddjb_dmn=%7B%22cpsSign%22%3A%22CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7%22%2C%22id%22%3A%22199954%22%2C%22type%22%3A%221%22%7D&cpsSign=CM_241018_15084399_190061839_b438df9c820addc6fb2973e378c574f7&_x_ddjb_act=%7B%22st%22%3A%223%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_",
          expire: 1731340792000
        },{
          desc: "百亿补贴",
          imgUrl: "/img/pdd_subsidy.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6d8e20ccc033104197541a05c1e0bd94&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=39996&pid=15084399_190061839&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&cpsSign=CE_240607_15084399_190061839_6d8e20ccc033104197541a05c1e0bd94&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          desc: "千万补贴",
          imgUrl: "/img/pdd_qwbt.png",
          jumpUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_053a6b42227ced719f7098feab2468b9&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_053a6b42227ced719f7098feab2468b9&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          desc: "限时秒杀",
          imgUrl: "/img/pdd_xsms.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=4&pid=15084399_190061927&cpsSign=CE_240908_15084399_190061927_dd76076561ab1f9db0267ac2cee55ab7&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=4&pid=15084399_190061927&cpsSign=CE_240908_15084399_190061927_dd76076561ab1f9db0267ac2cee55ab7&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          desc: "领券中心",
          imgUrl: "/img/pdd_voucher.jpg",
          jumpUrl: "/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=40000&pid=15084399_190061839&cpsSign=CE_240607_15084399_190061839_67b48ab5157fcdd8e7720940f244b277&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        }
      ],
      wph: [{
          desc: "618抢先购主会场",
          imgUrl: "http://ms.vpimg1.com/upload/actpics/cps/0/2025/05/09/39/1366ytxv8nxxn0x.jpg",
          jumpUrl: "https://t.vip.com/zzXFmWjEg8A?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252Fz-l3c3job26ZPWN2KkJvyA.php%253Fwapid%253Dmst_100150172%2526_src%253Dmst%2526extra_banner%253D0%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000fq3k3jxayiqlfl5x24&chl_type=wxk",
          expire: 1750039159000
        },
        {
          desc: "限时狂秒",
          imgUrl: "/img/wph_cjbt.png",
          jumpUrl: "https://t.vip.com/CJdSptn1Bn7",
          weAppUrl: "",
          expire: 1751987383000
        },{
          desc: "每日超值低价",
          imgUrl: "/img/wph_low_price.webp",
          jumpUrl: "https://t.vip.com/2FpMvccdl59?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252FO-wSpmRJ3xdDUtB39vLuTg.php%253Fwapid%253Dmst_100126749%2526_src%253Dmst%2526extra_banner%253D115126749%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000wtlmziwzoe5ssiyuyd&chl_type=wxk",
          expire: 1751987383000
        },{
          desc: "3折疯抢",
          imgUrl: "/img/wph_qiang.jpg",
          jumpUrl: "https://t.vip.com/U3bc5Ef2MP9?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252FDAFYkbX9rT9ZrU-uW_ylnw.php%253Fwapid%253Dmst_100114375%2526_src%253Dmst%2526extra_banner%253D115114375%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu060000drv8r27o5z27ixbath&chl_type=wxk",
          expire: 1764529783000
        },{
          desc: "唯品快抢",
          imgUrl: "/img/wph_kq.png",
          jumpUrl: "https://t.vip.com/N7CVJWu9sl9?chanTag=d619156f131a556c6640229727291160",
          weAppUrl: "pages/index/index?$route=pages%2Fspecial%2Fspecial%3Furl%3Dhttps%253A%252F%252Fmst.vip.com%252F27Pzw99-SzJDKCFI8NooXQ.php%253Fwapid%253Dmst_100048881%2526_src%253Dmst%2526extra_banner%253D115048881%2526nova%253D1%2526nova_platform%253D1%2526mst_page_type%253Dguide%2526nmsns%253Dshop_iphone-7.60.1-link%2526nst%253Dsubject%2526nsbc%253D%2526nct%253Dlink%2526ncid%253Df931935d51a7563e78f29f518b607deb16c0ce17%2526nabtid%253D5bbc01d7a130404a6260dd533954b23d%2526nuid%253DNDkzOTIwODE3%2526nchl_param%253Dshare%253Af931935d51a7563e78f29f518b607deb16c0ce17%253A1640764250&tra_from=adp%3AC01V4mpu06pdygk0%3A%3Amig_code%3Ad619156f131a556c6640229727291160%3Aac014mpu0600009z6k9axv5rpdhxw5qb&chl_type=wxk",
          expire: 1764529783000
        }
      ],
      mt: [{
          title: "【美团闪购】红包天天领会场",
          imgUrl: "/img/mt_flash_shop.jpg",
          jumpUrl: "http://dpurl.cn/4jAj4K6z",
          weAppUrl: "",
          expire: 1767193783000
        },{
          title: "美团到店",
          imgUrl: "/img/mt_daodian.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=7",
          weAppUrl: "",
          expire: 1767193783000
        },{
          title: "天天领美团外卖红包",
          imgUrl: "/img/mt_wm.jpg",
          jumpUrl: "http://dpurl.cn/JliuGdzz",
          weAppUrl: "",
          expire: 1767193783000
        },{
          title: "美团吃喝玩乐",
          imgUrl: "/img/mt_chihewanle.png",
          jumpUrl: "http://dpurl.cn/Hfpmwk9z",
          weAppUrl: "",
          expire: 1767193783000
        },{
          title: "美团爆款鲜花3折起",
          imgUrl: "/img/mt_xh.png",
          jumpUrl: "http://dpurl.cn/kQFMjzsz",
          weAppUrl: "",
          expire: 1767193783000
        },{
          title: "美团买药",
          imgUrl: "/img/mt_yao.jpg",
          jumpUrl: "http://dpurl.cn/lbMNDG3z",
          weAppUrl: "",
          expire: 1767193783000
        }
      ],
      ele: [{
          title: "饿了么 淘宝闪购",
          imgUrl: "/img/flash_shop.jpg",
          jumpUrl: "tbopen://m.taobao.com/tbopen/index.html?&action=ali.open.nav&module=h5&h5Url=https%3A%2F%2Fh5.ele.me%2Fminisite%2Fpages%2Findex-xsd%2Findex%3FisTab%3Dfalse%26disableNav%3DYES%26forceThemis%3Dtrue%26tfPos%3Dh5%26forbidRefineType%3DgoOut%26from%3Dminiapp.taobao%26channelInfo%3D%257B%2522subSubChannel%2522%253A%2522miniapp.taobao.et%2522%257D%26alsc_exsrc%3DES0006299852%26mdFrom%3D%26scene%3Dd3dc263b49454e6ca200002b3cbec301%26o2i_1st_clk%3D__CLICK_ID__",
          weAppUrl: "",
          expire: 1767193783000
      },{
          title: "饿了么天天领红包",
          imgUrl: "/img/ele_redpackage.png",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021004134685665%2Fpages%2Ftaoke-guide%2Findex%3Fscene%3D081e3131d0934040854434b14c747068",
          weAppUrl: "",
          expire: 1767193783000
      },{
          title: "饿了么 24城消费日专享",
          imgUrl: "/img/ele_city.jpg",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021003183669766%2Fpages%2Fwh-coupon-guide%2Findex%3Fscene%3D41933a79adf54a6b80267819e1560faf",
          weAppUrl: "ad-bdlm-sub/pages/wh-coupon-guide/index?scene=41933a79adf54a6b80267819e1560faf",
          expire: 1767193783000
      },{
          title: "饿了么 医药红包",
          imgUrl: "/img/ele_yao.jpg",
          jumpUrl: "alipays://platformapi/startapp?appId=2021001110676437&page=plugin-private%3A%2F%2F2021003183669766%2Fpages%2Fwh-coupon-guide%2Findex%3Fscene%3D2ee1d21347554866a3de9c0f7bc2772c",
          weAppUrl: "",
          expire: 1767193783000
      }],
      dd: [{
          title: "滴滴出行优惠券",
          imgUrl: "/img/dd_redpackage.jpg",
          jumpUrl: "https://v.didi.cn/eoQRvjW?source_id=100001000946181&ref_from=dunion",
          weAppUrl: "alipays://platformapi/startapp?appId=10000007&qrcode=https://vv.didi.cn/OajYPJe?source_id=100001000946181&ref_from=dunion",
          expire: 1767193783000
      },{
          title: "滴滴网约车",
          imgUrl: "/img/dd_100.png",
          jumpUrl: "https://vv.didi.cn/OajYPJe?source_id=100001000946181&ref_from=dunion",
          weAppUrl: "alipays://platformapi/startapp?appId=2019062865745088&page=/webx/entry/block-prevention?scene=Lbl9BvJ&source_id=100001000946181&ref_from=dunion",
          expire: 1767193783000
      },{
          title: "【滴滴】代驾100元券包",
          imgUrl: "/img/dd_dj100.jpg",
          jumpUrl: "https://v.didi.cn/nxZLj0D?source_id=100001000946181&ref_from=dunion",
          weAppUrl: "alipays://platformapi/startapp?appId=10000007&qrcode=https://v.didi.cn/nxZLj0D?source_id=100001000946181&ref_from=dunion",
          expire: 1767193783000
      }],
      cy: [{
          desc: "瑞幸咖啡",
          imgUrl: "/img/hjk_juhe.png",
          jumpUrl: "https://myxq8.kuaizhan.com/79/63/p1099301769c693e?myxqpid=100001000946181",
          weAppUrl: "",
          expire: 1767193783000
      },{
          desc: "瑞幸咖啡",
          imgUrl: "/img/hjk_ruixing.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=rx",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=rx",
          expire: 1767193783000
      },{
          desc: "奈雪的茶",
          imgUrl: "/img/hjk_naixue.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=nx",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=nx",
          expire: 1767193783000
      },{
          desc: "喜茶",
          imgUrl: "/img/hjk_xicha.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=10",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=10",
          expire: 1767193783000
      },{
          desc: "星巴克",
          imgUrl: "/img/hjk_xingbake.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=xbk",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=xbk",
          expire: 1767193783000
      },{
          desc: "库迪咖啡",
          imgUrl: "/img/hjk_kudi.png",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=kd",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=kd",
          expire: 1767193783000
      },{
          desc: "麦当劳",
          imgUrl: "/img/hjk_maidanglao.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=mdl",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=mdl",
          expire: 1767193783000
      },{
          desc: "肯德基",
          imgUrl: "/img/hjk_kfc.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=kfc",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=kfc",
          expire: 1767193783000
      },{
          desc: "必胜客",
          imgUrl: "/img/hjk_bishengke.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=bsk",
          weAppUrl: "plugin-private://wx869ff9f322c1d2f0/pages/welcome/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=bsk",
          expire: 1767193783000
      },{
          desc: "华莱士",
          imgUrl: "/img/hjk_hualaishi.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=1",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=1",
          expire: 1767193783000
      },{
          desc: "汉堡王",
          imgUrl: "/img/hjk_hanbaowang.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=7",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=7",
          expire: 1767193783000
      },{
          desc: "塔斯汀",
          imgUrl: "/img/hjk_tst.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=tst",
          weAppUrl: "",
          expire: 1767193783000
      },{
          desc: "德克士",
          imgUrl: "/img/hjk_dks.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=16",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=16",
          expire: 1767193783000
      },{
          desc: "百果园",
          imgUrl: "/img/hjk_baiguoyuan.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=8",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=8",
          expire: 1767193783000
      }],
      qt: [{
          desc: "折扣电影票",
          imgUrl: "/img/hjk_movie.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=1",
          weAppUrl: "plugin-private://wx459759608c80cf98/pages/index?movieapikey=25ee321ae0f7f9be&movieuid=myxq_28931&moviekefu=/pages/service/service",
          expire: 1767193783000
      },{
          desc: "特惠寄快递",
          imgUrl: "/img/hjk_kuaidi.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=4&type=15",
          weAppUrl: "/pages/web/index?apikey=25ee321ae0f7f9be&uid=myxq_28931&type=15",
          expire: 1767193783000
      },{
          desc: "鲜花配送",
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