import { SiteLayout } from "../../../components/layout/SiteLayout";
import { AuthShell } from "../../../components/auth/AuthShell";

export default function LoginPage() {
  return (
    <SiteLayout>
      <AuthShell title="Login" subtitle="Access your account to continue.">
        <form className="space-y-4">
          <input
            className="w-full border border-flat-border px-4 py-3 outline-none focus:border-flat-text"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full border border-flat-border px-4 py-3 outline-none focus:border-flat-text"
            placeholder="Password"
            type="password"
          />
          <button type="submit" className="btn-flat w-full">
            Sign in
          </button>
          <button type="button" className="btn-flat-outline w-full">
            Create account
          </button>
        </form>
      </AuthShell>
    </SiteLayout>
  );
}

