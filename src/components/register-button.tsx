"use client";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const RegisterButton = () => {
  return (
    <>
      <motion.div
        className="gap-4 font-rubik font-semibold sticky bottom-7 mx-9 w-fit rounded-lg p-3 bg-gradient-to-r from-teal-600 to-emerald-400 border-2 border-white text-white text-center z-10 cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          className="flex flex-row gap-4 items-center"
          href="/signup"
          aria-label="Sign Up"
        >
          <LogIn /> سجل الآن
        </Link>
      </motion.div>
    </>
  );
};
