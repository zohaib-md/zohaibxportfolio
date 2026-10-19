let audioContext: AudioContext | null = null;
const bufferCache = new Map<string, AudioBuffer>();

export function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (!audioContext) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;

    if (AudioContextClass) {
      audioContext = new AudioContextClass();
    }
  }

  return audioContext;
}

export async function decodeAudioData(dataUri: string): Promise<AudioBuffer | null> {
  const cached = bufferCache.get(dataUri);
  if (cached) return cached;

  const ctx = getAudioContext();
  if (!ctx) return null;

  try {
    const base64 = dataUri.split(",")[1];
    if (!base64) return null;

    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const audioBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0));
    bufferCache.set(dataUri, audioBuffer);
    return audioBuffer;
  } catch (error) {
    console.warn("Failed to decode audio data:", error);
    return null;
  }
}

export interface PlaySoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundPlayback {
  stop: () => void;
}

export async function playSound(
  dataUri: string,
  options: PlaySoundOptions = {}
): Promise<SoundPlayback> {
  const { volume = 1, playbackRate = 1, onEnd } = options;
  const ctx = getAudioContext();
  if (!ctx) {
    return { stop: () => {} };
  }

  try {
    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    const buffer = await decodeAudioData(dataUri);
    if (!buffer) {
      return { stop: () => {} };
    }

    const source = ctx.createBufferSource();
    const gain = ctx.createGain();

    source.buffer = buffer;
    source.playbackRate.value = playbackRate;
    gain.gain.value = volume;

    source.connect(gain);
    gain.connect(ctx.destination);

    source.onended = () => {
      onEnd?.();
    };

    source.start(0);

    return {
      stop: () => {
        try {
          source.stop();
        } catch {
          // No-op if already stopped.
        }
      },
    };
  } catch (error) {
    console.warn("Error playing sound:", error);
    return { stop: () => {} };
  }
}
