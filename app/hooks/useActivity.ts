'use client';

import { useState, useCallback, useEffect } from "react";
import { ActivityPlatform, ActivityItem, ActivityData } from "../types";
import { ACTIVITY_PLATFORMS } from "../config/constants";
import { getDeviceType, isSafari, clickUrl, copyText } from "../utils";

export function useActivity() {
    const [activityPlatform, setActivityPlatform] = useState<ActivityPlatform>('cy');
    const [activityIndex, setActivityIndex] = useState(0);
    const [activities, setActivities] = useState<ActivityData>({} as ActivityData);
    const [isLoading, setIsLoading] = useState(false);

    // 加载活动数据
    const loadActivities = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch('api/activity');
            const data = await response.json();
            setActivities(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // 初始加载
    useEffect(() => {
        loadActivities();
    }, [loadActivities]);

    // 获取当前平台的活动列表
    const currentActivities = useCallback((): ActivityItem[] => {
        const activityList = activities[activityPlatform] || [];
        const now = Date.now();
        return activityList.filter((item: ActivityItem) => item.expire > now);
    }, [activities, activityPlatform]);

    // 处理活动平台切换
    const handleActivityPlatformChange = useCallback((newPlatform: ActivityPlatform) => {
        setActivityPlatform(newPlatform);
        const newIndex = ACTIVITY_PLATFORMS.indexOf(newPlatform);
        setActivityIndex(newIndex);
    }, []);

    // 处理左右滑动切换
    const handleSwipe = useCallback((direction: 'left' | 'right') => {
        let newIndex = activityIndex;
        if (direction === 'left') {
            newIndex = activityIndex - 1;
            if (newIndex < 0) newIndex = ACTIVITY_PLATFORMS.length - 1;
        } else {
            newIndex = activityIndex + 1;
            if (newIndex >= ACTIVITY_PLATFORMS.length) newIndex = 0;
        }
        const newPlatform = ACTIVITY_PLATFORMS[newIndex];
        handleActivityPlatformChange(newPlatform);
    }, [activityIndex, handleActivityPlatformChange]);

    // 跳转到活动页面
    const jumpToActivity = useCallback((item: ActivityItem) => {
        const deviceType = getDeviceType();
        let jumpUrl = '';

        switch (activityPlatform) {
            case 'tb':
                jumpUrl = `taobao:${item.jumpUrl.replace('https:', '').replace('http:', '')}`;
                break;
            case 'jd':
                const jdPath = `{"category":"jump","des":"m","url":"${item.jumpUrl}"}`;
                jumpUrl = `openapp.jdmobile://virtual?params=${encodeURIComponent(jdPath)}`;
                break;
            case 'pdd':
                jumpUrl = `pinduoduo://com.xunmeng.pinduoduo${item.jumpUrl}`;
                break;
            case 'wph':
                jumpUrl = `vipshop://showWebview?url=${encodeURIComponent(item.jumpUrl)}`;
                break;
            case 'mt':
                if (item.jumpUrl.includes('dpurl')) {
                    jumpUrl = `imeituan://www.meituan.com/web?url=${item.jumpUrl}`;
                } else {
                    jumpUrl = item.jumpUrl;
                }
                break;
            default:
                jumpUrl = item.jumpUrl;
                break;
        }

        if (deviceType === 'IOS') {
            setTimeout(() => clickUrl(jumpUrl), 50);
        } else {
            clickUrl(jumpUrl);
        }
    }, [activityPlatform]);

    // 复制活动链接
    const copyActivityUrl = useCallback(async (item: ActivityItem, onSuccess: () => void, onError: (msg: string) => void) => {
        try {
            let url = item.weAppUrl || item.jumpUrl;
            if (activityPlatform === 'pdd' && !url.startsWith('http')) {
                url = `https://mobile.yangkeduo.com${url}`;
            }
            await copyText(url);
        } catch (err) {
            onError('复制失败');
        }
    }, [activityPlatform]);

    // 处理活动项点击
    const handleActivityClick = useCallback((item: ActivityItem, onError: (msg: string) => void) => {
        const deviceType = getDeviceType();

        if (deviceType === 'IOS' && isSafari() && activityPlatform === 'pdd') {
            copyActivityUrl(item,
                () => onError('链接已复制，请手动粘贴到浏览器打开'),
                () => jumpToActivity(item)
            );
        } else {
            jumpToActivity(item);
        }
    }, [activityPlatform, jumpToActivity, copyActivityUrl]);

    return {
        activityPlatform,
        activityIndex,
        activities,
        isLoading,
        currentActivities,
        handleActivityPlatformChange,
        handleSwipe,
        handleActivityClick,
        copyActivityUrl,
        jumpToActivity,
    };
}