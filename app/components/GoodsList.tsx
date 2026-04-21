'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { GoodItem } from "../types";
import { isSafari } from "../utils";

interface GoodsListProps {
    goods: GoodItem[];
    onScroll: () => void;
    onItemClick: (
        item: GoodItem,
        onError: (msg: string) => void,
        onSuccess?: (jumpUrl: string) => void,
    ) => void;
    listRef: React.Ref<HTMLDivElement>;
    hasMore?: boolean;
}

export function GoodsList({ goods, onScroll, onItemClick, listRef, hasMore = true}: GoodsListProps) {
    const [pendingJumpUrls, setPendingJumpUrls] = useState<Record<string, string>>({});

    useEffect(() => {
        setPendingJumpUrls({});
    }, [goods]);

    const handleClick = (item: GoodItem) => {
        const goodsId = item.goodsId;

        if (pendingJumpUrls[goodsId]) {
            window.location.href = pendingJumpUrls[goodsId];
            return;
        }

        onItemClick(
            item,
            (msg) => {
                console.log(msg);
            },
            (jumpUrl: string) => {
                if (isSafari()) {
                    setPendingJumpUrls(prev => ({ ...prev, [goodsId]: jumpUrl }));
                }
            }
        );
    };

    return (
        <div
            ref={listRef}
            onScroll={onScroll}
            className="flex-1 overflow-y-auto pb-20 px-2"
        >
            {goods.length === 0 && (
                <div className="flex items-center justify-center h-40 text-gray-400 text-sm">暂无商品</div>
            )}
            {goods.map((item, index) => (
                <div
                    key={`${item.goodsId}-${index}`}
                    onClick={() => handleClick(item)}
                    className="flex gap-3 p-3 mb-2 bg-white rounded-lg shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
                >
                    <div className="relative w-36 h-36 flex-shrink-0">
                        <Image
                            src={item.img}
                            alt={item.shop}
                            fill
                            className="object-cover rounded-xl"
                            sizes="144px"
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-relaxed">
                            {item.title}
                        </h3>
                        <div className="mt-2">
                            {item.coupon_price > 0 ? (
                                <span className="text-red-500 text-lg font-bold">{item.coupon_price}</span>
                            ) : null}
                            <span className="text-gray-500 text-xs ml-1">{item.coupon_text}</span>
                        </div>
                        <div className="flex items-baseline gap-1 mt-1">
                            <span className="text-xs text-gray-500">￥</span>
                            {item.sale_price > 0 && (
                                <span className="text-xs text-gray-400 line-through">{item.sale_price}</span>
                            )}
                            {item.final_price_text && (
                                <span className="text-xs text-gray-500">{item.final_price_text}</span>
                            )}
                            <span className="text-xl font-bold text-red-500">{item.final_price}</span>
                        </div>
                        <div className="flex justify-end items-center mt-2 text-xs text-orange-500">
                            <span className="text-gray-400 mr-1">{item.brokerage}</span>
                            <span className="truncate max-w-[120px]">{item.shop}</span>
                        </div>
                    </div>
                </div>
            ))}
            {goods.length > 0 && !hasMore && (
                <div className="flex items-center justify-center py-4 text-gray-400 text-sm">我是有底线的～</div>
            )}
        </div>
    );
}