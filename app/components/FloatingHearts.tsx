'use client';

import { FLOATING_HEARTS } from '@/app/lib/constants';

export function FloatingHearts() {
  return (
    <>
      {FLOATING_HEARTS.map((heart, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: heart.top,
            left: heart.left,
            fontSize: '2.5rem',
            opacity: 0.15,
            pointerEvents: 'none',
            zIndex: 1,
            transform: `rotate(${heart.rotate}deg)`,
            animation: 'floatHeart 8s linear infinite',
          }}
          role="presentation"
        >
          {heart.emoji}
        </span>
      ))}
    </>
  );
}
