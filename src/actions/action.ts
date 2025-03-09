"use server";
import { TLoginSchema } from "@/types/type";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function getVideos(meeting: number) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .lte("meeting", meeting);

  if (error) {
    console.error("Error fetching videos:", error.message);
    return { data: [], error: error };
  }

  return { data, error: null };
}

export async function getAssessments(userId: string) {
  try {
    const supabase = await createClient();
    const { data: userProgress, error: userProgressError } = await supabase
      .from("user_progress")
      .select("assessment_id")
      .eq("user_id", userId)
      .eq("completed", true);

    if (userProgressError) {
      throw userProgressError;
    }

    const lastCompletedAssessmentId =
      userProgress.length > 0
        ? userProgress[userProgress.length - 1].assessment_id
        : null;

    const { data: assessments, error: assessmentsError } = await supabase
      .from("assessments")
      .select("*")
      .order("sequence", { ascending: true });

    if (assessmentsError) {
      throw assessmentsError;
    }

    const nextAssessment = assessments.find(
      (assessment) =>
        assessment.sequence ===
        (lastCompletedAssessmentId ? lastCompletedAssessmentId + 1 : 1)
    );

    return { nextAssessment, error: null };
  } catch (error) {
    return { nextAssessment: null, error };
  }
}

export async function getCompletedAssessment(userId: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", userId);
    return { completedAssessment: data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

export async function getAssessmentTitle(id: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("assessments")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return { assessment: data };
  } catch (error) {
    return { assessment: null, error: error };
  }
}

export async function loginAction(formData: TLoginSchema) {
  const supabase = await createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { success: false, message: error.message };
  }

  // Check Profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("package_level")
    .eq("email", data.email)
    .single();

  if (profileError || !profile) {
    return { success: false, message: "User not found, please Sign Up first" };
  }

  if (!profile.package_level) {
    return { success: false, message: "Buy the package first to login" };
  }

  if (profile.package_level >= 1) {
    redirect("/dashboard");
    return { success: true, message: "Login successful" };
  }

  return { success: false, message: "Invalid package level" };
}

export async function getAllProfiles() {
  const supabase = await createClient();
  const users = await supabase.from("profiles").select("*");
  return users;
}

export async function updateProgress(
  userId: string,
  examId: string,
  assessmentTitle: string
) {
  try {
    const supabase = await createClient();
    // Check Duplicate first
    const { data: duplicate } = await supabase
      .from("user_progress")
      .select("*")
      .eq("assessment_id", examId)
      .eq("user_id", userId)
      .single();
    if (duplicate !== null) {
      return { success: false, message: "تم حفظ نتيجة التقييم بالفعل" };
    }

    // Update Assessment Progress
    const { data, error } = await supabase
      .from("user_progress")
      .insert([
        {
          user_id: userId,
          assessment_id: examId,
          assessment_title: assessmentTitle,
        },
      ])
      .select();

    if (error) {
      return {
        success: false,
        message: "Failed to update assessment progress: ",
      };
    }

    return {
      success: true,
      message: "تم تحديث تقدم التقييم بنجاح",
    };
  } catch (error) {
    return {
      success: false,
      message: "Internal Server Error: ",
    };
  }
}

export async function setUserSequence(userId: string) {
  try {
    const supabase = await createClient();
    const initialSequence = "1";

    const { error } = await supabase
      .from("video_progress")
      .insert([{ user_id: userId, video_sequence: parseInt(initialSequence) }])
      .select();

    if (error) {
      return {
        success: false,
        message: "Failed to set user sequence",
      };
    }
    return {
      success: true,
      message: "User sequence set successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to set user sequence",
    };
  }
}

export async function getUserSequence(userId: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("video_progress")
      .select("video_sequence")
      .eq("user_id", userId)
      .single();

    if (error) {
      return {
        data: null,
        success: false,
        message: "Failed to get user sequence",
      };
    }

    return {
      data: data,
      success: true,
      message: "User sequence fetched successfully",
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      message: "Failed to get user sequence",
    };
  }
}

export async function updateWatchProgress(userId: string, videoId: string) {
  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("video_progress")
      .update({
        video_sequence: parseInt(videoId),
      })
      .eq("user_id", userId);
    if (error) {
      return { success: false, message: "Failed to save progress" };
    }
    return {
      success: true,
      message: "Progress Saved",
    };
  } catch (error) {
    return { success: false, message: "Failed to save progress" };
  }
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "/dashboard",
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}

// Unused action :
export async function handleSearch(query: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .ilike("email", `%${query}%`);

  if (error) {
    console.error("Error fetching profiles:", error.message);
    return null;
  }

  return data;
}
