'use client';

export function AnimationStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

      * {
        font-family: 'Poppins', sans-serif;
      }

      @keyframes floatHeart {
        0% {
          transform: translateY(0) scale(1);
          opacity: 0.15;
        }
        50% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-100px) scale(1.2);
          opacity: 0;
        }
      }

      @keyframes shimmer {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.8;
        }
      }

      .shimmer {
        animation: shimmer 1s infinite;
      }

      /* Smooth transitions */
      button {
        transition: all 0.3s ease;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(236, 72, 153, 0.1);
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(236, 72, 153, 0.5);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: rgba(236, 72, 153, 0.7);
      }

      /* Mobile-friendly animations */
      @media (max-width: 640px) {
        @keyframes floatHeart {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.1;
          }
          100% {
            transform: translateY(-60px) scale(1);
            opacity: 0;
          }
        }
      }

      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  );
}
