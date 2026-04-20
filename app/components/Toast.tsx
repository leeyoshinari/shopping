'use client';

import { useEffect, useState } from "react";

interface ToastProps {
    message: string | null;
    duration?: number;
    onClose?: () => void;
}

export function Toast({ message, duration = 3000, onClose}: ToastProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose?.();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration, onClose]);

    if (!message) return null;

    return (
        <div className={`fixed left-1/2 -translate-x-1/2 bg-gray-600 text-white px-5 py-2.5 rounded-lg shadow-lg transition-all duration-500 z-50 ${isVisible ? 'bottom-24 opacity-100' : 'bottom-0 opacity-0'}`}>
            {message}
        </div>
    );
}