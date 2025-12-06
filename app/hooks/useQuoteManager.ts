'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { fetchPickupLine, fetchCategories, copyToClipboard } from '@/app/lib/api';
import { playSound } from '@/app/lib/sound';
import { Category } from '@/app/types';

export function useQuoteManager(initialCategory: string) {
  const [category, setCategory] = useState(initialCategory);
  const [quote, setQuote] = useState('');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const toastRef = useRef<HTMLDivElement>(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories().then((cats) => {
      setCategories(cats);
      setCategoriesLoading(false);
    });
  }, []);

  const fetchQuote = useCallback(
    async (cat = category) => {
      setLoading(true);
      try {
        const line = await fetchPickupLine(cat);
        setQuote(line);
        setCount((c) => c + 1);
        playSound('chime', soundOn);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Could not fetch pickup line. Try again! 💕');
      }
      setLoading(false);
    },
    [category, soundOn]
  );

  const handleCategoryChange = useCallback(
    (newCategory: string) => {
      setCategory(newCategory);
      playSound('pop', soundOn);
    },
    [soundOn]
  );

  const handleCopy = useCallback(async () => {
    if (!quote) return;

    const success = await copyToClipboard(quote);
    if (success) {
      setCopied(true);
      playSound('sparkle', soundOn);

      if (toastRef.current) {
        toastRef.current.style.opacity = '1';
        setTimeout(() => {
          if (toastRef.current) toastRef.current.style.opacity = '0';
        }, 1500);
      }

      setTimeout(() => setCopied(false), 1500);
    }
  }, [quote, soundOn]);

  const handleSoundToggle = useCallback(() => {
    setSoundOn((s) => !s);
    playSound('chime', !soundOn);
  }, [soundOn]);

  return {
    category,
    quote,
    count,
    loading,
    copied,
    soundOn,
    categories,
    categoriesLoading,
    toastRef,
    fetchQuote,
    handleCategoryChange,
    handleCopy,
    handleSoundToggle,
    setCategory,
  };
}
