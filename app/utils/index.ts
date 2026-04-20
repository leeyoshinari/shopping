'use client';

import CryptoJS from 'crypto-js';

// 时间戳转日期格式
export function timestampToDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds() - 10).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// MD5签名
export function sign(params: Record<string, string | number | undefined>, appSecret: string): string {
    const sorted = Object.keys(params).sort();
    let baseString = appSecret;
    for (const key of sorted) {
        const value = params[key];
        if (value !== undefined && value !== null) {
            baseString += key + String(value);
        }
    }
    baseString += appSecret;
    return CryptoJS.MD5(baseString).toString().toUpperCase();
}

// JSON转 url 参数
export function jsonToUrlParams(params: Record<string, string | number | undefined>): string {
    const processedParams: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null) continue;

        if (key === 'custom_parameters') {
            processedParams[key] = encodeURIComponent(String(value));
        } else if (key === '360buy_param_json') {
            processedParams[key] = encodeURIComponent(String(value));
        } else {
            processedParams[key] = String(value);
        }
    }

    return new URLSearchParams(processedParams).toString();
}

// 获取设备类型
export function getDeviceType(): 'IOS' | 'Android' {
    const userAgent = navigator.userAgent || (window as unknown as { opera: string }).opera || '';
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream: boolean }).MSStream) {
        return 'IOS';
    }
    return 'Android';
}

// 判断是否是 safari浏览器
export function isSafari(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    const isSafariBrowser = (ua.includes('safari') && !ua.includes('chrome')) ||
        (/apple/i.test(navigator.vendor) && !/crios|fxios/i.test(ua));
    return isSafariBrowser;
}

// 复制文本到剪贴板
export async function copyText(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('复制失败: ', err);
        throw err;
    }
}

// 格式化销量数据
export function formatVolume(volume: number): string {
    if (volume > 9999) {
        return `${(volume / 10000).toFixed(1)}万`;
    } else if (volume > 999) {
        return `${(volume / 1000).toFixed(1)}千`;
    } else {
        return String(volume);
    }
}

// 点击链接跳转
export function clickUrl(clickUrl: string): void {
    const link = document.getElementById('good-url') as HTMLAnchorElement;
    if (link) {
        link.href = clickUrl;
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        link.dispatchEvent(event);
    }
}

// 分享链接
export async function shareUrl(title: string, shareUrl: string): Promise<void> {
    if (!navigator.share || !navigator.canShare) {
        throw new Error('浏览器暂不支持分享');
    }

    try {
        await navigator.share({
            text: title,
            url: shareUrl,
        });
    } catch (err) {
        console.error('分享失败: ', err);
        throw err;
    }
}