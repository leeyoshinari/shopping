'use client';

import { SortType } from "../types";

interface SortBarProps {
    sortType: SortType;
    onSortChange: (sortType: SortType) => void;
}

export function SortBar({ sortType, onSortChange }: SortBarProps) {
    const sorts: { key: SortType; label: string }[] = [
        { key: 'zh', label: '综合'},
        { key: 'price', label: '价格'},
        { key: 'sale', label: '销量'},
    ];

    return (
        <div className="flex items-center gap-4 px-4 py-2 text-sm">
            <span className="text-gray-600">排序: </span>
            {sorts.map((sort) => (
                <button 
                    key={sort.key}
                    onClick={() => onSortChange(sort.key)}
                    className={`transition-colors ${sortType === sort.key ? 'text-orange-500 font-medium' : 'text-gray-400 grayscale'}`}
                >
                    {sort.label}
                </button>
            ))}
        </div>
    );
}