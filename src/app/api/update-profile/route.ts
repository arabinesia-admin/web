import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { id, name, age, job, phone, country, package_level, email } = body;
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("profiles")
      .insert([
        {
          id,
          full_name: name,
          age,
          job,
          country,
          phone_number: phone,
          package_level,
          email,
        },
      ])
      .select();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data,
      message: "User profile updated successfully",
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
