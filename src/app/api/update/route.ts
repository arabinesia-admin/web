import { TUpdateSchema } from "@/types/type";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body: TUpdateSchema = await req.json();
    const { email, meeting, package_level } = body;

    const supabase = await createClient();
    const { data, error } = await supabase
      .from("profiles")
      .update({
        package_level: parseInt(package_level),
        meeting: parseInt(meeting),
      })
      .eq("email", email)
      .single();
    if (error) {
      return NextResponse.json({
        message: "Failed to update User Data",
        status: 401,
      });
    }
    return NextResponse.json(
      {
        message:
          "User data has been updated successfully, لقد تم تحديث حسابك بنجاح",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
