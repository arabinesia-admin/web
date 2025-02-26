export type ClassData = {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  video_id: string;
  package_level: number;
  sequence: number;
  watched: boolean;
};

export type UserProfile = {
  age: number;
  country: string;
  email: string;
  full_name: string;
  id: string;
  job: string;
  package_level: number;
  phone_number: string;
};

export type YoutubeVideos = {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  video_id: string;
  watched: boolean;
  sequence: number;
};

import { z } from "zod";

// Sign Up Schema
export const signUpSchema = z
  .object({
    full_name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" }),
    age: z.string(),
    job: z.string(),
    country: z.string(),
    motivation: z.string(),
    phone_number: z.string().regex(/^\+\d{6,15}$/, {
      message: "Phone number must start with +",
    }),
    package_level: z.string().min(1, { message: "Select one of the plan" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Minimum Character 6" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

// WhatsApp Message Type
export type TWhatsappData = {
  name: string;
  age: string;
  job: string;
  motivation: string;
  package_level: string;
  email: string;
};

// Log In Schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Email not registered" }),
  password: z.string().min(6, { message: "Incorrect Password" }),
});
export type TLoginSchema = z.infer<typeof loginSchema>;

// Update Schema
export const updateSchema = z.object({
  email: z.string().email({ message: "Email not found" }),
  meeting: z.string(),
  package_level: z.string(),
});
export type TUpdateSchema = z.infer<typeof updateSchema>;

// For Sidebar
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
  extras?: ReactNode;
}
