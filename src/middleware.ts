import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthUser, getProfiles } from "./lib/auth";
import { createClient } from "./utils/supabase/server";

export async function middleware(req: NextRequest) {
  const supabase = await createClient();

  const user = await getAuthUser();
  if (!user || undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const { data } = await getProfiles(user.id);
  if (data.package_level === null) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const isAdminPath = req.nextUrl.pathname.includes("/dashboard/admin");
  if (isAdminPath) {
    const { data, error } = await supabase
      .from("administrator")
      .select("*")
      .eq("email", user.email)
      .single();
    if (!data) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
