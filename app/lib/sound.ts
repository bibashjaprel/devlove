import { SOUND_CONFIG } from '@/app/lib/constants';

type SoundType = keyof typeof SOUND_CONFIG;

export function playSound(type: SoundType, soundEnabled: boolean): void {
  if (!soundEnabled) return;

  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const config = SOUND_CONFIG[type];

    if (type === 'chime') {
      // Two-note chime
      playOscillator(audioContext, 523, 0.15, 0.18, 'triangle');
      setTimeout(() => {
        playOscillator(audioContext, 659, 0.12, 0.18, 'triangle');
      }, 80);
    } else {
      playOscillator(audioContext, config.frequency, config.gain, config.duration, config.type as OscillatorType);
    }
  } catch (error) {
    console.error('Audio context error:', error);
  }
}

function playOscillator(
  audioContext: AudioContext,
  frequency: number,
  gain: number,
  duration: number,
  type: OscillatorType
): void {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gainNode.gain.value = gain;

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}
