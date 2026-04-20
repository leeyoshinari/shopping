import { NextResponse } from "next/server";
import { ActivityData } from "@/app/types";

export async function GET() {
  try {
    const activity: ActivityData = {
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
          expire: 2529634820000
        },{
          desc: "天猫超市优惠",
          imgUrl: "/img/tm_market.jpg",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3APUB%401767236953%40212cd82a_2f61_19b7787e66a_9eca%4001%40eyJmbG9vcklkIjozODg1Miiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfYWN0aXZpdHlfb2ZmaWNpYWxfaW5kZXhfaHRtIn0ie%3BeventPageId%3A20150318020022781&e=m%3D2%26s%3DHxCvRofMHbFw4vFB6t2Z2iperVdZeJvilQZ%2Bodr2hRdBcCq04HXSj%2BhCZFSw9yq2G52CT74p5hg2a%2FntkwB13e9sk7nK4h9CC3zqjIXga%2Flg5EXPTi0TNe3CRGuKWRwzsMGIJk6jD8Td0%2Bv22oF73aXUW6kyUUp25F5HXmvJIGMpgWeWVopDe0SIV6cM1wjOT39gWBYQB3T83xitEVHEv2Qj9sLAYez6cnjQKEJbkmpmPYaQAGl3H2MSlT%2BNzPFswzBZki1hZL0c3bXJ6gZ2mV8ai17XBtAQc4giA5Pqe16Vz1fa7mGABG%2FrHB9aiVckS6fqAUnbbCgrDwwrqBd3fNTE7ijvC2L7OeW0ysdpq0cQSzHViKXJh%2Bx9yhXmsoRIDNtYfWR7nQKf4Nnv5XoCjbBB4GIrwA1%2Bjsv9UueiX%2Bt59mlsNMqux7O1DS7HdmyOc%2FLGgu7eRZQHvuaL6oxkKvPCjsJcoqiyXuQiQBSPF3pe7auY0HPYWszlTEcWhO9m2%2FL0sbZUfrCsy2K44SqsQPQQMq3wZW%2BVHI76Xza8u6sW%2BzVK3z79C43cBX1pvwegE%2FAQ9mk5SRrjHFzRU1jsvOfuELOYVN%2B6jYYIJZQK%2BrotOrcouCqZJCQAKpKcAkkrtRdSId5djtBnc0QrfGmolhvaJ%2Be9RCFUjmI%2B%2FpumG%2BMJGaUEajxGgZa9gnUFqDcRupiTE2TPmNgVdlYijCVozXQkt6LoMZlr9EXUfZSmTyBxdRBZL2AIo3EqY%2Bakgpmw",
          weAppUrl: "",
          expire: 1869366020000
        },{
          desc: "飞猪酒店特惠",
          imgUrl: "/img/fz_hotal.png",
          jumpUrl: "https://s.click.taobao.com/t?union_lens=lensId%3AMAPI%401767236430%40213ef1be_2044_19b777feb0b_986a%4001%40eyJmbG9vcklkIjozMTg0N30ie%3BeventPageId%3A20150318020013212&e=m%3D2%26s%3DTa%2B80aSw0UNw4vFB6t2Z2iperVdZeJviv2laukthwYhnX1vWUft3ZYnReLFJ%2BXvemKbPkzRYoka24JGQjiBRoYyiu9hj5%2F0mC2anW0ZmTt5SrXF1v%2BznQiFEXSCSibcYAGIx0oe2X2grKUsTDuTWlW3CCSTosozI%2FLNFmtWhrAvOnuwRYD%2BsqfP%2BEwM1GsOp3qmmixUsX%2FOjJz2jvn4BX87ngtD9XDUvjEAl7Yr4Ex54RX4z5YTqZ8BTEEntAy686lck1wJ2%2B%2BXSqROk8BTSSUwD6NHFb5gP98%2BrN2XNcmXNo609ozfXMhW0uxpBflGJWrLGWVa668SmP5yGn9HZiBxexx9zc6Z118h%2BF3SE%2B9AZ340tZosJ3wz7tdk4Ep22bX4w261Uyx02CgS6%2FDx4gfEbcIUGdu2r2rzyOxIciLjk%2BqAw5WM8U6Aw8H8X0LYgkFcKORBM2BSWRqUGBKS7Op68GYeF4e%2FcBwI2ZpA57XI%3D",
          weAppUrl: "",
          expire: 1798719620000
        }
      ],
      jd: [{
          desc: "双12京享红包",
          imgUrl: "https://img.haojingke.com/dbc778f44ef7b37647e97364cc211217d9832262ccd21bf0g4wMoMC3uO.png",
          jumpUrl: "https://u.jd.com/ZrBRZ1T",
          weAppUrl: "",
          expire: 1765641600000
        },{
          desc: "京东秒杀",
          imgUrl: "/img/jd_flash_sale.webp",
          jumpUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAPUJK1olXDYDZBoCUBVIMzZNXhpXVhgcDwYCXhxDXHBTTkRHA1ocDBsJVEVTbT9aXjVUUUJdDAACFBtFRjdPQx5dSkJdDAACZgpHVTtmQw4ZXgcCV1ptT0oNaGdpWQx3CnwDSi1ZSi1eQhd1e1cZbQMCVV9fC0MXC2o4G1oUXgACV1xVCnsnA2w4UDUUbQQDVVxYC00SAGc4G10QWAQEVVZbC04fBl8PG1IlAF1QVFpdCkgQbTM4K2sWbQECXUpbegpFF2l6K2sWXTYBZG5fCUoTCl84xdalIgEFBlkvDxBfejJ7fBtvA9iP5E8veEsTBGsZK2slbQ",
          weAppUrl: "https://union-click.jd.com/jdc?e=618%7Cpc%7C&p=JF8BAPUJK1olXDYDZBoCUBVIMzZNXhpXVhgcDwYCXhxDXHBTTkRHA1ocDBsJVEVTbT9aXjVUUUJdDAACFBtFRjdPQx5dSkJdDAACZgpHVTtmQw4ZXgcCV1ptT0oNaGdpWQx3CnwDSi1ZSi1eQhd1e1cZbQMCVV9fC0MXC2o4G1oUXgACV1xVCnsnA2w4UDUUbQQDVVxYC00SAGc4G10QWAQEVVZbC04fBl8PG1IlAF1QVFpdCkgQbTM4K2sWbQECXUpbegpFF2l6K2sWXTYBZG5fCUoTCl84xdalIgEFBlkvDxBfejJ7fBtvA9iP5E8veEsTBGsZK2slbQ",
          expire: 4745596821000
        },{
          desc: "京东外卖",
          imgUrl: "https://img.haojingke.com/f8b55de171fb2d03841652244e0fa15cbd14bdbe8c65658c45SfM5HkVK.png",
          jumpUrl: "https://u.jd.com/AGJ8h57",
          weAppUrl: "https://u.jd.com/AGJ8h57",
          expire: 1798719620000
        },{
          desc: "京东话费券",
          imgUrl: "https://img.haojingke.com/7baaf160b00d91c98db34331fd55eec26d422c7dda8e134d4zXg3OMpdB.jpg",
          jumpUrl: "https://u.jd.com/ADJWXed",
          weAppUrl: "https://u.jd.com/ADJWXed",
          expire: 1798719620000
        },{
          desc: "国家补贴享8折",
          imgUrl: "https://img.haojingke.com/78a459020a251b40d1f5309179a6e63fd90e69fddeed5aa0M2Cg64zYBF.jpg",
          jumpUrl: "https://u.jd.com/AgJEQ1L",
          weAppUrl: "https://u.jd.com/AgJEQ1L",
          expire: 1798719620000
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
          jumpUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_250920_15084399_190061839_a29fe4998631f416082c6e96fbd0c45e&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2",
          weAppUrl: "/duo_theme_activity.html?__page=duo_qianwan_activity&pid=15084399_190061839&cpsSign=CE_250920_15084399_190061839_a29fe4998631f416082c6e96fbd0c45e&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2",
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
          jumpUrl: "/duo_transfer_channel.html?resourceType=40000&pid=200005_851937&customParameters=100001001343743&authDuoId=200005&cpsSign=CE_250920_200005_851937_5e015d7b3a2420bae1aecf1297df5d69&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          weAppUrl: "/duo_transfer_channel.html?resourceType=40000&pid=200005_851937&customParameters=100001001343743&authDuoId=200005&cpsSign=CE_250920_200005_851937_5e015d7b3a2420bae1aecf1297df5d69&_x_ddjb_act=%7B%22st%22%3A%226%22%7D&duoduo_type=2&launch_pdd=1&campaign=ddjb&cid=launch_transfer_channel_",
          expire: 2735642837000
        },{
          desc: "拼多多员工内购清单",
          imgUrl: "https://img.haojingke.com/e0d01427c60d5f506748050a0000d9b9e3a36783890c95855wizHhMVt9.png",
          jumpUrl: "/duo_collection.html?__page=dis&pid=200005_851937&customParameters=100001001343743&authDuoId=200005&cpsSign=CIP_251116_200005_851937_a45a294e2c52f267fc5216b62d153573&_x_ddjb_act=%7B%22st%22%3A%2217%22%7D&duoduo_type=2",
          weAppUrl: "/duo_collection.html?__page=dis&pid=200005_851937&customParameters=100001001343743&authDuoId=200005&cpsSign=CIP_251116_200005_851937_a45a294e2c52f267fc5216b62d153573&_x_ddjb_act=%7B%22st%22%3A%2217%22%7D&duoduo_type=2",
          expire: 2735642837000
        },{
          desc: "拼多多备案链接",
          imgUrl: "/img/pdd_beian.png",
          jumpUrl: "/duo_coupon_landing.html?__page=auth&pid=200005_851937&customParameters=100001001343743&authDuoId=200005&cpsSign=CC_250920_200005_851937_62e88067fa467b3c6721e1fb38b0a4ae&_x_ddjb_act=%7B%22st%22%3A%22102%22%7D&duoduo_type=2",
          weAppUrl: "/duo_coupon_landing.html?__page=auth&pid=200005_851937&customParameters=100001001343743&authDuoId=200005&cpsSign=CC_250920_200005_851937_62e88067fa467b3c6721e1fb38b0a4ae&_x_ddjb_act=%7B%22st%22%3A%22102%22%7D&duoduo_type=2",
          expire: 2735642837
        }
      ],
      wph: [{
          desc: "【唯品会】新春年货节",
          imgUrl: "https://img.haojingke.com/480084e070aaabf7a7924ad4c139bf6dd35a922dc1691876JGdatLv2R5.jpg",
          jumpUrl: "https://t.vip.com/Z7bY32",
          weAppUrl: "",
          expire: 1770985220000
        },
        {
          desc: "限时狂秒",
          imgUrl: "https://img.haojingke.com/98ffa9fbc20f03d5501d7e9852c23de7d35d064f7e7715739BveIiWJIN.jpg",
          jumpUrl: "https://t.vip.com/mpjurc",
          weAppUrl: "",
          expire: 1833020420000
        },{
          desc: "每日超值低价",
          imgUrl: "/img/wph_low_price.webp",
          jumpUrl: "https://t.vip.com/MBB7Nf",
          weAppUrl: "",
          expire: 1785500420000
        },{
          desc: "3折疯抢",
          imgUrl: "/img/wph_qiang.jpg",
          jumpUrl: "https://t.vip.com/gtd42d",
          weAppUrl: "",
          expire: 1798719620000
        },{
          desc: "超级补贴",
          imgUrl: "https://img.haojingke.com/fa02b7bd9578f3f17f318acdce3b7778a559e5ed0c0cc8fcvgCjfkcd3D.jpg",
          jumpUrl: "https://t.vip.com/axgx2j",
          weAppUrl: "",
          expire: 1798719620000
        }
      ],
      mt: [{
          title: "【美团闪购】红包天天领",
          imgUrl: "/img/mt_flash_shop.jpg",
          jumpUrl: "http://dpurl.cn/DiVQiocz",
          weAppUrl: "",
          expire: 1798719620000
        },{
          title: "【美团闪购】万物免单",
          imgUrl: "https://img.haojingke.com/cf23a5cabd034ab7c9544ca470acefec5868e726b28d7b03tGLbeKNO8a.jpg",
          jumpUrl: "http://dpurl.cn/AKIouEsz",
          weAppUrl: "",
          expire: 1798719620000
        },{
          title: "美团到店",
          imgUrl: "/img/mt_daodian.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=7",
          weAppUrl: "",
          expire: 1798719620000
        },{
          title: "天天领美团外卖红包",
          imgUrl: "/img/mt_wm.jpg",
          jumpUrl: "http://dpurl.cn/ri1myrSz",
          weAppUrl: "",
          expire: 1798719620000
        },{
          title: "美团机票火车票",
          imgUrl: "https://img.haojingke.com/3ba5c427090ee18ab3d4593fced77a1649fc91a214790e6cbnjrRWIaft.jpg",
          jumpUrl: "http://dpurl.cn/qOljCMgz",
          weAppUrl: "",
          expire: 1772281220000
        },{
          title: "【美团】酒店会场",
          imgUrl: "https://img.haojingke.com/ecf7773581115a0d749dfd0c2b5106d4a89d926d9db91572am5SIwQBeH.jpg",
          jumpUrl: "http://dpurl.cn/5lxhL9uz",
          weAppUrl: "",
          expire: 1825244420000
        },{
          title: "华住集团旗下酒店",
          imgUrl: "/img/mt_huazhuhui.jpg",
          jumpUrl: "http://dpurl.cn/rSlQcokz",
          weAppUrl: "",
          expire: 1798719620000
        }
      ],
      ele: [{
          title: "饿了么 淘宝闪购",
          imgUrl: "/img/flash_shop.jpg",
          jumpUrl: "tbopen://m.taobao.com/tbopen/index.html?&action=ali.open.nav&module=h5&h5Url=https%3A%2F%2Fh5.ele.me%2Fminisite%2Fpages%2Findex-xsd%2Findex%3FisTab%3Dfalse%26disableNav%3DYES%26forceThemis%3Dtrue%26tfPos%3Dh5%26forbidRefineType%3DgoOut%26from%3Dminiapp.taobao%26channelInfo%3D%257B%2522subSubChannel%2522%253A%2522miniapp.taobao.et%2522%257D%26alsc_exsrc%3DES0006299852%26mdFrom%3D%26scene%3D849073d158194098ae87345d3e6e6208%26o2i_1st_clk%3D__CLICK_ID__",
          weAppUrl: "",
          expire: 1798719620000
      },{
          title: "饿了么天天领红包",
          imgUrl: "/img/ele_redpackage.png",
          jumpUrl: "tbopen://m.taobao.com/tbopen/index.html?&action=ali.open.nav&module=h5&h5Url=https%3A%2F%2Fm.duanqu.com%2F%3F_ariver_appid%3D8251537%26page%3Dplugin-private%253A%252F%252F2021004134685665%252Fpages%252Ftaoke-guide%252Findex%253Ffrom%253Dminiapp.taobao%2526channelInfo%253D%257B%2522subSubChannel%2522%253A%2522miniapp.taobao.et%2522%257D%2526alsc_exsrc%253DES0006299852%2526scene%253Dccb1e250051448d8970f5b6377b08d70",
          weAppUrl: "",
          expire: 1798719620000
      }],
      dd: [{
          title: "滴滴出行优惠券",
          imgUrl: "/img/dd_redpackage.jpg",
          jumpUrl: "https://vv.didi.cn/7kQ7jrp?source_id=100001001343743&ref_from=dunion",
          weAppUrl: "",
          expire: 1798719620000
      },{
          title: "滴滴网约车",
          imgUrl: "/img/dd_100.png",
          jumpUrl: "https://vv.didi.cn/A2mjQ6k?source_id=100001001343743&ref_from=dunion",
          weAppUrl: "",
          expire: 1798719620000
      },{
          title: "【滴滴】代驾100元券包",
          imgUrl: "/img/dd_dj100.jpg",
          jumpUrl: "https://v.didi.cn/nXJb5G9?source_id=100001001343743&ref_from=dunion",
          weAppUrl: "",
          expire: 1798719620000
      }],
      cy: [{
          desc: "聚合点餐",
          imgUrl: "/img/hjk_juhe.png",
          jumpUrl: "https://myxq8.kuaizhan.com/64/77/p926592549ee319?mid=28931&a=25ee321ae0f7f9be&uid=qq555555",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "瑞幸咖啡",
          imgUrl: "/img/hjk_ruixing.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=rx",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "奈雪的茶",
          imgUrl: "/img/hjk_naixue.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=nx",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "喜茶",
          imgUrl: "/img/hjk_xicha.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=10",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "星巴克",
          imgUrl: "/img/hjk_xingbake.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=xbk",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "库迪咖啡",
          imgUrl: "/img/hjk_kudi.png",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=kd",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "麦当劳",
          imgUrl: "/img/hjk_maidanglao.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=mdl",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "肯德基",
          imgUrl: "/img/hjk_kfc.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=kfc",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "必胜客",
          imgUrl: "/img/hjk_bishengke.jpg",
          jumpUrl: "https://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=myxq_28931&t=5&type=bsk",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "华莱士",
          imgUrl: "/img/hjk_hualaishi.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=1",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "汉堡王",
          imgUrl: "/img/hjk_hanbaowang.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=7",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "塔斯汀",
          imgUrl: "/img/hjk_tst.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=5&type=tst",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "德克士",
          imgUrl: "/img/hjk_dks.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=16",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "百果园",
          imgUrl: "/img/hjk_baiguoyuan.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=8",
          weAppUrl: "",
          expire: 1798719620000
      }],
      qt: [{
          desc: "折扣电影票",
          imgUrl: "/img/hjk_movie.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=1",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "特惠寄快递",
          imgUrl: "/img/hjk_kuaidi.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=15",
          weAppUrl: "",
          expire: 1798719620000
      },{
          desc: "鲜花配送",
          imgUrl: "/img/hjk_xianhua.jpg",
          jumpUrl: "http://wx.91jdj.cn/?a=25ee321ae0f7f9be&u=qq555555&t=4&type=2",
          weAppUrl: "",
          expire: 1798719620000
      }]
    };

    return NextResponse.json(activity);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
        { error: '失败，请重试 ~' },
        { status: 500 }
    );
  }
}
