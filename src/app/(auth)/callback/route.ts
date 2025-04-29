import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) throw error;

      return NextResponse.redirect(new URL("/dashboard", request.url));
    } catch (error) {
      console.error("Callback error:", error);
      return NextResponse.redirect(
        new URL("/login?error=auth_failed", request.url)
      );
    }
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
