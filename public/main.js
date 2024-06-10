const tbUrl = 'https://eco.taobao.com/router/rest'; // 淘宝联盟 url
const tbAppSceret = '02d230f3f03512b6d004b851e1b02f57'; // 应用AppSecret
const tbAppKey = '32482043';    // 应用app_key
const tbPidLast = 111189250370; // 推广位PID最后一位
const jdUrl = 'https://api.jd.com/routerjson';  // 京东官方 url
const jdAppKey = '3496742e2d5a2fde480d356ec922da1e';
const jdAppSecret = '200b17a456ac4037a3dd99ad05e1a9a9';
const jdPid = '1002712393_4100329194_3003427429';
const pddUrl = 'https://gw-api.pinduoduo.com/api/router';   // 多多进宝 url
const pddSecret = '2440d8f47d626bb837e4ea3f2920d3966ec37726';   // 拼多多应用client_secret
const pddClientId = 'ed3db9f07b2a4476bddb07a223c6d68e'; // 拼多多应用client_id
const pddPid = '15084399_190061927';    // 拼多多推广位PID
const pddCustomParameters = "{\"uid\":\"15084399_190061927\"}"
const vipPid = 'd619156f131a556c6640229727291160';      // 唯品会推广位PID
const thirdApiKey = '25ee321ae0f7f9be';  // 好京客的API KEY
const thirdUrl = 'https://api-gw.haojingke.com/index.php/v1/api';   // 好京客的URL
const thirdJdUnionId = '1002712393';
const thirdJdPositionId = '3003427429';

let platform = localStorage.getItem('platform')? localStorage.getItem('platform') : 'tb';
let activityPlatform = localStorage.getItem('activityPlatform')? localStorage.getItem('activityPlatform') : 'tb';
let sortBy = null;
let sortType = null;
let pageNo = 1;
let isLoading = false;   // 数据加载标志，防止重复加载
let startX, startY, startTime;
let activityIndex = 0;

const activityIds = ['tb', 'jd', 'pdd', 'wph', 'mt'];   // 和页面上的顺序保持一致
const goodsListElement = document.getElementsByClassName("row-three")[0];

document.getElementsByClassName('footer')[0].querySelectorAll('div').forEach(item => {
    item.addEventListener('click', (event) => {
        platform = event.currentTarget.id;
        localStorage.setItem('platform', platform);
        switchPlatform();
    })
})


document.getElementsByClassName("close")[0].addEventListener("click", (event) => {
    document.getElementById("search-id").value = null;
})

document.getElementsByClassName("search")[0].addEventListener("click", (event) => {
    let searchKey = document.getElementById("search-id").value;
    if (searchKey && searchKey.trim() !== '') {
        goodsListElement.innerHTML = '';
        getGoodList(sortBy, sortType, pageNo, true);
    } else {
        showTips("请输入商品名称 ~");
    }
})

document.getElementById("zh").addEventListener("click", (event) => {
    sortBy = null;
    sortType = null;
    clickSortChangeColor('zh');
})

document.getElementById("price").addEventListener("click", (event) => {
    if (platform === 'tb') {sortBy = 'price_asc'; sortType = null;}
    if (platform === 'pdd') {sortBy = '3'; sortType = null;}
    if (platform === 'jd') {sortBy = '1'; sortType = 'asc';}
    if (platform === 'wph') {sortBy = 'PRICE'; sortType = '0';}
    clickSortChangeColor('price');
})

document.getElementById("sale").addEventListener("click", (event) => {
    if (platform === 'tb') {sortBy = 'total_sales_des'; sortType = null;}
    if (platform === 'pdd') {sortBy = '6'; sortType = null;}
    if (platform === 'jd') {sortBy = '4'; sortType = 'desc';}
    if (platform === 'wph') {sortBy = 'DISCOUNT'; sortType = '0';}
    clickSortChangeColor('sale');
})

goodsListElement.onscroll = () => {
    if (goodsListElement.scrollTop + goodsListElement.clientHeight + 150 >= goodsListElement.scrollHeight && !isLoading) {
        pageNo += 1;
        getGoodList(sortBy, sortType, pageNo, true);
    }
}

document.getElementsByClassName("activity-header")[0].querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener('click', (event) => {
        activityPlatform = item.className.replace('nav-item', '').replace('filter', '').trim();
        clickChangeActivity(activityPlatform);
    })
})

