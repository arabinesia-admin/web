import { LogIn } from "lucide-react";
import Link from "next/link";

export const RegisterButton = () => {
  return (
    <>
      <div className="gap-4 font-rubik font-semibold sticky bottom-7 mx-9  w-fit rounded-lg p-3 bg-brand-secondary border-2 border-white text-white text-center z-10">
        <Link
          className="flex flex-row gap-4"
          href="/signup"
          aria-label="Sign Up"
        >
          {" "}
          <LogIn /> سجل الآن
        </Link>
      </div>
    </>
  );
};
