import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Create your Cineplex account to book tickets faster, save your seats and unlock member-only offers.",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account"
      description="Join Cineplex to book tickets in seconds."
    >
      <SignUpForm />
    </AuthShell>
  );
}
