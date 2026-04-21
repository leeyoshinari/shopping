import { Platform, ActivityPlatform, SortType } from '../types';

// 淘宝联盟配置
export const TB_CONFIG = {
    url: 'https://eco.taobao.com/router/rest',
    appSecret: '02d230f3f03512b6d004b851e1b02f57',  // 应用AppSecret
    appKey: '32482043',     // 应用app_key
    pidLast: 111189250370,  // 推广位PID最后一位
};

// 京东联盟配置
export const JD_CONFIG = {
    url: 'https://api.jd.com/routerjson',
    appKey: '3496742e2d5a2fde480d356ec922da1e',     // 京东 app key
    appSecret: '200b17a456ac4037a3dd99ad05e1a9a9',  // 京东 app secret
    pid: '1002712393_4100329194_3003427429',        // 京东联盟推广位id
};

// 拼多多配置
export const PDD_CONFIG = {
    url: 'https://gw-api.pinduoduo.com/api/router',
    secret: '2440d8f47d626bb837e4ea3f2920d3966ec37726',     // 拼多多应用client_secret
    clientId: 'ed3db9f07b2a4476bddb07a223c6d68e',       // 拼多多应用client_id
    pid: '15084399_190061927',                          // 拼多多推广位PID
    customParameters: '{"uid":"15084399_190061927"}',   // 拼多多自定义参数
};

// 唯品会配置
export const VIP_CONFIG = {
    pid: 'd619156f131a556c6640229727291160',    // 唯品会推广位PID
};

// 好京客第三方联盟
export const THIRD_CONFIG = {
    url: 'https://api-gw.haojingke.com/index.php/v1/api',
    apiKey: '25ee321ae0f7f9be',     // 好京客的API KEY
    jdUnionId: '1002712393',        // 好京客中授权的京东联盟ID
    jdPositionId: '3003427429',     // 京东联盟推广位最后一位
};

// 平台列表
export const PLATFORMS: Platform[] = ['tb', 'jd', 'pdd', 'wph', 'wm'];

// 平台显示名称
export const PLATFORM_NAMES: Record<Platform, string> = {
    tb: '淘宝',
    jd: '京东',
    pdd: '拼多多',
    wph: '唯品会',
    wm: '美团',
};

// 活动平台列表
export const ACTIVITY_PLATFORMS: ActivityPlatform[] = ['cy', 'tb', 'jd', 'pdd', 'wph', 'mt', 'ele', 'dd', 'qt'];

// 活动平台显示名称
export const ACTIVITY_PLATFORM_NAMES: Record<ActivityPlatform, string> = {
    cy: '餐饮',
    tb: '淘宝',
    jd: '京东',
    pdd: '拼多多',
    wph: '唯品会',
    mt: '美团',
    ele: '饿了么',
    dd: '滴滴',
    qt: '其他',
};

// 排序配置
export const SORT_CONFIG: Record<Platform, Record<SortType, { sortBy: string | null; sortType: string | null } >> = {
    tb: {
        zh: { sortBy: null, sortType: null },
        price: { sortBy: 'price_asc', sortType: null },
        sale: { sortBy: 'total_sales_des', sortType: null },
    },
    jd: {
        zh: { sortBy: null, sortType: null },
        price: { sortBy: '1', sortType: 'asc' },
        sale: { sortBy: '4', sortType: 'desc' },
    },
    pdd: {
        zh: { sortBy: null, sortType: null },
        price: { sortBy: '3', sortType: null },
        sale: { sortBy: '6', sortType: null },
    },
    wph: {
        zh: { sortBy: null, sortType: null },
        price: { sortBy: 'PRICE', sortType: '0' },
        sale: { sortBy: 'DISCOUNT', sortType: '0' },
    },
    wm: {
        zh: { sortBy: null, sortType: null },
        price: { sortBy: null, sortType: null },
        sale: { sortBy: null, sortType: null },
    },
};

// 每页商品数量
export const PAGE_SIZE = 20;
