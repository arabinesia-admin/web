import { RenderVideos } from "@/components/render-videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class",
  description: "الدافع وأيضا المزايا في تعلم اللغة الإندونيسية",
};

export default function Class() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4 text-right">
        : الفصول المتاحة
      </h1>
      <RenderVideos />
    </div>
  );
}
