"use client";

import { motion } from "framer-motion";

export const PageBody = () => {
  return (
    <header className="relative h-screen">
      <div
        className="bg-cover bg-center h-full -mt-60 md:-mt-24"
        style={{ backgroundImage: "url('/images/arabinesia-cover.avif')" }}
      ></div>
      <motion.div
        className="main-title absolute inset-0 flex items-center justify-start mx-64"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h1 className="font-sans text-5xl font-bold text-emerald-500">
            ARABINESIA.COM
          </h1>
          <h1 className="font-serif text-3xl mt-4">
            تعليم اللغة الإندونيسية للناطقين بالعربية
          </h1>
        </div>
      </motion.div>
    </header>
  );
};
