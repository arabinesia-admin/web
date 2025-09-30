"use server";
import { createClient } from "@/lib/supabase/server";
import { CreateProfile } from "@/types/type";
import { redirect } from "next/navigation";

export async function getAuthUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const data = { id: user.id, email: user.email };
    return data;
  }
}

export async function getProfiles(id: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      return { success: false, message: "Failed to get user profiles" };
    }

    return { data: data, success: true, message: "Get User Profile Success" };
  } catch (error) {
    return { message: "failed" };
  }
}

export async function getUserSession() {
  const supabase = await createClient();
  const { data: session } = await supabase.auth.getSession();
  return session;
}

export async function checkAdmin() {
  const supabase = await createClient();
  const { data } = await supabase.from("users.admin").select("*");
  return data;
}

// Perbaikan di server action (auth.ts)
export async function signInWithGoogle() {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.log(error);
      return { error }; // Return object dengan error
    }

    // Return URL redirect
    return { url: data.url };
  } catch (error) {
    console.log(error);
    return { error: new Error("Authentication failed") };
  }
}

export async function createProfile(
  id: string,
  email: string,
  formData: CreateProfile
) {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.from("profiles").insert([
      {
        id,
        full_name: formData.full_name,
        age: formData.age,
        job: formData.job,
        country: formData.country,
        phone_number: formData.phone_number,
        package_level: formData.package_level,
        email,
      },
    ]);
    if (!data || error) {
      return { success: false, message: "Failed create new profile" };
    }
    return { success: true, message: "200", data: data };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
}
