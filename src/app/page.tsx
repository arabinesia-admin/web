import { AboutClass } from "@/components/landing-page/about-class";
import { AboutCourses } from "@/components/landing-page/about-courses";
import { ClassPackage } from "@/components/landing-page/class-package";
import { PageAbout } from "@/components/landing-page/page-about";
import { PageBody } from "@/components/landing-page/page-body";
import { Footer } from "@/components/landing-page/page-footer";
import PageNavbar from "@/components/landing-page/page-navbar";
import { RegisterButton } from "@/components/register-button";

export default function Home() {
  return (
    <>
      <PageNavbar />
      <PageBody />
      <PageAbout />
      <AboutCourses />
      <AboutClass />
      <ClassPackage />
      <Footer />
      <RegisterButton />
    </>
  );
}
