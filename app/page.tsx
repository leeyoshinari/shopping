'use client';

import { useState, useRef } from "react";
import { Platform, ActivityPlatform } from "./types";
import { useShopping } from "./hooks/useShopping";
import { useActivity } from "./hooks/useActivity";
import { SearchBar } from "./components/SearchBar";
import { SortBar } from "./components/SortBar";
import { PlatformNav } from "./components/PlatformNav";
import { GoodsList } from "./components/GoodsList";
import { ActivityNav, ActivityNavRef } from "./components/ActivityNav";
import { ActivityList } from "./components/ActivityList";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Toast } from "./components/Toast";

export default function Home() {
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const activityNavRef = useRef<ActivityNavRef>(null);

    const {
        platform,
        searchKey,
        sortType,
        goodsList,
        isHydrated,
        isLoading,
        isPromotionLoading,
        showSortBar,
        goodsListRef,
        handleSearch,
        handleSortChange,
        handlePlatformChange,
        handleScroll,
        handleClearSearch,
        generatePromotion,
    } = useShopping();

    const {
        activityPlatform,
        currentActivities,
        handleActivityPlatformChange,
        handleSwipe,
        handleActivityClick,
        copyActivityUrl,
    } = useActivity();

    const handlePlatformSwitch = (newPlatform: Platform) => {
        handlePlatformChange(newPlatform);
    };

    const handleGoodClick = async (
        item: Parameters<typeof generatePromotion>[0],
        onError: (msg: string) => void,
        onSuccess?: (jumpUrl: string) => void
    ) => {
        await generatePromotion(item, (msg) => {
            setToastMessage(msg);
            onError(msg);
        }, onSuccess);
    };

    const handleActivityItemClick = (item: Parameters<typeof handleActivityClick>[0]) => {
        handleActivityClick(item, (msg: string) => {
            setToastMessage(msg);
        });
    };

    const handleActivityLongPress = (item: Parameters<typeof copyActivityUrl>[0]) => {
        copyActivityUrl(item, () => setToastMessage('链接已复制'), () => setToastMessage('复制失败'));
    };

    // 处理活动平台切换, 同步滚动按钮到可视区域
    const handleActivityPlatformSwitch = (newPlatform: ActivityPlatform) => {
        handleActivityPlatformChange(newPlatform);
        // 确保在状态更新后执行滚动
        setTimeout(() => {
            activityNavRef.current?.scrollToPlatform(newPlatform);
        }, 0);
    };

    const isActivityMode = platform === 'wm';

    if (!isHydrated) {
        return (
            <main className="h-screen flex flex-col bg-white items-center justify-center">
                <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
            </main>
        );
    }

    return (
        <main className="h-screen flex flex-col bg-white">
            {!isActivityMode && <SearchBar value={searchKey} onSearch={handleSearch} onClear={handleClearSearch} />}
            {!isActivityMode && showSortBar && (
                <SortBar sortType={sortType} onSortChange={handleSortChange} />
            )}
            {isActivityMode && (
                <ActivityNav ref={activityNavRef} currentPlatform={activityPlatform} onPlatformChange={handleActivityPlatformSwitch} />
            )}
            {!isActivityMode && (
                <GoodsList goods={goodsList} onScroll={handleScroll} onItemClick={handleGoodClick} listRef={goodsListRef} />
            )}
            {isActivityMode && (
                <ActivityList activities={currentActivities()} onActivityClick={handleActivityItemClick} onActivityLongPress={handleActivityLongPress} onSwipe={handleSwipe} />
            )}
            <PlatformNav currentPlatform={platform} onPlatformChange={handlePlatformSwitch} />
            <LoadingSpinner isLoading={isLoading || isPromotionLoading} />
            <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
            <a id="good-url" href="" target="_blank" rel="noopener noreferrer" className="hidden" />
        </main>
    );
}