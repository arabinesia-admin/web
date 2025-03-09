"use client";
import { useEffect } from "react";
import { MobileSidebar, Sidebar } from "@/components/shared/sidebar";
import { useProfileStore } from "@/lib/store";
import CustomLoading from "@/components/ui/custom-loading";
import { BookOpen, Home, PencilIcon, UserCog } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarItems = [
    { name: "Home Page", href: "/dashboard", icon: Home },
    { name: "User Profile", href: "/admin", icon: UserCog },
  ];
  const { fetchProfile, loading } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return <CustomLoading />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex md:w-64 md:flex-col">
        <Sidebar sidebarItems={sidebarItems} />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-brand-primary shadow-lg">
          <div className="flex justify-between h-16 items-center px-4 md:justify-self-end">
            <MobileSidebar sidebarItems={sidebarItems} />
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
