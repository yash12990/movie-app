"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

import { GoogleButton } from "@/components/auth/google-button";

export function SignInForm() {
  const router = useRouter();
  const [googleLoading, setGoogleLoading] = useState(false);

  // ---------------------------------------------------------------------------
  // 👇 GOOGLE AUTH INTEGRATION SEAM — implement your provider here.
  //
  // NextAuth (Auth.js):
  //   import { signIn } from "next-auth/react";
  //   await signIn("google", { callbackUrl: "/" });
  //
  // Firebase:
  //   import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  //   await signInWithPopup(getAuth(), new GoogleAuthProvider());
  //
  // Supabase:
  //   import { createClient } from "@/lib/supabase/client";
  //   await createClient().auth.signInWithOAuth({ provider: "google" });
  // ---------------------------------------------------------------------------
  async function handleGoogle() {
    setGoogleLoading(true);
    try {
      // TODO: replace this stub with your provider call (see comment above).
      await new Promise((r) => setTimeout(r, 600));
      toast.info("Connect Google sign-in", {
        description: "Wire up your auth provider in handleGoogle().",
      });
      router.push("/");
    } catch {
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <GoogleButton onClick={handleGoogle} loading={googleLoading} />

      <p className="text-center text-sm text-muted-foreground">
        New to Cineplex?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
