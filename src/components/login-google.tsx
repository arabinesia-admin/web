// Perbaikan di komponen login
"use client";
import { signInWithGoogle } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LogInWithGoogle = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithGoogle();

      if (result?.error) {
        throw result.error;
      }

      if (result?.url) {
        window.location.href = result.url; // Navigasi ke URL OAuth
      }
    } catch (error) {
      console.error("Login error:", error);
      router.push("/error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleLogin}
      disabled={isLoading}
    >
      <Image
        src="/svg/google.svg"
        alt="google"
        width={20}
        height={20}
        className={`mr-2 ${isLoading ? "opacity-50" : ""}`}
      />
      {isLoading ? "Processing..." : "Login with Google"}
    </Button>
  );
};
