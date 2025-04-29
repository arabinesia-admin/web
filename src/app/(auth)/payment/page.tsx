import Navbar from "@/components/shared/navbar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

const packages = [
  {
    id: "1",
    name: "شهرية",
    description:
      "المدة 1 شهر 4 مواد فيديو وتمارين 1 وقت للتفاعل مع الأسئلة والأجوبة وحدة التعلم الرقمي",
    price: "$5",
    link: "https://www.paypal.com/ncp/payment/2SJ5X5YRHZM7Q",
  },
  {
    id: "2",
    name: "المستوى",
    description:
      "المدة 4 أشهر 16 مادة فيديو وتمارين 2 مرات تفاعل أسئلة وأجوبة وحدة التعلم الرقمي شهادة",
    price: "$19",
    link: "https://www.paypal.com/ncp/payment/SM6AB8PLZEMCN",
  },
  {
    id: "3",
    name: "باقات كاملة",
    description:
      "المدة الزمنية 12 شهر 48 مادة فيديو وتمارين 6 مرات تفاعل أسئلة وأجوبة وحدة التعلم الرقمي الشهادة",
    price: "$49",
    link: "https://www.paypal.com/ncp/payment/4ZTMUWXX86RZC",
  },
];

export default function PaymentPage() {
  const userCookie = cookies().get("supabase-auth-token");

  return (
    <>
      <Navbar isAuthenticated={!!userCookie} />
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full md:max-w-3xl">
          <div className="flex flex-col gap-6 bg-white rounded-xl border-2 border-gray-300">
            <div className="flex flex-col items-center text-center mt-10">
              <h1 className="text-2xl font-bold text-brand-primary">
                !مرحبا بكم في الدورة أرابينيسيا
              </h1>
              <p className="text-balance text-muted-foreground mb-5">
                Create new account
              </p>
              <div className="absolute mt-16 left-1/2 -translate-x-1/2 w-128 md:w-256 text-center after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:border-b-4 after:border-gray-600"></div>
            </div>
            {/* Body Payment */}
            <div className="bg-white rounded-lg shadow-xl p-8 w-full text-center space-y-4 border border-blue-100">
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

              <p className="text-gray-600 mb-4 text-left">
                To proceed with your registration, please complete the payment
                via one of the links below:
              </p>

              <div className="flex flex-col gap-4">
                {packages.map((pkg) => (
                  <a
                    key={pkg.id}
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border bg-sky-100 rounded hover:bg-sky-200 transition-all"
                  >
                    <Image
                      src="/images/paypal_logo.png"
                      alt="PayPal"
                      width={40}
                      height={40}
                    />
                    <span className="text-black font-arabic">{pkg.name} -</span>
                    <span className=" text-blue-600">{pkg.price}</span>
                  </a>
                ))}
              </div>

              <p className="text-gray-600 text-left mt-6">
                <strong>After Payment:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-600 text-left">
                <li>Take a screenshot or save the payment receipt.</li>
                <li>
                  Send the proof of payment via WhatsApp or Email to the admin:
                </li>
              </ul>
              <a
                href="https://wa.me/6285183128320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-left underline hover:text-blue-700"
              >
                <p>+62 851-8312-8320</p>
              </a>
              <p className="text-blue-500 text-left">admin@arabinesia.com</p>
              <p className="text-gray-600 italic text-left">
                Note: Make sure to use an active WhatsApp number for smooth
                confirmation.
              </p>

              <Separator />

              <div dir="rtl" className="text-right font-arabic">
                <p className="text-gray-600 mb-4">
                  لإتمام عملية التسجيل، يرجى الدفع عبر أحد الروابط التالية:
                </p>

                <div className="flex flex-col gap-4">
                  {packages.map((pkg) => (
                    <a
                      key={pkg.id}
                      href={pkg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border bg-sky-100 rounded hover:bg-sky-200 transition-all"
                    >
                      <Image
                        src="/images/paypal_logo.png"
                        alt="PayPal"
                        width={40}
                        height={40}
                      />
                      <span className="text-black font-normal">
                        {pkg.name} -
                      </span>
                      <span className="text-blue-600">{pkg.price}</span>
                    </a>
                  ))}
                </div>

                <p className="text-gray-600 mt-6">
                  <strong>بعد الدفع:</strong>
                </p>
                <ul className="list-disc pr-5 space-y-2 mt-2">
                  <li>يرجى حفظ أو التقاط لقطة شاشة لإثبات الدفع.</li>
                  <li>
                    أرسل إثبات الدفع عبر واتساب أو البريد الإلكتروني إلى مسؤول
                    الحساب:
                  </li>
                </ul>
                <a
                  href="https://wa.me/6285183128320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-left underline hover:text-blue-700"
                >
                  +62 851-8312-8320
                </a>
                <p className="text-blue-500">admin@arabinesia.com</p>
                <p className="text-gray-600 italic">
                  ملاحظة: يرجى التأكد من استخدام رقم واتساب نشط لتسريع عملية
                  التأكيد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
