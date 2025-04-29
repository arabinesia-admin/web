"use client";

import { BookCard } from "@/components/book-card";
import { useProfileStore } from "@/lib/store";
import React from "react";
import Link from "next/link";

export default function Materials() {
  const { profile } = useProfileStore();

  return (
    <div dir="rtl">
      {profile ? (
        <BookCard
          title="Module A1"
          description="Download pdf."
          pdfUrl="/pdf/modul-arabinesia-A1.pdf"
          fileName="modul-arabinesia-A1.pdf"
        />
      ) : (
        <Link href="/signup">
          <p className="flex font-arabic justify-center items-center text-red-500 border-red-500 border bg-red-100 py-2 rounded">
            {"اشترِ الباقة أولاً لمشاهدة المحتوى"}
          </p>
        </Link>
      )}
    </div>
  );
}
