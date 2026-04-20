'use client';

import Image from 'next/image';
import { Platform } from '../types';
import { PLATFORMS, PLATFORM_NAMES } from '../config/constants';

interface PlatformNavProps {
    currentPlatform: Platform;
    onPlatformChange: (platform: Platform) => void;
}

export function PlatformNav({ currentPlatform, onPlatformChange}: PlatformNavProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-50">
            { PLATFORMS.map((platform) => (
                <button
                    key={platform}
                    onClick={() => onPlatformChange(platform)}
                    className={`flex flex-col items-center justify-center w-1/5 h-full transition-all ${currentPlatform === platform ? '' : 'grayscale opacity-60'}`}
                >
                    <Image
                        src={`/img/${platform}.png`}
                        alt={PLATFORM_NAMES[platform]}
                        width={40}
                        height={40}
                        className="rounded-full"
                        priority
                    />
                    <span className="text-xs mt-1 text-gray-700">{PLATFORM_NAMES[platform]}</span>
                </button>
            ))}
        </div>
    );
}