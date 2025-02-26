import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { TLoginSchema } from "@/types/type";

export async function POST(req: NextRequest) {
  try {
    const formData: TLoginSchema = await req.json();

    const supabase = await createClient();
    const { email, password } = formData;

    // Login to supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return NextResponse.json(
        { message: "Invalid Email or Password", error: true },
        { status: 401 }
      );
    }

    // Check Profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("package_level")
      .eq("email", email)
      .single();

    if (profileError || !profile) {
      return NextResponse.json(
        { message: "User not found, please Sign Up first", error: true },
        { status: 404 }
      );
    }

    if (!profile.package_level) {
      return NextResponse.json(
        { message: "Buy the package first to login", error: true },
        { status: 403 }
      );
    }

    if (profile.package_level >= 1) {
      return NextResponse.json(
        { message: "Login Success", error: false },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid package level", error: true },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: true },
      { status: 500 }
    );
  }
}
