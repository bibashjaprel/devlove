'use client';

import { useEffect } from 'react';
import { useQuoteManager } from '@/app/hooks/useQuoteManager';
import { FloatingHearts } from '@/app/components/FloatingHearts';
import { CategoryButtons } from '@/app/components/CategoryButtons';
import { QuoteCard } from '@/app/components/QuoteCard';
import { Toast } from '@/app/components/Toast';
import { SoundToggle } from '@/app/components/SoundToggle';
import { AnimationStyles } from '@/app/components/AnimationStyles';
import { playSound } from '@/app/lib/sound';

export default function Page() {
  const {
    category,
    quote,
    count,
    loading,
    copied,
    soundOn,
    categories,
    categoriesLoading,
    fetchQuote,
    handleCategoryChange,
    handleCopy,
    handleSoundToggle,
  } = useQuoteManager('random');

  // Fetch quote when category changes
  useEffect(() => {
    fetchQuote(category);
    playSound('pop', soundOn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleGenerateNew = () => {
    fetchQuote();
    playSound('pop', soundOn);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 px-3 sm:px-4 bg-linear-to-br from-pink-100 via-pink-50 to-indigo-100 relative overflow-hidden safe-area">
      <AnimationStyles />

      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Header Section */}
      <div className="w-full max-w-2xl z-10 mb-4 sm:mb-6">
        {/* Sound Toggle - Top Right */}
        <div className="flex justify-end mb-4 sm:mb-0">
          <SoundToggle soundOn={soundOn} onToggle={handleSoundToggle} />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2 drop-shadow-lg text-center leading-tight">
          ✨ DevLove ✨
        </h1>
        <p className="text-sm sm:text-base text-pink-600 text-center mb-6 sm:mb-8">
          Automated romance for coders 💕
        </p>
      </div>

      {/* Category Buttons - Scrollable on mobile */}
      {!categoriesLoading && (
        <div className="w-full max-w-2xl z-10 mb-6 sm:mb-8">
          <CategoryButtons
            categories={categories}
            activeCategory={category}
            onCategoryChange={handleCategoryChange}
            loading={loading}
          />
        </div>
      )}

      {/* Quote Card - Touch optimized */}
      <div className="w-full max-w-lg z-10 px-1 sm:px-0">
        <QuoteCard
          quote={quote}
          loading={loading}
          count={count}
          onCopy={handleCopy}
          onGenerate={handleGenerateNew}
          copied={copied}
        />
      </div>

      {/* Toast Notification */}
      <Toast show={copied} />
    </main>
  );
}
