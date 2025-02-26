import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="flex justify-center items-center mb-20 font-arabic bg-gradient-to-r from-emerald-400 to-teal-500"
      >
        <div className="justify-center mt-28 text-slate-50 mb-20">
          <div className="flex flex-col justify-center gap-5 mb-10">
            <h1>ARABINESIA اتصل ب</h1>
            <div className="flex flex-col gap-3 mt-8">
              <p>محافظة بوغور، جاوة الغربية، إندونيسيا 16830</p>
              <p>الهاتف المحمول: 085183128320</p>
              <p>البريد الإلكتروني: admin@arabinesia.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mb-8 items-center gap-14">
        <div className="social-media flex flex-row justify-center items-center gap-14">
          <a
            href="https://web.facebook.com/arabinesia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-blue-600 transition-colors duration-500"
          >
            <Image
              src="/svg/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCRWvlGBzUDw-heU2uTqLt3g"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-red-600 transition-colors duration-500"
          >
            <Image
              src="/svg/youtube.svg"
              alt="youtube"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://wa.me/+62825153128320?text=Halo%20ARABINESIA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-green-600 transition-colors duration-500"
          >
            <Image
              src="/svg/whatsapp.svg"
              alt="whatsapp"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/arabinesiacom/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-colors duration-500"
          >
            <Image
              src="/svg/instagram.svg"
              alt="instagram"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </a>
        </div>
        <p className="text-center">© 2024 ARABINESIA | جميع الحقوق محفوظة</p>
      </div>
    </>
  );
};
