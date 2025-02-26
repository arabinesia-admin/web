"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import LogInWithGoogle from "../login-google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema, TLoginSchema } from "@/types/type";

export function LoginForm() {
  const router = useRouter();
  const [loginResult, setLognResult] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function onLogin(data: TLoginSchema) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.message === "Login Success") {
        router.push("/dashboard");
      } else {
        setLognResult(result.message);
      }
    } catch (error) {
      setLognResult("An unexpected error occurred");
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onLogin)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-brand-primary">
                  Ahlan wa Sahlan!
                </h1>
                <p className="text-balance text-muted-foreground">
                  Login to your account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm  ">
                    Incorrect password character
                  </p>
                )}
              </div>
              {loginResult ? (
                <p className="flex justify-center text-red-500 text-sm bg-red-200 border-red-500 p-1 border rounded">
                  {loginResult}
                </p>
              ) : null}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary hover:bg-brand-dark"
              >
                {isSubmitting ? "Signing in..." : "Log in"}
              </Button>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="flex">
                <LogInWithGoogle />
              </div>
              <div className="text-center text-sm flex justify-center">
                Don&apos;t have an account?{" "}
                <Link href="/signup">
                  <p className="underline-offset-2 text-brand-primary mx-1">
                    SignUp
                  </p>
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/images/saudi-city.jpg"
              alt="arabinesia-cover"
              width={380}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking login, you agree to our
        <Link
          className="mx-1"
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service and Privacy Policy
        </Link>
      </div>
    </div>
  );
}
