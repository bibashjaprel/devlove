'use client';

import { QuoteCardProps } from '@/app/types';

export function QuoteCard({
  quote,
  loading,
  count,
  onCopy,
  onGenerate,
  copied,
}: QuoteCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 border border-pink-300 w-full relative z-10">
      {/* Copy Button - Touch-friendly size */}
      <button
        onClick={onCopy}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-2 rounded-full bg-linear-to-r from-pink-200 to-purple-200 text-pink-700 font-bold shadow-md text-lg sm:text-xl hover:shadow-lg transition-shadow active:scale-90"
        title="Copy to clipboard"
      >
        {copied ? '✅' : '📋'}
      </button>

      {/* Quote Text - Better readability */}
      <p className="text-lg sm:text-xl md:text-2xl text-pink-700 font-semibold min-h-20 pr-10 sm:pr-12 leading-relaxed">
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block animate-pulse">⏳</span> Loading magic...
          </span>
        ) : (
          `"${quote}"`
        )}
      </p>

      {/* Generate Button - Larger touch target on mobile */}
      <button
        onClick={onGenerate}
        disabled={loading}
        className="mt-6 sm:mt-8 w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-linear-to-r from-pink-500 to-pink-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-pink-700 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-12"
      >
        {loading ? 'Generating...' : 'Generate New Line ✨'}
      </button>

      {/* Counter - Better spacing */}
      <p className="text-xs sm:text-sm text-pink-600 mt-4 text-center">
        💕 {count} {count === 1 ? 'line' : 'lines'} generated
      </p>
    </div>
  );
}
