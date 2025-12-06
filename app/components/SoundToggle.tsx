import React from 'react';

interface SoundToggleProps {
  soundOn: boolean;
  onToggle: () => void;
}

export function SoundToggle({ soundOn, onToggle }: SoundToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="rounded-full p-2 sm:p-3 bg-linear-to-r from-pink-200 to-purple-200 shadow-md hover:shadow-lg transition-shadow active:scale-90 min-h-10 min-w-10 sm:min-h-12 sm:min-w-12 flex items-center justify-center"
      title={soundOn ? 'Mute sound' : 'Unmute sound'}
    >
      <span className="text-xl sm:text-2xl">{soundOn ? '🔊' : '🔇'}</span>
    </button>
  );
}
