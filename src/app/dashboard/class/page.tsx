import { RenderVideos } from "@/components/render-videos";

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
