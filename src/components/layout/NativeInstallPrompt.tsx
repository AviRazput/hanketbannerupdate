"use client";

import { useEffect } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
};

export function NativeInstallPrompt() {
  useEffect(() => {
    let deferredPrompt: BeforeInstallPromptEvent | null = null;

    const showOnUserGesture = () => {
      if (!deferredPrompt) return;
      const prompt = deferredPrompt;
      deferredPrompt = null;
      void prompt.prompt().catch(() => {});
      window.removeEventListener("click", showOnUserGesture, true);
    };

    const saveNativePrompt = (event: Event) => {
      event.preventDefault();
      deferredPrompt = event as BeforeInstallPromptEvent;
      window.addEventListener("click", showOnUserGesture, {
        capture: true,
        once: true,
      });
    };

    window.addEventListener("beforeinstallprompt", saveNativePrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", saveNativePrompt);
      window.removeEventListener("click", showOnUserGesture, true);
    };
  }, []);

  return null;
}