var switchPlatform = () => {
    document.getElementsByClassName('row-two')[0].style.display = 'none';
    let imgs = document.getElementsByClassName('footer')[0].querySelectorAll('div');
    imgs.forEach(item => {
        if (item.id === platform) {
            item.classList.remove('filter')
        } else {
            item.classList.contains('filter')? null : item.classList.add('filter');
        }
    })
    goodsListElement.innerHTML = '';
    if (platform === 'wm') {
        document.getElementsByClassName('row-one')[0].style.display = 'none';
        document.getElementsByClassName('activity-header')[0].style.display = 'block';
        document.getElementsByClassName('row-three')[0].style.backgroundColor = '#e1e1e1';
        clickChangeActivity(activityPlatform);
        goodsListElement.addEventListener("touchstart", moveTouchStart, {passive: false});
        goodsListElement.addEventListener("touchmove", moveTouchMove, {passive: false});
        goodsListElement.addEventListener("touchend", moveTouchEnd, {passive: false});
    } else {
        document.getElementsByClassName('activity-header')[0].style.display = 'none';
        document.getElementsByClassName('row-one')[0].style.display = 'block';
        document.getElementsByClassName('row-three')[0].style.backgroundColor = 'white';
        goodsListElement.removeEventListener("touchstart", moveTouchStart, {passive: false});
        goodsListElement.removeEventListener("touchmove", moveTouchMove, {passive: false});
        goodsListElement.removeEventListener("touchend", moveTouchEnd, {passive: false});
        getGoodList(sortBy, sortType, pageNo, true);
    }
}

var moveTouchStart = (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
    startTime = new Date().getTime();
}

var moveTouchMove = (event) => {
    let touch = event.touches[0];
    let deltaX = touch.pageX - startX;
    let deltaY = touch.pageY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) >= 60) {
        event.preventDefault();
    }
}

var moveTouchEnd = (event) => {
    event.preventDefault();
    let endX = event.changedTouches[0].clientX;
    let endY = event.changedTouches[0].clientY;
    let endTime = new Date().getTime();
    let deltaY = endY - startY;
    if (endX - startX > 60 && Math.abs(deltaY) < 60) {
        activityIndex = activityIndex - 1;
        activityIndex = activityIndex < 0? activityIds.length - 1 : activityIndex;
        clickChangeActivity(activityIds[activityIndex]);
    } else if (startX - endX > 60 && Math.abs(deltaY) < 60) {
        activityIndex = activityIndex + 1;
        activityIndex = activityIndex >= activityIds.length? 0 : activityIndex;
        clickChangeActivity(activityIds[activityIndex]);
    } else if (Math.abs(deltaY) < 60 && endTime - startTime < 100) {
        event.target.click();
    }
}

var clickSortChangeColor = (eleId) => {
    document.getElementsByClassName("sort-by")[0].querySelectorAll("span").forEach(item => {
        if (eleId === item.id) {
            item.classList.contains('filter')? item.classList.remove('filter'): null;
        } else {
            item.classList.contains('filter')? null: item.classList.add('filter');
        }
    })
    goodsListElement.innerHTML = '';
    getGoodList(sortBy, sortType, pageNo, true);
}

