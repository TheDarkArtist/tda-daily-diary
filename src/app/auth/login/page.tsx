"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") as string;
  const [pending, startTransition] = useTransition();

  return (
    <div className="flex justify-center items-center h-full border bg-black">
      <Button
        onClick={() => {
          startTransition(async () => {
            await signIn("github", { redirectTo: callbackUrl });
          });
        }}
        variant="outline"
        disabled={pending}
      >
        <Github />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default LoginPage;
