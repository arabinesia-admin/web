"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { LogIn, Menu, X } from "lucide-react";
import Image from "next/image";

export default function PageNavbar({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const navLinks = [
    { name: "نبذة عن الدورة", href: "#about" },
    { name: "الدورة", href: "#about-courses" },
    { name: "الفصول الدراسية", href: "#about-class" },
    { name: "الباقات", href: "#class-package" },
    { name: "اتصل بنا", href: "#footer" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b py-2 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/images/logoarabinesia.png"
              alt="logoarabinesia"
              width={200}
              height={40}
            />
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Button
                className="font-rubik font-bold text-sm text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-slate-50"
                key={link.href}
                variant="ghost"
                aria-label={link.name}
                asChild
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
            <Link href={"/login"}>
              <Button
                className="border-brand-primary text-brand-primary font-rubik font-semibold hover:text-white hover:bg-brand-primary"
                variant="outline"
                aria-label="Login"
              >
                أدخل
              </Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden" aria-label="Navigation button">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-slate-50">
              <SheetTitle>Navigation</SheetTitle>
              <div className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <Button
                    className="font-rubik hover:bg-emerald-500 hover:text-slate-50"
                    key={link.href}
                    variant="ghost"
                    aria-label={link.name}
                    asChild
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ))}
                {isAuthenticated ? (
                  <Link
                    className="flex flex-row gap-4 items-center justify-center font-rubik border-brand-primary border-2 rounded-lg p-3"
                    href="/dashboard"
                  >
                    {" "}
                    <LogIn /> أدخل
                  </Link>
                ) : (
                  <Link
                    href={"/login"}
                    className="flex flex-row gap-4 items-center justify-center font-rubik border-brand-primary border-2 rounded-lg p-3"
                  >
                    <LogIn /> أدخل
                  </Link>
                )}
                <SheetTrigger className="absolute top-4 right-4"></SheetTrigger>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
