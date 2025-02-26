"use client";
import Link from "next/link";
import {
  Menu,
  BookOpen,
  PencilIcon,
  Home,
  UserRound,
  CalendarFold,
  Tickets,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { LogoutButton } from "../ui/logout-button";
import { useProfileStore } from "@/lib/store";
import { Separator } from "../ui/separator";

const sidebarItems = [
  { name: "Home Page", href: "/dashboard", icon: Home },
  { name: "Class", href: "/dashboard/class", icon: BookOpen },
  { name: "Assessment", href: "/dashboard/assessment", icon: PencilIcon },
];

const SidebarButton = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start border border-gray-200 hover:bg-emerald-500 hover:text-white",
      className
    )}
    {...props}
  />
);

export function Sidebar() {
  const { profile } = useProfileStore();
  const packageType =
    profile?.package_level === 1
      ? "شهرية"
      : profile?.package_level === 2
      ? "المستوى"
      : profile?.package_level === 3
      ? "باقات كاملة"
      : "";

  return (
    <div className="flex h-screen flex-col justify-between p-4 md:border-2 md:border-gray-200 bg-white">
      <div className="space-y-6">
        <Image
          src="/images/logoarabinesia.png"
          alt="Dashboard Logo"
          width={200}
          height={50}
          className="mb-4"
        />
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarButton key={item.name} asChild>
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </SidebarButton>
          ))}
        </nav>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-full mb-5 justify-start border border-gray-700 hover:bg-gray-200"
          >
            <UserRound />
            <p className="mx-5">Profile</p>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col h-full">
            <div className="flex-grow space-y-6">
              <div className="flex items-center space-x-4 mt-10">
                <UserRound className="w-8 h-8" />
                <div>
                  <h2 className="text-xl font-semibold">
                    {profile ? profile.full_name : "Guest"}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {profile ? profile.email : "login to see your profile"}
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-2 text-sm">
                <CalendarFold size={20} />
                Meeting : #{profile ? profile?.meeting : null}
              </div>
              <div className="flex gap-2 text-sm font-arabic">
                <Tickets size={20} />
                Package :{" "}
                <p className="px-1 rounded bg-gray-200">{packageType}</p>
              </div>
            </div>
            <LogoutButton />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[300px] mb-16">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
