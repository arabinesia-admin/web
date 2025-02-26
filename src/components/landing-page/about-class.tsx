export const AboutClass = () => {
  return (
    <div
      id="about-class"
      className="flex justify-center items-center bg-gradient-to-r from-emerald-400 to-teal-500"
    >
      <div className="justify-center mt-28 text-slate-50 ">
        <div className="flex justify-center gap-5 mb-10">
          <h1>ARABINESIA</h1>
          <h1>فصول</h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-16">
          <div className="flex flex-col items-center w-full max-w-80 mb-28 text-right rtl font-arabic">
            <h2 className="my-5">الفئة المتقدمة</h2>
            <p className="text-center text-xl">
              يتضمن الفصل المتقدم فهم القواعد المتقدمة والمحادثات المتخصصة في
              اللغة الإندونيسية مع مدة تعلم 4 أشهر أو 16 درساً 8 تمريناً ولقاءين
              للأسئلة والأجوبة.
            </p>
          </div>
          <div className="flex flex-col items-center w-full max-w-80 mb-28 text-right rtl font-arabic">
            <h2 className="my-5">الفصل المتوسط</h2>
            <p className="text-center text-xl">
              <span>ARABINESIA</span> يغطي الصف المتوسط المزيد من القواعد
              المتخصصة والمحادثة العامة باللغة الإندونيسية: مدة الدراسة: 4 أشهر
              ( 16 درساً )، عدد تمرينات 8 تمريناً، لقاء مباشر: لقاءين لإجابات
              التساؤلات والاستفسارات.
            </p>
          </div>
          <div className="flex flex-col items-center w-full max-w-80 mb-28 text-right rtl font-arabic">
            <h2 className="my-5">الفصل المبتدئ</h2>
            <p className="text-center text-xl">
              <span>ARABINESIA</span>يتضمن الفصل المبتدئ على فهم القواعد
              الأساسية والتعبيرات الشائعة في اللغة الإندونيسية: مدة الدراسة: 4
              أشهر ( 16 لقاء)، عدد تمرينات: 8 تمرينًا، لقاء مباشر: لقاءان عن بعد
              عبر زوم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
