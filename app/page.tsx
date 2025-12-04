'use client';

import { useEffect, useState, useRef } from 'react';

// ----------------------
// Categories
// ----------------------
const categories = [
  { key: 'random', label: '✨ All', icon: '✨' },
  { key: 'romantic', label: '💖 Love', icon: '💖' },
  { key: 'git', label: '👥 Friends', icon: '👥' },
  { key: 'docker', label: '⚡ Motivate', icon: '⚡' },
  { key: 'kubernetes', label: '🌸 Life', icon: '🌸' },
  { key: 'golang', label: '☁️ Dreams', icon: '☁️' },
];

// ----------------------
// Main Component
// ----------------------
export default function Page() {
  const [category, setCategory] = useState('random');
  const [quote, setQuote] = useState('');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const toastRef = useRef<HTMLDivElement>(null);

  // ----------------------
  // Sound Effects
  // ----------------------
  const playKawaiiSound = (type: 'pop' | 'chime' | 'sparkle' | 'hover') => {
    if (!soundOn) return;

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();

    o.connect(g);
    g.connect(ctx.destination);

    if (type === 'pop') {
      o.type = 'sine';
      o.frequency.value = 440;
      g.gain.value = 0.2;
      o.start();
      o.stop(ctx.currentTime + 0.12);
    } else if (type === 'chime') {
      o.type = 'triangle';
      o.frequency.value = 523;
      g.gain.value = 0.15;
      o.start();
      o.stop(ctx.currentTime + 0.18);

      setTimeout(() => {
        const o2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        o2.type = 'triangle';
        o2.frequency.value = 659;
        o2.connect(g2);
        g2.connect(ctx.destination);
        g2.gain.value = 0.12;
        o2.start();
        o2.stop(ctx.currentTime + 0.18);
      }, 80);
    } else if (type === 'sparkle') {
      o.type = 'square';
      o.frequency.value = 1200;
      g.gain.value = 0.08;
      o.start();
      o.stop(ctx.currentTime + 0.09);
    } else if (type === 'hover') {
      o.type = 'sine';
      o.frequency.value = 660;
      g.gain.value = 0.05;
      o.start();
      o.stop(ctx.currentTime + 0.08);
    }
  };

  // ----------------------
  // Fetch Quote
  // ----------------------
  const fetchQuote = async (cat = category) => {
    setLoading(true);
    try {
      const res = await fetch(`https://devlove-api.onrender.com/api/${cat}`);
      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      setQuote(data.line);
      setCount((c) => c + 1);
      playKawaiiSound('chime');
    } catch {
      setQuote('Could not fetch pickup line.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote(category);
    playKawaiiSound('pop');
  }, [category]);

  // ----------------------
  // Copy Quote
  // ----------------------
  const handleCopy = () => {
    if (!quote) return;

    navigator.clipboard.writeText(quote);
    setCopied(true);
    playKawaiiSound('sparkle');

    if (toastRef.current) {
      toastRef.current.style.opacity = '1';
      setTimeout(() => {
        if (toastRef.current) toastRef.current.style.opacity = '0';
      }, 1200);
    }

    setTimeout(() => setCopied(false), 1000);
  };

  // ----------------------
  // Toggle Sound
  // ----------------------
  const handleSoundToggle = () => {
    setSoundOn((s) => !s);
    if (!soundOn) playKawaiiSound('chime');
  };

  // ----------------------
  // Floating Hearts
  // ----------------------
  const hearts = [
    { top: '8%', left: '10%', rotate: 10 },
    { top: '18%', left: '80%', rotate: -15 },
    { top: '65%', left: '15%', rotate: 30 },
    { top: '85%', left: '75%', rotate: -25 },
    { top: '45%', left: '55%', rotate: 0 },
  ];

  // ----------------------
  // UI
  // ----------------------
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 bg-gradient-to-br from-pink-200 to-indigo-200 relative overflow-hidden font-poppins">

      {/* Floating Hearts */}
      {hearts.map((h, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: h.top,
            left: h.left,
            fontSize: '2rem',
            opacity: 0.22,
            pointerEvents: 'none',
            zIndex: 1,
            transform: `rotate(${h.rotate}deg)`,
            animation: 'floatHeart 6s linear infinite',
          }}
        >
          {['💖', '💗', '💞', '💝'][i % 4]}
        </span>
      ))}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-6 drop-shadow flex items-center gap-2 z-10">
        ✨ DevLove Generator ✨
      </h1>

      {/* Sound Toggle */}
      <div className="flex justify-end w-full max-w-2xl">
        <button
          onClick={handleSoundToggle}
          className="rounded-full p-2 bg-gradient-to-r from-pink-200 to-purple-200 shadow-md transition-transform duration-300"
        >
          {soundOn ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 z-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => { setCategory(cat.key); playKawaiiSound('pop'); }}
            disabled={loading}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${category === cat.key
              ? 'bg-pink-500 text-white border-pink-600 shadow scale-105'
              : 'bg-white text-pink-600 border-pink-300 hover:bg-pink-100'
              }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Quote Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-300 max-w-xl w-full relative z-10">
        {/* Copy button */}
        <button
          className="absolute top-2 right-2 px-3 py-2 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 text-pink-700 font-bold shadow-md text-lg"
          onClick={handleCopy}
        >
          {copied ? '✅' : '📋'}
        </button>

        <p className="text-2xl text-pink-700 font-semibold min-h-[60px]">
          {loading ? '⏳ Loading...' : `"${quote}"`}
        </p>

        <button
          onClick={() => { fetchQuote(); playKawaiiSound('pop'); }}
          disabled={loading}
          className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full font-bold shadow hover:bg-pink-700 active:scale-95 transition shimmer"
        >
          Generate New Line ✨
        </button>

        <p className="text-sm text-pink-600 mt-4">⚡ {count} lines generated</p>
      </div>

      {/* Toast */}
      <div
        ref={toastRef}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-bold shadow-lg text-lg transition-opacity duration-500"
        style={{ opacity: 0, pointerEvents: 'none', zIndex: 50 }}
      >
        ✨ Copied to clipboard!
      </div>

      {/* Animations */}
      <style>{`
        @keyframes floatHeart {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-60px) scale(1.1); }
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </main>
  );
}
