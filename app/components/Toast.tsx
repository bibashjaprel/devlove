'use client';

import { useRef, useEffect } from 'react';

interface ToastProps {
  show: boolean;
}

export function Toast({ show }: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.style.opacity = show ? '1' : '0';
    }
  }, [show]);

  return (
    <div
      ref={toastRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-linear-to-r from-pink-300 to-purple-300 text-white font-bold shadow-lg text-lg transition-opacity duration-500 pointer-events-none z-50"
      style={{ opacity: 0 }}
    >
      ✨ Copied to clipboard!
    </div>
  );
}
