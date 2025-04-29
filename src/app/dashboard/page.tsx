import { DashboardPage } from "@/components/dashboard-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "الدافع وأيضا المزايا في تعلم اللغة الإندونيسية",
};

export default function Dashboard() {
  return <DashboardPage />;
}
