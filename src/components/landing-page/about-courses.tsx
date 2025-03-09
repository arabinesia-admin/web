"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutCourses = () => {
  return (
    <div
      id="about-courses"
      className="flex justify-center items-center bg-slate-50 min-h-screen mb-5"
    >
      <div className="flex flex-col items-center mt-5">
        <h2 className="mb-10 ">
          <span className=" text-teal-500">ARABINESIA</span> دورة
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <motion.div
            className="card1 flex flex-col justify-center items-center gap-8 border-2 border-solid border-slate-500 rounded-xl w-96 h-96 drop-shadow-xl hover:bg-emerald-500 hover:text-white hover:border-0 hover:shadow-xl transition-colors duration-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src="/svg/user.svg" alt="user" width={50} height={50} />
            <h1 className="font-tajawal text-2xl font-md">المعلمون</h1>
            <div className="flex flex-col items-center w-full max-w-72 text-right rtl">
              <p className="text-center text-xl font-arabic">
                مدرسو دورة <span>ARABINESIA</span> هم إندونيسيون عاشوا ودرسوا في
                شبه الجزيرة العربية وبالتالي لديهم المعرفة والمهارات الكافية في
                اللغتين العربية والإندونيسية.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="card2 flex flex-col justify-center items-center gap-8 border-2 border-solid border-slate-500 rounded-xl w-96 h-96 drop-shadow-xl hover:bg-emerald-500 hover:text-white hover:border-0 hover:shadow-xl transition-colors duration-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/svg/setting.svg"
              alt="setting"
              width={50}
              height={50}
            />
            <h2 className="font-tajawal text-2xl font-md">طريقة الدراسة</h2>
            <div className="flex flex-col items-center w-full max-w-72 text-right rtl">
              <p className="text-center text-xl font-arabic">
                تعتمد طريقة التعليم في دورة <span>ARABINESIA</span> على
                الإنترنت. باستخدام واتساب، وجوجل درايف، وجوجل ميت أو زوم، تناسب
                ما يحتاجها الدارس في فهم المواد والتمارين والتفاعل
              </p>
            </div>
          </motion.div>
          <motion.div
            className="card3 flex flex-col justify-center items-center gap-8 border-2 border-solid border-slate-500 rounded-xl w-96 h-96 drop-shadow-xl hover:bg-emerald-500 hover:text-white hover:border-0 hover:shadow-xl transition-colors duration-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/svg/note-edit.svg"
              alt="note-edit"
              width={50}
              height={50}
            />
            <h2 className="font-tajawal text-2xl font-md">المواد التعليمية</h2>
            <div className="flex flex-col items-center w-full max-w-72 text-right rtl">
              <p className="text-center text-xl font-arabic">
                تم تطوير المواد التعليمية ومقاطع الفيديو والتمارين وفقًا لنموذج
                تعليم اللغة الإندونيسية للناطقين الأجانب الذي أصدرته وزارة
                التعليم لجمهورية إندونيسيا.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
