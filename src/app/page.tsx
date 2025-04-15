"use client";
import { AboutClass } from "@/components/landing-page/about-class";
import { AboutCourses } from "@/components/landing-page/about-courses";
import { ClassPackage } from "@/components/landing-page/class-package";
import { ClassPreview } from "@/components/landing-page/class-preview";
import { PageAbout } from "@/components/landing-page/page-about";
import { PageBody } from "@/components/landing-page/page-body";
import { Footer } from "@/components/landing-page/page-footer";
import PageNavbar from "@/components/landing-page/page-navbar";
import { RegisterButton } from "@/components/register-button";
import { useEffect, useState } from "react";

export default function Home() {
  const [alreadyLogin, setAlreadyLogin] = useState(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const loginStatus = JSON.parse(
        localStorage.getItem("ALREADY_LOGIN") || "false"
      );
      setAlreadyLogin(loginStatus);
    }
  }, []);
  return (
    <>
      <PageNavbar isAuthenticated={alreadyLogin} />
      <main>
        <PageBody />
        <PageAbout />
        <AboutCourses />
        <AboutClass />
        <ClassPackage />
        <ClassPreview />
        <Footer />
        <RegisterButton />
      </main>
    </>
  );
}
