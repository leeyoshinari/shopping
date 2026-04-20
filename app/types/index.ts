// 平台类型
export type Platform = 'tb' | 'jd' | 'pdd' | 'wph' | 'wm';

// 活动平台类型
export type ActivityPlatform = 'cy' | 'tb' | 'jd' | 'pdd' | 'wph' | 'mt' | 'ele' | 'dd' | 'qt';

//排序类型
export type SortType = 'zh' | 'price' | 'sale';

// 商品项
export interface GoodItem {
    img: string;
    goodsId: string;
    title: string;
    shop: string;
    coupon_url?: string;
    item_url?: string;
    goods_sign?: string;
    search_id?: string;
    coupon_price: number;
    coupon_text: string;
    sale_price: number;
    final_price_text: string;
    final_price: number;
    brokerage: number | string;
}

// 活动项
export interface ActivityItem {
    title?: string;
    desc?: string;
    imgUrl: string;
    jumpUrl: string;
    weAppUrl: string;
    expire: number;
}

// 活动数据
export type ActivityData = Record<ActivityPlatform, ActivityItem[]>;

// 淘宝商品原始数据
export interface TbGoodRaw {
    item_id: string;
    item_basic_info: {
        pict_url: string;
        title: string;
        shop_title: string;
        annual_vol: string;
    };
    price_promotion_info: {
        zk_final_price: string;
        final_promotion_price: string;
    };
    publish_info: {
        coupon_share_url: string;
        click_url: string;
        income_info: {
            commission_amount: number;
        };
    };
}

// 京东商品原始数据
export interface JdGoodRaw {
    goods_id: string;
    picurl: string;
    goods_name: string;
    shopname: string;
    price: string;
    price_after: string;
    sales: number;
    commission: number | string;
}

// 京东搜索商品原始数据
export interface JdSearchGoodRaw {
    itemId: string;
    skuName: string;
    imageInfo: {
        imageList: { url: string }[];
    };
    shopInfo: {
        shopName: string;
    };
    priceInfo: {
        price: number;
    };
    couponInfo?: {
        couponList: { discount: number; quota: number }[];
    };
    commissionInfo: {
        couponCommission: number;
    };
    inOrderCount30Days: number;
}

// 拼多多商品原始数据
export interface PddGoodRaw {
    goods_id: string;
    goods_sign: string;
    search_id: string;
    goods_name: string;
    goods_thumbnail_url: string;
    mall_name: string;
    min_group_price: number;
    coupon_discount?: number;
    sales_tip: string;
    promotion_rate: number;
}

// 唯品会商品原始数据
export interface VipGoodRaw {
    goodsId: string;
    goodsName: string;
    goodsThumbUrl: string;
    brandName: string;
    marketPrice: number;
    vipPrice: number;
    commission: number | string;
    couponInfo: {
        fav: number;
    };
    storeInfo: {
        storeId: string;
        storeName: string;
    };
    commentsInfo: {
        comments: number;
    };
}

// API 响应类型
export interface ApiResponse<T> {
    data?: T;
    error?: string;
}

// 推广链接响应
export interface PromotionResponse {
    urlPath?: string;
    httpUrl?: string;
    data?: string;
}
