"use server";
import { createClient } from "@/lib/supabase/server";
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

export async function logOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
