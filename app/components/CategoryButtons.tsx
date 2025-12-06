'use client';

import { CategoryButtonsProps } from '@/app/types';

export function CategoryButtons({
  categories,
  activeCategory,
  onCategoryChange,
  loading,
}: CategoryButtonsProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 px-1 -mx-1 scroll-smooth">
      <div className="flex gap-2 justify-start sm:justify-center min-w-min sm:min-w-full mb-4 sm:mb-0">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key)}
            disabled={loading}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border whitespace-nowrap transition-all duration-300 active:scale-95 ${activeCategory === cat.key
                ? 'bg-pink-500 text-white border-pink-600 shadow-lg scale-100 sm:scale-105'
                : 'bg-white text-pink-600 border-pink-300 hover:bg-pink-100'
              }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
