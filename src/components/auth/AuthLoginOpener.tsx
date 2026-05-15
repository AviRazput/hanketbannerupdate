"use client";

import { useEffect } from "react";
import { useAuthDrawer } from "./AuthDrawerContext";

export function AuthLoginOpener() {
  const { openAuthDrawer } = useAuthDrawer();

  useEffect(() => {
    openAuthDrawer("sign-in");
  }, [openAuthDrawer]);

  return null;
}
