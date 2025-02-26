import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, examId, assessmentTitle } = body;
    const supabase = await createClient();

    // Update the user progress
    const { error } = await supabase.from("user_progress").upsert({
      user_id: userId,
      assessment_id: examId,
      assessment_title: assessmentTitle,
    });

    if (error === null) {
      return NextResponse.json(
        { message: "Assessment progress updated successfully" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "Failed to update assessment progress",
        error: error.message,
      },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
