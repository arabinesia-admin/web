import { Clock, ClockAlert, Megaphone } from "lucide-react";
import React from "react";

export const DiscountPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-50 rtl">
      <div className="bg-slate-200 rounded-2xl mt-16 p-8 shadow-xl mx-10 border border-gray/20">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-black font-arabic">
            📢 بمناسبة إطلاق موقع arabinesia.com المنصة المتخصصة في تعليم اللغة
            الإندونيسية للناطقين باللغة العربية
          </h2>
          <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
          {/* Discount Card */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
            <div className="p-4 bg-white/10 rounded-full">
              <ClockAlert size={40} className="text-amber-400" />
            </div>
            <div className="text-right space-y-2 flex-1">
              <p className="text-black/90 text-2xl font-arabic">
                يسرنا أن نقدم لكم خصمًا خاصًا لفترة محدودة فقط ! <br />
                لا تفوّت الفرصة! سارع بالتسجيل الآن واستفد من الخصم قبل انتهاء
                الفترة وعودة الأسعار إلى قيمتها الأصلية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
