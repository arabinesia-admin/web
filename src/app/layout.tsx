import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ARABINESIA | تعليم اللغة الإندونيسية للناطقين بالعربية",
    template: "%s - ARABINESIA",
  },
  icons: "/favicon.ico",
  description:
    "ARABINESIA - منصة تعليمية متكاملة لتعليم اللغة الإندونيسية للناطقين بالعربية. دورات تفاعلية، دروس مباشرة، وتمارين عملية لمساعدتك على تعلم الإندونيسية بسهولة وسرعة. انضم الآن وابدأ رحلتك التعليمية!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
