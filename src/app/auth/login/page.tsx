import { AuthLoginOpener } from "@/components/auth/AuthLoginOpener";
import { SiteLayout } from "@/components/layout/SiteLayout";

export default function LoginPage() {
  return (
    <SiteLayout>
      <AuthLoginOpener />
    </SiteLayout>
  );
}
