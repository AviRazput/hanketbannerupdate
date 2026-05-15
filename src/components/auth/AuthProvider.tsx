"use client";

import { AuthDrawer } from "./AuthDrawer";
import { AuthDrawerProvider } from "./AuthDrawerContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthDrawerProvider>
      {children}
      <AuthDrawer />
    </AuthDrawerProvider>
  );
}
