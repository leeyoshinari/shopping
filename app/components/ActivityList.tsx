'use client';

import { useRef, useCallback, forwardRef } from "react";
import Image from "next/image";
import { ActivityItem } from "../types";

interface ActivityListProps {
    activities: ActivityItem[];
    onActivityClick: (item: ActivityItem, onError: (msg: string) => void) => void;
    onActivityLongPress: (item: ActivityItem, onSuccess: () => void, onError: (msg: string) => void) => void;
    onSwipe: (direction: 'left' | 'right') => void;
}

export const ActivityList = forwardRef<HTMLDivElement, ActivityListProps>(function ActivityList (
    { activities, onActivityClick, onActivityLongPress, onSwipe },
    ref
) {
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const touchStartTime = useRef(0);
    const longPressTimer = useRef<NodeJS.Timeout | null>(null);
    const isLongPress = useRef(false);

    const handleTouchStart = useCallback((e: React.TouchEvent, item: ActivityItem) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        touchStartTime.current = Date.now();
        isLongPress.current = false;

        longPressTimer.current = setTimeout(() => {
            isLongPress.current = true;
            onActivityLongPress(item, () => {}, () => {});
        }, 2000);
    }, [onActivityLongPress]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        const deltaX = e.touches[0].clientX - touchStartX.current;
        const deltaY = e.touches[0].clientY - touchStartY.current;

        if (Math.abs(deltaX) > 20 || Math.abs(deltaY) > 20) {
            if (longPressTimer.current) {
                clearTimeout(longPressTimer.current);
                longPressTimer.current = null;
            }
        }
    }, []);

    const handleTouchEnd = useCallback((e: React.TouchEvent, item: ActivityItem) => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }

        if (isLongPress.current) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const endTime = Date.now();
        const deltaX = endX - touchStartX.current;
        const deltaY = endY - touchStartY.current;
        const deltaTime = endTime - touchStartTime.current;

        if (Math.abs(deltaX) > 60 && Math.abs(deltaY) < 60) {
            if (deltaX > 0) {
                onSwipe('left');
            } else {
                onSwipe('right');
            }
        } else if (Math.abs(deltaX) < 60 && Math.abs(deltaY) < 60 && deltaTime < 200) {
            onActivityClick(item, () => {});
        }
    }, [onSwipe, onActivityClick]);

    const handleContextMenu = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
    }, []);

    return (
        <div ref={ref} className="flex-1 overflow-y-auto pb-20 px-2 bg-gray-200">
            {activities.map((item, index) => (
                <div
                    key={index}
                    onTouchStart={(e) => handleTouchStart(e, item)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={(e) => handleTouchEnd(e, item)}
                    onContextMenu={handleContextMenu}
                    className="bg-white rounded-xl p-4 mb-3 text-center cursor-pointer active:scale-95 transition-transform"
                >
                    <h3 className="text-lg font-medium text-gray-800 mb-3">{item.title || item.desc}</h3>
                    <div className="relative w-full rounded-lg overflow-hidden">
                        <Image
                            src={item.imgUrl}
                            alt={item.title || item.desc || ''}
                            width={600}
                            height={400}
                            className="object-contain w-full h-auto"
                            sizes="(max-width:768px) 100vw 600px"
                            priority
                        />
                    </div>
                </div>
            ))}
        </div>
    );
});