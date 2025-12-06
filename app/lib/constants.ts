import { Category } from '@/app/types';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://devlove.vercel.app';

export const CATEGORIES: Category[] = [
  { key: 'random', label: '✨ All', icon: '✨' },
  { key: 'romantic', label: '💖 Love', icon: '💖' },
  { key: 'git', label: '👥 Friends', icon: '👥' },
  { key: 'docker', label: '⚡ Motivate', icon: '⚡' },
  { key: 'kubernetes', label: '🌸 Life', icon: '🌸' },
  { key: 'golang', label: '☁️ Dreams', icon: '☁️' },
];

export const FLOATING_HEARTS = [
  { top: '8%', left: '10%', rotate: 10, emoji: '💖' },
  { top: '18%', left: '80%', rotate: -15, emoji: '💗' },
  { top: '65%', left: '15%', rotate: 30, emoji: '💞' },
  { top: '85%', left: '75%', rotate: -25, emoji: '💝' },
  { top: '45%', left: '55%', rotate: 0, emoji: '💖' },
];

export const SOUND_CONFIG = {
  pop: { type: 'sine', frequency: 440, duration: 0.12, gain: 0.2 },
  chime: { type: 'triangle', frequency: 523, duration: 0.18, gain: 0.15 },
  sparkle: { type: 'square', frequency: 1200, duration: 0.09, gain: 0.08 },
  hover: { type: 'sine', frequency: 660, duration: 0.08, gain: 0.05 },
};
