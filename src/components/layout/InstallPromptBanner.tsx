"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const STORAGE_KEY = "hanket_install_prompt_dismissed";
const COOLDOWN_MS = 10 * 24 * 60 * 60 * 1000; // 10 days

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    ("standalone" in window.navigator && (window.navigator as Navigator & { standalone?: boolean }).standalone === true)
  );
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function isDismissedRecently(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const t = Number.parseInt(raw, 10);
    if (Number.isNaN(t)) return false;
    return Date.now() - t < COOLDOWN_MS;
  } catch {
    return false;
  }
}

function rememberDismiss(): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function InstallPromptBanner() {
  const [mode, setMode] = useState<"idle" | "android" | "ios">("idle");
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [entered, setEntered] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const enterFrameRef = useRef<number | null>(null);

  const showEntered = useCallback(() => {
    if (enterFrameRef.current !== null) {
      cancelAnimationFrame(enterFrameRef.current);
    }
    enterFrameRef.current = requestAnimationFrame(() => {
      enterFrameRef.current = null;
      setEntered(true);
    });
  }, []);

  const dismiss = useCallback(() => {
    rememberDismiss();
    setEntered(false);
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setMode("idle");
    }, 250);
    setDeferred(null);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isStandalone()) return;
    if (isDismissedRecently()) return;

    const ios = isIOS();

    if (ios) {
      const timer = window.setTimeout(() => {
        setMode("ios");
        showEntered();
      }, 2200);
      return () => clearTimeout(timer);
    }

    const onBip = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setMode("android");
      showEntered();
    };

    window.addEventListener("beforeinstallprompt", onBip);
    return () => window.removeEventListener("beforeinstallprompt", onBip);
  }, [showEntered]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
      if (enterFrameRef.current !== null) {
        cancelAnimationFrame(enterFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function onInstalled() {
      dismiss();
    }
    window.addEventListener("appinstalled", onInstalled);
    return () => window.removeEventListener("appinstalled", onInstalled);
  }, [dismiss]);

  async function handleInstallTap() {
    if (!deferred) return;
    try {
      await deferred.prompt();
      await deferred.userChoice.catch(() => undefined);
    } finally {
      dismiss();
    }
  }

  if (mode === "idle") return null;

  return (
    <div
      className={[
        "md:hidden fixed left-3 right-3 z-[95] transition-all duration-300 ease-out motion-reduce:transition-none pointer-events-none",
        "bottom-[max(7.25rem,calc(env(safe-area-inset-bottom,0px)+5.85rem))]",
        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
      role="dialog"
      aria-labelledby="install-prompt-title"
      aria-live="polite"
    >
      <div className="pointer-events-auto rounded-xl border border-flat-border bg-flat-bg px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        <div className="flex gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-flat-layer border border-flat-border text-[13px] font-bold text-flat-text uppercase tracking-tighter">
            H
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p id="install-prompt-title" className="text-[13px] font-semibold text-flat-text leading-snug">
              Install HANKET
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-flat-muted">
              {mode === "ios" ? (
                <>
                  Tap your browser’s{" "}
                  <strong className="text-flat-text font-semibold">Share</strong> button, then{" "}
                  <strong className="text-flat-text font-semibold">Add to Home Screen</strong> — Opens like a full-screen app.
                </>
              ) : (
                <>
                  Open HANKET from your homescreen — faster reloads and fullscreen.
                </>
              )}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {mode === "android" && deferred ? (
                <button
                  type="button"
                  onClick={() => void handleInstallTap()}
                  className="inline-flex rounded-md bg-flat-text px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-flat-bg hover:opacity-90 transition-opacity"
                >
                  Install
                </button>
              ) : null}
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex rounded-md border border-flat-border px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-flat-text hover:bg-flat-layer transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={dismiss}
            className="shrink-0 -mr-1 -mt-1 h-8 w-8 flex items-center justify-center rounded-md text-flat-muted hover:text-flat-text hover:bg-flat-layer transition-colors text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
