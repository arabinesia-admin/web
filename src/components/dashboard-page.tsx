"use client";
import { useProfileStore } from "@/lib/store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Facebook, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export function DashboardPage() {
  const router = useRouter();
  const { profile } = useProfileStore();

  useEffect(() => {
    if (!profile?.full_name) router.push("/signup");
  });

  return (
    <div className="font-tajawal" dir="rtl">
      <section
        id="home"
        className="bg-cover bg-center h-screen flex items-center relative"
        style={{
          backgroundImage: "url('/images/coffee-book.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            مرحبًا بعودتك!
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-lg">
            أنت على طريق إتقان اللغة الإندونيسية. دعنا نستكشف جمال إندونيسيا
            ونغوص أعمق في لغتها وثقافتها.
          </p>
          <Link href={"/dashboard/class"}>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600">
              واصل التعلم
            </button>
          </Link>
        </div>
      </section>

      <section id="motivation" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            لماذا تستمر في تعلم اللغة الإندونيسية؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-500 mb-4">
                اكتشف جمال إندونيسيا
              </h3>
              <p className="text-gray-600">
                من حقول الأرز الخضراء في بالي إلى الشعاب المرجانية النابضة
                بالحياة في راجا أمبات، تعلّم اللغة الإندونيسية يتيح لك التواصل
                بعمق مع عجائب إندونيسيا الطبيعية.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-500 mb-4">
                وسّع فرصك
              </h3>
              <p className="text-gray-600">
                اللغة الإندونيسية هي بوابة إلى أكبر اقتصاد في جنوب شرق آسيا.
                إتقانها يفتح أبوابًا للعمل والسفر وتبادل الثقافات.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">هل تعلم؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-500 mb-4">
                سهل التعلم
              </h3>
              <p className="text-gray-600">
                اللغة الإندونيسية لا تحتوي على نغمات، وقواعدها بسيطة، وتستخدم
                الأبجدية اللاتينية، مما يجعلها واحدة من أسهل اللغات الآسيوية
                للتعلم.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-500 mb-4">
                مفردات غنية
              </h3>
              <p className="text-gray-600">
                اللغة الإندونيسية تستعير كلمات من العربية والهولندية
                والسنسكريتية والإنجليزية، مما يعكس تنوع تأثيراتها الثقافية.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-emerald-500 mb-4">
                أهمية عالمية
              </h3>
              <p className="text-gray-600">
                مع أكثر من 270 مليون متحدث، تعد اللغة الإندونيسية واحدة من أكثر
                اللغات انتشارًا في العالم.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-black">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
            <div>
              <h4 className="text-lg font-semibold text-emerald-500 mb-4">
                لديك أسئلة؟
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2 mx-1 text-emerald-500" />
                  085183128320
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 mx-1 text-emerald-500" />
                  arabinesiainternational@gmail.com
                </li>
                <div className="flex mx-4 gap-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B62825153128320&text=Halo+ARABINESIA&type=phone_number&app_absent=0"
                    className="text-gray-400 hover:text-emerald-500"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="https://web.facebook.com/arabinesia"
                    className="text-gray-400 hover:text-emerald-500"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/arabinesiacom/"
                    className="text-gray-400 hover:text-emerald-500"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <Separator />
          <div className="mt-2 py-4 text-center text-sm">
            <p>&copy; 2025 ARABINESIA جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
