"use client";

import { useEffect, useId, useState } from "react";
import { useAuthDrawer, type AuthDrawerMode } from "./AuthDrawerContext";

const titles: Record<AuthDrawerMode, string> = {
  "sign-in": "Sign in",
  register: "Create an account",
};

function IconEye({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path
          d="M3 3l18 18M10.58 10.58a2 2 0 0 0 2.84 2.84M9.88 5.09A10.94 10.94 0 0 1 12 5c5 0 9.27 3.11 11 7-1.02 2.28-2.87 4.18-5.19 5.32M6.11 6.11C4.28 7.35 2.78 9.19 1.73 11.5 3.46 15.39 7.73 18.5 12 18.5c1.55 0 3.03-.35 4.35-.97"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconGoogle() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function RequiredLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm text-flat-text mb-2">
      {children}
      <span className="text-flat-pink ml-0.5" aria-hidden>
        *
      </span>
      <span className="sr-only"> (required)</span>
    </label>
  );
}

function AuthField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="mb-5">
      <RequiredLabel htmlFor={id}>{label}</RequiredLabel>
      <input
        id={id}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="auth-drawer-input"
      />
    </div>
  );
}

export function AuthDrawer() {
  const { isOpen, mode, closeAuthDrawer, setMode } = useAuthDrawer();
  const titleId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const isSignIn = mode === "sign-in";

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAuthDrawer();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeAuthDrawer]);

  useEffect(() => {
    if (!isOpen) {
      setShowPassword(false);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Close sign in panel"
        className={[
          "fixed inset-0 z-[85] bg-black/45 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={closeAuthDrawer}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[
          "fixed top-0 right-0 z-[90] h-full w-[85%] md:w-[340px] lg:w-[360px] bg-flat-bg",
          "flex flex-col border-l border-flat-border",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between shrink-0 px-8 py-6 border-b border-flat-border">
          <h2 id={titleId} className="text-2xl font-serif font-medium text-flat-text">
            {titles[mode]}
          </h2>
          <button
            type="button"
            onClick={closeAuthDrawer}
            className="inline-flex items-center gap-2 text-sm text-flat-muted hover:text-flat-text transition-colors"
          >
            <span className="text-lg leading-none" aria-hidden>
              ✕
            </span>
            <span className="font-medium">Close</span>
          </button>
        </div>

        <form className="flex-1 overflow-y-auto px-8 py-6" onSubmit={(e) => e.preventDefault()}>
          {!isSignIn ? (
            <AuthField id="auth-name" label="Full name" placeholder="Your name" autoComplete="name" />
          ) : null}

          <AuthField
            id="auth-email"
            label={isSignIn ? "Username or email address" : "Email address"}
            type="email"
            placeholder={isSignIn ? "Username or email" : "you@example.com"}
            autoComplete="email"
          />

          <div className="mb-5">
            <RequiredLabel htmlFor="auth-password">Password</RequiredLabel>
            <div className="relative">
              <input
                id="auth-password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete={isSignIn ? "current-password" : "new-password"}
                placeholder="Password"
                className="auth-drawer-input pr-12"
              />
              <button
                type="button"
                className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center text-flat-muted hover:text-flat-text transition-colors"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <IconEye open={showPassword} />
              </button>
            </div>
          </div>

          <button type="submit" className="auth-drawer-submit w-full mb-5">
            {isSignIn ? "Log in" : "Create account"}
          </button>

          {isSignIn ? (
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <label className="inline-flex items-center gap-2 cursor-pointer text-flat-text text-sm">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 border border-flat-border accent-flat-text"
                />
                <span>Remember me</span>
              </label>
              <button type="button" className="text-sm text-flat-pink hover:underline font-medium">
                Lost your password?
              </button>
            </div>
          ) : null}

          <AuthDivider />

          <div className="flex flex-col gap-3 mb-10">
            <button type="button" className="auth-drawer-social auth-drawer-social--facebook">
              <IconFacebook />
              <span>Facebook</span>
            </button>
            <button type="button" className="auth-drawer-social auth-drawer-social--google">
              <IconGoogle />
              <span>Google</span>
            </button>
          </div>

          <p className="text-center text-sm text-flat-muted pb-8">
            {isSignIn ? (
              <>
                No account yet?{" "}
                <button
                  type="button"
                  className="text-flat-pink font-semibold hover:underline"
                  onClick={() => setMode("register")}
                >
                  Create an Account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-flat-pink font-semibold hover:underline"
                  onClick={() => setMode("sign-in")}
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </form>
      </aside>
    </>
  );
}

function AuthDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-flat-border" />
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-flat-muted whitespace-nowrap">
        Or login with
      </span>
      <div className="flex-1 h-px bg-flat-border" />
    </div>
  );
}
