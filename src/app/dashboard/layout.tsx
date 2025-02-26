"use client";
import { useEffect } from "react";
import { MobileSidebar, Sidebar } from "@/components/shared/sidebar";
import { useProfileStore } from "@/lib/store";
import CustomLoading from "@/components/ui/custom-loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { fetchProfile, loading } = useProfileStore();

  useEffect(() => {
    fetchProfile(); // Fetch profile sekali
  }, [fetchProfile]);

  if (loading) {
    return <CustomLoading />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-brand-primary shadow-lg">
          <div className="flex justify-between h-16 items-center px-4 md:justify-self-end">
            <MobileSidebar />
            <h1 className="text-2xl font-normal text-white right-0">
              ! أهلا و سهلا
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-200">{children}</main>
      </div>
    </div>
  );
}
