import Link from "next/link";

export const ClassPreview = () => {
  return (
    <div
      id="class-package"
      className="flex flex-col justify-center items-center bg-slate-50 mb-2 pt-0 p-4"
    >
      <h2 className="font-arabic mb-10 mt-24 text-center">
        معاينة الصف {">>"}
      </h2>
      <iframe
        width="495"
        height="250"
        src="https://www.youtube.com/embed/X-DI7jQkDF0?si=0bmu6vUTxROCFYbe&amp;controls=0&amp;start=32"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
