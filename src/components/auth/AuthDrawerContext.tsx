"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type AuthDrawerMode = "sign-in" | "register";

type AuthDrawerContextValue = {
  isOpen: boolean;
  mode: AuthDrawerMode;
  openAuthDrawer: (mode?: AuthDrawerMode) => void;
  closeAuthDrawer: () => void;
  setMode: (mode: AuthDrawerMode) => void;
};

const AuthDrawerContext = createContext<AuthDrawerContextValue | null>(null);

export function AuthDrawerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthDrawerMode>("sign-in");

  const openAuthDrawer = useCallback((nextMode: AuthDrawerMode = "sign-in") => {
    setMode(nextMode);
    setIsOpen(true);
  }, []);

  const closeAuthDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, mode, openAuthDrawer, closeAuthDrawer, setMode }),
    [isOpen, mode, openAuthDrawer, closeAuthDrawer],
  );

  return <AuthDrawerContext.Provider value={value}>{children}</AuthDrawerContext.Provider>;
}

export function useAuthDrawer() {
  const ctx = useContext(AuthDrawerContext);
  if (!ctx) {
    throw new Error("useAuthDrawer must be used within AuthDrawerProvider");
  }
  return ctx;
}
