'use client';

import { useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
import { ActivityPlatform } from '../types';
import { ACTIVITY_PLATFORMS, ACTIVITY_PLATFORM_NAMES } from '../config/constants';
import { platform } from 'os';

interface ActivityMavProps {
    currentPlatform: ActivityPlatform;
    onPlatformChange: (platform: ActivityPlatform) => void;
}

export interface ActivityNavRef {
    scrollToPlatform: (platform: ActivityPlatform) => void;
}

export const ActivityNav = forwardRef<ActivityNavRef, ActivityMavProps>(function ActivityNav (
    { currentPlatform, onPlatformChange }, ref
) {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<Map<ActivityPlatform, HTMLButtonElement>>(new Map());

    useImperativeHandle(ref, () => ({
        scrollToPlatform: (platform: ActivityPlatform) => {
            const button = buttonRefs.current.get(platform);
            const container = containerRef.current;
            if (button && container) {
                const containerRect = container.getBoundingClientRect();
                const buttonRect = button.getBoundingClientRect();

                const buttonLeft = buttonRect.left - containerRect.left + container.scrollLeft;
                const buttonCenter = buttonLeft + buttonRect.width / 2;
                const containerCenter = containerRect.width / 2;

                container.scrollTo({
                    left: buttonCenter - containerCenter,
                    behavior: 'smooth'
                });
            }
        }
    }));

    // 当前平台改变时，自动滚动到可视区域
    useEffect(() => {
        const button = buttonRefs.current.get(currentPlatform);
        const container = containerRef.current;
        if (button && container) {
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();
            const isVisible = buttonRect.left >= containerRect.left &&
                              buttonRect.right <= containerRect.right;
            if (!isVisible) {
                const buttonLeft = buttonRect.left - containerRect.left + container.scrollLeft;
                const buttonCenter = buttonLeft + buttonRect.width / 2;
                const containerCenter = containerRect.width / 2;

                container.scrollTo({
                    left: buttonCenter - containerCenter,
                    behavior: 'smooth'
                });
            }
        }
    }, [currentPlatform]);

    return (
        <div ref={containerRef} className="flex gap-2 px-2 py-3 overflow-x-auto bg-gray-100 scrollbar-hide">
            {ACTIVITY_PLATFORMS.map((platform) => (
                <button
                    key={platform}
                    ref={(el) => {
                        if (el) {
                            buttonRefs.current.set(platform, el);
                        }
                    }}
                    onClick={() => onPlatformChange(platform)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${currentPlatform === platform ? 'bg-white text-orange-500 shadow-sm' : 'bg-transparent text-gray-500 grayscale'}`}
                >{ACTIVITY_PLATFORM_NAMES[platform]}
                </button>
            ))}
        </div>
    );
});