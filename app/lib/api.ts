import { API_BASE_URL } from '@/app/lib/constants';
import { Category } from '@/app/types';

export async function fetchCategories(): Promise<Category[]> {
  try {
    const url = `${API_BASE_URL}/api/categories`;
    console.log('🔗 Fetching categories from:', url);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.warn('⚠️ Categories endpoint not available, using defaults');
      return getDefaultCategories();
    }

    const data = await res.json();
    console.log('✅ Categories fetched:', data);

    // Transform backend response to frontend format if needed
    if (Array.isArray(data)) {
      return data.map((cat: any) => ({
        key: cat.key || cat.name,
        label: cat.label || cat.name,
        icon: cat.icon || '✨',
      }));
    }

    return getDefaultCategories();
  } catch (error) {
    console.error('❌ Failed to fetch categories:', error);
    return getDefaultCategories();
  }
}

export function getDefaultCategories(): Category[] {
  return [
    { key: 'random', label: '✨ All', icon: '✨' },
    { key: 'romantic', label: '💖 Love', icon: '💖' },
    { key: 'git', label: '👥 Git', icon: '👥' },
    { key: 'docker', label: '⚡ Docker', icon: '⚡' },
    { key: 'kubernetes', label: '🌸 K8s', icon: '🌸' },
    { key: 'golang', label: '☁️ Go', icon: '☁️' },
  ];
}

export async function fetchPickupLine(category: string): Promise<string> {
  try {
    const url = `${API_BASE_URL}/api/${category}`;
    console.log('🔗 Fetching from:', url);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.statusText}`);
    }

    const data = await res.json();
    console.log('✅ API Response:', data);
    return data.line || 'Could not fetch pickup line.';
  } catch (error) {
    console.error('❌ Failed to fetch pickup line:', error);
    return 'Could not fetch pickup line. Try again! 💕';
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}
