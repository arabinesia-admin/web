import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { TSignUpSchema } from "@/types/type";

export async function POST(req: Request) {
  try {
    const body: TSignUpSchema = await req.json();
    const { email, password, full_name, age, job, country, phone_number } =
      body;

    // Register user in auth.users
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // Save additional data to users.profiles
    const user = data.user;
    if (user) {
      const { error } = await supabase.from("profiles").insert([
        {
          id: user.id, // ID user from auth.users
          full_name,
          age: parseInt(age),
          job,
          country,
          phone_number: parseInt(phone_number),
          package_level: null,
          email: email,
        },
      ]);

      // Set the video_progress
      const { error: sequenceUpdate } = await supabase
        .from("video_progress")
        .insert([{ user_id: user.id, video_sequence: 1 }])
        .select();
      if (error) {
        return NextResponse.json({ message: sequenceUpdate }, { status: 400 });
      }
      return NextResponse.json({ user }, { status: 201 });
    }
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
