import { AboutClass } from "@/components/landing-page/about-class";
import { AboutCourses } from "@/components/landing-page/about-courses";
import { ClassPackage } from "@/components/landing-page/class-package";
import { PageAbout } from "@/components/landing-page/page-about";
import { PageBody } from "@/components/landing-page/page-body";
import { Footer } from "@/components/landing-page/page-footer";
import PageNavbar from "@/components/landing-page/page-navbar";
import { RegisterButton } from "@/components/register-button";
import { cookies } from "next/headers";

export default function Home() {
  const userCookies = cookies().get("supabase-auth-token");
  return (
    <>
      <PageNavbar isAuthenticated={!!userCookies} />
      <main>
        <PageBody />
        <PageAbout />
        <AboutCourses />
        <AboutClass />
        <ClassPackage />
        <Footer />
        <RegisterButton />
      </main>
    </>
  );
}
