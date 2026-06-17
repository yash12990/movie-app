import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to your Cineplex account to book tickets and manage your bookings.",
};

export default function SignInPage() {
  return (
    <AuthShell title="Welcome back" description="Sign in to continue to Cineplex.">
      <SignInForm />
    </AuthShell>
  );
}
