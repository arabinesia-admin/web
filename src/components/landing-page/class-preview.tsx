import { MonitorPlay, Play, TvMinimalPlay, Youtube } from "lucide-react";

export const ClassPreview = () => {
  return (
    <div
      id="class-package"
      className="flex flex-col justify-center items-center bg-slate-50 pt-0 p-4"
    >
      <div className="flex justify-center items-center">
        <h2 className="font-arabic mb-10 mt-12 text-center">معاينة الصف</h2>
        <TvMinimalPlay className="mx-2" size={30} />
      </div>
      <iframe
        width="495"
        height="250"
        src="https://www.youtube.com/embed/X-DI7jQkDF0?si=0bmu6vUTxROCFYbe&controls=0&start=122&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