var generateUrlPathForRecommend = (pageNo) => {
    let urlPath = '';
    let settings = {};
    try {
        switch (platform) {
            case "tb":
                settings.format = 'json';
                settings.sign_method = 'md5';
                settings.app_key = tbAppKey;
                settings.adzone_id = tbPidLast;
                settings.timestamp = timestampToDate();
                settings.method = 'taobao.tbk.dg.material.recommend';
                settings.v = '2.0';
                settings.page_no = pageNo;
                settings.material_id = 86594;
                settings.sign = sign(settings, tbAppSceret);
                urlPath = tbUrl + "?" + jsonToUrlParams(settings);
                break;
            case "jd":
                // settings.format = 'json';
                // settings.sign_method = 'md5';
                // settings.app_key = jdAppKey;
                // settings.timestamp = timestampToDate();
                // settings.method = 'jd.union.open.goods.material.query';
                // settings.v = '1.0';
                // settings["360buy_param_json"] = JSON.stringify({"goodsReq":{"eliteId":2,"pageIndex":pageNo}});
                // settings.sign = sign(settings, jdAppSecret);
                // urlPath = jdUrl + "?" + jsonToUrlParams(settings);
                settings.apikey = thirdApiKey;
                settings.pageindex = pageNo;
                settings.activityid = 10000;
                urlPath = thirdUrl + "/jd/getgoodsbd?" + jsonToUrlParams(settings);
                break;
            case "pdd":
                settings.client_id = pddClientId;
                settings.pid = pddPid;
                settings.data_type = 'JSON';
                settings.type = 'pdd.ddk.goods.recommend.get';
                settings.offset = (pageNo - 1) * 20;
                settings.channel_type = 1;
                settings.timestamp = Math.floor((new Date().getTime())/1000);
                settings.sign = sign(settings, pddSecret);
                urlPath = pddUrl + "?" + jsonToUrlParams(settings);
                break;
            case "wph":
                settings.apikey = thirdApiKey;
                settings.pageindex = pageNo;
                settings.channelType = 1;
                settings.sourceType = 0;
                urlPath = thirdUrl + "/vip/goodslist?" + jsonToUrlParams(settings);
                break;
        }
    } catch (error) {
        console.error(error);
    }
    return urlPath;
}

var  generateUrlPathForSearch = (searchKey, sort, sortType, pageNo) => {
    let urlPath = '';
    let settings = {};
    try {
        switch (platform) {
            case "tb":
                settings.format = 'JSON';
                settings.sign_method = 'md5';
                settings.app_key = tbAppKey;
                settings.adzone_id = tbPidLast;
                settings.timestamp = timestampToDate();
                settings.method = 'taobao.tbk.dg.material.optional.upgrade';
                settings.v = '2.0';
                settings.platform = 2;
                settings.page_no = pageNo;
                settings.q = searchKey;
                if (sort && sort.trim() !== '') {
                    settings.sort = sort;
                }
                settings.sign = sign(settings, tbAppSceret);
                urlPath = tbUrl + "?" + jsonToUrlParams(settings);
                break;
            case "jd":
                settings.pageindex = pageNo;
                settings.keyword = searchKey;
                settings.apikey = thirdApiKey;
                settings.sort = sortType;
                settings.sortname = sort;
                settings.isunion = '1';
                settings.ispg = 0;
                urlPath = thirdUrl + "/jd/goodslist?" + jsonToUrlParams(settings);
                break;
            case "pdd":
                settings.client_id = pddClientId;
                settings.pid = pddPid;
                settings.data_type = 'JSON';
                settings.type = 'pdd.ddk.goods.search';
                settings.page = pageNo;
                settings.keyword = searchKey;
                settings.timestamp = Math.floor((new Date().getTime())/1000);
                settings.custom_parameters = pddCustomParameters;
                if (sort && sort.trim() !== '') {
                    settings.sort_type = parseInt(sort);
                }
                settings.sign = sign(settings, pddSecret);
                urlPath = pddUrl + "?" + jsonToUrlParams(settings);
                break;
            case "wph":
                settings.apikey = thirdApiKey;
                settings.pageindex = pageNo;
                settings.keyword = searchKey;
                if (sortType && sortType.trim() !== '') {
                    settings.order = sortType;
                }
                if (sort && sort.trim() !== '') {
                    settings.fieldName = sort;
                }
                urlPath = thirdUrl + "/vip/goodsquery?" + jsonToUrlParams(settings);
                break;
        }
    } catch (error) {
        console.error(error);
    }
    return urlPath;
}

var getGoodList = (sort, sortType, pageNo, flag) => {
    isLoading = true;
    let result = [];
    let searchKey = document.getElementById("search-id").value;
    document.getElementsByClassName("spinner-container")[0].style.display = 'flex';
    try {
        if (searchKey && searchKey.trim() !== '') {
            document.getElementsByClassName('row-two')[0].style.display = 'block';
            fetch('/api/proxy?url=' + encodeURIComponent(generateUrlPathForSearch(searchKey, sort, sortType, pageNo)))
                .then(response => response.json())
                .then(data => parseSearchGoodList(data))
                .catch(error => console.error(error));
        } else {
            fetch('/api/proxy?url=' + encodeURIComponent(generateUrlPathForRecommend(pageNo)))
                .then(response => response.json())
                .then(data => parseRecommendGoodList(data))
                .catch(error => console.error(error));
        }
    } catch (error) {
        console.error(error);
        document.getElementsByClassName("spinner-container")[0].style.display = 'none';
    }
    return result;
}

