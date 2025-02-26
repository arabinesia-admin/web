import { TriangleAlert } from "lucide-react";
import { Separator } from "./ui/separator";

export const SuccessToast = () => {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-4 border border-blue-100">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="text-2xl font-bold text-gray-800 mb-2">
            Complete the payment
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          Continue the transaction process to the following number, and wait for
          the admin to create your account.{" "}
          <div className="flex">
            <TriangleAlert /> Save/Screenshot the payment result and send it to
            the following number for further processing.
          </div>
        </p>
        <Separator />
        <p className="text-gray-600 mb-4 font-rubik">
          استمر في عملية المعاملة إلى الرقم التالي، وانتظر حتى ينشئ المشرف
          حسابك.{" "}
          <div className="flex items-center">
            احفظ/التقط صورة للنتيجة الدفع وأرسلها إلى الرقم التالي للاستكمال
          </div>
        </p>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            <span>Admin Contact:</span>
            <a
              className="underline text-blue-500"
              href="https://wa.me/6285183023566"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 851-8302-3566
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
