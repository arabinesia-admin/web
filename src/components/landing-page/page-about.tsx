"use client";

import { motion } from "framer-motion";

export const PageAbout = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center flex-col md:flex-row bg-gradient-to-r from-teal-500 to-emerald-400"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          className="aspect-auto h-80 m-5"
          src="https://www.youtube.com/embed/m38n26Cgp_s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </motion.div>
      <motion.div
        className="justify-center mt-28 text-slate-50"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-5 mb-10">
          <h1>ARABINESIA</h1>
          <h1>نبذة عن</h1>
        </div>
        <div className="flex flex-col items-center mx-5 max-w-3xl mb-28 text-right rtl">
          <p className="text-center text-xl font-arabic font-md">
            <span>ARABINESIA</span> هو موقع إلكتروني تم تطويره لتعلم اللغة
            الإندونيسية للناطقين باللغة العربية، سواءً للأعمال، أو السياحة، أو
            العلاقات الاجتماعية، أو التعلم والتعليم.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
