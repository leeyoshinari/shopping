'use client';

import { useState, useCallback, useRef, useEffect } from "react";
import { Platform, GoodItem, SortType } from "../types";
import { TB_CONFIG, JD_CONFIG, PDD_CONFIG, VIP_CONFIG, THIRD_CONFIG, SORT_CONFIG, PAGE_SIZE } from "../config/constants";
import { timestampToDate, sign, jsonToUrlParams, isSafari, clickUrl, copyText, formatVolume } from "../utils";

const STORAGE_KEY = 'shopping_platform';

export function useShopping() {
    const [platform, setPlatformState] = useState<Platform>('tb');
    const [isHydrated, setIsHydrated] = useState(false);
    const [searchKey, setSearchKey] = useState("");
    const [sortType, setSortType] = useState<SortType>('zh');
    const [goodsList, setGoodsList] = useState<GoodItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [showSortBar, setShowSortBar] = useState(false);
    const [isPromotionLoading, setIsPromotionLoading] = useState(false);
    
    const goodsListRef = useRef<HTMLDivElement | null>(null);
    const isLoadingRef = useRef(false);
    const searchKeyRef = useRef('');
    const platformRef = useRef<Platform>('tb');
    const sortTypeRef = useRef<SortType>('zh');

    // 先从本地读取平台并加载
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        const initialPlatform = saved ? saved as Platform : 'tb';
        setPlatformState(initialPlatform);
        platformRef.current = initialPlatform;
        setIsHydrated(true);
    }, []);

    // 设置平台并保存到 localstorage
    const setPlatform = useCallback((newPlatform: Platform) => {
        setPlatformState(newPlatform);
        localStorage.setItem(STORAGE_KEY, newPlatform);
    }, []);

    useEffect(() => {
        platformRef.current = platform;
    }, [platform]);

    useEffect(() => {
        sortTypeRef.current = sortType;
    }, [sortType]);

    // 生成推荐商品的URL
    const generateRecommendUrl = useCallback((targetPlatform: Platform, page: number): string => {
        const settings: Record<string, string | number> = {};
        let urlPath = '';

        switch (targetPlatform) {
            case "tb":
                settings.format = 'json';
                settings.sign_method = 'md5';
                settings.app_key = TB_CONFIG.appKey;
                settings.adzone_id = TB_CONFIG.pidLast;
                settings.timestamp = timestampToDate();
                settings.method = 'taobao.tbk.dg.material.recommend';
                settings.v = '2.0';
                settings.page_no = page;
                settings.material_id = 84230;
                settings.sign = sign(settings, TB_CONFIG.appSecret);
                urlPath = `${TB_CONFIG.url}?${jsonToUrlParams(settings)}`;
                break;
            case "jd":
                // settings.format = 'json';
                // settings.sign_method = 'md5';
                // settings.app_key = jdAppKey;
                // settings.timestamp = timestampToDate();
                // settings.method = 'jd.union.open.goods.rank.query';
                // settings.v = '1.0';
                // settings["360buy_param_json"] = JSON.stringify({"RankGoodsReq":{"pageIndex":pageNo,"pageSize":20,"rankId":200000,"sortType":2}});
                // settings.sign = sign(settings, jdAppSecret);
                // urlPath = jdUrl + "?" + jsonToUrlParams(settings);
                settings.apikey = THIRD_CONFIG.apiKey;
                settings.pageIndex = page;
                settings.pageSize = PAGE_SIZE;
                // settings.sortname = 5;
                // settings.sort = 'desc';
                settings.eliteId = 1;
                // urlPath = `${THIRD_CONFIG.url}/jd/goodslist?${jsonToUrlParams(settings)}`;
                urlPath = `${THIRD_CONFIG.url}/jd/getjingfen?${jsonToUrlParams(settings)}`;
                break;
            case "pdd":
                // settings.client_id = pddClientId;
                // settings.pid = pddPid;
                // settings.data_type = 'JSON';
                // settings.type = 'pdd.ddk.goods.recommend.get';
                // settings.offset = (pageNo - 1) * 20;
                // settings.channel_type = 1;
                // settings.timestamp = Math.floor((new Date().getTime())/1000);
                // settings.sign = sign(settings, pddSecret);
                // urlPath = pddUrl + "?" + jsonToUrlParams(settings);
                settings.apikey = THIRD_CONFIG.apiKey;
                settings.channel_type = 1;
                settings.isunion = 1;
                settings.offset = page;
                settings.limit = PAGE_SIZE;
                urlPath = `${THIRD_CONFIG.url}/pdd/getrecommendgoods?${jsonToUrlParams(settings)}`;
                break;
            case "wph":
                settings.apikey = THIRD_CONFIG.apiKey;
                settings.pageindex = page;
                settings.channelType = 1;
                settings.sourceType = 0;
                urlPath = `${THIRD_CONFIG.url}/vip/goodslist?${jsonToUrlParams(settings)}`;
                break;
        }
        return urlPath;
    }, []);

    // 生成搜索商品的url
    const generateSearchUrl = useCallback((targetPlatform: Platform, keyWord: string, page: number): string => {
        const settings: Record<string, string | number> = {};
        const currentSortType = sortTypeRef.current;
        const sortConfig = SORT_CONFIG[targetPlatform][currentSortType];
        let urlPath = '';

        switch (targetPlatform) {
            case "tb":
                settings.format = 'JSON';
                settings.sign_method = 'md5';
                settings.app_key = TB_CONFIG.appKey;
                settings.adzone_id = TB_CONFIG.pidLast;
                settings.timestamp = timestampToDate();
                settings.method = 'taobao.tbk.dg.material.optional.upgrade';
                settings.v = '2.0';
                settings.platform = 2;
                settings.page_no = page;
                settings.q = keyWord;
                if (sortConfig.sortBy) {
                    settings.sort = sortConfig.sortBy;
                }
                settings.sign = sign(settings, TB_CONFIG.appSecret);
                urlPath = `${TB_CONFIG.url}?${jsonToUrlParams(settings)}`;
                break;
            case "jd":
                settings.pageindex = page;
                settings.keyword = keyWord;
                settings.apikey = THIRD_CONFIG.apiKey;
                if (sortConfig.sortBy) {
                    settings.sort = sortConfig.sortType || '';
                    settings.sortname = sortConfig.sortBy;
                }
                settings.isunion = '1';
                settings.ispg = 0;
                urlPath = `${THIRD_CONFIG.url}/jd/goodslist?${jsonToUrlParams(settings)}`;
                break;
            case "pdd":
                // settings.client_id = pddClientId;
                // settings.pid = pddPid;
                // settings.data_type = 'JSON';
                // settings.type = 'pdd.ddk.goods.search';
                settings.page = page;
                settings.keyword = keyWord;
                // settings.timestamp = Math.floor((new Date().getTime())/1000);
                // settings.custom_parameters = pddCustomParameters;
                if (sortConfig.sortBy) {
                    settings.sort_type = parseInt(sortConfig.sortBy);
                }
                // settings.sign = sign(settings, pddSecret);
                // urlPath = pddUrl + "?" + jsonToUrlParams(settings);
                settings.apikey = THIRD_CONFIG.apiKey;
                settings.isunion = 1;
                urlPath = `${THIRD_CONFIG.url}/pdd/goodslist?${jsonToUrlParams(settings)}`;
                break;
            case "wph":
                settings.apikey = THIRD_CONFIG.apiKey;
                settings.pageindex = page;
                settings.keyword = keyWord;
                if (sortConfig.sortType) {
                    settings.order = sortConfig.sortType;
                }
                if (sortConfig.sortBy) {
                    settings.fieldName = sortConfig.sortBy;
                }
                urlPath = `${THIRD_CONFIG.url}/vip/goodsquery?${jsonToUrlParams(settings)}`;
                break;
        }
        return urlPath;
    }, []);

    // 解析淘宝商品
    const parseTbGoods = useCallback((data: unknown): GoodItem[] => {
        const result: GoodItem[] = [];
        try {
            const typedData = data as {
                tbk_dg_material_recommend_response?: { result_list: { map_data: unknown[] } };
                tbk_dg_material_optional_upgrade_response?: { result_list: { map_data: unknown[] } };
            };
            const goodList = typedData.tbk_dg_material_recommend_response?.result_list?.map_data || 
                             typedData.tbk_dg_material_optional_upgrade_response?.result_list?.map_data || [];
            goodList.forEach((item: unknown) => {
                const raw = item as {
                    item_id: string;
                    item_basic_info: { pict_url: string; title: string; shop_title: string; annual_vol: string };
                    price_promotion_info: { zk_final_price: string; final_promotion_price: string };
                    publish_info: { coupon_share_url: string; click_url: string, income_info: { commission_amount: number } };
                };
                const sku: GoodItem = {
                    img: raw.item_basic_info.pict_url.startsWith('http') ? raw.item_basic_info.pict_url : `https:${raw.item_basic_info.pict_url}`,
                    goodsId: raw.item_id,
                    title: raw.item_basic_info.title,
                    shop: raw.item_basic_info.shop_title,
                    coupon_url: raw.publish_info.coupon_share_url,
                    item_url: raw.publish_info.click_url,
                    brokerage: raw.publish_info.income_info.commission_amount,
                    coupon_price: 0,
                    coupon_text: '',
                    sale_price: 0,
                    final_price_text: '',
                    final_price: Number(raw.price_promotion_info.final_promotion_price)
                }
                const deltaPrice = Number(raw.price_promotion_info.zk_final_price) - Number(raw.price_promotion_info.final_promotion_price);
                if (deltaPrice === 0) {
                    sku.coupon_text = `${raw.item_basic_info.annual_vol}人已购买`;
                } else {
                    sku.coupon_price = Number(deltaPrice.toFixed(2));
                    sku.coupon_text = `元券\u00A0\u00A0\u00A0${raw.item_basic_info.annual_vol}人已购买`;
                    sku.sale_price = Number(raw.price_promotion_info.zk_final_price);
                    sku.final_price_text = " 券后 ￥";
                }
                result.push(sku);
            });
        } catch (err) {
            console.error(err);
        }
        return result;
    }, []);

    // 解析京东商品
    const parseJdGoods = useCallback((data: unknown): GoodItem[] => {
        const result: GoodItem[] = [];
        try {
            const typedData = data as { data?: { data: unknown[] } };
            const goodList = typedData.data?.data || [];

            goodList.forEach((item: unknown) => {
                const raw = item as {
                    goods_id: string;
                    picurl: string;
                    goods_name: string;
                    shopname: string;
                    price: string;
                    price_after: string;
                    sales: number;
                    commission: number;
                };
                const volume = raw.sales;
                const volumeText = formatVolume(volume);
                const sku: GoodItem = {
                    img: raw.picurl,
                    goodsId: raw.goods_id,
                    title: raw.goods_name,
                    shop: raw.shopname,
                    brokerage: raw.commission,
                    coupon_price: 0,
                    coupon_text: '',
                    sale_price: 0,
                    final_price_text: '',
                    final_price: 0,
                };

                if (Number(raw.price) > Number(raw.price_after)) {
                    sku.coupon_price = Number((Number(raw.price) - Number(raw.price_after)).toFixed(2));
                    sku.coupon_text = `元券\u00A0\u00A0\u00A0${volumeText}人已购买`;
                    sku.sale_price = Number(raw.price);
                    sku.final_price = Number(raw.price_after);
                    sku.final_price_text = " 券后 ￥";
                } else {
                    sku.coupon_text = `${volumeText}人已购买`;
                    sku.final_price = Number(raw.price);
                }
                result.push(sku);
            });
        } catch (err) {
            console.error(err);
        }
        return result;
    }, []);

    // 解析京东搜索商品
    const parseJdSearchGoods = useCallback((data: unknown): GoodItem[] => {
        const result: GoodItem[] = [];
        try {
            const typedData = data as { data?: { data: unknown[] } };
            const goodList = typedData.data?.data || [];

            goodList.forEach((item: unknown) => {
                const raw = item as {
                    itemId: string;
                    skuName: string;
                    imageInfo: { imageList: { url: string }[] };
                    shopInfo: { shopName: string };
                    priceInfo: { price: number };
                    couponInfo?: { couponList: { discount: number; quota: number }[] };
                    commissionInfo: { couponCommission: number };
                    inOrderCount30Days: number;
                };
                const volume = raw.inOrderCount30Days;
                const volumeText = formatVolume(volume);
                const sku: GoodItem = {
                    img: raw.imageInfo.imageList[0].url,
                    goodsId: raw.itemId,
                    title: raw.skuName,
                    shop: raw.shopInfo.shopName,
                    brokerage: raw.commissionInfo.couponCommission,
                    coupon_price: 0,
                    coupon_text: '',
                    sale_price: 0,
                    final_price_text: '',
                    final_price: 0,
                };
                const couponList = raw.couponInfo?.couponList;
                if (couponList && couponList.length > 0 && couponList[0].quota <= raw.priceInfo.price) {
                    sku.coupon_price = couponList[0].discount;
                    sku.coupon_text = `元券\u00A0\u00A0\u00A0${volumeText}人已购买`;
                    sku.sale_price = raw.priceInfo.price;
                    sku.final_price_text = " 券后 ￥";
                    sku.final_price = Number((raw.priceInfo.price - couponList[0].discount).toFixed(2));
                } else {
                    sku.coupon_text = `${volumeText}人已购买`;
                    sku.final_price = raw.priceInfo.price;
                }
                result.push(sku);
            });
        } catch (err) {
            console.error(err);
        }
        return result;
    }, []);

    // 解析拼多多商品
    const parsePddGoods = useCallback((data: unknown): GoodItem[] => {
        const result: GoodItem[] = [];
        try {
            const typedData = data as { data?: { goods_list: unknown[] } };
            const goodList = typedData.data?.goods_list || [];

            goodList.forEach((item: unknown) => {
                const raw = item as {
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
                };
                const sku: GoodItem = {
                    img: raw.goods_thumbnail_url,
                    goodsId: raw.goods_id,
                    goods_sign: raw.goods_sign,
                    search_id: raw.search_id,
                    title: raw.goods_name,
                    shop: raw.mall_name,
                    brokerage: 0,
                    coupon_price: 0,
                    coupon_text: '',
                    sale_price: 0,
                    final_price: 0,
                    final_price_text: '',
                };

                if (raw.coupon_discount && raw.coupon_discount > 0) {
                    sku.coupon_price = Number((raw.coupon_discount / 100).toFixed(2));
                    sku.coupon_text = `元券\u00A0\u00A0\u00A0${raw.sales_tip}人已购买`;
                    sku.sale_price = Number((raw.min_group_price / 100).toFixed(2));
                    sku.final_price_text = " 券后 ￥";
                    sku.final_price = Number(((raw.min_group_price - raw.coupon_discount) / 100).toFixed(2));
                    sku.brokerage = Number((raw.promotion_rate / 1000 * sku.final_price).toFixed(2));
                } else {
                    sku.coupon_text = `${raw.sales_tip}人已购买`;
                    sku.final_price = Number((raw.min_group_price / 100).toFixed(2));
                    sku.brokerage = Number((raw.promotion_rate / 1000 * raw.min_group_price / 100).toFixed(2));
                }
                result.push(sku);
            });
        } catch (err) {
            console.error(err);
        }
        return result;
    }, []);

    // 解析唯品会商品
    const parseVipGoods = useCallback((data: unknown): GoodItem[] => {
        const result: GoodItem[] = [];
        try {
            const typedData = data as { data?: { goodsInfoList: unknown[] } };
            const goodList = typedData.data?.goodsInfoList || [];

            goodList.forEach((item: unknown) => {
                const raw = item as {
                    goodsId: string;
                    goodsName: string;
                    goodsThumbUrl: string;
                    brandName: string;
                    marketPrice: number;
                    vipPrice: number;
                    commission: number;
                    couponInfo?: { fav: number };
                    storeInfo: { storeId: string; storeName: string };
                    commentsInfo: { comments: number };
                };
                const volume = raw.commentsInfo.comments;
                const volumeText = formatVolume(volume);
                const sku: GoodItem = {
                    img: raw.goodsThumbUrl.startsWith('https:') ? raw.goodsThumbUrl : raw.goodsThumbUrl.replace('http:', 'https:'),
                    goodsId: raw.goodsId,
                    title: raw.goodsName,
                    shop: raw.storeInfo.storeId === 'ST00000' ? `${raw.brandName} - 唯品自营` : raw.storeInfo.storeName,
                    sale_price: raw.marketPrice,
                    final_price_text: " 折后 ￥",
                    brokerage: raw.commission,
                    coupon_price: 0,
                    coupon_text: '',
                    final_price: 0,
                };
                if (raw.couponInfo) {
                    sku.coupon_price = raw.couponInfo.fav;
                    sku.coupon_text = `元券\u00A0\u00A0\u00A0${volumeText}人已购买`;
                    sku.final_price = Number((raw.vipPrice - raw.couponInfo.fav).toFixed(2));
                } else {
                    sku.coupon_text = `${volumeText}人已购买`;
                    sku.final_price = raw.vipPrice;
                }
                result.push(sku);
            });
        } catch (err) {
            console.error(err);
        }
        return result;
    }, []);

    // 加载商品列表
    const loadGoodsWithPlatform = useCallback(async (targetPlatform: Platform, page: number, isNewSearch = false) => {
        if (isLoadingRef.current || (!hasMore && !isNewSearch)) return;

        isLoadingRef.current = true;
        setIsLoading(true);
        const currentSearchKey = searchKeyRef.current;

        try {
            const url = currentSearchKey ? generateSearchUrl(targetPlatform, currentSearchKey, page) : generateRecommendUrl(targetPlatform, page);
            const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            let parsedGoods: GoodItem[] = [];
            if (currentSearchKey) {
                // 搜索列表
                switch (targetPlatform) {
                    case 'tb':
                        parsedGoods = parseTbGoods(data);
                        break;
                    case 'jd':
                        parsedGoods = parseJdSearchGoods(data);
                        break;
                    case 'pdd':
                        parsedGoods = parsePddGoods(data);
                        break;
                    case 'wph':
                        parsedGoods = parseVipGoods(data);
                        break;
                }
            } else {
                // 推荐列表
                switch (targetPlatform) {
                    case 'tb':
                        parsedGoods = parseTbGoods(data);
                        break;
                    case 'jd':
                        parsedGoods = parseJdGoods(data);
                        break;
                    case 'pdd':
                        parsedGoods = parsePddGoods(data);
                        break;
                    case 'wph':
                        parsedGoods = parseVipGoods(data);
                        break;
                }
            }

            if (parsedGoods.length === 0) {
                setHasMore(false);
            } else {
                setGoodsList((prev: GoodItem[]) => isNewSearch ? parsedGoods : [...prev, ...parsedGoods]);
                setPageNo(page);
            }
        } catch (err) {
            console.error(err);
        } finally {
            isLoadingRef.current = false;
            setIsLoading(false);
        }
    }, [hasMore, generateRecommendUrl, generateSearchUrl, parseTbGoods, parseJdGoods, parseJdSearchGoods, parsePddGoods, parseVipGoods]);

    const loadGoods = useCallback(async (page: number, isNewSearch = false) => {
        await loadGoodsWithPlatform(platformRef.current, page, isNewSearch);
    }, [loadGoodsWithPlatform]);

    useEffect(() => {
        if (!isHydrated || platform === 'wm') return;
        loadGoods(1, true);
    }, [isHydrated, platform, loadGoods]);

    //  处理搜索
    const handleSearch = useCallback((keyword: string) => {
        searchKeyRef.current = keyword;
        setSearchKey(keyword);
        setGoodsList([]);
        setPageNo(1);
        setHasMore(true);
        setShowSortBar(!!keyword);
        loadGoods(1, true);
    }, [loadGoods]);

    // 处理排序变更
    const handleSortChange = useCallback((newSortType: SortType) => {
        sortTypeRef.current = newSortType;
        setSortType(newSortType);
        setGoodsList([]);
        setPageNo(1);
        setHasMore(true);
        loadGoods(1, true);
    }, [loadGoods]);

    // 处理平台切换
    const handlePlatformChange = useCallback((newPlatform: Platform) => {
        platformRef.current = newPlatform;
        setPlatform(newPlatform);
        setGoodsList([]);
        setPageNo(1);
        setHasMore(true);

        if (newPlatform === 'wm') {
            setShowSortBar(false);
            return;
        }

        setShowSortBar(!!searchKeyRef.current);
        loadGoods(1, true);
    }, [loadGoods]);

    // 处理滚动加载
    const handleScroll = useCallback(() => {
        if (!goodsListRef.current || isLoadingRef.current || !hasMore) return;

        const { scrollTop, clientHeight, scrollHeight } = goodsListRef.current;
        if (scrollTop + clientHeight + 150 >= scrollHeight) {
            loadGoods(pageNo + 1);
        }
    }, [pageNo, hasMore, loadGoods]);

    // 生成推广链接并跳转
    const generatePromotion = useCallback(async (item: GoodItem, onError: (msg: string) => void, onSuccess?: (jumpUrl: string, webUrl?:string) => void) => {
        setIsPromotionLoading(true);
        try {
            let targetUrl: string = "";
            const settings: Record<string, string | number> = {};

            switch (platform) {
                case 'tb':
                    const couponUrl = item.coupon_url;
                    const urlPath = couponUrl ? couponUrl.replace('https:', '').replace('http:', '') : item.item_url?.replace('https:', '').replace('http:', '') || '';
                    const jumpUrl = `taobao:${urlPath}`;
                    setIsPromotionLoading(false);
                    clickUrl(jumpUrl);
                    return;
                case 'jd':
                    settings.apikey = THIRD_CONFIG.apiKey;
                    settings.unionId = THIRD_CONFIG.jdUnionId;
                    settings.positionid = THIRD_CONFIG.jdPositionId;
                    settings.type = 1;
                    settings.goods_id = item.goodsId;
                    targetUrl = `${THIRD_CONFIG.url}/jd/getunionurl?${jsonToUrlParams(settings)}`;
                    break;
                case "pdd":
                    // settings.client_id = pddClientId;
                    // settings.p_id = pddPid;
                    // settings.data_type = "JSON";
                    // settings.type = "pdd.ddk.goods.promotion.url.generate";
                    // settings.timestamp = Math.floor((new Date().getTime())/1000);
                    settings.generate_authority_url = 1;
                    // settings.goods_sign_list = "[\"" + queryParam.goods_sign + "\"]";
                    settings.search_id = item.search_id || '';
                    // settings.generate_schema_url = true;
                    // settings.generate_we_app = true;
                    // settings.sign = sign(settings, pddSecret);
                    // urlPath = pddUrl + "?" + jsonToUrlParams(settings);
                    settings.apikey = THIRD_CONFIG.apiKey;
                    settings.pid = PDD_CONFIG.pid;
                    settings.goods_sign = item.goods_sign || '';
                    settings.positionid = PDD_CONFIG.customParameters;
                    targetUrl = `${THIRD_CONFIG.url}/pdd/getunionurl?${jsonToUrlParams(settings)}`;
                    break;
                case "wph":
                    settings.apikey = THIRD_CONFIG.apiKey;
                    settings.goods_id = item.goodsId;
                    settings.chanTag = VIP_CONFIG.pid;
                    settings.type = 1;
                    targetUrl = `${THIRD_CONFIG.url}/vip/getunionurl?${jsonToUrlParams(settings)}`;
                    break;
            }

            const response = await fetch(`/api/proxy?url=${encodeURIComponent(targetUrl)}`);
            const data = await response.json();

            let jumpUrl = '';
            let webUrl = '';

            switch (platform) {
                case 'jd':
                    const jdPath = `{"category":"jump","des":"m","url":"${data.data}"}`;
                    jumpUrl = `openapp.jdmobile://virtual?params=${encodeURIComponent(jdPath)}`;
                    webUrl = data.data;
                    break;
                case "pdd":
                    // jump_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].schema_url;
                    jumpUrl = data.data?.alldata?.schema_url || '';
                    // we_app_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].we_app_info.page_path;
                    webUrl = data.data?.alldata?.we_app_info.page_path || '';
                    // share_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].short_url;
                    // we_app_url = skuObj.data?.alldata.short_url;
                    break;
                case "wph":
                    jumpUrl = data.data?.urlInfoList[0].deeplinkUrl || '';
                    webUrl = data.data?.urlInfoList[0].vipZfbSchemeUrl || '';
                    break;
            }

            if (isSafari()) {
                setIsPromotionLoading(false);
                onSuccess?.(jumpUrl, webUrl);
                onError('由于 Safari 浏览器限制, 您需要再点击一次');
                return;
            }

            setIsPromotionLoading(false);
            if (platform === 'pdd') {
                await copyText(webUrl || jumpUrl);
                setTimeout(() => clickUrl(jumpUrl), 50);
            } else {
                setTimeout(() => clickUrl(jumpUrl), 50);
            }
        } catch (err) {
            setIsPromotionLoading(false);
            console.error(err);
            onError('生成链接失败, 请重试: ' + err);
        }
    }, [platform]);

    // 清空搜索
    const handleClearSearch = useCallback(() => {
        searchKeyRef.current = '';
        setSearchKey('');
        setGoodsList([]);
        setPageNo(1);
        setHasMore(true);
        setShowSortBar(false);
        loadGoods(1, true);
    }, [loadGoods]);

    return {
        platform,
        searchKey,
        sortType,
        isHydrated,
        goodsList,
        isLoading,
        isPromotionLoading,
        showSortBar,
        hasMore,
        goodsListRef,
        handleSearch,
        handleSortChange,
        handlePlatformChange,
        handleScroll,
        handleClearSearch,
        generatePromotion,
    };
}