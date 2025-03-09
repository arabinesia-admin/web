import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthUser, getProfiles } from "./actions/auth";
import { createClient } from "./lib/supabase/server";

export async function middleware(req: NextRequest) {
  const supabase = await createClient();

  const user = await getAuthUser();
  if (!user || undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const { data, error } = await supabase
    .from("administrator")
    .select("*")
    .eq("email", user.email)
    .single();
  if (!data) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
