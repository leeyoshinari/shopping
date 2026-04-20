'use client';

interface LoadingSpinnerProps {
    isLoading: boolean;
}

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/5 z-50">
            <div className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
        </div>
    );
}