import { TSignUpSchema, TWhatsappData } from "@/types/type";

export function sendDataToWhatsapp(data: TWhatsappData) {
  const RLE = "\u202B";
  const PDF = "\u202C";

  const message = `
${RLE}مرحباً، أريد التسجيل في منصة أرابينيسيا التعليمية مع الباقة:   *${data.package_level}*  

الاسم                      : ${data.name}  
العمر                      : ${data.age}  
الوظيفة                  : ${data.job}  
البريد الإلكتروني      : ${data.email}  

دافعي لتعلم اللغة الإندونيسية :
${data.motivation}${PDF}
  `;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/6285183023566?text=${encodedMessage}`;
  window.open(url, "_blank");
}
