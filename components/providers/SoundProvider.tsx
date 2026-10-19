"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useSound } from "@/hooks/use-sound";
import { click001Sound } from "@/lib/sounds/click-001";
import { click8bitSound } from "@/lib/sounds/click-8bit";
import { switchOnSound } from "@/lib/sounds/switch-on";
import { switchOffSound } from "@/lib/sounds/switch-off";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: (overrides?: { volume?: number; playbackRate?: number }) => void;
  playRetro: (overrides?: { volume?: number; playbackRate?: number }) => void;
  playSwitch: (on: boolean) => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: true,
  toggleSound: () => {},
  playClick: () => {},
  playRetro: () => {},
  playSwitch: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sound_effects_enabled");
      if (stored !== null) {
        setSoundEnabled(stored === "true");
      }
    } catch {
      // localStorage unavailable or restricted
    }
    setMounted(true);
  }, []);

  const [play001] = useSound(click001Sound, {
    volume: 0.35,
    soundEnabled: mounted ? soundEnabled : false,
    interrupt: true,
  });

  const [play8bit] = useSound(click8bitSound, {
    volume: 0.35,
    soundEnabled: mounted ? soundEnabled : false,
    interrupt: true,
  });

  const [playSwOn] = useSound(switchOnSound, {
    volume: 0.35,
    soundEnabled: true,
    interrupt: true,
  });

  const [playSwOff] = useSound(switchOffSound, {
    volume: 0.35,
    soundEnabled: true,
    interrupt: true,
  });

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("sound_effects_enabled", String(next));
      } catch {
        // Ignore
      }
      if (next) {
        playSwOn();
      } else {
        playSwOff();
      }
      return next;
    });
  }, [playSwOn, playSwOff]);

  const playClick = useCallback(
    (overrides?: { volume?: number; playbackRate?: number }) => {
      const rate = overrides?.playbackRate ?? (0.97 + Math.random() * 0.06);
      play001({ playbackRate: rate, ...overrides });
    },
    [play001]
  );

  const playRetro = useCallback(
    (overrides?: { volume?: number; playbackRate?: number }) => {
      const rate = overrides?.playbackRate ?? (0.97 + Math.random() * 0.06);
      play8bit({ playbackRate: rate, ...overrides });
    },
    [play8bit]
  );

  const playSwitch = useCallback(
    (on: boolean) => {
      if (on) {
        playSwOn();
      } else {
        playSwOff();
      }
    },
    [playSwOn, playSwOff]
  );

  return (
    <SoundContext.Provider
      value={{
        soundEnabled: mounted ? soundEnabled : true,
        toggleSound,
        playClick,
        playRetro,
        playSwitch,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => useContext(SoundContext);