var parseRecommendGoodList = (goodObj) => {
    let result = [];
    switch (platform) {
        case "tb":
            result = parseTbRecommendGoodList(goodObj);
            break;
        case "jd":
            result = parseJdRecommendGoodList(goodObj);
            break;
        case "pdd":
            result = parsePddRecommendGoodList(goodObj);
            break;
        case "wph":
            result = parseWphRecommendGoodList(goodObj);
            break;
    }
    showOnPage(result);
    isLoading = false;
    document.getElementsByClassName("spinner-container")[0].style.display = 'none';
}

var parseSearchGoodList = (goodObj) => {
    let result = [];
    switch (platform) {
        case "tb":
            result = parseTbSearchGoodList(goodObj);
            break;
        case "jd":
            result = parseJdSearchGoodList(goodObj);
            break;
        case "pdd":
            result = parsePddSearchGoodList(goodObj);
            break;
        case "wph":
            result = parseWphRecommendGoodList(goodObj);
            break;
    }
    showOnPage(result);
    isLoading = false;
    document.getElementsByClassName("spinner-container")[0].style.display = 'none';
}

var parseTbRecommendGoodList = (goodObj) => {
    let result = [];
    try {
        let goodList = goodObj?.tbk_dg_material_recommend_response?.result_list?.map_data;
        result = getTbGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var parseTbSearchGoodList = (goodObj) => {
    let result = [];
    try {
        let goodList = goodObj?.tbk_dg_material_optional_upgrade_response?.result_list?.map_data;
        result = getTbGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var parseJdRecommendGoodList = (goodObj) => {
    let result = [];
    try {
        // let goodstr = goodObj?.jd_union_open_goods_rank_query_responce?.queryResult;
        // let goodList = JSON.parse(goodstr).data;
        let goodList = goodObj?.data?.data;
        result = getJdGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var parseJdSearchGoodList = (goodObj) => {
    let result = [];
    try {
        let goodList = goodObj?.data?.data;
        result = getJdSearchGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var parsePddRecommendGoodList = (goodObj) => {
    let result = [];
    try {
        let goodList = goodObj?.goods_basic_detail_response?.list;
        result = getPddGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var parsePddSearchGoodList = (goodObj) => {
    let result = [];
    try {
        let goodList = goodObj?.goods_search_response?.goods_list;
        result = getPddGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var parseWphRecommendGoodList = (goodObj) => {
    let result = [];
    try {
        let goodList = goodObj?.data?.goodsInfoList;
        result = getWphGoodList(goodList);
    } catch (error) {
        console.error(error);
    }
    return result;
}

var getTbGoodList = (goodList) => {
    let result = [];
    try {
        goodList.forEach(item => {
            let sku = {};
            sku.img = item.item_basic_info.pict_url.startsWith("http")? item.item_basic_info.pict_url : "https:" + item.item_basic_info.pict_url;
            sku.goodsId = item.item_id;
            sku.title = item.item_basic_info.title;
            sku.shop = item.item_basic_info.shop_title;
            sku.coupon_url = item.publish_info.coupon_share_url;
            sku.item_url = item.publish_info.click_url;
            let delta_price = Number(item.price_promotion_info.zk_final_price) - Number(item.price_promotion_info.final_promotion_price);
            if (delta_price === 0) {
                sku.coupon_price = 0;
                sku.coupon_text = item.item_basic_info.annual_vol + "人已购买";
                sku.sale_price = 0;
                sku.final_price_text = '';
            } else {
                sku.coupon_price = Number(delta_price.toFixed(2));
                sku.coupon_text = "元券\u00A0\u00A0\u00A0" + item.item_basic_info.annual_vol + "人已购买";
                sku.sale_price = item.price_promotion_info.zk_final_price;
                sku.final_price_text = " 券后 ￥";
            }
            sku.final_price = item.price_promotion_info.final_promotion_price;
            sku.brokerage = item.publish_info.income_info.commission_amount;
            result.push(sku);
        })
    } catch (error) {
        console.error(error);
    }
    return result;
}

var getJdGoodList = (goodList) => {
    let result = [];
    try {
        goodList.forEach(item => {
            let sku = {};
            sku.img = item.picurl;
            sku.title = item.goods_name;
            sku.shop = item.shopname;
            sku.goodsId = item.goods_id;
            sku.brokerage = item.commission;
            let volume = item.sales;
            let volumeText = volume;
            if (volume > 9999) {
                volumeText = Number((volume / 10000).toFixed(1)) + "万";
            } else if (volume > 999) {
                volumeText = Number((volume / 1000).toFixed(1)) + "千";
            }
            if (item.price > item.price_after) {
                sku.coupon_price = Number((item.price - item.price_after).toFixed(2));
                sku.coupon_text = "元券\u00A0\u00A0\u00A0" + volumeText + "人已购买";
                sku.sale_price = item.price;
                sku.final_price_text = " 券后 ￥";
                sku.final_price = item.price_after;
            } else {
                sku.coupon_price = 0;
                sku.coupon_text = volumeText + "人已购买";
                sku.sale_price = 0;
                sku.final_price_text = "";
                sku.final_price = item.price;
            }
            result.push(sku);
        })
    } catch (error) {
        console.error(error);
    }
    return result;
}

var getPddGoodList = (goodList) => {
    let result = [];
    try {
        goodList.forEach(item => {
            let sku = {};
            sku.img = item.goods_thumbnail_url;
            sku.title = item.goods_name;
            sku.shop = item.mall_name;
            sku.goods_sign = item.goods_sign;
            sku.search_id = item.search_id;
            if (item.coupon_discount && item.coupon_discount > 0) {
                sku.coupon_price = Number((item.coupon_discount / 100).toFixed(2));
                sku.coupon_text = "元券\u00A0\u00A0\u00A0" + item.sales_tip + "人已购买";
                sku.sale_price = Number((item.min_group_price / 100).toFixed(2));
                sku.final_price_text = " 券后 ￥";
                sku.final_price = Number(((item.min_group_price - item.coupon_discount) / 100).toFixed(2));
                sku.brokerage = Number((item.promotion_rate / 1000 * sku.final_price).toFixed(2));
            } else {
                sku.coupon_price = 0;
                sku.coupon_text = item.sales_tip + "人已购买";
                sku.sale_price = 0;
                sku.final_price_text = '';
                sku.final_price = Number((item.min_group_price / 100).toFixed(2));
                sku.brokerage = Number((item.promotion_rate / 1000 * item.min_group_price / 100).toFixed(2));
            }
            result.push(sku);
        })
    } catch (error) {
        console.error(error);
    }
    return result;
}

var getWphGoodList = (goodList) => {
    let result = [];
    try {
        goodList.forEach(item => {
            let sku = {};
            sku.img = item.goodsThumbUrl.startsWith("https:")? item.goodsThumbUrl: item.goodsThumbUrl.replace("http:", "https:");
            sku.title = item.goodsName;
            sku.goodsId = item.goodsId;
            sku.sale_price = item.marketPrice;
            sku.final_price_text = " 折后 ￥";
            sku.brokerage = item.commission;
            if (item.storeInfo.storeId === 'ST00000') {
                sku.shop = item.brandName + " - 唯品自营";
            } else {
                sku.shop = item.storeInfo.storeName;
            }
            let volume = item.commentsInfo.comments;
            let volumeText = volume;
            if (volume > 9999) {
                volumeText = Number((volume / 10000).toFixed(1)) + "万";
            } else if (volume > 999) {
                volumeText = Number((volume / 1000).toFixed(1)) + "千";
            }
            if (item.couponInfo) {
                sku.coupon_price = item.couponInfo.fav;
                sku.coupon_text = "元券\u00A0\u00A0\u00A0" + volumeText + "人已购买";
                sku.final_price = Number((item.vipPrice - item.couponInfo.fav).toFixed(2));
            } else {
                sku.coupon_price = 0;
                sku.coupon_text = volumeText + "人已购买";
                sku.final_price = item.vipPrice;
            }
            result.push(sku);
        })
    } catch (error) {
        console.error(error);
    }
    return result;
}

var getJdSearchGoodList = (goodList) => {
    let result = [];
    try {
        goodList.forEach(item => {
            let sku = {};
            sku.goodsId = item.skuId;
            sku.img = item.imageInfo.imageList[0].url;
            sku.title = item.skuName;
            sku.shop = item.shopInfo.shopName;
            sku.brokerage = item.commissionInfo.couponCommission;
            let volume = item.inOrderCount30Days;
            let volume_text = '';
            if (volume > 9999) {
                volume_text = Number((volume / 10000).toFixed(1)) + "万";
            } else if (volume > 999) {
                volume_text = Number((volume / 1000).toFixed(1)) + "千";
            } else {
                volume_text = volume;
            }
            if (item.couponInfo?.couponList?.length > 0 && item.couponInfo.couponList[0].quota <= item.priceInfo.price) {
                sku.coupon_price = item.couponInfo.couponList[0].discount;
                sku.coupon_text = "元券\u00A0\u00A0\u00A0" + volume_text + "人已购买";
                sku.sale_price = item.priceInfo.price;
                sku.final_price_text = " 券后 ￥";
                sku.final_price = Number((item.priceInfo.price - item.couponInfo.couponList[0].discount).toFixed(2));
            } else {
                sku.coupon_price = 0;
                sku.coupon_text = volume_text + "人已购买";
                sku.sale_price = 0;
                sku.final_price_text = '';
                sku.final_price = item.priceInfo.price;
            }
            result.push(sku);
        })
    } catch (error) {
        console.error(error);
    }
    return result;
}

var showOnPage = (goodList) => {
    if (!goodList || goodList.length < 1) {
        showTips("我是有底线的哟 ~");
        return;
    }
    try {
        let goodElements = document.getElementsByClassName('row-three')[0];
        goodList.forEach(item => {
            let coupon = `<span>${item.coupon_text}</span>`;
            if (item.coupon_price > 0) {
                coupon = `<span class="coupon-price">${item.coupon_price}</span><span>${item.coupon_text}</span>`;
            }
            let sale_price = `<span class="final-price">${item.final_price}</span>`;
            if (item.sale_price > 0) {
                sale_price = `<span class="sale-price">${item.sale_price}</span><span>${item.final_price_text}</span><span class="final-price">${item.final_price}</span>`;
            }
            let sku = `<div class="good-img"><img class="img-lazy" alt="" data-src="${item.img}"></div><div class="good-info"><div class="good-title"><span>${item.title}</span></div>
            <div class="coupon">${coupon}</div><div class="good-price"><span>￥</span>${sale_price}</div><div class="good-shop"><span class="brokerage">${item.brokerage}-</span><span>${item.shop}</span></div></div>`;
            let sku_div = document.createElement('div');
            sku_div.innerHTML = sku;
            sku_div.classList.add('good-list');
            sku_div.addEventListener("click", () => {
                generatePromotion(item);
            })
            goodElements.appendChild(sku_div);
        })
        document.querySelectorAll("img.img-lazy").forEach(item => {
            observer.observe(item);
        })
    } catch (error) {
        console.error(error);
    }
}

var generatePromotion = (queryParam) => {
    let settings = {};
    let urlPath = '';
    document.getElementsByClassName("spinner-container")[0].style.display = 'flex';
    try {
        switch (platform) {
            case "tb":
                let coupon_url = queryParam.coupon_url;
                let url_path = '';
                let result = {};
                if (coupon_url && coupon_url !== '') {
                    url_path = coupon_url.replace("https:", "").replace("http:", "");
                } else {
                    url_path = queryParam.item_url?.replace("https:", "").replace("http:", "");
                }
                result.urlPath = "taobao:" + url_path;
                result.httpUrl = "https:" + url_path;
                jumpToPurchasePage(result, queryParam.title);
                return;
            case "jd":
                settings.apikey = thirdApiKey;
                settings.unionId = thirdJdUnionId;
                settings.positionid = thirdJdPositionId;
                settings.type = 1;
                settings.goods_id = queryParam.goodsId;
                urlPath = thirdUrl + "/jd/getunionurl?" + jsonToUrlParams(settings);
                break;
            case "pdd":
                settings.client_id = pddClientId;
                settings.p_id = pddPid;
                settings.data_type = "JSON";
                settings.type = "pdd.ddk.goods.promotion.url.generate";
                settings.timestamp = Math.floor((new Date().getTime())/1000);
                settings.generate_authority_url = true;
                settings.goods_sign_list = "[\"" + queryParam.goods_sign + "\"]";
                settings.search_id = queryParam.search_id;
                settings.generate_schema_url = true;
                settings.generate_we_app = true;
                settings.sign = sign(settings, pddSecret);
                urlPath = pddUrl + "?" + jsonToUrlParams(settings);
                break;
            case "wph":
                settings.apikey = thirdApiKey;
                settings.goods_id = queryParam.goodsId;
                settings.chanTag = vipPid;
                settings.type = 1;
                urlPath = thirdUrl + "/vip/getunionurl?" + jsonToUrlParams(settings);
                break;
        }
        fetch('/api/proxy?url=' + encodeURIComponent(urlPath))
            .then(response => response.json())
            .then(data => jumpToPurchasePage(data, queryParam.title))
            .catch(error => console.error(error));
    } catch (error) {
        console.error(error);
    }
}

var jumpToPurchasePage = (skuObj, title) => {
    let jump_url = '';
    let we_app_url = '';
    let share_url = '';
    try {
        switch (platform) {
            case "tb":
                jump_url = skuObj.urlPath;
                share_url = skuObj.httpUrl;
                // jump_url = 'intent:' + jump_url.replace("taobao:", "") + '#Intent;scheme=taobao;package=com.taobao.taobao;end';
                // jump_url = 'intent:' + jump_url.replace("taobao:", "") + '#Intent;scheme=https;action=android.intent.action.VIEW;end';
                break;
            case "jd":
                if (getDeviceType() === "IOS") {
                    jump_url = skuObj.data;
                } else {
                    let jd_path = "{\"category\":\"jump\",\"des\":\"m\",\"url\":\"" + skuObj.data + "\"}";
                    jump_url = "openapp.jdmobile://virtual?params=" + encodeURIComponent(jd_path);
                }
                we_app_url = skuObj.data;
                share_url = skuObj.data;
                break;
            case "pdd":
                if (getDeviceType() === "IOS") {
                    jump_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].short_url;
                } else {
                    jump_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].schema_url;
                }
                we_app_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].we_app_info.page_path;
                share_url = skuObj.goods_promotion_url_generate_response?.goods_promotion_url_list[0].short_url;
                break;
            case "wph":
                if (getDeviceType() === "IOS") {
                    jump_url = skuObj.data?.urlInfoList[0].url;
                } else {
                    jump_url = skuObj.data?.urlInfoList[0].deeplinkUrl;
                }
                we_app_url = skuObj.data?.urlInfoList[0].vipWxUrl;
                share_url = skuObj.data?.urlInfoList[0].url;
                break;
        }
        document.getElementsByClassName("spinner-container")[0].style.display = 'none';
        if (getDeviceType() === "IOS") {
            setTimeout(() => clickUrl(jump_url), 50);
            // shareUrl(title, share_url);
        } else {
            clickUrl(jump_url);
            // shareUrl(title, share_url);
        }
    } catch (error) {
        document.getElementsByClassName("spinner-container")[0].style.display = 'none';
        navigator.clipboard.writeText(jump_url);
        console.error(error);
        showTips(error.message);
    }
}

var timestampToDate = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    let hours = String(currentDate.getHours()).padStart(2, '0');
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    let seconds = String(currentDate.getSeconds() - 10).padStart(2, '0');
    let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}

var sign = (params, app_secret) => {
    let sorted = Object.keys(params).sort();
    let basestring = app_secret;
    for (var i = 0, l = sorted.length; i < l; i++) {
      let k = sorted[i];
      basestring += k + params[k];
    }
    basestring += app_secret;
    return CryptoJS.MD5(basestring).toString(CryptoJS.enc.Hex).toUpperCase();
  }

var jsonToUrlParams = (params) => {
    if ("custom_parameters" in params) {
        params.custom_parameters = encodeURIComponent(params.custom_parameters);
    }
    if ("360buy_param_json" in params) {
        params["360buy_param_json"] = encodeURIComponent(params["360buy_param_json"]);
    }
    let urlParams = new URLSearchParams(params);
    return urlParams.toString(); 
}

var getDeviceType = () => {
    const userAgent = navigator.userAgent || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "IOS";
    } else {
        return "Android";
    }
}

var clickUrl = (click_url) => {
    document.getElementById("good-url").href = click_url;
    var myEvent = new MouseEvent("click", {
        view: window, bubbles: true, cancelable: true
    });
    document.getElementById("good-url").dispatchEvent(myEvent);
}

var shareUrl = async (title, share_url) => {
    if (!navigator.share || !navigator.canShare) {
        showTips("浏览器暂不支持 ~");
        return;
    }
    try {
        await navigator.share({
          text: title,
          url: share_url,
        });
        
      } catch (error) {
        showTips("浏览器暂不支持 ~");
        console.error(error);
      }
}

var showTips = (text) => {
    var tips = document.getElementById('tips');
    tips.innerText = text;
    tips.classList.add('show');
    setTimeout(() => {tips.classList.remove('show');}, 3000);
}

var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imgSrc = entry.target.dataset.src;
        entry.target.src = imgSrc;
        entry.target.classList.remove('img-lazy');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  var showActivity = (activity_platform) => {
    try {
        fetch("/api/activity")
            .then(response => response.json())
            .then(data => clickActivity(data[activity_platform]))
            .catch(error => console.error(error));
    } catch (error) {
        console.error(error);
    }
  }

  var clickActivity = (activityList) => {
    activityList.forEach(item => {
        let sku = `<span>${item.title}</span><img src=${item.imgUrl} alt="" />`;
        let sku_div = document.createElement('div');
        sku_div.innerHTML = sku;
        sku_div.classList.add('a-activity');
        sku_div.addEventListener("click", () => {
            if (getDeviceType() === "IOS") {
                setTimeout(() => jumpToActivityPage(item.jumpUrl), 50);
            } else {
                jumpToActivityPage(item.jumpUrl);
            }
        })
        document.getElementsByClassName("row-three")[0].appendChild(sku_div);
    })
  }

  var jumpToActivityPage = (activityUrl) => {
    let jump_url = '';
    try {
        switch (activityPlatform) {
            case "tb":
                jump_url = "taobao:" + activityUrl.replace("https:", "").replace("http:", "");
                break;
            case "jd":
                if (getDeviceType() === "IOS") {
                    jump_url = activityUrl;
                } else {
                    let jd_path = "{\"category\":\"jump\",\"des\":\"m\",\"url\":\"" + activityUrl + "\"}";
                    jump_url = "openapp.jdmobile://virtual?params=" + encodeURIComponent(jd_path);
                }
                break;
            case "pdd":
                if (getDeviceType() === "IOS") {
                    jump_url = activityUrl
                } else {
                    jump_url = "pinduoduo://com.xunmeng.pinduoduo" + activityUrl;
                }
                break;
            case "wph":
                if (getDeviceType() === "IOS") {
                    jump_url = activityUrl;
                } else {
                    jump_url = "vipshop://showWebview?url=" + encodeURIComponent(activityUrl);
                }
                break;
            case "mt":
                if (getDeviceType() === "IOS") {
                    jump_url = activityUrl;
                } else {
                    jump_url = "imeituan://www.meituan.com/web?url=" + activityUrl;
                }
                break;
        }
        document.getElementsByClassName("spinner-container")[0].style.display = 'none';
        if (getDeviceType() === "IOS") {
            setTimeout(() => clickUrl(jump_url), 50);
            // shareUrl(title, share_url);
        } else {
            clickUrl(jump_url);
            // shareUrl(title, share_url);
        }
    } catch (error) {
        document.getElementsByClassName("spinner-container")[0].style.display = 'none';
        navigator.clipboard.writeText(jump_url);
        console.error(error);
        showTips(error.message);
    }
}

  var clickChangeActivity = (eleId) => {
    document.getElementsByClassName("row-three")[0].innerHTML = '';
    document.getElementsByClassName("activity-header")[0].querySelectorAll(".nav-item").forEach(item => {
        if (item.classList.contains(eleId)) {
            item.classList.contains('filter')? item.classList.remove('filter'): null;
        } else {
            item.classList.contains('filter')? null: item.classList.add('filter');
        }
    })
    activityPlatform = eleId;
    localStorage.setItem("activityPlatform", eleId);
    showActivity(eleId);
}

switchPlatform();
