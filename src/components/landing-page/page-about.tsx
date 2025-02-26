export const PageAbout = () => {
  return (
    <>
      <div
        id="about"
        className="flex justify-center items-center flex-col md:flex-row bg-gradient-to-r from-teal-500 to-emerald-400"
      >
        <iframe
          className="aspect-auto  h-80 m-5"
          src="https://www.youtube.com/embed/m38n26Cgp_s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="justify-center mt-28 text-slate-50 ">
          <div className="flex justify-center gap-5 mb-10">
            <h1>ARABINESIA</h1>
            <h1>نبذة عن</h1>
          </div>
          <div className="flex flex-col items-center mx-5 max-w-3xl mb-28 text-right rtl">
            <p className="text-center text-xl font-arabic font-md">
              <span>ARABINESIA</span> هو موقع إلكتروني تم تطويره لتعلم اللغة
              الإندونيسية للناطقين باللغة العربية، سواءً للأعمال، أو السياحة، أو
              العلاقات الاجتماعية، أو التعلم والتعليم. مع مرونة وقت التعلم، يمكن
              متابعة دورات <span>ARABINESIA</span> لمختلف الفئات والأعمار
              والمهن.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
