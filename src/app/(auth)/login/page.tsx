import Navbar from "@/components/shared/navbar";
import { LoginForm } from "@/components/form/login-form";
import { cookies } from "next/headers";

export default function LoginPage() {
  const userCookie = cookies().get("supabase-auth-token");
  return (
    <>
      <Navbar isAuthenticated={!!userCookie} />
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
