import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const userId = req.headers.get("user-id"); // Assuming user ID is passed in headers
    const supabase = await createClient();

    // Fetch completed assessments for the user
    const { data: completedAssessments, error: completedError } = await supabase
      .from("user_progress")
      .select("assessment_id")
      .eq("user_id", userId)
      .eq("completed", true);

    if (completedError) {
      return NextResponse.json(
        {
          message: "Failed to fetch completed assessments",
          error: completedError.message,
        },
        { status: 400 }
      );
    }

    // Determine the next assessment the user can take
    const nextAssessmentOrder = completedAssessments
      ? Math.max(...completedAssessments.map((a) => a.assessment_id)) + 1
      : 1;

    // Fetch the next assessment
    const { data: nextAssessment, error: nextError } = await supabase
      .from("assessments")
      .select()
      .eq("order", nextAssessmentOrder)
      .single();

    if (nextError) {
      return NextResponse.json(
        {
          message: "Failed to fetch next assessment",
          error: nextError.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Assessments fetched successfully",
        data: {
          completedAssessments,
          nextAssessment,
        },
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
