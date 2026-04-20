'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';

interface SearchBarProps {
    value?: string;
    onSearch: (keyword: string) => void;
    onClear?: () => void;
}

export function SearchBar({ value = '', onSearch, onClear }: SearchBarProps) {
    const [keyword, setKeyword] = useState(value);

    useEffect(() => {
        setKeyword(value);
    }, [value]);

    const handleSearch = () => {
        onSearch(keyword.trim());
    };

    const handleClearMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    const handleCLear = () => {
        setKeyword('');
        onClear?.();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <div className="flex items-center gap-2 p-2">
            <div className="relative flex-1">
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleSearch}
                    placeholder="请输入商品名称"
                    className="w-full h-9 px-3 border-black rounded-lg text-sm outline focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {keyword && (
                    <button
                        onMouseDown={handleClearMouseDown}
                        onClick={handleCLear}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center"
                    >
                        <Image
                            src="/img/close.png"
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </button>
                )}
            </div>
            <button
                onClick={handleSearch}
                className="h-9 px-4 border-2 border-black rounded-lg bg-white text-sm font-medium hove:bg-gray-50 active:bg-gray-100 transition-colors"
            >搜索</button>
        </div>
    );
}